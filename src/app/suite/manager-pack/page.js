import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import TrustBadge from '@/components/ui/TrustBadge';
import FAQ from '@/components/ui/FAQ';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';
import SuiteCheckout from '@/components/checkout/SuiteCheckout';
import BuyButton from '@/components/checkout/BuyButton';
import { getProduct } from '@/lib/products';

export const metadata = {
  title: 'Symphony Manager Pack',
  description:
    'Fourteen ready-to-run prompts for the work that eats every people manager\'s week. Performance reviews, PIPs, 1:1s, and the hard conversations.',
};

const faqItems = [
  {
    question: 'How is this different from the free prompting guide?',
    answer:
      'The free guide teaches you the framework. The pack is the work already done. Fourteen complete prompts, calibrated through real review cycles, ready to paste into Claude.',
  },
  {
    question: 'Will the prompts work in ChatGPT or Gemini?',
    answer:
      'They are tuned and tested in Claude. Most will produce usable output in other models, but the locked word-count behavior, refusal-to-fabricate language, and SBI structure are calibrated for Claude. Use Claude for the strongest results.',
  },
  {
    question: 'Can I share the pack with my team?',
    answer:
      'A purchase covers a single seat. The license terms are in the LICENSE.md file inside the pack. Multi-seat team licenses are available. Email nathan@symphonylabs.ai if you need one.',
  },
  {
    question: 'What if I lose my download?',
    answer:
      'The receipt email Lemon Squeezy sends at purchase contains a permanent download link and your license key. The link does not expire. If you lose the email, the customer portal at app.lemonsqueezy.com/my-orders sends you a magic link by email and lists every purchase. Detailed steps are at /suite/redownload.',
  },
  {
    question: 'Do prompt updates cost extra?',
    answer:
      'No. Minor version updates ship free to all purchasers. We email you when a new version is out.',
  },
  {
    question: 'What if it does not produce the output I want?',
    answer:
      'Every prompt file ships with a "How to iterate" section. Output quality is capped by input specificity. Most underwhelming first runs are fixed by tightening the Context, not changing the prompt. If you are still stuck, email us.',
  },
  {
    question: 'Refund policy?',
    answer:
      'Fourteen days, no questions. Email nathan@symphonylabs.ai with your order number.',
  },
];

const outputBadgeStyles = {
  'locked-range':
    'text-purple bg-purple/10 border border-purple/20',
  guideline:
    'text-cyan bg-cyan/10 border border-cyan/20',
};

const outputBadgeLabels = {
  'locked-range': 'Locked range',
  guideline: 'Guideline',
};

export default function ManagerPackPage() {
  const product = getProduct('manager-pack');
  if (!product) notFound();

  const cart = [
    {
      variantId: product.variantId,
      checkoutUrl: product.checkoutUrl,
      name: product.name,
      price: product.price,
      currency: product.currency,
      license: product.license,
      format: product.format,
      downloadEndpoint: product.downloadEndpoint,
    },
  ];

  const promptsByNumber = Object.fromEntries(product.prompts.map((p) => [p.number, p]));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-noise">
        <GradientOrbsBg variant="hero" />
        <WaveformBg variant="subtle" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <Link
            href="/suite"
            className="inline-flex items-center gap-1 text-sm text-text-tertiary hover:text-cyan transition-colors mb-6"
          >
            &larr; The Suite
          </Link>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <TrustBadge text={`${product.promptCount} Prompts`} />
                <TrustBadge text="Tested on Real Work" />
                <TrustBadge text="Lifetime Updates" />
              </div>
              <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
                Symphony Suite &middot; Manager Pack
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-5">
                Stop drafting from scratch. <br className="hidden md:inline" />
                <span className="gradient-text">Ship the work.</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-5">
                {product.tagline}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {product.blurb}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#whats-inside" size="md">
                  See What&rsquo;s Inside
                </Button>
                <BuyButton product={product} variant="ghost" size="md">
                  Buy ${product.price}
                </BuyButton>
              </div>
              <p className="text-xs text-text-tertiary mt-6">
                Built on the framework taught in{' '}
                <Link
                  href="/docs/prompting-guide"
                  className="text-cyan hover:underline"
                >
                  The Art of the Prompt
                </Link>
                . Read the free guide first if you want to understand how each prompt works.
              </p>
            </div>

            <div id="checkout" className="lg:sticky lg:top-24">
              <SuiteCheckout cart={cart} />
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* What's inside */}
      <Section id="whats-inside" bg="bg-bg-tertiary" background="grid">
        <div className="max-w-3xl mb-10">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
            What&rsquo;s Inside
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Fourteen prompts, grouped by the work they replace
          </h2>
          <p className="text-text-secondary">
            Each prompt is a complete solution. Open the file, paste your context, run it.
            The output lands in minutes, not the hour or two it would take from scratch.
          </p>
        </div>

        <div className="space-y-10">
          {product.groupings.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-lg md:text-xl font-bold font-heading">
                  {group.title}
                </h3>
                <span className="text-xs text-text-tertiary">
                  {group.prompts.length} prompts
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {group.prompts.map((num) => {
                  const p = promptsByNumber[num];
                  if (!p) return null;
                  return (
                    <div key={num} className="gradient-border-subtle">
                      <div className="glass rounded-[calc(1rem-1px)] p-5 h-full">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-heading text-xs text-text-tertiary tracking-wider">
                              {String(p.number).padStart(2, '0')}
                            </span>
                            <h4 className="font-heading font-semibold text-base leading-snug">
                              {p.title}
                            </h4>
                          </div>
                          <span
                            className={`shrink-0 text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded ${
                              outputBadgeStyles[p.outputType]
                            }`}
                          >
                            {outputBadgeLabels[p.outputType]}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed mb-2">
                          {p.whatItDoes}
                        </p>
                        <p className="text-xs text-text-tertiary leading-relaxed">
                          <span className="font-semibold text-text-secondary">When:</span>{' '}
                          {p.whenToUse}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-bg-secondary p-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-2">
            Two output conventions
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            <span className="text-purple font-semibold">Locked range</span> prompts
            (reviews, PIPs, promotion cases, departure comms) hit explicit word counts so the
            output stands up in HR, legal, and committee review.{' '}
            <span className="text-cyan font-semibold">Guideline</span> prompts for 1:1s,
            standups, blockers, and peer feedback match output length to input length. A light
            week produces a shorter agenda. That is the right behavior.
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section decoration="nodes">
        <div className="max-w-3xl mb-10">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
            How to Use a Prompt
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Three steps. Every time.
          </h2>
          <p className="text-text-secondary">
            Every prompt follows the same flow. There is no learning curve. Open, paste, ship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              n: '01',
              title: 'Open the file',
              desc: 'Browse the PDF for the prompt that fits the task. Read the "What this prompt does" and "When to use it" sections.',
            },
            {
              n: '02',
              title: 'Paste into Claude',
              desc: 'Copy the prompt block. Paste into Claude. Replace the inline guidance text inside each XML tag with your specifics.',
            },
            {
              n: '03',
              title: 'Run and ship',
              desc: 'Hit run. Output lands in seconds. If a section needs a nudge, the "How to iterate" block shows the one-line fix.',
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

        <div className="mt-10 rounded-xl bg-bg-secondary p-6 max-w-3xl border-l-4 border-warning">
          <p className="text-sm text-text-secondary leading-relaxed">
            <span className="text-warning font-semibold">Common pitfall.</span> Output quality
            is capped by input specificity. Pasting &ldquo;Led the pricing project&rdquo;
            guarantees a generic review. Pasting &ldquo;Led the Q2 pricing project, shipped on
            time despite two engineer departures, lifted ACV 18% on renewals worth $340K
            ARR&rdquo; produces a review that earns the rating.
          </p>
        </div>
      </Section>

      {/* Pack details */}
      <Section bg="bg-bg-tertiary" decoration="waveform">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
              The Pack
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              What you actually receive
            </h2>
            <p className="text-text-secondary mb-6">
              A single zip containing the polished PDF for browsing on any device, plus the
              fourteen individual prompt files for direct copy-paste into Claude. Plus the
              license, a changelog, and a short README on how the pack is structured.
            </p>
            <div className="rounded-xl bg-bg-secondary p-5 font-mono text-xs text-text-secondary leading-relaxed">
              Symphony_Manager_Pack/<br />
              &nbsp;&nbsp;README.md<br />
              &nbsp;&nbsp;LICENSE.md<br />
              &nbsp;&nbsp;CHANGELOG.md<br />
              &nbsp;&nbsp;Symphony_Manager_Pack.pdf<br />
              &nbsp;&nbsp;prompts/<br />
              &nbsp;&nbsp;&nbsp;&nbsp;01_annual_review_senior.md<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&hellip; through 14_departure_communication.md
            </div>
          </div>

          <div className="gradient-border">
            <div className="glass rounded-[calc(1rem-1px)] p-7">
              <h3 className="font-heading font-bold text-lg mb-4">Pack details</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Prompts', `${product.promptCount} complete prompts`],
                  ['Format', product.format],
                  ['Framework', 'Role + Task + Context'],
                  ['Tested with', 'Claude (Sonnet, Opus)'],
                  ['License', product.license],
                  ['Updates', 'Lifetime, free, emailed when shipped'],
                  ['Support', 'nathan@symphonylabs.ai · 2 business days'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-border/30 pb-3 last:border-0 last:pb-0">
                    <dt className="text-text-tertiary">{label}</dt>
                    <dd className="text-text-secondary text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section decoration="orbs">
        <div className="max-w-3xl mb-8">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
            Questions
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Common <span className="gradient-text">questions</span>
          </h2>
        </div>
        <FAQ items={faqItems} />
      </Section>

      {/* Final purchase */}
      <Section bg="bg-bg-tertiary" decoration="rings">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            One purchase. <span className="gradient-text">Lifetime use.</span>
          </h2>
          <p className="text-text-secondary">
            Fifty-nine dollars to never draft a review, PIP, or 1:1 agenda from scratch again.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <SuiteCheckout cart={cart} />
        </div>
      </Section>
    </>
  );
}
