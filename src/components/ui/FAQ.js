'use client';

import { useState } from 'react';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium font-heading text-text-primary pr-4">{question}</span>
        <span className="text-text-tertiary shrink-0 text-xl transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm text-text-secondary leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items }) {
  return (
    <div className="divide-y-0">
      {items.map((item, i) => (
        <FAQItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
