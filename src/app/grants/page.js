import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import FAQ from '@/components/ui/FAQ';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';

export const metadata = {
  title: 'Grant Desk: grant applications drafted for your nonprofit',
  description:
    'We draft your next grant application. First section free. $750 flat for a finished application you approve and submit.',
  alternates: { canonical: '/grants' },
};

const mail = (subject) => `mailto:nathan@symphonylabs.ai?subject=${encodeURIComponent(subject)}`;

// Stripe Payment Links. While one is empty, its button opens an order email instead.
const PAY_APPLICATION = '';
const PAY_MONTHLY = '';

const plans = [
  {
    name: 'First section',
    price: 'Free',
    line: 'Back in 2 business days.',
    cta: 'Get it free',
    href: mail('Grant Desk: first section'),
  },
  {
    name: 'Finished application',
    price: '$750',
    line: 'Ready to submit in 5 business days.',
    cta: PAY_APPLICATION ? 'Buy for $750' : 'Order for $750',
    href: PAY_APPLICATION || mail('Grant Desk: finished application, $750'),
    featured: true,
  },
  {
    name: 'Grant desk',
    price: '$2,000',
    per: ' a month',
    line: 'Up to 3 applications a month. Cancel any month.',
    cta: PAY_MONTHLY ? 'Start monthly' : 'Order monthly',
    href: PAY_MONTHLY || mail('Grant Desk: monthly, $2,000'),
  },
];

const steps = [
  { step: '1', title: 'Send the grant', desc: 'Email us the funder’s guidelines.' },
  { step: '2', title: 'Read the first section', desc: 'Free, in 2 business days.' },
  { step: '3', title: 'Approve and submit', desc: 'Full draft in 5 business days. You submit it.' },
];

const faqs = [
  {
    question: 'Who writes it?',
    answer: 'AI drafts from your materials. A person checks every page against the funder’s rules.',
  },
  {
    question: 'Do funders allow AI?',
    answer: 'Most do. We read the funder’s policy first and tell you what it says.',
  },
  {
    question: 'Do you take a cut of the award?',
    answer: 'No. The price is flat, win or lose.',
  },
  {
    question: 'Can you promise a win?',
    answer: 'No. We promise a complete application that follows the rules, on time.',
  },
];

export default function GrantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-noise">
        <WaveformBg variant="subtle" />
        <GradientOrbsBg variant="section" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <div className="glass-subtle inline-block rounded-full text-cyan text-xs font-semibold px-3 py-1 mb-6">
            Grant Desk &middot; For nonprofits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-5 max-w-3xl mx-auto">
            Your next grant application, <span className="gradient-text">drafted this week</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            First section free. Finished application $750 flat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={plans[0].href} size="lg">Get the first section free</Button>
            <Button href={plans[1].href} variant="ghost" size="lg">{plans[1].cta}</Button>
          </div>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* Pricing */}
      <Section id="pricing" decoration="waveform">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} hover={false} glow={plan.featured}>
              <div className="flex h-full flex-col text-center">
                <h2 className="text-lg font-bold font-heading mb-2">{plan.name}</h2>
                <p className="font-heading font-bold text-4xl gradient-text mb-2">
                  {plan.price}
                  {plan.per && <span className="text-base text-text-tertiary font-medium">{plan.per}</span>}
                </p>
                <p className="text-sm text-text-secondary mb-6">{plan.line}</p>
                <div className="mt-auto">
                  <Button href={plan.href} size="lg" fullWidth variant={plan.featured ? 'primary' : 'secondary'}>
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-center text-xs text-text-tertiary mt-6">
          Flat price. Never a share of the award.
        </p>
      </Section>

      {/* How it works */}
      <Section bg="bg-bg-tertiary" background="dots">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple to-indigo text-white font-bold text-sm mb-3">
                {item.step}
              </div>
              <h3 className="text-lg font-bold font-heading mb-1">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section background="grid">
        <div className="max-w-2xl mx-auto">
          <FAQ items={faqs} />
          <div className="text-center mt-10">
            <Button href={plans[0].href} size="lg">Get the first section free</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
