import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import CTA from '@/components/ui/CTA';

export const metadata = {
  title: 'Services',
  description: 'AI Literacy Workshops, Custom Agent Development, and Workflow Automation for measurable business impact.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Three Ways We Drive Measurable Impact</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">Every engagement is scoped to deliver ROI within 90 days. No retainers without results.</p>
        </div>
      </section>

      {/* AI Literacy Workshops */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-full bg-cyan/10 text-cyan text-xs font-semibold px-3 py-1 mb-4">Training</div>
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
          <div className="rounded-xl bg-bg-secondary border border-border h-64 lg:h-80 flex items-center justify-center text-text-tertiary">
            Workshop Visual Placeholder
          </div>
        </div>
      </Section>

      {/* Custom Agent Development */}
      <Section bg="bg-bg-tertiary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl bg-bg-secondary border border-border h-64 lg:h-80 flex items-center justify-center text-text-tertiary order-2 lg:order-1">
            Agent Visual Placeholder
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block rounded-full bg-purple/10 text-purple text-xs font-semibold px-3 py-1 mb-4">Development</div>
            <h2 className="text-3xl font-bold font-heading mb-4">Custom Agent Development</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Bespoke AI assistants built on your data, your rules, your compliance requirements. We don&rsquo;t wrap ChatGPT and call it a solution. We architect systems with RAG pipelines, multi-step reasoning, and human-in-the-loop controls. Every agent is built for production and auditable.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'RAG pipelines built on your data',
                'Multi-step reasoning with human-in-the-loop checkpoints',
                'Role-based access and audit logging',
                'Compliance-first architecture (SOC 2, HIPAA-ready)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="text-cyan mt-0.5">&#x2713;</span> {item}
                </li>
              ))}
            </ul>
            <Button href="/contact">Scope Your Agent</Button>
            <p className="text-xs text-text-tertiary mt-3">Discovery call &rarr; Architecture design &rarr; 8-week build &rarr; Measured results</p>
          </div>
        </div>
      </Section>

      {/* Workflow Automation */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block rounded-full bg-indigo/10 text-indigo text-xs font-semibold px-3 py-1 mb-4">Automation</div>
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
            <p className="text-xs text-text-tertiary mt-3">Typical engagement: 12 weeks from discovery to live automation</p>
          </div>
          <div className="rounded-xl bg-bg-secondary border border-border h-64 lg:h-80 flex items-center justify-center text-text-tertiary">
            Automation Visual Placeholder
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section bg="bg-bg-tertiary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How We Work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Discover', time: 'Week 1-2', desc: 'Map your current process, bottlenecks, and success metrics.' },
            { step: '2', title: 'Design', time: 'Week 3-4', desc: 'Propose AI + automation architecture tailored to your needs.' },
            { step: '3', title: 'Build', time: 'Week 5-12', desc: 'Development, testing, and iteration with your team in the loop.' },
            { step: '4', title: 'Launch & Measure', time: 'Week 13+', desc: 'Live deployment, ROI tracking, and continuous optimization.' },
          ].map((item) => (
            <Card key={item.step} hover={false}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple text-white font-bold text-sm mb-4">{item.step}</div>
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
