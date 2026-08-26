import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';
import FAQ from '@/components/ui/FAQ';
import TrustBadge from '@/components/ui/TrustBadge';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';
import {
  studioMeta,
  studioTiers,
  deliverables,
  pipeline,
  intakeRequirements,
  studioFaq,
} from '@/lib/studio';

export const metadata = {
  title: 'Symphony Studio',
  description:
    'Send us your raw footage. We cut it into vertical video, write the captions in your voice, and hand back files you can post today.',
};

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <GradientOrbsBg variant="hero" />
        <WaveformBg variant="subtle" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-8">
              <TrustBadge text="You Own the Output" />
              <TrustBadge text="Nothing Publishes Without You" />
              <TrustBadge text="No Subscription" />
            </div>
            <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-4">
              For Artists and Creators
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              One upload. <span className="gradient-text">A month of posts.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4 max-w-2xl">
              {studioMeta.blurb}
            </p>
            <p className="text-text-tertiary max-w-2xl mb-8">
              You already shot the footage. The work that stops you is cutting it, scoring it,
              and finding the words. That is the part we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/studio/order" size="lg">
                Start a Drop
              </Button>
              <Button href="#what-you-get" variant="ghost" size="lg">
                See What Ships
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* The problem */}
      <Section bg="bg-bg-tertiary" background="grid">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-5">
            An hour of footage is not a post.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Every gigging artist has the same archive: hours of raw video on a drive, a catalog
            of finished songs, and no time to turn one into the other. The footage is not the
            bottleneck. Cutting it to vertical, syncing it to the master, choosing the fifteen
            seconds that hold attention, and writing something that sounds like you: that is
            the bottleneck.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Symphony Studio takes the raw material and hands back finished posts. You stay the
            editor of record. We do the labor.
          </p>
        </div>
      </Section>

      {/* What you get */}
      <Section id="what-you-get" decoration="nodes">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-purple bg-purple/10 px-2.5 py-1 rounded-full">
            In Every Drop
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">What Ships</h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-2xl">
          Not one file to one spec. A set of options built from your own catalog, so you can
          test what lands before you commit your main account to it.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deliverables.map((d) => (
            <div key={d.title} className="gradient-border-subtle">
              <div className="glass rounded-[calc(1rem-1px)] p-6 h-full">
                <h3 className="text-base font-semibold font-heading mb-2">{d.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section bg="bg-bg-tertiary" decoration="waveform">
        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
          How a <span className="gradient-text">Drop</span> Works
        </h2>
        <p className="text-text-secondary mb-10 max-w-2xl">
          Four steps. You are involved in two of them.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pipeline.map((step) => (
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

      {/* What we need from you */}
      <Section decoration="rings">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              What we need from you
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Four things. A complete brief is the difference between a drop that lands and a
              drop that needs rebuilding.
            </p>
            <p className="text-text-tertiary text-sm leading-relaxed">
              We learned the master audio requirement the hard way. Our first client run
              shipped without it, and every note came back the same: sync it to the master.
            </p>
          </div>
          <div className="space-y-4">
            {intakeRequirements.map((req) => (
              <div key={req.label} className="gradient-border-subtle">
                <div className="glass rounded-[calc(1rem-1px)] p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold font-heading">{req.label}</h3>
                    {req.required && (
                      <span className="text-[11px] font-medium tracking-wide text-warning bg-warning/10 px-2 py-0.5 rounded">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" bg="bg-bg-tertiary" background="dots">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-purple bg-purple/10 px-2.5 py-1 rounded-full">
            Pay Per Drop
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading">Pricing</h2>
        </div>
        <p className="text-text-secondary mb-10 max-w-2xl">
          You pay when you have something to promote. No monthly fee sitting on your card
          between releases.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {studioTiers.map((tier) => (
            <div
              key={tier.id}
              className={tier.highlight ? 'gradient-border' : 'gradient-border-subtle'}
            >
              <div
                className={`glass rounded-[calc(1rem-1px)] p-7 flex flex-col h-full ${
                  tier.highlight ? 'glow-purple' : ''
                }`}
              >
                {tier.highlight && (
                  <span className="self-start text-[11px] font-semibold tracking-wide text-purple bg-purple/15 px-2.5 py-1 rounded-full mb-4">
                    Most Artists Start Here
                  </span>
                )}
                <h3 className="text-xl font-bold font-heading mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading font-bold text-3xl gradient-text">
                    {tier.price === null ? 'Custom' : formatPrice(tier.price)}
                  </span>
                  <span className="text-sm text-text-tertiary">{tier.unit}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {tier.summary}
                </p>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-text-secondary">
                      <span className="text-success shrink-0 mt-0.5">&#10003;</span>
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={
                    tier.id === 'catalog'
                      ? '/contact?topic=studio-catalog'
                      : `/studio/order?tier=${tier.id}`
                  }
                  variant={tier.highlight ? 'primary' : 'ghost'}
                  fullWidth
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-text-tertiary text-sm mt-8 max-w-2xl">
          Prices are indicative while we run our first cohort. We confirm the number with you
          before any work starts, and you are never charged automatically.
        </p>
      </Section>

      {/* FAQ */}
      <Section decoration="orbs">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Questions artists ask
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Still unsure whether your footage is workable? Send it over and we will tell you
              honestly before you pay anything.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="ghost" size="sm">
                Ask Us Directly
              </Button>
            </div>
          </div>
          <FAQ items={studioFaq} />
        </div>
      </Section>

      {/* Bridge to the rest of the site */}
      <Section bg="bg-bg-tertiary" decoration="waveform">
        <div className="max-w-3xl">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
            Not an Artist
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            The same engine, pointed at your work.
          </h2>
          <p className="text-text-secondary mb-6">
            Studio is one application of what we build: systems that take messy raw input and
            produce finished, on-voice output. If you want that pointed at your operation
            instead of your footage, start with{' '}
            <Link href="/services" className="text-cyan hover:underline">
              Services
            </Link>{' '}
            or the{' '}
            <Link href="/suite" className="text-cyan hover:underline">
              Symphony Suite
            </Link>
            .
          </p>
          <Button href="/services" variant="ghost" size="md">
            Explore Services
          </Button>
        </div>
      </Section>

      <CTA
        heading="Send Us an Hour of Footage"
        subheading="Start with one drop. If the output does not earn a post, you have lost one upload and nothing else."
        primaryLabel="Start a Drop"
        primaryHref="/studio/order"
        secondaryLabel="Talk to Us First"
        secondaryHref="/contact"
      />
    </>
  );
}
