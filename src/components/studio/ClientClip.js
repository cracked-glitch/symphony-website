'use client';

import { useRef, useState } from 'react';

// A clip we cut for a real client, hosted with the site (public/studio/clients) and shown only with their
// written OK. Until it's tapped it's just the poster, so the page doesn't pull the video up front. Tapping
// plays it with sound and native controls.
export default function ClientClip({ clip, who }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function start() {
    setPlaying(true);
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[22px] border border-[var(--st-line-strong)] bg-[var(--st-panel-solid)] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(255,59,31,0.18)]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={`/studio/clients/${clip.src}.mp4`}
        poster={`/studio/clients/${clip.src}.jpg`}
        controls={playing}
        playsInline
        preload="none"
        aria-label={`${who}: ${clip.title}`}
      />
      {!playing && (
        <button
          type="button"
          onClick={start}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play ${who}: ${clip.title}`}
        >
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--st-flare)] shadow-[0_0_30px_rgba(255,59,31,0.5)] transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          {/* Hidden on phones, where the clip is half-width and the label would sit on its burned-in captions;
              the figcaption under it already says whose it is. */}
          <span className="absolute bottom-4 inset-x-4 text-left hidden sm:block">
            <span className="st-kicker !text-white block">{who}</span>
            <span className="st-body !text-white/80 text-[0.85rem]">{clip.title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
