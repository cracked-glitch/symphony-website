import Link from 'next/link';
import StudioFAQ from '@/components/studio/StudioFAQ';
import ReelStrip from '@/components/studio/ReelStrip';
import StickyBook from '@/components/studio/StickyBook';
import CaptionDemo from '@/components/studio/CaptionDemo';
import {
  comedyTiers,
  wholeSet,
  wholeTour,
  comedyHowItWorks,
  comedyPromises,
  comedyExamples,
  otherUses,
  studioTiers,
  showPack,
  tierHref,
  reel,
  studioFaq,
} from '@/lib/studio';

export const metadata = {
  title: 'Studio: clips for comedians',
  description:
    'Send us one set. Get up to 15 captioned vertical clips for Reels, TikTok, and Shorts, back within 24 hours. $50 a set. Music and other clips too.',
};

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

// Most visitors arrive from a comedy cold email (the link is in its signature),
// so the page answers that email in order: what it is, the free clip they got,
// how it works, how we treat a set, price. Music and everything else follow.
export default function StudioPage() {
  const setHref = tierHref(wholeSet);
  const tourHref = tierHref(wholeTour);
  const musicTiers = studioTiers.filter((t) => t.price !== null);
  const roster = studioTiers.find((t) => t.id === 'catalog');

  return (
    <>
      {/* ---------- Hero: comedians first ---------- */}
      <section id="comedy" className="st-spotlight scroll-mt-20">
        <div className="mx-auto max-w-[1180px] px-6 pt-12 pb-16 md:pt-20 md:pb-24 grid gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] items-center">
          <div>
            <p className="st-kicker mb-4">Symphony Studio · Clips for stand-up comedians</p>
            <h1 className="st-display text-[clamp(2.6rem,6.4vw,4.9rem)] mb-6">
              Your set, cut into <span className="st-gradient-text">clips</span>.
            </h1>
            <p className="st-lede !text-[var(--st-bone)] max-w-xl mb-8">
              Send us one set. Get up to 15 captioned vertical clips for Reels, TikTok, and Shorts.
              The first ones come back the same day, the rest within 24 hours.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <a href={setHref} className="st-btn st-btn-primary" data-book-cta>
                Cut my set · {formatPrice(wholeSet.price)}
              </a>
              <a href={tourHref} className="st-btn st-btn-ghost">
                On tour? 20 shows for {formatPrice(wholeTour.price)}
              </a>
            </div>
            <p className="st-body text-[0.88rem] !text-[var(--st-dust)]">
              Changes included. No subscription. Musicians and everyone else,{' '}
              <Link href="#music" className="underline underline-offset-4 hover:text-[var(--st-bone)]">
                scroll down
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto w-full max-w-[290px]">
            <CaptionDemo />
            <p className="st-kicker st-kicker-dim !text-[0.62rem] !tracking-[0.14em] text-center mt-4">
              The caption style · up to 3 words a card
            </p>
          </div>
        </div>
      </section>

      {/* ---------- For comics arriving from the email ---------- */}
      <section className="border-y border-[var(--st-line)] bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1180px] px-6 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <div className="flex-1">
            <p className="st-kicker mb-2">Got a free clip from Nathan?</p>
            <p className="st-body !text-[var(--st-bone)] text-[1.05rem] max-w-2xl">
              That clip&rsquo;s yours. Post it or don&rsquo;t. Want the rest of the set done the same
              way? It&rsquo;s {formatPrice(wholeSet.price)} for up to 15 clips, and we already have
              your footage.
            </p>
          </div>
          <a href={setHref} className="st-btn st-btn-primary shrink-0" data-book-cta>
            Cut the rest · {formatPrice(wholeSet.price)}
          </a>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-10 max-w-2xl">
            Three steps. <span className="st-flare-text">About a minute of your time.</span>
          </h2>
          <ol className="grid md:grid-cols-3 gap-5">
            {comedyHowItWorks.map((s) => (
              <li key={s.n} className="st-panel p-6 md:p-7">
                <span className="st-num mb-5">{s.n}</span>
                <h3 className="st-display text-[1.35rem] mt-4 mb-2">{s.title}</h3>
                <p className="st-body text-[0.95rem]">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Proof and how we treat a set ---------- */}
      <section className="bg-[var(--st-ink-2)] border-y border-[var(--st-line)]">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          {comedyExamples.length > 0 ? (
            <div className="mb-16">
              <p className="st-kicker mb-3">Comedy clips we&rsquo;ve cut · tap for sound</p>
              <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-8">Real sets, real rooms.</h2>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {comedyExamples.map((c) => (
                  <li key={c.src}>
                    <video
                      className="st-reel-video"
                      src={`/studio/comedy/${c.src}.mp4`}
                      poster={`/studio/comedy/${c.src}.jpg`}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`${c.bit}, a clip for ${c.comic}`}
                    />
                    <p className="mt-2 leading-tight">
                      <span className="st-kicker !text-[0.66rem] !tracking-[0.12em] block">{c.comic}</span>
                      <span className="st-kicker st-kicker-dim !text-[0.62rem] !tracking-[0.12em]">{c.where}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="st-panel p-7 md:p-10 mb-16 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
              <div className="flex md:flex-col gap-8 md:gap-5">
                <p>
                  <span className="st-display text-[2.8rem] block leading-none st-gradient-text">21</span>
                  <span className="st-kicker st-kicker-dim !text-[0.62rem]">minute club set</span>
                </p>
                <p>
                  <span className="st-display text-[2.8rem] block leading-none st-gradient-text">90</span>
                  <span className="st-kicker st-kicker-dim !text-[0.62rem]">minutes to first clips</span>
                </p>
              </div>
              <div>
                <p className="st-kicker mb-3">Our first comedy order</p>
                <p className="st-body !text-[var(--st-bone)] text-[1.05rem] max-w-2xl mb-3">
                  A working comic sent a 21-minute club set from Atlanta. The first three clips were
                  in their folder about 90 minutes after the files landed. They asked for one change, we
                  made it, and they told us to keep going.
                </p>
                <p className="st-body text-[0.9rem]">
                  We don&rsquo;t post anyone&rsquo;s set here without their OK, so there are no client
                  clips on this page yet. If we sent you a free clip, that&rsquo;s the real sample:
                  it&rsquo;s cut from your own set.
                </p>
              </div>
            </div>
          )}

          <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-10 max-w-2xl">
            How we treat <span className="st-flare-text">your set.</span>
          </h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {comedyPromises.map((p) => (
              <li key={p.title} className="st-panel p-6 md:p-7">
                <h3 className="st-display text-[1.25rem] mb-2">{p.title}</h3>
                <p className="st-body text-[0.95rem]">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Comedy pricing ---------- */}
      <section id="pricing" className="scroll-mt-20">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <p className="st-kicker mb-3">Comedy pricing</p>
          <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-10">
            One set or the <span className="st-gradient-text">whole tour.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {comedyTiers.map((tier) => (
              <PriceCard key={tier.id} tier={tier} badge={tier.highlight ? 'Most comics start here' : null} />
            ))}
          </div>

          <p className="st-body text-[0.92rem] mt-7 max-w-2xl">
            Pay once, no subscription. After checkout, a one-minute form asks for your set.
          </p>
        </div>
      </section>

      {/* ---------- Musicians ---------- */}
      <section id="music" className="scroll-mt-20 bg-[var(--st-ink-2)] border-y border-[var(--st-line)]">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-end mb-10">
            <div>
              <p className="st-kicker mb-3">For musicians who play live</p>
              <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-4">
                Your show, cut to <span className="st-flare-text">your songs.</span>
              </h2>
              <p className="st-body max-w-xl">
                Send the footage from one show, phone clips included. Within a day you get 6
                vertical edits cut to your songs, with hooks and a posting plan.
              </p>
            </div>
            <Link href="/studio/brendan" className="st-btn st-btn-ghost">
              See Brendan&rsquo;s edits with sound
            </Link>
          </div>

          <div className="mb-12">
            <ReelStrip clips={reel} />
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {musicTiers.map((tier) => (
              <PriceCard key={tier.id} tier={tier} badge={tier.highlight ? 'Most artists start here' : null} />
            ))}
          </div>

          <p className="st-body text-[0.92rem] mt-7 max-w-2xl">
            <span className="!text-[var(--st-bone)]">Manage a roster or run a venue?</span>{' '}
            <Link href={tierHref(roster)} className="st-flare-text underline underline-offset-4">
              Talk to us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------- Everyone else ---------- */}
      <section id="more" className="scroll-mt-20">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 items-center">
          <div>
            <p className="st-kicker mb-3">And anyone else with a mic</p>
            <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-4">
              If it&rsquo;s filmed, <span className="st-flare-text">we can clip it.</span>
            </h2>
            <p className="st-body max-w-xl mb-7">
              Churches, podcasters, speakers, and event teams send us video the same way comics do.
              You get vertical clips with captions, sized for every platform. One event or service
              is {formatPrice(showPack.price)}.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={tierHref(showPack)} className="st-btn st-btn-primary" data-book-cta>
                Book one event · {formatPrice(showPack.price)}
              </a>
              <a href="mailto:nathan@symphonylabs.ai?subject=Studio%20quote" className="st-btn st-btn-ghost">
                Ask for a quote
              </a>
            </div>
          </div>
          <ul className="flex flex-wrap gap-3 md:justify-end">
            {otherUses.map((u) => (
              <li key={u} className="st-chip !cursor-default">
                {u}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-20 border-t border-[var(--st-line)]">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-20">
            <div>
              <p className="st-kicker mb-4">Questions</p>
              <h2 className="st-display text-[clamp(2rem,4.6vw,3.3rem)] mb-5">Before you check out</h2>
              <p className="st-body">
                Anything else? Email{' '}
                <a href="mailto:nathan@symphonylabs.ai" className="st-flare-text underline underline-offset-4">
                  nathan@symphonylabs.ai
                </a>{' '}
                and you&rsquo;ll hear back from Nathan.
              </p>
            </div>
            <StudioFAQ items={studioFaq} />
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="st-paper">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24 text-center">
          <h2 className="st-display text-[clamp(2.3rem,6.4vw,4.6rem)] mb-5">
            Got a set on YouTube? <span className="st-gradient-text">Send the link.</span>
          </h2>
          <p className="st-lede max-w-xl mx-auto mb-8">
            We&rsquo;ll find the bits that land and send them back captioned and ready to post.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={setHref} className="st-btn st-btn-primary" data-book-cta>
              Cut my set · {formatPrice(wholeSet.price)}
            </a>
            <a href={tourHref} className="st-btn st-btn-ghost">
              Whole Tour · {formatPrice(wholeTour.price)}
            </a>
          </div>
        </div>
      </section>

      <StickyBook href={setHref} price={formatPrice(wholeSet.price)} detail="Up to 15 clips · 24 hours" label="Cut my set" />
    </>
  );
}

function PriceCard({ tier, badge }) {
  const featured = tier.highlight;
  return (
    <div className={`st-stub p-7 md:p-8 flex flex-col ${featured ? 'st-stub-featured' : ''}`}>
      <div className={badge ? 'mb-3 md:min-h-[1.6rem]' : 'hidden md:block md:mb-3 md:min-h-[1.6rem]'}>
        {badge && (
          <span className="st-kicker !text-[0.6rem] !tracking-[0.12em] inline-block rounded-full border border-[rgba(139,92,246,0.5)] px-2.5 py-1">
            {badge}
          </span>
        )}
      </div>
      <h3 className="st-display text-[1.45rem] mb-4">{tier.name}</h3>

      <div className="flex items-baseline gap-2.5 mb-3">
        <span className="st-display text-[3rem] leading-none">{formatPrice(tier.price)}</span>
        <span className="st-kicker st-kicker-dim !tracking-[0.12em]">{tier.note || tier.unit}</span>
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
