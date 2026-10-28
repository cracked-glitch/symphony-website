'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Phone-only booking bar. It appears once the hero's button has scrolled away
// and steps aside while another booking button is already on screen.
export default function StickyBook({ href, price }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const targets = [...document.querySelectorAll('[data-book-cta]')];
    const onScreen = new Set();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      setShow(onScreen.size === 0 && window.scrollY > 200);
    });
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`md:hidden !fixed inset-x-0 bottom-0 !z-40 border-t border-[rgba(244,239,228,0.14)] bg-[var(--st-ink)] px-6 py-3 flex items-center justify-between gap-4 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <p className="leading-tight">
        <span className="st-display text-[1.5rem] leading-none">{price}</span>
        <span className="st-kicker st-kicker-dim !text-[0.62rem] block">6 edits · 5 days</span>
      </p>
      <Link href={href} className="st-btn st-btn-primary !py-3" tabIndex={show ? 0 : -1}>
        Book my show
      </Link>
    </div>
  );
}
