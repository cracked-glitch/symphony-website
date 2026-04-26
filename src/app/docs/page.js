import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';
import BuyButton from '@/components/checkout/BuyButton';
import WaveformBg from '@/components/backgrounds/WaveformBg';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import { suiteProducts } from '@/lib/products';

export const metadata = {
  title: 'Documentation',
  description: 'Free guides, frameworks, and playbooks for teams building with AI. Use them yourself, call us when you need help.',
};

const guides = [
  {
    title: 'The Art of the Prompt',
    desc: 'A step-by-step walkthrough for writing effective AI prompts. Learn the Role + Task + Context framework, build a real prompt from scratch, and avoid the most common mistakes.',
    tag: 'Step-by-Step Guide',
    href: '/docs/prompting-guide',
    pdf: '/symphony-prompting-guide.pdf',
    pages: 6,
    time: '15 min',
  },
  {
    title: 'Building Your First Claude Skill',
    desc: 'Go from zero to a working Claude Skill in three steps. Define the purpose, write the instructions, test with real data. Built once, used forever.',
    tag: 'Step-by-Step Guide',
    href: '/docs/skills-guide',
    pdf: '/symphony-skills-guide.pdf',
    pages: 6,
    time: '15 min',
  },
  {
    title: 'Deploy Your First AI Agent in 60 Minutes',
    desc: 'The no-code playbook for builders, not coders. See the same lead capture agent Symphony AI runs internally, then follow the step-by-step build for your own business. No developer required.',
    tag: 'No-Code Playbook',
    href: '/docs/ai-agent-guide',
    pdf: '/symphony-ai-agent-guide.pdf',
    pages: 11,
    time: '30 min',
  },
  {
    title: 'Your First Claude Code Routine in Under 60 Minutes',
    desc: 'The operator playbook for non-developers. See the Monday morning briefing Routine Symphony AI runs internally, then build it for your business in nine prompts. No terminal commands, just paste and refine.',
    tag: 'Operator Playbook',
    href: '/docs/claude-code-routines',
    pdf: '/symphony-claude-code-routines-guide.pdf',
    pages: 12,
    time: '30 min',
  },
];

const upcomingDocs = [
  {
    category: 'Coming Soon',
    items: [
      { title: 'AI Readiness Assessment', desc: 'A 10-question checklist to evaluate whether your team and processes are ready for AI integration.', tag: 'Framework' },
      { title: 'Choosing the Right AI Approach', desc: 'RAG vs. fine-tuning vs. agents vs. simple prompting. A decision tree for picking the right architecture.', tag: 'Playbook' },
      { title: 'Custom Agent Architecture Guide', desc: 'How to design AI agents that work in production: data pipelines, guardrails, human-in-the-loop controls.', tag: 'Technical Guide' },
      { title: 'Workflow Automation Playbook', desc: 'Identify automation targets, calculate ROI, and build systems that reduce toil.', tag: 'Playbook' },
      { title: 'AI ROI Calculator', desc: 'A framework for quantifying the return on your AI investment. Hours saved, error reduction, and revenue impact.', tag: 'Tool' },
      { title: 'Post-Launch Monitoring Checklist', desc: 'What to track after deploying an AI system. Performance metrics, drift detection, and feedback loops.', tag: 'Checklist' },
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <WaveformBg variant="subtle" />
        <GradientOrbsBg variant="section" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              Documentation &amp; <span className="gradient-text">Guides</span>
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

      <div className="gradient-line-thick" />

      {/* Published Guides */}
      <Section bg="bg-bg-tertiary" background="grid">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold text-purple bg-purple/10 px-2.5 py-1 rounded-full">Available Now</span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Guides &amp; Tutorials</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <div key={guide.title} className="gradient-border">
              <div className="glass rounded-[calc(1rem-1px)] p-7 md:p-8 flex flex-col h-full">
                <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full self-start mb-4">{guide.tag}</span>
                <h3 className="text-xl font-bold font-heading mb-3">{guide.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">{guide.desc}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button href={guide.href} size="sm">Read Online</Button>
                  <Button href={guide.pdf} variant="ghost" size="sm">Download PDF</Button>
                  <span className="text-xs text-text-tertiary">{guide.pages} pages &middot; {guide.time} read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Suite promo */}
      <Section decoration="orbs">
        <div className="gradient-border max-w-4xl">
          <div className="glass rounded-[calc(1rem-1px)] p-7 md:p-9">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <span className="inline-block font-heading text-[11px] font-semibold tracking-[2px] uppercase text-purple mb-2">
                  The Symphony Suite
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">
                  When you want the work already done.
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  Pre-built prompt packs that solve common work in minutes. Same operator&rsquo;s
                  logic as the free guides, packaged so you can run, not study.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:shrink-0">
                <Button href="/suite" size="md">Browse the Suite</Button>
                <BuyButton
                  product={suiteProducts.find((p) => p.slug === 'manager-pack')}
                  variant="ghost"
                  size="md"
                >
                  Manager Pack $59
                </BuyButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Upcoming Docs */}
      {upcomingDocs.map((section) => (
        <Section key={section.category} decoration="nodes">
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
