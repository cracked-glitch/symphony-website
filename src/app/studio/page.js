import Link from 'next/link';
import StudioFAQ from '@/components/studio/StudioFAQ';
import StickyBook from '@/components/studio/StickyBook';
import ExampleClip from '@/components/studio/ExampleClip';
import ReelStrip from '@/components/studio/ReelStrip';
import WhoCuts from '@/components/studio/WhoCuts';
import {
  oneClip,
  wholeSet,
  wholeTour,
  comedySteps,
  exampleClip,
  showPack,
  threeShows,
  reel,
  tierHref,
  studioFaq,
} from '@/lib/studio';

export const metadata = {
  title: 'Studio: clips for stand-up comedians',
  description:
    'Send us the raw video of your set. For $50 we cut it into up to 15 captioned vertical clips for TikTok, Reels, and Shorts, back in 24 hours. Whole tour: $500.',
};

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

// One offer, said fast: send your set, get clips back, $50. The tour is the
// bigger version. Music, with real client edits, sits at the bottom.
export default function StudioPage() {
  const setHref = tierHref(wholeSet);
  const tourHref = tierHref(wholeTour);

  return (
    <>
      {/* ---------- Hero: the offer and the look ---------- */}
      <section className="st-spotlight">
        <div className="mx-auto max-w-[1100px] px-6 pt-10 pb-16 md:pt-16 md:pb-20 grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] items-center">
          <div>
            <p className="st-kicker mb-5">For stand-up comedians</p>
            <h1 className="st-display text-[clamp(2.5rem,6vw,4.4rem)] mb-6">
              Send us your set. Get back a <span className="st-gradient-text">stack of clips.</span>
            </h1>
            <p className="st-lede !text-[var(--st-bone)] max-w-xl mb-8">
              Send the raw video of one set. For {formatPrice(wholeSet.price)} we cut it into up to 15
              vertical clips with captions, ready for TikTok, Reels, and Shorts. Back in 24 hours.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a href={setHref} className="st-btn st-btn-primary" data-book-cta>
                Cut my set · {formatPrice(wholeSet.price)}
              </a>
              <a href={tourHref} className="st-btn st-btn-ghost">
                Whole tour · {formatPrice(wholeTour.price)}
              </a>
            </div>
            <p className="st-body text-[0.88rem] !text-[var(--st-dust)]">
              The clips are yours. Use them anywhere, as often as you want.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[280px]">
            <p className="st-kicker mb-3 text-center">This is the look</p>
            <ExampleClip clip={exampleClip} />
            <figcaption className="st-body text-[0.78rem] !text-[var(--st-dust)] mt-3 text-center leading-snug">
              {exampleClip.comic}&rsquo;s own clip from the {exampleClip.channel} channel, shown as a
              reference. Not our work, and not affiliated with us.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Pricing and steps ---------- */}
      <section id="pricing" className="scroll-mt-20 border-t border-[var(--st-line)] bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-20">
          <h2 className="st-display text-[clamp(2rem,4.4vw,3rem)] mb-8">
            One set or the <span className="st-gradient-text">whole tour.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {[wholeSet, wholeTour].map((tier) => (
              <PriceCard key={tier.id} tier={tier} />
            ))}
          </div>

          <p className="st-body text-[0.92rem] mt-5">
            Just one bit?{' '}
            <a href={tierHref(oneClip)} className="st-flare-text underline underline-offset-4">
              {formatPrice(oneClip.price)} a clip
            </a>
            . First order, the second one&rsquo;s free.
          </p>

          <ol className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl">
            {comedySteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="st-num">{i + 1}</span>
                <span className="st-body !text-[var(--st-bone)] text-[0.95rem] pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Who cuts your clips: a real person ---------- */}
      <WhoCuts />

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-[var(--st-line)]">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-20 grid lg:grid-cols-[1fr_1.7fr] gap-8 lg:gap-16">
          <div>
            <h2 className="st-display text-[clamp(2rem,4.4vw,3rem)] mb-4">Questions</h2>
            <p className="st-body">
              Email{' '}
              <a href="mailto:nathan@symphonylabs.ai" className="st-flare-text underline underline-offset-4">
                nathan@symphonylabs.ai
              </a>
              .
            </p>
          </div>
          <StudioFAQ items={studioFaq} />
        </div>
      </section>

      {/* ---------- Not a comedian: real music edits, then the other links ---------- */}
      <section id="more" className="scroll-mt-20 border-t border-[var(--st-line)] bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-16">
          <p className="st-kicker st-kicker-dim mb-3">Not a comedian?</p>
          <h2 className="st-display text-[clamp(1.8rem,4vw,2.6rem)] mb-3">
            We cut <span className="st-gradient-text">live music</span> too.
          </h2>
          <p className="st-body max-w-2xl mb-8">
            Real edits we made for DJ Chef and Brendan Abernathy from their live shows. We also cut
            sermons, podcasts, and talks into captioned clips.
          </p>

          <div className="mb-8">
            <ReelStrip clips={reel} />
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 st-body text-[0.92rem]">
            <li>
              <a href={tierHref(showPack)} className="st-flare-text underline underline-offset-4">
                Music: {showPack.name}, {formatPrice(showPack.price)}
              </a>
            </li>
            <li>
              <a href={tierHref(threeShows)} className="st-flare-text underline underline-offset-4">
                {threeShows.name}, {formatPrice(threeShows.price)}
              </a>
            </li>
            <li>
              <Link href="/studio/brendan" className="st-flare-text underline underline-offset-4">
                Watch Brendan&rsquo;s edits with sound
              </Link>
            </li>
            <li>
              <a
                href="mailto:nathan@symphonylabs.ai?subject=Studio%20quote"
                className="st-flare-text underline underline-offset-4"
              >
                Anything else: ask for a quote
              </a>
            </li>
          </ul>
        </div>
      </section>

      <StickyBook href={setHref} price={formatPrice(wholeSet.price)} detail="Up to 15 clips · 24 hours" label="Cut my set" />
    </>
  );
}

function PriceCard({ tier }) {
  const featured = tier.highlight;
  return (
    <div className={`st-stub p-7 md:p-8 flex flex-col ${featured ? 'st-stub-featured' : ''}`}>
      <h3 className="st-display text-[1.45rem] mb-4">{tier.name}</h3>

      <div className="flex items-baseline gap-2.5 mb-3">
        <span className="st-display text-[3rem] leading-none">{formatPrice(tier.price)}</span>
        <span className="st-kicker st-kicker-dim !tracking-[0.12em]">{tier.note}</span>
      </div>

      <p className="st-body text-[0.93rem] mb-5">{tier.summary}</p>

      <ul className="space-y-2.5 mb-7 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3">
            <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">
              &#10003;
            </span>
            <span className="st-body !text-[0.92rem]">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={tierHref(tier)}
        className={`st-btn w-full ${featured ? 'st-btn-primary' : 'st-btn-ghost'}`}
        data-book-cta
      >
        {tier.cta} · {formatPrice(tier.price)}
      </a>
    </div>
  );
}
