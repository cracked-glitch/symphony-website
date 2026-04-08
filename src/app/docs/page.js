import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';

export const metadata = {
  title: 'Documentation',
  description: 'Free guides, frameworks, and playbooks for teams building with AI. Use them yourself, call us when you need help.',
};

const docs = [
  {
    category: 'Getting Started',
    items: [
      {
        title: 'AI Readiness Assessment',
        desc: 'A 10-question checklist to evaluate whether your team and processes are ready for AI integration. Start here.',
        tag: 'Framework',
      },
      {
        title: 'Prompt Engineering Fundamentals',
        desc: 'The core techniques your team needs to get consistent, reliable outputs from any large language model.',
        tag: 'Guide',
      },
      {
        title: 'Choosing the Right AI Approach',
        desc: 'RAG vs. fine-tuning vs. agents vs. simple prompting. A decision tree for picking the right architecture.',
        tag: 'Playbook',
      },
    ],
  },
  {
    category: 'Building with AI',
    items: [
      {
        title: 'Custom Agent Architecture Guide',
        desc: 'How to design AI agents that work in production: data pipelines, guardrails, human-in-the-loop controls, and audit logging.',
        tag: 'Technical Guide',
      },
      {
        title: 'Workflow Automation Playbook',
        desc: 'Identify automation targets, calculate ROI, and build systems that reduce toil without introducing new complexity.',
        tag: 'Playbook',
      },
      {
        title: 'Data Governance for AI Projects',
        desc: 'How to handle sensitive data when building AI systems. Access controls, retention policies, and compliance considerations.',
        tag: 'Guide',
      },
    ],
  },
  {
    category: 'Measuring Results',
    items: [
      {
        title: 'AI ROI Calculator',
        desc: 'A framework for quantifying the return on your AI investment. Hours saved, error reduction, and revenue impact.',
        tag: 'Tool',
      },
      {
        title: 'Post-Launch Monitoring Checklist',
        desc: 'What to track after deploying an AI system. Performance metrics, drift detection, and feedback loops.',
        tag: 'Checklist',
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              Documentation &amp; Guides
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Free frameworks, playbooks, and technical guides for teams building with AI. Use them yourself. Call us when you need hands-on help.
            </p>
            <p className="text-text-tertiary">
              We publish what we know. No gating, no email walls. Just practical intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tutorial */}
      <Section bg="bg-bg-tertiary">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-semibold text-purple bg-purple/10 px-2.5 py-1 rounded-full">Featured</span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Tutorials &amp; Walkthroughs</h2>
        </div>
        <div className="rounded-2xl border border-purple/30 bg-bg-secondary p-8 md:p-10">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">Step-by-Step Tutorial</span>
              <h3 className="text-2xl font-bold font-heading mt-3 mb-3">Building Your First Claude Skill</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                A hands-on, 6-page walkthrough that takes you from zero to a working Claude Skill. Learn the difference between one-off prompts and reusable specialists, then build one yourself&mdash;step by step.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'What a Claude Skill is and when to build one',
                  'How to define a sharp purpose statement',
                  'Writing instructions that produce consistent output every time',
                  'Testing with real data and iterating to production quality',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="text-cyan mt-0.5">&#x2713;</span> {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple px-5 py-2.5 text-sm font-semibold text-white opacity-75 cursor-default">
                  PDF Coming Soon
                </span>
                <span className="text-xs text-text-tertiary">6 pages &middot; 15 min read</span>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-xl bg-bg-tertiary border border-border p-6 text-center">
              <div className="text-6xl mb-4">&#128218;</div>
              <p className="text-sm font-semibold font-heading mb-1">Claude Skill Creation Guide</p>
              <p className="text-xs text-text-tertiary">Sports Analytics Edition</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-text-tertiary">Preview:</p>
                <div className="mt-2 text-left space-y-1.5">
                  <p className="text-xs text-text-secondary">1. Define the Purpose</p>
                  <p className="text-xs text-text-secondary">2. Write the Instructions</p>
                  <p className="text-xs text-text-secondary">3. Test &amp; Iterate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Doc Categories */}
      {docs.map((section) => (
        <Section key={section.category} bg={docs.indexOf(section) % 2 === 1 ? 'bg-bg-tertiary' : ''}>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">{section.category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item) => (
              <Card key={item.title}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">{item.tag}</span>
                  <span className="text-xs text-text-tertiary">Coming soon</span>
                </div>
                <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      {/* Newsletter */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Get Notified When Docs Drop</h2>
          <p className="text-text-secondary mb-6">We&rsquo;re publishing new guides regularly. No spam. Just practical AI content.</p>
          <Button href="/resources">Subscribe for Updates</Button>
        </div>
      </Section>

      {/* CTA */}
      <CTA
        heading="Need Help Implementing?"
        subheading="These guides get you started. We get you to production."
        primaryLabel="Book a Discovery Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
