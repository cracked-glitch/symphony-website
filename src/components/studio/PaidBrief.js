'use client';

import { useState } from 'react';
import Link from 'next/link';
import { studioTiers, studioIntakeEndpoint } from '@/lib/studio';

// Where Stripe sends a buyer after they pay. They've already bought, so this
// asks only for what we need to start: who they are, which show, and where the
// footage is. The checkout session ID rides along so the brief matches the
// payment in the Stripe dashboard. Nothing here verifies the payment; Nathan
// matches it by hand.
export default function PaidBrief({ tierId, sessionId }) {
  const tier = studioTiers.find((t) => t.id === tierId) || studioTiers[0];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));
  const valid = ['name', 'email', 'artistName', 'show'].every((k) => fields[k].trim() !== '');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError(null);

    const payload = new FormData();
    payload.append('formType', 'Symphony Studio paid brief');
    payload.append('_subject', `PAID Studio brief: ${fields.artistName} (${tier.name})`);
    payload.append('_replyto', fields.email);
    payload.append('package', tier.name);
    payload.append('checkoutSession', sessionId || 'Not passed');
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
          {hasFootage ? 'Footage received.' : 'See you after the show.'}
        </h2>
        <ol className="max-w-lg mb-8">
          {[
            hasFootage
              ? "We'll check your link opens today. If it doesn't, we'll email you."
              : 'After the show, reply to our email with a link to the footage. Phone clips are fine.',
            'Your 6 edits for this show land in a shared folder within a day of the footage.',
            'Pick your hooks and post. Want something changed? Reply and we’ll fix it. One round is included.',
          ].map((line, i) => (
            <li key={line} className="flex gap-4 py-3 border-t border-[rgba(244,239,228,0.14)]">
              <span className="st-display text-[1.2rem] st-flare-text shrink-0">
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
        <Field id="artistName" label="Artist or DJ name" required value={fields.artistName} onChange={set('artistName')} />
        <Field
          id="show"
          label="Which show?"
          required
          value={fields.show}
          onChange={set('show')}
          placeholder="Nov 14, The Masquerade"
        />
      </div>
      <Field
        id="footageUrl"
        label="Link to the footage"
        type="url"
        value={fields.footageUrl}
        onChange={set('footageUrl')}
        placeholder="https://drive.google.com/..."
        hint="Drive, Dropbox, or WeTransfer, shared so anyone with the link can view. Show hasn't happened yet? Leave it blank and send the link after."
      />
      <Field
        id="songs"
        label="Songs to cut to"
        multiline
        value={fields.songs}
        onChange={set('songs')}
        placeholder="Song names, or a Spotify link. We'll pick the strongest moments if you leave it open."
      />
      <Field
        id="audioUrl"
        label="Link to your masters"
        type="url"
        value={fields.audioUrl}
        onChange={set('audioUrl')}
        hint="Optional. Cuts synced to the master sound best, but live audio works."
      />
      <Field
        id="notes"
        label="Anything else"
        multiline
        value={fields.notes}
        onChange={set('notes')}
        placeholder="Moments to catch, things to avoid, an account whose look you like."
      />

      {error && (
        <div className="border border-[var(--st-flare)] bg-[rgba(255,59,31,0.12)] px-4 py-3 text-[0.9rem] st-flare-text">
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
