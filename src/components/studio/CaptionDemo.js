'use client';

import { useEffect, useState } from 'react';

// A phone showing the caption style every clip ships with: words land one at a
// time as they're spoken, three at most per card, and the card clears in the
// pause. It's a style preview, not a client's set, so it carries no footage.
const CARDS = [
  ['Send', 'us', 'one set'],
  ['We', 'cut', 'the bits'],
  ['that', 'land'],
  ['captions', 'word', 'by word'],
  ['back', 'the same', 'day'],
];

const WORD_MS = 320;
const HOLD_MS = 900;
const GAP_MS = 380;

export default function CaptionDemo() {
  const [card, setCard] = useState(0);
  const [shown, setShown] = useState(CARDS[0].length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timers = [];
    let current = 0;

    function play() {
      const words = CARDS[current].length;
      setCard(current);
      setShown(0);
      for (let i = 1; i <= words; i++) {
        timers.push(setTimeout(() => setShown(i), i * WORD_MS));
      }
      const clearAt = words * WORD_MS + HOLD_MS;
      timers.push(setTimeout(() => setShown(-1), clearAt));
      timers.push(
        setTimeout(() => {
          current = (current + 1) % CARDS.length;
          play();
        }, clearAt + GAP_MS)
      );
    }

    play();
    return () => timers.forEach(clearTimeout);
  }, []);

  const words = CARDS[card];

  return (
    <div className="st-phone" role="img" aria-label="Preview of the caption style: words appear one at a time, three at most on screen.">
      {/* Mic on a stand, under a stage light. */}
      <svg
        viewBox="0 0 90 300"
        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[62%] opacity-70"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="st-mic" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#3B3550" />
            <stop offset="1" stopColor="#15121F" />
          </linearGradient>
        </defs>
        <rect x="33" y="8" width="24" height="44" rx="12" fill="url(#st-mic)" stroke="rgba(255,255,255,0.18)" />
        <rect x="41" y="52" width="8" height="16" fill="#221D31" />
        <rect x="43" y="66" width="4" height="214" fill="#1C1828" />
        <path d="M45 280 L12 300 M45 280 L78 300 M45 280 L45 300" stroke="#1C1828" strokeWidth="4" />
      </svg>

      <div className="absolute top-4 inset-x-4 flex items-center justify-between">
        <span className="st-kicker !text-[0.58rem] !tracking-[0.18em] !text-white/70">9:16 · Captions on</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--st-flare-text)] animate-pulse" aria-hidden="true" />
      </div>

      <div className="absolute inset-x-5 top-[67%] -translate-y-1/2 text-center min-h-[5.5rem] flex items-center justify-center">
        <p className="st-caption-card text-[clamp(1.6rem,4.4vw,2.35rem)]" aria-hidden="true">
          {words.map((w, i) => (
            <span
              key={`${card}-${i}`}
              className="st-caption-word"
              style={{ opacity: shown > i ? 1 : 0 }}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>

      <div className="absolute bottom-4 inset-x-4">
        <div className="h-[3px] rounded-full bg-white/15 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#06B6D4] transition-[width] duration-500"
            style={{ width: `${((card + 1) / CARDS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
