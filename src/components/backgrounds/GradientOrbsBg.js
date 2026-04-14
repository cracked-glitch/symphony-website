'use client';

export default function GradientOrbsBg({ className = '', variant = 'hero' }) {
  const configs = {
    hero: [
      { color: 'rgba(124, 58, 237, 0.15)', size: 500, top: '5%', left: '10%', delay: '0s' },
      { color: 'rgba(99, 102, 241, 0.10)', size: 400, top: '40%', left: '55%', delay: '2s' },
      { color: 'rgba(6, 182, 212, 0.08)', size: 350, top: '60%', left: '75%', delay: '4s' },
    ],
    section: [
      { color: 'rgba(124, 58, 237, 0.10)', size: 350, top: '10%', left: '80%', delay: '0s' },
      { color: 'rgba(6, 182, 212, 0.06)', size: 300, top: '60%', left: '5%', delay: '3s' },
    ],
    cta: [
      { color: 'rgba(124, 58, 237, 0.12)', size: 400, top: '20%', left: '5%', delay: '0s' },
      { color: 'rgba(99, 102, 241, 0.08)', size: 350, top: '30%', left: '70%', delay: '2s' },
      { color: 'rgba(6, 182, 212, 0.06)', size: 300, top: '60%', left: '40%', delay: '4s' },
    ],
  };

  const orbs = configs[variant] || configs.section;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={i % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}
          style={{
            position: 'absolute',
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: orb.top,
            left: orb.left,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(80px)',
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
