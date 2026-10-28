'use client';

import { useEffect, useRef } from 'react';

// The work, shown before anything is explained. Each clip is a muted loop that
// plays only while it's on screen, so a phone on cellular never pulls all six.
// With reduced motion on, clips stay on their poster frame until tapped.
export default function ReelStrip({ clips }) {
  const listRef = useRef(null);

  useEffect(() => {
    const videos = [...listRef.current.querySelectorAll('video')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.play().catch(() => {});
          else e.target.pause();
        }
      },
      { threshold: 0.5 }
    );
    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className="st-reel grid grid-flow-col auto-cols-[40vw] sm:auto-cols-[28vw] md:grid-flow-row md:grid-cols-6 md:auto-cols-auto gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
    >
      {clips.map((c) => (
        <li key={c.src} className="snap-start">
          <video
            className="st-reel-video"
            src={`/studio/reel/${c.src}.mp4`}
            poster={`/studio/reel/${c.src}.jpg`}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`Edit for ${c.artist}, ${c.where}`}
            onClick={(e) => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())}
          />
          <p className="mt-2 leading-tight">
            <span className="st-kicker !text-[0.66rem] !tracking-[0.14em] block">{c.artist}</span>
            <span className="st-kicker st-kicker-dim !text-[0.62rem] !tracking-[0.14em]">{c.where}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
