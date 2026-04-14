export default function WaveformBg({ className = '', variant = 'subtle' }) {
  const opacity = variant === 'bold' ? 0.12 : 0.06;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary waveform - purple */}
        <path
          d="M0 300 C100 250, 200 200, 300 280 S500 350, 600 300 S800 200, 900 260 S1100 350, 1200 300"
          stroke="#7C3AED"
          strokeWidth="1.5"
          opacity={opacity}
          strokeDasharray="8 6"
          style={{
            strokeDashoffset: 1000,
            animation: 'dash 20s linear infinite',
          }}
        />
        {/* Secondary waveform - indigo */}
        <path
          d="M0 320 C150 270, 250 380, 400 310 S550 240, 700 320 S850 400, 1000 310 S1100 260, 1200 320"
          stroke="#6366F1"
          strokeWidth="1"
          opacity={opacity * 0.8}
          strokeDasharray="12 8"
          style={{
            strokeDashoffset: 800,
            animation: 'dash 25s linear infinite',
          }}
        />
        {/* Tertiary waveform - cyan */}
        <path
          d="M0 280 C200 330, 300 220, 450 290 S650 360, 800 280 S950 210, 1050 290 S1150 340, 1200 280"
          stroke="#06B6D4"
          strokeWidth="0.8"
          opacity={opacity * 0.6}
          strokeDasharray="6 10"
          style={{
            strokeDashoffset: 600,
            animation: 'dash 30s linear infinite',
          }}
        />
        {/* High-frequency detail wave */}
        <path
          d="M0 300 Q50 285, 100 300 T200 300 T300 300 T400 300 T500 300 T600 300 T700 300 T800 300 T900 300 T1000 300 T1100 300 T1200 300"
          stroke="#8B5CF6"
          strokeWidth="0.5"
          opacity={opacity * 0.4}
        />
      </svg>
    </div>
  );
}
