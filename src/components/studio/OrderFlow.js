'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { studioTiers, studioIntakeEndpoint } from '@/lib/studio';

const inputClasses =
  'w-full rounded-lg border border-bg-glass-border bg-bg-glass backdrop-blur-sm px-4 py-3 text-text-primary placeholder-text-tertiary focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)] transition-all duration-200';

const labelClasses = 'block text-sm font-medium font-heading text-text-primary mb-2';
const hintClasses = 'text-xs text-text-tertiary mt-1.5 leading-relaxed';

const PLATFORMS = ['Instagram Reels', 'TikTok', 'YouTube Shorts', 'Facebook', 'Instagram Carousel'];

const STEPS = ['Package', 'Your material', 'The brief', 'Send it'];

// Orderable tiers only. Catalog is scoped on a call, not through this form.
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [fields, setFields] = useState({
    footageUrl: '',
    mastersUrl: '',
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

  function togglePlatform(p) {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  // Per-step gating. Keeps people from reaching the end with an unusable brief,
  // which is the main thing that stalls a drop.
  function stepIsValid(i) {
    if (i === 0) return Boolean(tierId);
    if (i === 1) return fields.footageUrl.trim() !== '' && fields.mastersUrl.trim() !== '';
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
    payload.append('mastersUrl', fields.mastersUrl);
    payload.append('referencePosts', fields.referencePosts);
    payload.append('platforms', platforms.join(', '));
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
      <div className="gradient-border">
        <div className="glass rounded-[calc(1rem-1px)] p-8 md:p-12 text-center glow-cyan">
          <div className="text-4xl mb-4">&#10003;</div>
          <h2 className="text-2xl font-bold font-heading mb-3">Brief received.</h2>
          <p className="text-text-secondary leading-relaxed mb-6 max-w-lg mx-auto">
            We read every brief by hand. Here is what happens next, in order.
          </p>
          <ol className="text-left max-w-md mx-auto space-y-3 mb-8">
            {[
              'We check your footage and masters are reachable.',
              'We confirm the scope and the price with you by email.',
              'You approve, we send a payment link, and the drop starts.',
              'Files land in your inbox for review.',
            ].map((line, i) => (
              <li key={line} className="flex gap-3 text-sm text-text-secondary">
                <span className="font-heading font-bold text-purple shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ol>
          <p className="text-xs text-text-tertiary mb-6">
            Nothing is charged now. No payment is taken until you approve the scope.
          </p>
          <Button href="/studio" variant="ghost" size="sm">
            Back to Studio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-wrap gap-2 mb-8" aria-label="Progress">
        {STEPS.map((label, i) => {
          const state = i === step ? 'current' : i < step ? 'done' : 'upcoming';
          return (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                state === 'current'
                  ? 'bg-purple/15 text-purple'
                  : state === 'done'
                    ? 'bg-success/10 text-success'
                    : 'bg-bg-secondary text-text-tertiary'
              }`}
              aria-current={state === 'current' ? 'step' : undefined}
            >
              <span className="font-heading font-bold">
                {state === 'done' ? '✓' : String(i + 1).padStart(2, '0')}
              </span>
              <span>{label}</span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="gradient-border">
          <div className="glass rounded-[calc(1rem-1px)] p-6 md:p-10">
            {/* Step 1: package */}
            {step === 0 && (
              <div>
                <h2 className="text-xl font-bold font-heading mb-2">Pick a package</h2>
                <p className="text-sm text-text-secondary mb-6">
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
                        className={`text-left rounded-xl border p-5 transition-all duration-200 ${
                          active
                            ? 'border-purple bg-purple/10 shadow-[0_0_0_3px_rgba(124,58,237,0.15)]'
                            : 'border-bg-glass-border bg-bg-glass hover:border-border-light'
                        }`}
                      >
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="font-heading font-semibold">{t.name}</span>
                          <span className="font-heading font-bold gradient-text">
                            {formatPrice(t.price)}
                          </span>
                        </div>
                        <p className="text-xs text-text-tertiary mb-3">{t.unit}</p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {t.summary}
                        </p>
                      </button>
                    );
                  })}
                </div>
                <p className={hintClasses}>
                  Running a back catalog or a roster?{' '}
                  <Link href="/contact?topic=studio-catalog" className="text-cyan hover:underline">
                    Talk to us about Catalog
                  </Link>
                  .
                </p>
              </div>
            )}

            {/* Step 2: material */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold font-heading mb-2">Your material</h2>
                  <p className="text-sm text-text-secondary">
                    Links, not uploads. Raw footage runs to tens of gigabytes and your cloud
                    drive moves it better than a browser tab can.
                  </p>
                </div>

                <div>
                  <label htmlFor="footageUrl" className={labelClasses}>
                    Link to your raw footage <span className="text-warning">*</span>
                  </label>
                  <input
                    id="footageUrl"
                    type="url"
                    value={fields.footageUrl}
                    onChange={(e) => setField('footageUrl', e.target.value)}
                    placeholder="https://dropbox.com/..."
                    className={inputClasses}
                  />
                  <p className={hintClasses}>
                    Dropbox, Google Drive, or WeTransfer. Make sure the link is set so anyone
                    with it can view.
                  </p>
                </div>

                <div>
                  <label htmlFor="mastersUrl" className={labelClasses}>
                    Link to your song masters <span className="text-warning">*</span>
                  </label>
                  <input
                    id="mastersUrl"
                    type="url"
                    value={fields.mastersUrl}
                    onChange={(e) => setField('mastersUrl', e.target.value)}
                    placeholder="https://dropbox.com/..."
                    className={inputClasses}
                  />
                  <p className={hintClasses}>
                    Required. Cuts scored to your mastered audio outperform camera audio every
                    time. Include the track names you want used.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: brief */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold font-heading mb-2">The brief</h2>
                  <p className="text-sm text-text-secondary">
                    The more specific the audience, the sharper the output.
                  </p>
                </div>

                <fieldset>
                  <legend className={labelClasses}>
                    Where are you posting? <span className="text-warning">*</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {PLATFORMS.map((p) => {
                      const active = platforms.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => togglePlatform(p)}
                          aria-pressed={active}
                          className={`rounded-lg border px-3.5 py-2 text-sm transition-all duration-200 ${
                            active
                              ? 'border-purple bg-purple/15 text-text-primary'
                              : 'border-bg-glass-border bg-bg-glass text-text-secondary hover:border-border-light'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="postCount" className={labelClasses}>
                    How many posts do you want?
                  </label>
                  <input
                    id="postCount"
                    type="text"
                    value={fields.postCount}
                    onChange={(e) => setField('postCount', e.target.value)}
                    placeholder={`Default for ${tier.name}: ${tier.postCount}`}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="audience" className={labelClasses}>
                    Who is this for? <span className="text-warning">*</span>
                  </label>
                  <textarea
                    id="audience"
                    rows={4}
                    value={fields.audience}
                    onChange={(e) => setField('audience', e.target.value)}
                    placeholder="Describe the listener you want to reach. Their age, their taste, the other artists they follow, what they care about."
                    className={inputClasses}
                  />
                  <p className={hintClasses}>
                    Specific beats broad. A named persona with real interests produces better
                    hooks than a demographic bracket.
                  </p>
                </div>

                <div>
                  <label htmlFor="notes" className={labelClasses}>
                    Anything we should know
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={fields.notes}
                    onChange={(e) => setField('notes', e.target.value)}
                    placeholder="Moments worth catching, songs to prioritize, things to avoid, a reference account whose look you want."
                    className={inputClasses}
                  />
                </div>
              </div>
            )}

            {/* Step 4: contact and send */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold font-heading mb-2">Send it</h2>
                  <p className="text-sm text-text-secondary">
                    Last step. We reply by email to confirm scope and price before anything
                    starts.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Your name <span className="text-warning">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={fields.name}
                      onChange={(e) => setField('name', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="artistName" className={labelClasses}>
                      Artist or project name
                    </label>
                    <input
                      id="artistName"
                      type="text"
                      value={fields.artistName}
                      onChange={(e) => setField('artistName', e.target.value)}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email <span className="text-warning">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={fields.email}
                    onChange={(e) => setField('email', e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="referencePosts" className={labelClasses}>
                    Five of your posts that landed <span className="text-warning">*</span>
                  </label>
                  <textarea
                    id="referencePosts"
                    rows={4}
                    value={fields.referencePosts}
                    onChange={(e) => setField('referencePosts', e.target.value)}
                    placeholder="Paste five links, one per line."
                    className={inputClasses}
                  />
                  <p className={hintClasses}>
                    This is how we learn your voice. We weigh what you actually wrote over any
                    description of your style, so pick posts you were happy with.
                  </p>
                </div>

                {/* Order summary */}
                <div className="rounded-xl border border-bg-glass-border bg-bg-glass p-5">
                  <h3 className="text-sm font-semibold font-heading mb-3">Summary</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-text-tertiary">Package</dt>
                      <dd className="text-text-secondary text-right">{tier.name}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-text-tertiary">Indicative price</dt>
                      <dd className="text-text-secondary text-right">
                        {formatPrice(tier.price)} {tier.unit}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-text-tertiary">Platforms</dt>
                      <dd className="text-text-secondary text-right">
                        {platforms.join(', ') || 'None selected'}
                      </dd>
                    </div>
                  </dl>
                  <p className="text-xs text-text-tertiary mt-4 leading-relaxed">
                    This form sends your brief. It does not take payment. We confirm the final
                    number with you before any work or any charge.
                  </p>
                </div>

                {error && (
                  <div className="rounded-lg border border-error/40 bg-error/10 px-4 py-3 text-sm text-error">
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-border/50">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="text-sm text-text-tertiary hover:text-text-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Back
              </button>

              {step < STEPS.length - 1 ? (
                <Button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!stepIsValid(step)}
                >
                  Continue
                </Button>
              ) : (
                <Button type="submit" disabled={loading || !stepIsValid(3)}>
                  {loading ? 'Sending...' : 'Send Brief'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
