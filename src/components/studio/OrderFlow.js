'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { studioTiers, studioIntakeEndpoint } from '@/lib/studio';

const PLATFORMS = ['Instagram Reels', 'TikTok', 'YouTube Shorts', 'Facebook', 'Instagram Carousel'];

const LANES = [
  'My main account',
  'An archive page',
  'An aesthetic page',
  'A discovery page',
  'Not sure yet',
];

const STEPS = ['Package', 'Material', 'Brief', 'Send'];

// Catalog is scoped on a call, not through this form.
const orderableTiers = studioTiers.filter((t) => t.price !== null);

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function OrderFlow() {
  const searchParams = useSearchParams();
  const requestedTier = searchParams.get('tier');
  const initialTier = orderableTiers.some((t) => t.id === requestedTier)
    ? requestedTier
    : 'drop';

  const [step, setStep] = useState(0);
  const [tierId, setTierId] = useState(initialTier);
  const [platforms, setPlatforms] = useState(['Instagram Reels']);
  const [lanes, setLanes] = useState(['My main account']);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fields, setFields] = useState({
    footageUrl: '',
    audioUrl: '',
    referencePosts: '',
    postCount: '',
    audience: '',
    notes: '',
    name: '',
    artistName: '',
    email: '',
  });

  const tier = studioTiers.find((t) => t.id === tierId) || orderableTiers[0];

  function setField(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function toggle(list, setList, value) {
    setList(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  }

  // Audio is deliberately not gated. Master-synced cuts perform better and the
  // hint says so, but plenty of working artists have nothing cleared to send.
  function stepIsValid(i) {
    if (i === 0) return Boolean(tierId);
    if (i === 1) return fields.footageUrl.trim() !== '';
    if (i === 2) return platforms.length > 0 && fields.audience.trim() !== '';
    if (i === 3)
      return (
        fields.name.trim() !== '' &&
        fields.email.trim() !== '' &&
        fields.referencePosts.trim() !== ''
      );
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stepIsValid(3)) return;

    setLoading(true);
    setError(null);

    const payload = new FormData();
    payload.append('formType', 'Symphony Studio brief');
    payload.append('_subject', `Studio brief: ${fields.artistName || fields.name} (${tier.name})`);
    payload.append('package', `${tier.name} at ${formatPrice(tier.price)} ${tier.unit}`);
    payload.append('name', fields.name);
    payload.append('artistName', fields.artistName);
    payload.append('email', fields.email);
    payload.append('footageUrl', fields.footageUrl);
    payload.append('audioUrl', fields.audioUrl || 'Not provided');
    payload.append('referencePosts', fields.referencePosts);
    payload.append('platforms', platforms.join(', '));
    payload.append('accountLanes', lanes.join(', '));
    payload.append('postCount', fields.postCount);
    payload.append('audience', fields.audience);
    payload.append('notes', fields.notes);

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
    return (
      <div className="st-panel p-8 md:p-12 text-center">
        <p className="st-kicker mb-5">Received</p>
        <h2 className="st-display text-[clamp(2rem,5vw,3.2rem)] mb-5">Brief is in.</h2>
        <p className="st-body max-w-lg mx-auto mb-9">
          We read every brief by hand. Here&rsquo;s what happens next, in order.
        </p>
        <ol className="text-left max-w-md mx-auto mb-9">
          {[
            'We check your footage link actually opens.',
            'We confirm the scope and the price with you by email.',
            'You approve, we send a payment link, and the drop starts.',
            'Files land in your inbox with a posting plan.',
          ].map((line, i) => (
            <li key={line} className="flex gap-4 py-3 border-t border-[rgba(244,239,228,0.14)]">
              <span className="st-display text-[1.2rem] st-flare-text shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="st-body text-[0.93rem]">{line}</span>
            </li>
          ))}
        </ol>
        <p className="st-hint mb-8">
          Nothing is charged now. No payment is taken until you&rsquo;ve approved the scope.
        </p>
        <Link href="/studio" className="st-btn st-btn-ghost">
          Back to Studio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-wrap gap-2 mb-9" aria-label="Progress">
        {STEPS.map((label, i) => {
          const state = i === step ? 'current' : i < step ? 'done' : 'upcoming';
          return (
            <div
              key={label}
              className={`st-step ${
                state === 'current'
                  ? 'st-step-current'
                  : state === 'done'
                    ? 'st-step-done'
                    : ''
              }`}
              aria-current={state === 'current' ? 'step' : undefined}
            >
              {state === 'done' ? '✓' : String(i + 1).padStart(2, '0')} &nbsp;{label}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="st-panel p-6 md:p-10">
          {/* Step 1 */}
          {step === 0 && (
            <div>
              <h2 className="st-display text-[1.9rem] mb-2">Pick a package</h2>
              <p className="st-body text-[0.93rem] mb-7">
                You can change this later. Nothing is charged now.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {orderableTiers.map((t) => {
                  const active = t.id === tierId;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTierId(t.id)}
                      aria-pressed={active}
                      className={`text-left p-6 border transition-all duration-200 ${
                        active
                          ? 'border-[var(--st-flare)] bg-[rgba(255,59,31,0.1)]'
                          : 'border-[rgba(244,239,228,0.18)] hover:border-[rgba(244,239,228,0.4)]'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <span className="st-display text-[1.45rem]">{t.name}</span>
                        <span className="st-display text-[1.7rem] st-flare-text">
                          {formatPrice(t.price)}
                        </span>
                      </div>
                      <p className="st-kicker st-kicker-dim mb-4">{t.unit}</p>
                      <p className="st-body text-[0.9rem]">{t.summary}</p>
                    </button>
                  );
                })}
              </div>
              <p className="st-hint">
                Running a back catalog or a roster?{' '}
                <Link
                  href="/contact?topic=studio-catalog"
                  className="st-flare-text hover:underline"
                >
                  Talk to us about Catalog
                </Link>
                .
              </p>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="space-y-7">
              <div>
                <h2 className="st-display text-[1.9rem] mb-2">Your material</h2>
                <p className="st-body text-[0.93rem]">
                  Links, not uploads. Raw footage runs to tens of gigabytes, and your cloud
                  drive moves it better than a browser tab ever will.
                </p>
              </div>

              <div>
                <label htmlFor="footageUrl" className="st-label">
                  Link to your raw footage <span className="st-flare-text">*</span>
                </label>
                <input
                  id="footageUrl"
                  type="url"
                  value={fields.footageUrl}
                  onChange={(e) => setField('footageUrl', e.target.value)}
                  placeholder="https://dropbox.com/..."
                  className="st-input"
                />
                <p className="st-hint">
                  Dropbox, Google Drive, or WeTransfer. Set the link so anyone with it can
                  view.
                </p>
              </div>

              <div>
                <label htmlFor="audioUrl" className="st-label">
                  Link to your audio{' '}
                  <span className="st-kicker st-kicker-dim !text-[0.62rem]">Optional</span>
                </label>
                <input
                  id="audioUrl"
                  type="url"
                  value={fields.audioUrl}
                  onChange={(e) => setField('audioUrl', e.target.value)}
                  placeholder="https://dropbox.com/... or leave blank"
                  className="st-input"
                />
                <p className="st-hint">
                  Mastered audio gives the strongest result, and cuts synced to a master
                  outperform camera audio. If your tracks are unreleased, uncleared, or
                  you&rsquo;d rather not send them, leave this blank and we&rsquo;ll work from live
                  or scratch audio instead. Your call.
                </p>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div className="space-y-7">
              <div>
                <h2 className="st-display text-[1.9rem] mb-2">The brief</h2>
                <p className="st-body text-[0.93rem]">
                  The more specific the audience, the sharper the output.
                </p>
              </div>

              <fieldset>
                <legend className="st-label">
                  Where are you posting? <span className="st-flare-text">*</span>
                </legend>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => toggle(platforms, setPlatforms, p)}
                      aria-pressed={platforms.includes(p)}
                      className="st-chip"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="st-label">Which accounts should this feed?</legend>
                <div className="flex flex-wrap gap-2">
                  {LANES.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => toggle(lanes, setLanes, l)}
                      aria-pressed={lanes.includes(l)}
                      className="st-chip"
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <p className="st-hint">
                  Pick more than one if you want a lane built. We can help you set up pages you
                  don&rsquo;t have yet.
                </p>
              </fieldset>

              <div>
                <label htmlFor="audience" className="st-label">
                  Who is this for? <span className="st-flare-text">*</span>
                </label>
                <textarea
                  id="audience"
                  rows={4}
                  value={fields.audience}
                  onChange={(e) => setField('audience', e.target.value)}
                  placeholder="Describe the listener you want to reach. Their age, their taste, the other artists they follow, what they care about."
                  className="st-input"
                />
                <p className="st-hint">
                  Get specific. A named person with real interests produces better hooks than
                  a demographic bracket.
                </p>
              </div>

              <div>
                <label htmlFor="notes" className="st-label">
                  Anything we should know
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={fields.notes}
                  onChange={(e) => setField('notes', e.target.value)}
                  placeholder="Moments worth catching, songs to prioritize, things to avoid, a reference account whose look you want."
                  className="st-input"
                />
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 3 && (
            <div className="space-y-7">
              <div>
                <h2 className="st-display text-[1.9rem] mb-2">Send it</h2>
                <p className="st-body text-[0.93rem]">
                  Last step. We&rsquo;ll reply by email to confirm scope and price before anything
                  starts.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="st-label">
                    Your name <span className="st-flare-text">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={fields.name}
                    onChange={(e) => setField('name', e.target.value)}
                    className="st-input"
                  />
                </div>
                <div>
                  <label htmlFor="artistName" className="st-label">
                    Artist or project name
                  </label>
                  <input
                    id="artistName"
                    type="text"
                    value={fields.artistName}
                    onChange={(e) => setField('artistName', e.target.value)}
                    className="st-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="st-label">
                  Email <span className="st-flare-text">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={fields.email}
                  onChange={(e) => setField('email', e.target.value)}
                  className="st-input"
                />
              </div>

              <div>
                <label htmlFor="referencePosts" className="st-label">
                  Five of your posts that landed <span className="st-flare-text">*</span>
                </label>
                <textarea
                  id="referencePosts"
                  rows={4}
                  value={fields.referencePosts}
                  onChange={(e) => setField('referencePosts', e.target.value)}
                  placeholder="Paste five links, one per line."
                  className="st-input"
                />
                <p className="st-hint">
                  This is how we learn your voice. What you actually wrote counts for more than
                  any description of your style, so pick posts you were happy with.
                </p>
              </div>

              {/* Summary */}
              <div className="border border-[rgba(244,239,228,0.18)] p-5">
                <p className="st-kicker mb-4">Summary</p>
                <dl className="space-y-2.5 text-[0.9rem]">
                  {[
                    ['Package', tier.name],
                    ['Indicative price', `${formatPrice(tier.price)} ${tier.unit}`],
                    ['You receive', tier.postCount],
                    ['Platforms', platforms.join(', ') || 'None selected'],
                    ['Accounts', lanes.join(', ') || 'Not specified'],
                    ['Audio', fields.audioUrl.trim() ? 'Provided' : 'Working without masters'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-5">
                      <dt className="st-kicker st-kicker-dim !tracking-[0.12em]">{k}</dt>
                      <dd className="st-body !text-[0.9rem] text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="st-hint mt-4">
                  This form sends your brief. It doesn&rsquo;t take payment. We&rsquo;ll confirm the final
                  number with you before any work or any charge.
                </p>
              </div>

              {error && (
                <div className="border border-[var(--st-flare)] bg-[rgba(255,59,31,0.12)] px-4 py-3 text-[0.9rem] st-flare-text">
                  {error}
                </div>
              )}
            </div>
          )}

          {/* Nav */}
          <div className="flex items-center justify-between gap-4 mt-9 pt-6 border-t border-[rgba(244,239,228,0.16)]">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="st-kicker st-kicker-dim hover:text-[var(--st-bone)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!stepIsValid(step)}
                className="st-btn st-btn-primary"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || !stepIsValid(3)}
                className="st-btn st-btn-primary"
              >
                {loading ? 'Sending...' : 'Send Brief'}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
