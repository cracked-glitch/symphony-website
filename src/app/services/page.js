import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import CTA from '@/components/ui/CTA';
import BuyButton from '@/components/checkout/BuyButton';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';
import { suiteProducts } from '@/lib/products';

export const metadata = {
  title: 'Services',
  description: 'AI Literacy Workshops, Custom Agent Development, and Workflow Automation for measurable business impact.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <WaveformBg variant="subtle" />
        <GradientOrbsBg variant="section" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Three Ways We Drive <span className="gradient-text">Measurable Impact</span></h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Every engagement is scoped to deliver ROI fast. No retainers without results.</p>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* AI Literacy Workshops */}
      <Section decoration="orbs">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-subtle inline-block rounded-full text-cyan text-xs font-semibold px-3 py-1 mb-4">Training</div>
            <h2 className="text-3xl font-bold font-heading mb-4">AI Literacy Workshops</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              A hands-on, 2-hour intensive that takes your team from AI-curious to AI-competent. Your team leaves understanding prompt engineering, output evaluation, and security fundamentals. No fluff. Just the skills they need to collaborate effectively with AI tools.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Hands-on prompt engineering drills',
                'Evaluating AI outputs for accuracy and bias',
                'Security fundamentals and data governance',
                'Real-world workshop scenarios from your domain',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="text-cyan mt-0.5">&#x2713;</span> {item}
                </li>
              ))}
            </ul>
            <Button href="/contact">Book a Workshop</Button>
            <p className="text-xs text-text-tertiary mt-3">2-hour session, fully facilitated, questions encouraged</p>
          </div>
          <div className="relative rounded-xl overflow-hidden h-64 lg:h-80">
            <Image
              src="/images/Team Meeting learning AI.png"
              alt="Team learning AI in a workshop"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Custom Agent Development */}
      <Section bg="bg-bg-tertiary" background="grid">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden h-64 lg:h-80 order-2 lg:order-1">
            <Image
              src="/images/Custom AI Agents.png"
              alt="Custom AI agent architecture"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="glass-subtle inline-block rounded-full text-purple text-xs font-semibold px-3 py-1 mb-4">Development</div>
            <h2 className="text-3xl font-bold font-heading mb-4">Custom Agent Development</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Bespoke AI assistants built on your data, your rules, your compliance requirements. We architect systems with RAG pipelines, multi-step reasoning, and human-in-the-loop controls. Every agent is built for production and fully auditable.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'RAG pipelines built on your data',
                'Multi-step reasoning with human-in-the-loop checkpoints',
                'Role-based access and audit logging',
                'Compliance-aware architecture built for your requirements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="text-cyan mt-0.5">&#x2713;</span> {item}
                </li>
              ))}
            </ul>
            <Button href="/contact">Scope Your Agent</Button>
            <p className="text-xs text-text-tertiary mt-3">Discovery call &rarr; Architecture design &rarr; Build &rarr; Measured results</p>
          </div>
        </div>
      </Section>

      {/* Workflow Automation */}
      <Section decoration="waveform">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-subtle inline-block rounded-full text-indigo text-xs font-semibold px-3 py-1 mb-4">Automation</div>
            <h2 className="text-3xl font-bold font-heading mb-4">Workflow Automation</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Replace the manual data entry, report compilation, and scouting report synthesis that burns 20+ hours per week. We audit your workflows, identify automation targets, and build systems that reduce toil without introducing new complexity.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Data pipeline orchestration and ETL automation',
                'Automated reporting and insights generation',
                'API integrations and third-party system connections',
                'Custom dashboards and monitoring',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="text-cyan mt-0.5">&#x2713;</span> {item}
                </li>
              ))}
            </ul>
            <Button href="/contact">Automate Your Workflow</Button>
            <p className="text-xs text-text-tertiary mt-3">Typical engagement: days from discovery to live automation</p>
          </div>
          <div className="relative rounded-xl overflow-hidden h-64 lg:h-80">
            <Image
              src="/images/Complex Workflow Automation.png"
              alt="Complex workflow automation diagram"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* The Symphony Suite — pre-built, ready-to-use */}
      <Section bg="bg-bg-tertiary" background="grid" decoration="orbs">
        <div className="max-w-3xl mb-10">
          <div className="glass-subtle inline-block rounded-full text-warning text-xs font-semibold px-3 py-1 mb-4">
            Pre-Built &middot; Ready to Use
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            The Symphony <span className="gradient-text">Suite</span>
          </h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            Custom builds solve your specific work. The Suite solves the work every
            team faces. Pre-built prompt packs, calibrated and tested, delivered as a
            one-time download. No engagement, no scoping call, no subscription.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Same operator&rsquo;s logic as the custom builds, packaged so you can run, not study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {suiteProducts.map((p) => (
            <div key={p.slug} className="gradient-border">
              <div className="glass rounded-[calc(1rem-1px)] p-6 md:p-7 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                    {p.promptCount} Prompts
                  </span>
                  <span className="font-heading font-bold text-lg gradient-text">
                    ${p.price}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{p.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href={`/suite/${p.slug}`} size="sm">
                    See What&rsquo;s Inside
                  </Button>
                  <BuyButton product={p} variant="ghost" size="sm">
                    Buy ${p.price}
                  </BuyButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-bg-secondary border-l-4 border-purple p-5 max-w-3xl">
          <p className="text-sm text-text-secondary leading-relaxed">
            <span className="text-purple font-semibold">Not sure what fits?</span>{' '}
            Start with a pack to see how we work. If your team needs something the Suite
            does not cover,{' '}
            <a href="/contact" className="text-cyan hover:underline">
              book a discovery call
            </a>
            {' '}for a custom build.
          </p>
        </div>
      </Section>

      {/* How We Work */}
      <Section bg="bg-bg-tertiary" background="dots" decoration="orbs">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How We <span className="gradient-text">Work</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Discover', time: 'Day 1-2', desc: 'Map your current process, bottlenecks, and success metrics.' },
            { step: '2', title: 'Design', time: 'Day 3-4', desc: 'Propose AI + automation architecture tailored to your needs.' },
            { step: '3', title: 'Build', time: 'Day 5-14', desc: 'Rapid development, testing, and iteration with your team in the loop.' },
            { step: '4', title: 'Launch & Measure', time: 'Day 15+', desc: 'Live deployment, ROI tracking, and continuous optimization.' },
          ].map((item) => (
            <Card key={item.step} hover={false}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple to-indigo text-white font-bold text-sm mb-4">{item.step}</div>
              <h3 className="text-lg font-bold font-heading mb-1">{item.title}</h3>
              <p className="text-xs text-purple font-medium mb-2">{item.time}</p>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <CTA
        heading="Which Service Fits Your Needs?"
        subheading="Let's talk through your specific challenges."
        primaryLabel="Schedule a Discovery Call"
        primaryHref="/contact"
      />
    </>
  );
}
