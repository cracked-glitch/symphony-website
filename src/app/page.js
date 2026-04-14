import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import TrustBadge from '@/components/ui/TrustBadge';
import CTA from '@/components/ui/CTA';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import NodeGraphBg from '@/components/backgrounds/NodeGraphBg';
import EqualizerBg from '@/components/backgrounds/EqualizerBg';
import ConcentricRingsBg from '@/components/backgrounds/ConcentricRingsBg';
import SectionDivider from '@/components/backgrounds/SectionDivider';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 bg-noise">
        <GradientOrbsBg variant="hero" />
        <NodeGraphBg density="sparse" />
        <EqualizerBg bars={40} position="bottom" className="opacity-60" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-8">
              <TrustBadge text="Secure by Design" />
              <TrustBadge text="Built for Speed" />
              <TrustBadge text="White-Glove Onboarding" />
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
              <Button href="/contact" size="lg">Start Your AI Strategy</Button>
              <Button href="/services" variant="ghost" size="lg">Explore Services</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* What We Do */}
      <Section accent background="grid" decoration="rings">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
          AI Systems Built to <span className="gradient-text">Perform</span>
        </h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">
          We build production AI that maps to your processes, runs on your data, and delivers results you can measure from week one.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: '01', title: 'Process Mapping', desc: 'We study how your team actually works before writing a single line of code.' },
            { icon: '02', title: 'Data Architecture', desc: 'Clean inputs, structured pipelines, and guardrails that keep your data secure.' },
            { icon: '03', title: 'Custom Build', desc: 'AI agents and automations designed around your specific workflows.' },
            { icon: '04', title: 'Measured Outcomes', desc: 'Every system ships with metrics so you see exactly what changed and by how much.' },
          ].map((item) => (
            <div key={item.title} className="gradient-border-subtle group">
              <div className="glass rounded-[calc(1rem-1px)] p-6 h-full transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] group-hover:scale-[1.01]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple/10 text-purple font-bold font-heading text-lg mb-4 glow-purple">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <SectionDivider variant="wave" />

      {/* Services Overview */}
      <Section decoration="waveform">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Three Ways We Drive <span className="gradient-text">Measurable Impact</span></h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Every engagement is scoped to deliver ROI fast. No retainers without results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>}>
            <h3 className="text-xl font-bold font-heading mb-2">AI Literacy Workshops</h3>
            <p className="text-text-secondary text-sm mb-4">A hands-on, 2-hour intensive that takes your team from AI-curious to AI-competent.</p>
            <a href="/services" className="text-sm text-purple font-medium hover:text-purple-light transition-colors">Learn more &rarr;</a>
          </Card>
          <Card icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>}>
            <h3 className="text-xl font-bold font-heading mb-2">Custom Agent Development</h3>
            <p className="text-text-secondary text-sm mb-4">Bespoke AI assistants built on your data, your rules, your compliance requirements.</p>
            <a href="/services" className="text-sm text-purple font-medium hover:text-purple-light transition-colors">Learn more &rarr;</a>
          </Card>
          <Card icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
            <h3 className="text-xl font-bold font-heading mb-2">Workflow Automation</h3>
            <p className="text-text-secondary text-sm mb-4">Replace the manual data entry, report compilation, and scouting report synthesis that burns 20+ hours per week.</p>
            <a href="/services" className="text-sm text-purple font-medium hover:text-purple-light transition-colors">Learn more &rarr;</a>
          </Card>
        </div>
      </Section>

      <SectionDivider variant="frequency" />

      {/* What We Deliver */}
      <Section bg="bg-bg-tertiary" background="dots">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Solutions That Solve <span className="gradient-text">Real Problems</span></h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We don&rsquo;t ship buzzwords. Every system we build is designed around a specific bottleneck in your business, and running in your environment within days, not quarters.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Hours Reclaimed',
              desc: 'The manual data entry, report building, and synthesis work burning 20+ hours a week, replaced by systems that run themselves.',
            },
            {
              title: 'Decisions Made Clear',
              desc: 'Scattered data, dashboards, and documents turned into the answers your team actually needs to act today.',
            },
            {
              title: 'Software That Ships',
              desc: 'Production tools deployed in your environment from day one. Not prototypes, not slideware. Real software you use tomorrow.',
            },
          ].map((item) => (
            <div key={item.title} className="gradient-border-subtle group">
              <div className="glass rounded-[calc(1rem-1px)] p-8 h-full transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] group-hover:scale-[1.01]">
                <h3 className="text-xl font-bold font-heading gradient-text mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="gradient-line" />

      {/* Final CTA */}
      <CTA
        heading="Ready to Ship AI Systems That Actually Work?"
        subheading="Let's start with your process. We'll map it, automate it, and measure it."
        primaryLabel="Book Your Discovery Call"
        primaryHref="/contact"
        secondaryLabel="See Our Methodology"
        secondaryHref="/about"
      />
    </>
  );
}
