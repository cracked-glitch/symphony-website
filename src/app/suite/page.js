import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';
import TrustBadge from '@/components/ui/TrustBadge';
import BuyButton from '@/components/checkout/BuyButton';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';
import { suiteProducts } from '@/lib/products';

export const metadata = {
  title: 'The Symphony Suite',
  description:
    'Pre-built prompt packs and AI tools that solve real work in minutes. Calibrated, tested, and ready to ship.',
};

function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function SuitePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <GradientOrbsBg variant="hero" />
        <WaveformBg variant="subtle" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-8">
              <TrustBadge text="Lifetime Access" />
              <TrustBadge text="No Subscription" />
              <TrustBadge text="14-Day Refund" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              The Symphony <span className="gradient-text">Suite</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4 max-w-2xl">
              Pre-built prompt packs that solve the work that eats your week. Calibrated,
              tested, and tuned to produce defensible drafts in minutes.
            </p>
            <p className="text-text-tertiary max-w-2xl">
              Same operator&rsquo;s logic as the free guides. Packaged so you can run, not study.
            </p>
          </div>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* Products */}
      <Section bg="bg-bg-tertiary" background="grid">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-semibold text-purple bg-purple/10 px-2.5 py-1 rounded-full">
            Available Now
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Packs</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {suiteProducts.map((p) => (
            <div key={p.slug} className="gradient-border">
              <div className="glass rounded-[calc(1rem-1px)] p-7 md:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-cyan bg-cyan/10 px-2.5 py-1 rounded-full">
                    {p.promptCount} Prompts
                  </span>
                  <span className="font-heading font-bold text-lg gradient-text">
                    {formatPrice(p.price, p.currency)}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{p.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {p.blurb}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="text-[11px] font-medium tracking-wide text-text-tertiary bg-bg-secondary px-2 py-1 rounded"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={`/suite/${p.slug}`} size="sm">
                    See What&rsquo;s Inside
                  </Button>
                  <BuyButton product={p} variant="ghost" size="sm">
                    Buy {formatPrice(p.price, p.currency)}
                  </BuyButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section decoration="nodes">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
          How a <span className="gradient-text">Pack</span> Works
        </h2>
        <p className="text-text-secondary mb-10 max-w-2xl">
          Every pack is built on the Symphony Framework: Role + Task + Context. Paste your
          inputs, run the prompt, ship the draft.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              n: '01',
              title: 'Buy',
              desc: 'Single-page checkout. No account. No subscription. Lifetime access.',
            },
            {
              n: '02',
              title: 'Download',
              desc: 'PDF for browsing plus individual prompt files for direct paste into Claude.',
            },
            {
              n: '03',
              title: 'Run',
              desc: 'Open the prompt for the task at hand. Replace the inline guidance with your specifics. Ship the draft.',
            },
          ].map((step) => (
            <div key={step.n} className="gradient-border-subtle">
              <div className="glass rounded-[calc(1rem-1px)] p-6 h-full">
                <div className="font-heading font-bold text-purple text-sm tracking-[2px] mb-3">
                  {step.n}
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Free guides bridge */}
      <Section bg="bg-bg-tertiary" decoration="waveform">
        <div className="max-w-3xl">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
            Start Free
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Read the free guides first.
          </h2>
          <p className="text-text-secondary mb-6">
            The free Symphony guides teach the framework every pack is built on. Read{' '}
            <Link href="/docs/prompting-guide" className="text-cyan hover:underline">
              The Art of the Prompt
            </Link>{' '}
            in fifteen minutes, then come back when you want the work already done.
          </p>
          <Button href="/docs" variant="ghost" size="md">
            Browse the Free Guides
          </Button>
        </div>
      </Section>

      <CTA
        heading="Building Something Custom?"
        subheading="Packs solve common work. We build the rest. Custom AI agents, automation, and workflow systems for your team."
        primaryLabel="Book a Discovery Call"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
