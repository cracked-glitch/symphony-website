import Section from '@/components/ui/Section';
import FAQ from '@/components/ui/FAQ';
import ContactForm from '@/components/forms/ContactForm';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Contact',
  description: "Schedule your discovery call. We'll map your process and identify quick wins.",
};

const faqItems = [
  { question: 'How long is a typical engagement?', answer: 'We move fast. Most engagements deliver a working system in days, not months. We provide a detailed timeline after the discovery call.' },
  { question: "What's included in the discovery call?", answer: 'We map your current processes, identify bottlenecks, and propose 2-3 quick wins you could start on immediately.' },
  { question: 'Do you offer retainers?', answer: "Not until you see results. We tie our fees to measurable outcomes. Once you see ROI, we can discuss ongoing support." },
  { question: "What if we're not ready for a full engagement?", answer: "Start with an AI Literacy Workshop. It's the fastest way to get your team up to speed." },
  { question: 'How do you handle data security?', answer: 'All data stays in your environment. We sign NDAs as standard and build with compliance in mind from day one.' },
  { question: 'Can you integrate with our existing tools?', answer: "Yes. We work with most modern data platforms, APIs, and internal systems. We'll assess compatibility during discovery." },
  { question: 'What about custom requirements or edge cases?', answer: "That's what we do. We'll architect a solution that fits your specific needs, not force you into a template." },
  { question: 'How do we measure success?', answer: 'We define clear metrics on day one and track them throughout. ROI is measurable, not subjective.' },
  { question: 'Do you provide ongoing support after launch?', answer: 'Yes. We include post-launch support and can discuss extended retainers.' },
  { question: "What's the next step?", answer: "Book a discovery call above. We'll discuss your goals and timeline. No obligation." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <GradientOrbsBg variant="section" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let&rsquo;s Build Something That <span className="gradient-text">Ships</span></h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Every great project starts with a conversation. Book a 30-minute discovery call with our team.
          </p>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* Contact Form + Sidebar */}
      <Section decoration="waveform">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <div className="gradient-border-subtle">
              <div className="glass rounded-[calc(1rem-1px)] p-6 md:p-8 space-y-6">
                <h3 className="text-lg font-bold font-heading">What to expect</h3>
                {[
                  { icon: '&#9201;', text: 'Response within 24 hours' },
                  { icon: '&#128172;', text: 'No pressure. Just a conversation.' },
                  { icon: '&#9993;', text: 'Questions? Email Nathan@Symphonylabs.ai or Sean@Symphonylabs.ai' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-cyan text-lg" dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <p className="text-sm text-text-secondary">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-bg-tertiary" background="dots">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Trust Footer */}
      <Section>
        <div className="text-center">
          <p className="text-text-secondary mb-2">
            Still have questions?{' '}
            <a href="mailto:Nathan@Symphonylabs.ai" className="text-purple hover:text-purple-light transition-colors">Nathan@Symphonylabs.ai</a>
            {' '}&middot;{' '}
            <a href="mailto:Sean@Symphonylabs.ai" className="text-purple hover:text-purple-light transition-colors">Sean@Symphonylabs.ai</a>
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-text-tertiary hover:text-purple transition-colors">LinkedIn</a>
            <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-text-tertiary hover:text-purple transition-colors">Twitter</a>
          </div>
        </div>
      </Section>
    </>
  );
}
