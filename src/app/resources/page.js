import Section from '@/components/ui/Section';
import NewsletterForm from '@/components/forms/NewsletterForm';

export const metadata = {
  title: 'Resources',
  description: 'AI insights, automation frameworks, and lessons learned from our engagements.',
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Resources &amp; Insights</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Frameworks, case studies, and lessons learned. Resources come as we build them&mdash;no fluff, just practical intelligence.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <Section>
        <div className="max-w-xl mx-auto text-center">
          <div className="rounded-2xl border border-border bg-bg-secondary p-10 md:p-16">
            <div className="text-5xl mb-6">&#128218;</div>
            <h2 className="text-2xl font-bold font-heading mb-4">Launching Soon</h2>
            <p className="text-text-secondary mb-8">
              We&rsquo;re building a resource hub with frameworks, guides, and case studies. Sign up to get notified when new resources are published.
            </p>

            {/* Newsletter Signup */}
            <NewsletterForm />
            <p className="text-xs text-text-tertiary mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </Section>

      {/* Placeholder Blog Grid */}
      <Section bg="bg-bg-tertiary">
        <h2 className="text-2xl font-bold font-heading mb-8 text-center">Coming Up</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'How We Automated 40+ Hours/Week at Excel Sports', tag: 'Case Study' },
            { title: 'The RAG Pipeline Playbook: What Actually Works', tag: 'AI Strategy' },
            { title: 'AI Literacy for Non-Technical Teams: A Practical Guide', tag: 'Training' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-bg-secondary overflow-hidden">
              <div className="h-40 bg-bg-tertiary flex items-center justify-center text-text-tertiary text-sm">
                Featured Image
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-purple">{item.tag}</span>
                <h3 className="text-base font-bold font-heading mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-text-tertiary">Coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
