import Link from 'next/link';
import StudioFAQ from '@/components/studio/StudioFAQ';
import StickyBook from '@/components/studio/StickyBook';
import ExampleClip from '@/components/studio/ExampleClip';
import ClientClip from '@/components/studio/ClientClip';
import ReelStrip from '@/components/studio/ReelStrip';
import PriceCard from '@/components/studio/PriceCard';
import WhoCuts from '@/components/studio/WhoCuts';
import {
  oneClip,
  wholeSet,
  wholeTour,
  comedySteps,
  exampleClip,
  clientSpotlight,
  showPack,
  threeShows,
  reel,
  tierHref,
  studioFaq,
} from '@/lib/studio';

export const metadata = {
  title: 'Studio: clips for stand-up comedians',
  description:
    'Send us the raw video of your set. For $99 we cut it into up to 15 captioned vertical clips for TikTok, Reels, and Shorts, back in 24 hours. Whole tour: $500.',
};

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

// One offer, said fast: send your set, get clips back, $99. The tour is the
// bigger version. Music, with real client edits, sits at the bottom.
export default function StudioPage() {
  const setHref = tierHref(wholeSet);
  const tourHref = tierHref(wholeTour);

  return (
    <>
      {/* ---------- Hero: the offer and the look ---------- */}
      <section className="st-spotlight">
        <div className="mx-auto max-w-[1100px] px-6 pt-10 pb-16 md:pt-16 md:pb-20 grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
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

          {/* Side by side, on phones too: Scott (our real work) first, then the Nate Bargatze reference. */}
          <div className="mx-auto w-full max-w-[480px] grid grid-cols-2 gap-3 sm:gap-4 items-start">
            {clientSpotlight.clips.slice(0, 1).map((clip) => (
              <figure key={clip.src}>
                <p className="st-kicker mb-3 text-center">My work</p>
                <ClientClip clip={clip} who={clientSpotlight.name} />
                <figcaption className="st-body text-[0.74rem] !text-[var(--st-dust)] mt-3 text-center leading-snug">
                  Cut by me from {clientSpotlight.name}&rsquo;s set at {clientSpotlight.where}. Shown with his OK.
                </figcaption>
              </figure>
            ))}
            <figure>
              <p className="st-kicker mb-3 text-center">The look</p>
              <ExampleClip clip={exampleClip} />
              <figcaption className="st-body text-[0.74rem] !text-[var(--st-dust)] mt-3 text-center leading-snug">
                {exampleClip.comic}&rsquo;s own clip from his {exampleClip.channel} channel, as a reference. Not
                our work, not affiliated.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Scott's quote and a thank-you shout-out (his clip is in the hero) ---------- */}
      <section id="work" className="scroll-mt-20 border-t border-[var(--st-line)]">
        <div className="mx-auto max-w-[1100px] px-6 py-12 md:py-16 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] items-end">
          <blockquote>
            <p className="st-kicker mb-4">From my first client</p>
            <p className="st-display text-[clamp(1.5rem,3.4vw,2.2rem)] leading-tight mb-5">
              &ldquo;{clientSpotlight.quote}&rdquo;
            </p>
            <footer className="st-kicker st-kicker-dim !tracking-[0.12em]">
              {clientSpotlight.name} · {clientSpotlight.role}
            </footer>
          </blockquote>
          <div>
            <p className="st-body !text-[var(--st-bone)]">
              Scott was the first comic to send me a full set. I cut it into 21 clips. He&rsquo;s funny, so go follow
              him and catch him live.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 st-body text-[0.95rem] mt-4">
              <li>
                <a
                  href={`https://www.instagram.com/${clientSpotlight.instagram}/`}
                  target="_blank"
                  rel="noopener"
                  className="st-flare-text underline underline-offset-4"
                >
                  @{clientSpotlight.instagram} on Instagram
                </a>
              </li>
              <li>
                Book Scott:{' '}
                <a href={`mailto:${clientSpotlight.email}`} className="st-flare-text underline underline-offset-4">
                  {clientSpotlight.email}
                </a>
              </li>
            </ul>
          </div>
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
            . New here?{' '}
            <Link href="/studio/try" className="st-flare-text underline underline-offset-4">
              Your first order is 2 clips for $5
            </Link>
            , one time only.
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
