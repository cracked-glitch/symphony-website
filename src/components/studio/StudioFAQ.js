'use client';

import { useState } from 'react';

function Item({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[rgba(244,239,228,0.16)] last:border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="st-display text-[1.1rem] text-[rgba(244,239,228,0.3)] pt-1 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="st-display text-[1.25rem] flex-1 group-hover:text-[var(--st-flare)] transition-colors">
          {question}
        </span>
        <span
          className={`st-flare-text text-xl shrink-0 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="st-body text-[0.95rem] pb-6 pl-[2.4rem] pr-8 max-w-3xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function StudioFAQ({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <Item key={item.question} question={item.question} answer={item.answer} index={i} />
      ))}
    </div>
  );
}
