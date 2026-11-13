'use client';

import { useState } from 'react';

// A delete REQUEST, never a delete. One tap asks "are you sure?"; a second tap emails Nathan through the
// site's Formspree form. Nothing is removed automatically: Nathan decides, and deletes by hand with
// `python verticals/expire_pages.py --delete <code>` in the comedy repo (Nathan, 2026-11-13).
export default function DeleteMyClip({ code, endpoint }) {
  const [state, setState] = useState('idle'); // idle -> confirm -> sending -> done | error

  async function send() {
    setState('sending');
    const body = new FormData();
    body.append('formType', 'Clip page: delete request');
    body.append('_subject', `Delete request for clip page ${code} (nothing deleted yet)`);
    body.append('page', code);
    body.append('url', `https://symphonyclips.com/c/${code}`);
    body.append(
      'note',
      `Nothing has been deleted. If you want it gone, run: python verticals/expire_pages.py --delete ${code}`,
    );
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
        Got it. I&rsquo;ll take this page down within a day, and you won&rsquo;t hear from me again.
      </p>
    );
  }
  if (state === 'confirm' || state === 'sending') {
    return (
      <div className="flex flex-col gap-2 items-stretch md:items-end">
        <p className="st-body !text-[0.9rem]">Delete this page and its clips?</p>
        <div className="flex gap-2">
          <button type="button" onClick={send} className="st-btn st-btn-ghost" disabled={state === 'sending'}>
            {state === 'sending' ? 'Sending…' : 'Yes, delete it'}
          </button>
          <button type="button" onClick={() => setState('idle')} className="st-btn st-btn-ghost" disabled={state === 'sending'}>
            Keep it
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button type="button" onClick={() => setState('confirm')} className="st-btn st-btn-ghost">
        Delete my clip now
      </button>
      {state === 'error' && (
        <p className="st-hint mt-2">That didn&rsquo;t go through. Reply &ldquo;delete&rdquo; to my email and I&rsquo;ll do it by hand.</p>
      )}
    </div>
  );
}
