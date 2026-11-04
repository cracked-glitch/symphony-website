'use client';

import { useState } from 'react';
import { studioIntakeEndpoint, freeClipCheckoutHref } from '@/lib/studio';

// The free-clip request: a comic sends a set and an email, we cut one bit and
// email it back, then offer the whole set. Goes to the same Formspree form as
// every other brief, tagged so it filters cleanly. source comes from ?src= on
// the link, so each request shows which post, DM, or card it came from.
export default function FreeClipForm({ source }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fields, setFields] = useState({
    stageName: '',
    email: '',
    setUrl: '',
    bit: '',
    handle: '',
  });

  const set = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }));
  const valid = ['stageName', 'email', 'setUrl'].every((k) => fields[k].trim() !== '');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError(null);

    const payload = new FormData();
    payload.append('formType', 'Symphony Studio free clip');
    payload.append('_subject', `FREE CLIP request: ${fields.stageName.trim()}`);
    payload.append('_replyto', fields.email);
    payload.append('source', source || 'direct');
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
    return (
      <div className="st-panel p-8 md:p-12">
        <p className="st-kicker mb-5">Got it</p>
        <h2 className="st-display text-[clamp(2rem,5vw,3.2rem)] mb-6">Your clip&rsquo;s on the way.</h2>
        <ol className="max-w-lg mb-8">
          {[
            "I'll check your link opens today. If the footage won't crop, I'll email you.",
            'Your clip lands in your inbox within 24 hours.',
            'Like it? The whole set is $50, up to 15 clips, back in a day.',
          ].map((line, i) => (
            <li key={line} className="flex gap-4 py-3 border-t border-[var(--st-line)]">
              <span className="st-display text-[1.1rem] st-flare-text shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="st-body text-[0.95rem]">{line}</span>
            </li>
          ))}
        </ol>
        <a href={freeClipCheckoutHref} className="st-btn st-btn-ghost">
          Skip ahead: cut my whole set · $50
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="st-panel p-6 md:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="stageName" label="Stage name" required value={fields.stageName} onChange={set('stageName')} />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={fields.email}
          onChange={set('email')}
          hint="Where your clip gets sent."
        />
      </div>
      <Field
        id="setUrl"
        label="Link to your set"
        type="url"
        required
        value={fields.setUrl}
        onChange={set('setUrl')}
        placeholder="https://youtube.com/... or a Drive or Dropbox link"
        hint="5 minutes or more, with your face in frame. If it's a file, share it so anyone with the link can view."
      />
      <Field
        id="bit"
        label="Which bit?"
        multiline
        value={fields.bit}
        onChange={set('bit')}
        placeholder="The bit about... or a timestamp. Leave it blank and I'll pick the one that lands hardest."
      />
      <Field
        id="handle"
        label="Instagram or TikTok"
        value={fields.handle}
        onChange={set('handle')}
        placeholder="@yourname"
        hint="Optional."
      />

      {error && (
        <div className="rounded-lg border border-[#EF4444] bg-[rgba(239,68,68,0.12)] px-4 py-3 text-[0.9rem] text-[#FCA5A5]">
          {error}
        </div>
      )}

      <button type="submit" disabled={loading || !valid} className="st-btn st-btn-primary w-full sm:w-auto">
        {loading ? 'Sending...' : 'Send my set'}
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
