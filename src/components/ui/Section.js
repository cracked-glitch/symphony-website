import WaveformBg from '@/components/backgrounds/WaveformBg';
import NodeGraphBg from '@/components/backgrounds/NodeGraphBg';
import ConcentricRingsBg from '@/components/backgrounds/ConcentricRingsBg';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';

const decorations = {
  waveform: <WaveformBg variant="subtle" />,
  'waveform-bold': <WaveformBg variant="bold" />,
  nodes: <NodeGraphBg density="sparse" />,
  rings: <ConcentricRingsBg position="top-right" />,
  orbs: <GradientOrbsBg variant="section" />,
};

const backgrounds = {
  mesh: 'bg-mesh',
  grid: 'bg-grid',
  dots: 'bg-dots',
  noise: 'bg-noise',
};

export default function Section({
  children,
  className = '',
  bg = '',
  accent = false,
  decoration,
  background,
  id,
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 ${bg} ${backgrounds[background] || ''} ${className}`}
    >
      {decoration && decorations[decoration]}
      <div className={`relative z-10 mx-auto max-w-[1280px] px-6 ${accent ? 'border-l-2 border-cyan/40 pl-8' : ''}`}>
        {children}
      </div>
    </section>
  );
}
