'use client';

import { useState } from 'react';
import Link from 'next/link';
import { studioTiers, comedyTiers, firstOrder, studioIntakeEndpoint } from '@/lib/studio';

// Where Stripe sends a buyer after they pay. They've already bought, so this
// asks only for what we need to start: who they are, what to cut, and where the
// footage is. The checkout session ID rides along so the brief matches the
// payment in the Stripe dashboard. Nothing here verifies the payment; Nathan
// matches it by hand.
//
// Stripe can't tell us which product was bought: the comedy One Clip and Whole
// Set links return with tier=drop like the Show Pack, and Whole Tour returns
// with tier=season like Three Shows. So the form asks, and the labels follow.
const KINDS = [
  { id: 'comedy', label: 'Stand-up set' },
  { id: 'music', label: 'Music show' },
  { id: 'other', label: 'Something else' },
];

const COPY = {
  comedy: {
    name: 'Comedian name',
    show: 'Which set?',
    showPlaceholder: 'Helium Atlanta, Sep 26',
    footage: 'Link to the set',
    footagePlaceholder: 'https://youtube.com/... or a Drive folder',
    footageHint:
      "YouTube, Drive, or Dropbox. A master file from the camera cuts cleanest. Share the folder so anyone with the link can view. Set hasn't happened yet? Leave it blank and send the link after.",
    picks: 'Bits to keep or skip',
    picksPlaceholder: "Keep the closer, skip the crowd work. Leave it open and we'll pick the bits that land.",
    audio: 'Separate mic audio',
    audioHint: 'Optional. A lav or board recording keeps punchlines clean under the laughs.',
    notes: 'Anything else',
    notesPlaceholder: 'Clean bits only, a clip of yours whose look you like, anything to avoid.',
  },
  music: {
    name: 'Artist or DJ name',
    show: 'Which show?',
    showPlaceholder: 'Nov 14, The Masquerade',
    footage: 'Link to the footage',
    footagePlaceholder: 'https://drive.google.com/...',
    footageHint:
      "Drive, Dropbox, or WeTransfer, shared so anyone with the link can view. Show hasn't happened yet? Leave it blank and send the link after.",
    picks: 'Songs to cut to',
    picksPlaceholder: "Song names, or a Spotify link. We'll pick the strongest moments if you leave it open.",
    audio: 'Link to your masters',
    audioHint: 'Optional. Cuts synced to the master sound best, but live audio works.',
    notes: 'Anything else',
    notesPlaceholder: 'Moments to catch, things to avoid, an account whose look you like.',
  },
  other: {
    name: 'Your church, show, or company',
    show: "What's the video?",
    showPlaceholder: 'Sunday sermon, Nov 9',
    footage: 'Link to the video',
    footagePlaceholder: 'https://youtube.com/... or a Drive folder',
    footageHint: 'YouTube, Vimeo, Drive, or Dropbox, shared so anyone with the link can view.',
    picks: 'Moments to clip',
    picksPlaceholder: "The parts you want people to see. Leave it open and we'll pick.",
    audio: null,
    notes: 'Anything else',
    notesPlaceholder: 'Where the clips will be posted, anything to avoid.',
  },
};

// What the buyer most likely paid for, given the redirect's tier and their answer.
function packageName(tierId, kind) {
  if (tierId === firstOrder.id) return firstOrder.name;
  const comedy = comedyTiers.find((t) => t.id === tierId);
  if (comedy) return comedy.name;
  if (kind === 'comedy') return tierId === 'season' ? 'Whole Tour' : 'Whole Set or One Clip';
  if (kind === 'other') return tierId === 'season' ? 'Three events' : 'One event';
  return (studioTiers.find((t) => t.id === tierId) || studioTiers[0]).name;
}

const STEPS = {
  comedy: (hasFootage) => [
    hasFootage
      ? "We'll check your link opens today. If it doesn't, we'll email you."
      : 'After the set, reply to our email with the link. YouTube is fine.',
    'The first clips land in your folder the same day, the rest within 24 hours.',
    'Want something changed? Reply and we’ll recut it. Changes are included.',
  ],
  music: (hasFootage) => [
    hasFootage
      ? "We'll check your link opens today. If it doesn't, we'll email you."
      : 'After the show, reply to our email with a link to the footage. Phone clips are fine.',
    'Your 6 edits for this show land in a shared folder within a day of the footage.',
    'Pick your hooks and post. Want something changed? Reply and we’ll fix it. One round is included.',
  ],
  other: (hasFootage) => [
    hasFootage
      ? "We'll check your link opens today. If it doesn't, we'll email you."
      : 'When the video is up, reply to our email with the link.',
    'Your clips land in a shared folder within a day of the video.',
    'Want something changed? Reply and we’ll fix it.',
  ],
};

export default function PaidBrief({ tierId, sessionId }) {
  const presetComedy = tierId === firstOrder.id || comedyTiers.some((t) => t.id === tierId);
  const [kind, setKind] = useState(presetComedy ? 'comedy' : null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showcaseOk, setShowcaseOk] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    artistName: '',
    show: '',
    footageUrl: '',
    songs: '',
    audioUrl: '',
    notes: '',
  });

  const copy = COPY[kind || 'comedy'];
  const pkg = packageName(tierId, kind);
  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));
  const valid = kind !== null && ['name', 'email', 'artistName', 'show'].every((k) => fields[k].trim() !== '');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError(null);

    const payload = new FormData();
    payload.append('formType', 'Symphony Studio paid brief');
    payload.append('_subject', `PAID Studio brief: ${fields.artistName} (${pkg})`);
    payload.append('_replyto', fields.email);
    payload.append('kind', kind);
    payload.append('package', pkg);
    payload.append('stripeTier', tierId || 'Not passed');
    payload.append('checkoutSession', sessionId || 'Not passed');
    payload.append('showcaseOk', showcaseOk ? 'Yes, OK to show a clip on the site' : 'No');
    Object.entries(fields).forEach(([k, v]) => payload.append(k, v.trim() || 'Not provided'));

    try {
      const res = await fetch(studioIntakeEndpoint, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json();
        setError(json?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const hasFootage = fields.footageUrl.trim() !== '';
    return (
      <div className="st-panel p-8 md:p-12">
        <p className="st-kicker mb-5">You&rsquo;re booked</p>
        <h2 className="st-display text-[clamp(2rem,5vw,3.2rem)] mb-6">
          {hasFootage ? 'Footage received.' : 'Talk soon.'}
        </h2>
        <ol className="max-w-lg mb-8">
          {STEPS[kind](hasFootage).map((line, i) => (
            <li key={line} className="flex gap-4 py-3 border-t border-[var(--st-line)]">
              <span className="st-display text-[1.1rem] st-flare-text shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="st-body text-[0.95rem]">{line}</span>
            </li>
          ))}
        </ol>
        <p className="st-hint mb-8">
          Your receipt from Stripe is in your inbox. Questions? Email nathan@symphonylabs.ai.
        </p>
        <Link href="/studio" className="st-btn st-btn-ghost">
          Back to Studio
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="st-panel p-6 md:p-10 space-y-6">
      <fieldset>
        <legend className="st-label">
          What are we cutting? <span className="st-flare-text">*</span>
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {KINDS.map((k) => (
            <button
              key={k.id}
              type="button"
              className="st-chip"
              aria-pressed={kind === k.id}
              onClick={() => setKind(k.id)}
            >
              {k.label}
            </button>
          ))}
        </div>
        {kind && <p className="st-hint">Booked: {pkg}.</p>}
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name" label="Your name" required value={fields.name} onChange={set('name')} />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={fields.email}
          onChange={set('email')}
          hint="The one you paid with, so we can match your booking."
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="artistName" label={copy.name} required value={fields.artistName} onChange={set('artistName')} />
        <Field
          id="show"
          label={copy.show}
          required
          value={fields.show}
          onChange={set('show')}
          placeholder={copy.showPlaceholder}
        />
      </div>
      <Field
        id="footageUrl"
        label={copy.footage}
        type="url"
        value={fields.footageUrl}
        onChange={set('footageUrl')}
        placeholder={copy.footagePlaceholder}
        hint={copy.footageHint}
      />
      <Field
        id="songs"
        label={copy.picks}
        multiline
        value={fields.songs}
        onChange={set('songs')}
        placeholder={copy.picksPlaceholder}
      />
      {copy.audio && (
        <Field
          id="audioUrl"
          label={copy.audio}
          type="url"
          value={fields.audioUrl}
          onChange={set('audioUrl')}
          hint={copy.audioHint}
        />
      )}
      <Field
        id="notes"
        label={copy.notes}
        multiline
        value={fields.notes}
        onChange={set('notes')}
        placeholder={copy.notesPlaceholder}
      />

      <label className="flex gap-3 items-start cursor-pointer">
        <input
          type="checkbox"
          checked={showcaseOk}
          onChange={(e) => setShowcaseOk(e.target.checked)}
          className="mt-1 h-4 w-4 accent-[#FF3B1F]"
        />
        <span className="st-body text-[0.88rem]">
          It&rsquo;s OK to show a clip or two on symphonylabs.ai as an example of our work, with my
          name. Optional. Leave it unticked and nothing gets shown.
        </span>
      </label>

      {error && (
        <div className="rounded-lg border border-[#EF4444] bg-[rgba(239,68,68,0.12)] px-4 py-3 text-[0.9rem] text-[#FCA5A5]">
          {error}
        </div>
      )}

      <button type="submit" disabled={loading || !valid} className="st-btn st-btn-primary w-full sm:w-auto">
        {loading ? 'Sending...' : 'Send it'}
      </button>
    </form>
  );
}

function Field({ id, label, required, hint, multiline, ...props }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div>
      <label htmlFor={id} className="st-label">
        {label} {required && <span className="st-flare-text">*</span>}
      </label>
      <Tag id={id} rows={multiline ? 3 : undefined} className="st-input" {...props} />
      {hint && <p className="st-hint">{hint}</p>}
    </div>
  );
}
