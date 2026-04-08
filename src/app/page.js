import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import TrustBadge from '@/components/ui/TrustBadge';
import CTA from '@/components/ui/CTA';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-bg-primary to-bg-primary" />
        <div className="relative mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Orchestrating the Future of Performance
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Custom AI Agents and Automation for Elite Teams. We turn AI ambition into measurable operational leverage&mdash;no hype, no hallucinations, just systems that ship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="/contact" size="lg">Start Your AI Strategy</Button>
              <Button href="/services" variant="ghost" size="lg">Explore Services</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <TrustBadge icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>} text="Enterprise-Grade Security" />
              <TrustBadge icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} text="SOC 2 Aligned" />
              <TrustBadge icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>} text="White-Glove Onboarding" />
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <Section accent>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">
          Everyone Wants &lsquo;AI Agents.&rsquo; Almost Nobody Has the Foundation.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-error/20 bg-error/5 p-6 md:p-8">
            <h3 className="text-lg font-semibold font-heading text-error mb-4">What They Sell You</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3"><span className="text-error mt-1">&#x2717;</span> &ldquo;AI will solve everything&rdquo;</li>
              <li className="flex items-start gap-3"><span className="text-error mt-1">&#x2717;</span> &ldquo;ChatGPT + RAG = magic&rdquo;</li>
              <li className="flex items-start gap-3"><span className="text-error mt-1">&#x2717;</span> &ldquo;We&rsquo;ll integrate in 2 weeks&rdquo;</li>
              <li className="flex items-start gap-3"><span className="text-error mt-1">&#x2717;</span> &ldquo;Results guaranteed (no SLA)&rdquo;</li>
            </ul>
          </div>
          <div className="rounded-xl border border-success/20 bg-success/5 p-6 md:p-8">
            <h3 className="text-lg font-semibold font-heading text-success mb-4">What We Build</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3"><span className="text-success mt-1">&#x2713;</span> Proven frameworks. Measured outcomes.</li>
              <li className="flex items-start gap-3"><span className="text-success mt-1">&#x2713;</span> Data architecture. Process mapping. Execution discipline.</li>
              <li className="flex items-start gap-3"><span className="text-success mt-1">&#x2713;</span> 90-day engagement to first measurable win</li>
              <li className="flex items-start gap-3"><span className="text-success mt-1">&#x2713;</span> Outcomes tied to your business metrics</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Three Ways We Drive Measurable Impact</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Every engagement is scoped to deliver ROI within 90 days. No retainers without results.</p>
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

      {/* Social Proof */}
      <Section bg="bg-bg-tertiary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trusted by Innovative Teams</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { metric: '40+', label: 'Hours/week automated' },
            { metric: '90-day', label: 'ROI guarantee' },
            { metric: '12+', label: 'SMBs served' },
            { metric: '4-person', label: 'Team, enterprise results' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-heading text-purple mb-2">{item.metric}</div>
              <div className="text-sm text-text-tertiary">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

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
