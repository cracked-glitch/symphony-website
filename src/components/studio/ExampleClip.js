'use client';

import { useState } from 'react';

// A style reference: a comic's own Short, played through YouTube's official
// embed from their channel. Nothing is downloaded or rehosted. Until it's
// tapped it's just the poster frame, so the page doesn't load YouTube up front.
export default function ExampleClip({ clip }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[22px] border border-[var(--st-line-strong)] bg-[var(--st-panel-solid)] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(255,59,31,0.18)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}?autoplay=1&playsinline=1&rel=0`}
          title={`${clip.title}, ${clip.comic}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play ${clip.comic}: ${clip.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${clip.youtubeId}/oar2.jpg`}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--st-flare)] shadow-[0_0_30px_rgba(255,59,31,0.5)] transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 inset-x-4 text-left">
            <span className="st-kicker !text-white block">{clip.comic}</span>
            <span className="st-body !text-white/80 text-[0.85rem]">{clip.title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
