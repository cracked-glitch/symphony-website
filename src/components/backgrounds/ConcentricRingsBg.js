export default function ConcentricRingsBg({ className = '', position = 'center' }) {
  const positionClasses = {
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'right-[-15%] top-[-15%]',
    'bottom-left': 'left-[-15%] bottom-[-15%]',
  };

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      style={{ width: '600px', height: '600px' }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outermost ring - purple, slow rotation */}
        <circle
          className="animate-rotate-slow"
          cx="300" cy="300" r="280"
          stroke="#7C3AED"
          strokeWidth="0.8"
          strokeDasharray="12 8"
          opacity="0.06"
          style={{ transformOrigin: '300px 300px' }}
        />
        {/* Second ring - indigo, reverse rotation */}
        <circle
          className="animate-rotate-slow-reverse"
          cx="300" cy="300" r="220"
          stroke="#6366F1"
          strokeWidth="0.6"
          strokeDasharray="8 12"
          opacity="0.07"
          style={{ transformOrigin: '300px 300px' }}
        />
        {/* Third ring - cyan, slow rotation */}
        <circle
          className="animate-rotate-slow"
          cx="300" cy="300" r="160"
          stroke="#06B6D4"
          strokeWidth="0.5"
          strokeDasharray="6 10"
          opacity="0.05"
          style={{ transformOrigin: '300px 300px' }}
        />
        {/* Inner ring - purple light */}
        <circle
          className="animate-rotate-slow-reverse"
          cx="300" cy="300" r="100"
          stroke="#8B5CF6"
          strokeWidth="0.4"
          strokeDasharray="4 8"
          opacity="0.06"
          style={{ transformOrigin: '300px 300px' }}
        />
        {/* Center glow dot */}
        <circle
          cx="300" cy="300" r="3"
          fill="#7C3AED"
          opacity="0.15"
          className="animate-pulse-glow"
        />
      </svg>
    </div>
  );
}
