export default function SectionDivider({ variant = 'wave', flip = false, color = '#7C3AED' }) {
  const paths = {
    wave: 'M0,64 C320,20 480,100 640,64 C800,28 960,100 1200,64 L1200,0 L0,0 Z',
    frequency: 'M0,40 L60,55 L120,25 L180,60 L240,30 L300,50 L360,20 L420,55 L480,35 L540,60 L600,25 L660,50 L720,30 L780,55 L840,20 L900,50 L960,35 L1020,55 L1080,25 L1140,50 L1200,40 L1200,0 L0,0 Z',
  };

  return (
    <div
      className="w-full pointer-events-none"
      style={{ transform: flip ? 'scaleY(-1)' : 'none', marginTop: flip ? 0 : '-1px', marginBottom: flip ? '-1px' : 0 }}
      aria-hidden="true"
    >
      <svg
        className="w-full"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', height: '60px' }}
      >
        <path
          d={paths[variant] || paths.wave}
          fill={color}
          opacity="0.06"
        />
        <path
          d={paths[variant] || paths.wave}
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.12"
        />
      </svg>
    </div>
  );
}
