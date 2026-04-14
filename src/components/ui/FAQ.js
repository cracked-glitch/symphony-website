'use client';

import { useState } from 'react';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-border/50 transition-all duration-300 ${open ? 'border-l-2 border-l-cyan/40 pl-4' : 'border-l-2 border-l-transparent pl-4'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-medium font-heading text-text-primary pr-4">{question}</span>
        <span className={`text-text-tertiary shrink-0 text-xl transition-all duration-300 group-hover:text-cyan ${open ? 'rotate-45 text-cyan' : ''}`}>
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-sm text-text-secondary leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <FAQItem key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
