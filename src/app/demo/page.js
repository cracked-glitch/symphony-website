import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import NodeGraphBg from '@/components/backgrounds/NodeGraphBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';
import ConcentricRingsBg from '@/components/backgrounds/ConcentricRingsBg';
import EqualizerBg from '@/components/backgrounds/EqualizerBg';
import SectionDivider from '@/components/backgrounds/SectionDivider';

export default function DemoPage() {
  return (
    <>
      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className="relative overflow-hidden py-24 md:py-36 bg-noise">
        <GradientOrbsBg variant="hero" />
        <NodeGraphBg density="sparse" />
        <EqualizerBg bars={40} position="bottom" className="opacity-60" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Secure by Design', 'Built for Speed', 'White-Glove Onboarding'].map((badge) => (
                <div key={badge} className="glass-subtle flex items-center gap-2 px-4 py-2 text-xs font-medium text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
                  {badge}
                </div>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6">
              <span className="gradient-text">Orchestrating</span>
              <br />
              the Future of
              <br />
              Performance
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
              Custom AI Agents and Automation for Elite Teams. No hype, no hallucinations, just systems that ship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="rounded-lg bg-gradient-to-r from-purple to-purple-dark px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] glow-purple hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                Start Your AI Strategy
              </button>
              <button className="rounded-lg border border-cyan/30 bg-transparent px-8 py-4 text-base font-semibold text-cyan transition-all duration-300 hover:bg-cyan/5 hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* ==========================================
          WHAT WE DO - Grid pattern + glass cards
          ========================================== */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-grid">
        <ConcentricRingsBg position="top-right" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          {/* Section header with accent line */}
          <div className="border-l-2 border-cyan/40 pl-6 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
              AI Systems Built to <span className="gradient-text">Perform</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl">
              We build production AI that maps to your processes, runs on your data, and delivers results you can measure from week one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Process Mapping', desc: 'We study how your team actually works before writing a single line of code.' },
              { num: '02', title: 'Data Architecture', desc: 'Clean inputs, structured pipelines, and guardrails that keep your data secure.' },
              { num: '03', title: 'Custom Build', desc: 'AI agents and automations designed around your specific workflows.' },
              { num: '04', title: 'Measured Outcomes', desc: 'Every system ships with metrics so you see exactly what changed and by how much.' },
            ].map((item) => (
              <div key={item.num} className="gradient-border-subtle group">
                <div className="glass rounded-[calc(1rem-1px)] p-6 h-full transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] group-hover:scale-[1.01]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple/10 text-purple font-bold font-heading text-lg mb-4 glow-purple">
                    {item.num}
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* ==========================================
          SERVICES - Waveform bg + glass cards
          ========================================== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <WaveformBg variant="subtle" />
        <GradientOrbsBg variant="section" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Three Ways We Drive <span className="gradient-text">Measurable Impact</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every engagement is scoped to deliver ROI fast. No retainers without results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                ),
                title: 'AI Literacy Workshops',
                desc: 'A hands-on, 2-hour intensive that takes your team from AI-curious to AI-competent.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: 'Custom Agent Development',
                desc: 'Bespoke AI assistants built on your data, your rules, your compliance requirements.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Workflow Automation',
                desc: 'Replace the manual data entry, report compilation, and scouting synthesis that burns 20+ hours per week.',
              },
            ].map((service) => (
              <div key={service.title} className="gradient-border group">
                <div className="glass rounded-[calc(1rem-1px)] p-7 h-full transition-all duration-300 group-hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)] group-hover:scale-[1.01]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-cyan/10 text-cyan">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">{service.desc}</p>
                  <span className="text-sm text-purple font-medium hover:text-purple-light transition-colors cursor-pointer">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="frequency" />

      {/* ==========================================
          METRICS - Dots pattern + gradient text
          ========================================== */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-dots bg-bg-tertiary">
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: 'Weeks', label: 'From kickoff to working system' },
              { metric: 'Custom', label: 'Built on your data, your rules' },
              { metric: 'Measurable', label: 'ROI you can track from day one' },
            ].map((item) => (
              <div key={item.label} className="text-center group">
                <div className="glass-subtle inline-block px-10 py-8 rounded-2xl transition-all duration-300 group-hover:glow-purple group-hover:scale-[1.03]">
                  <div className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-3">{item.metric}</div>
                  <div className="text-sm text-text-tertiary">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      {/* ==========================================
          CTA SECTION - Full treatment
          ========================================== */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <GradientOrbsBg variant="cta" />
        <WaveformBg variant="bold" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="gradient-border">
            <div className="glass rounded-[calc(1rem-1px)] p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5">
                <span className="gradient-text">Ready to Ship AI Systems</span>
                <br />
                That Actually Work?
              </h2>
              <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
                Let&apos;s start with your process. We&apos;ll map it, automate it, and measure it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="rounded-lg bg-gradient-to-r from-purple to-indigo px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] glow-purple hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]">
                  Book Your Discovery Call
                </button>
                <button className="rounded-lg border border-border-light/30 bg-transparent px-8 py-4 text-base font-semibold text-text-secondary transition-all duration-300 hover:text-white hover:border-border-light/50">
                  See Our Methodology
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
