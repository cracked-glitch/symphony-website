// The Symphony AI mark: four equalizer bars on the purple-to-indigo tile.
// Source files (SVG, PNG, favicon) live in public/brand.
export default function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="symphony-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="0.7" stopColor="#6366F1" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112.64" fill="url(#symphony-mark-gradient)" />
      <rect x="84.48" y="176.64" width="55.81" height="158.72" rx="27.9" fill="#FFFFFF" />
      <rect x="180.22" y="115.2" width="55.81" height="281.6" rx="27.9" fill="#FFFFFF" />
      <rect x="275.97" y="76.8" width="55.81" height="358.4" rx="27.9" fill="#FFFFFF" />
      <rect x="371.71" y="145.92" width="55.81" height="220.16" rx="27.9" fill="#FFFFFF" />
    </svg>
  );
}
