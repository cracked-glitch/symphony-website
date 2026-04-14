'use client';

import { useMemo } from 'react';

// Pre-computed bar configs to avoid hydration mismatches
const barConfigs = [
  { h: 38, d: 0 }, { h: 52, d: 0.08 }, { h: 64, d: 0.16 }, { h: 71, d: 0.24 },
  { h: 72, d: 0.32 }, { h: 66, d: 0.40 }, { h: 55, d: 0.48 }, { h: 42, d: 0.56 },
  { h: 30, d: 0.64 }, { h: 25, d: 0.72 }, { h: 28, d: 0.80 }, { h: 38, d: 0.88 },
  { h: 50, d: 0.96 }, { h: 62, d: 1.04 }, { h: 70, d: 1.12 }, { h: 72, d: 1.20 },
  { h: 68, d: 1.28 }, { h: 58, d: 1.36 }, { h: 45, d: 0 }, { h: 33, d: 0.08 },
  { h: 26, d: 0.16 }, { h: 27, d: 0.24 }, { h: 35, d: 0.32 }, { h: 47, d: 0.40 },
  { h: 59, d: 0.48 }, { h: 68, d: 0.56 }, { h: 72, d: 0.64 }, { h: 69, d: 0.72 },
  { h: 60, d: 0.80 }, { h: 48, d: 0.88 }, { h: 36, d: 0.96 }, { h: 28, d: 1.04 },
  { h: 25, d: 1.12 }, { h: 30, d: 1.20 }, { h: 40, d: 1.28 }, { h: 53, d: 1.36 },
  { h: 63, d: 0 }, { h: 70, d: 0.08 }, { h: 71, d: 0.16 }, { h: 65, d: 0.24 },
];

export default function EqualizerBg({ className = '', bars = 32, position = 'bottom' }) {
  const positionClasses = {
    bottom: 'bottom-0 left-0 right-0 h-32 items-end',
    side: 'right-0 top-0 bottom-0 w-32 flex-col items-end',
  };

  const barsToRender = barConfigs.slice(0, bars);

  return (
    <div
      className={`absolute pointer-events-none flex justify-center gap-[3px] ${positionClasses[position]} ${className}`}
      aria-hidden="true"
    >
      {barsToRender.map((bar, i) => (
        <div
          key={i}
          style={{
            width: position === 'bottom' ? '2px' : undefined,
            height: position === 'bottom' ? `${bar.h}%` : '2px',
            background: `linear-gradient(${position === 'bottom' ? 'to top' : 'to left'}, rgba(124, 58, 237, 0.15), rgba(6, 182, 212, 0.08))`,
            borderRadius: '1px',
            transformOrigin: position === 'bottom' ? 'bottom' : 'right',
            animation: `waveform 1.5s ease-in-out infinite`,
            animationDelay: `${bar.d}s`,
          }}
        />
      ))}
    </div>
  );
}
