'use client';

import { useState } from 'react';

// One tap asks for this page and its video to be deleted. The request lands in Nathan's inbox (the same
// Formspree form the site already uses) and the cleanup script removes the page, the video and the
// working files.
export default function DeleteMyClip({ code, endpoint }) {
  const [state, setState] = useState('idle');

  async function remove() {
    if (state !== 'idle') return;
    setState('sending');
    const body = new FormData();
    body.append('formType', 'Clip page: delete request');
    body.append('_subject', `DELETE clip page ${code}`);
    body.append('page', code);
    try {
      const res = await fetch(endpoint, { method: 'POST', body, headers: { Accept: 'application/json' } });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <p className="st-body !text-[var(--st-bone)]">
        Done. This page, the clip and everything I downloaded to make it will be deleted within 24 hours, and you
        won&rsquo;t hear from me again.
      </p>
    );
  }
  return (
    <div>
      <button type="button" onClick={remove} className="st-btn st-btn-ghost" disabled={state === 'sending'}>
        {state === 'sending' ? 'Deleting…' : 'Delete my clip now'}
      </button>
      {state === 'error' && (
        <p className="st-hint mt-2">That didn&rsquo;t go through. Reply &ldquo;delete&rdquo; to my email and I&rsquo;ll do it by hand.</p>
      )}
    </div>
  );
}
