import Link from 'next/link';
import StudioFAQ from '@/components/studio/StudioFAQ';
import ReelStrip from '@/components/studio/ReelStrip';
import StickyBook from '@/components/studio/StickyBook';
import {
  studioMeta,
  studioTiers,
  showPack,
  tierHref,
  reel,
  howItWorks,
  studioFaq,
} from '@/lib/studio';

export const metadata = {
  title: 'Studio',
  description:
    'Send us the footage from one show. Within a day, you get 6 vertical edits cut to your songs, ready for TikTok and Reels. $199 per show.',
};

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

// The page runs in one line: show the work, say what it is, price it, book it.
// Everything a buyer has to read before the button stays under ~60 words.
export default function StudioPage() {
  const bookHref = tierHref(showPack);
  const buyable = studioTiers.filter((t) => t.price !== null);
  const roster = studioTiers.find((t) => t.id === 'catalog');

  return (
    <>
      {/* ---------- Hero: the reel leads, the pitch and button sit beside it ---------- */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 pt-8 pb-14 md:pt-12 md:pb-20 grid gap-x-12 gap-y-6 grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] [grid-template-areas:'head''reel''copy'] md:[grid-template-areas:'head_copy''reel_reel']">
          <div className="[grid-area:head]">
            <p className="st-kicker mb-3">For musicians who play live</p>
            <h1 className="st-display text-[clamp(2.7rem,7.5vw,6rem)]">
              Your show, cut for <span className="st-flare-text">TikTok</span>.
            </h1>
          </div>

          <div className="[grid-area:copy] md:self-end">
            <p className="st-body text-[1.02rem] !text-[var(--st-bone)] mb-5 max-w-md">
              {studioMeta.blurb}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href={bookHref} className="st-btn st-btn-primary" data-book-cta>
                Book my show · {formatPrice(showPack.price)}
              </Link>
              <Link href="#pricing" className="st-kicker st-kicker-dim hover:text-[var(--st-flare)] transition-colors">
                What&rsquo;s included
              </Link>
            </div>
          </div>

          <div className="[grid-area:reel] min-w-0 md:mt-4">
            <ReelStrip clips={reel} />
          </div>
        </div>
      </section>

      {/* ---------- Pricing, with the three steps folded in above it ---------- */}
      <section id="pricing" className="scroll-mt-20 bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
          <h2 className="st-display text-[clamp(2.2rem,5.5vw,4rem)] mb-8">
            One show. <span className="st-flare-text">Six posts.</span>
          </h2>

          <ol className="grid sm:grid-cols-3 gap-6 mb-12">
            {howItWorks.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="st-display text-[1.6rem] text-[rgba(255,59,31,0.7)] leading-none">{s.n}</span>
                <span>
                  <span className="st-display text-[1.3rem] block mb-1">{s.title}</span>
                  <span className="st-body text-[0.92rem]">{s.desc}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
            {buyable.map((tier) => {
              const featured = tier.highlight;
              return (
                <div
                  key={tier.id}
                  className={`st-stub p-7 md:p-8 flex flex-col ${featured ? 'st-stub-featured' : ''}`}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3 className="st-display text-[1.7rem]">{tier.name}</h3>
                    {featured && <span className="st-kicker !text-[0.62rem]">Most start here</span>}
                  </div>

                  <div className="flex items-baseline gap-2.5 mb-3">
                    <span className="st-display text-[3.2rem] leading-none">{formatPrice(tier.price)}</span>
                    <span className={`st-kicker !tracking-[0.14em] ${featured ? '' : 'st-kicker-dim'}`}>
                      {tier.note || tier.unit}
                    </span>
                  </div>

                  <p className="st-body text-[0.93rem] mb-5">{tier.summary}</p>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span className="st-flare-text shrink-0 leading-6">&#10003;</span>
                        <span className="st-body !text-[0.92rem]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tierHref(tier)}
                    className={`st-btn w-full ${featured ? 'st-btn-primary' : 'st-btn-ghost'}`}
                    data-book-cta
                  >
                    {tier.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="st-body text-[0.92rem] mt-7 max-w-2xl">
            Pay once per show, no subscription.{' '}
            <span className="!text-[var(--st-bone)]">Manage a roster or run a venue?</span>{' '}
            <Link href={tierHref(roster)} className="st-flare-text underline underline-offset-4">
              Talk to us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------- FAQ: the five questions that stop a booking ---------- */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-20">
            <div>
              <p className="st-kicker mb-4">Questions</p>
              <h2 className="st-display text-[clamp(2.2rem,5vw,3.6rem)] mb-5">Before you book</h2>
              <p className="st-body">
                Anything else?{' '}
                <Link href="/contact" className="st-flare-text underline underline-offset-4">
                  Ask us directly
                </Link>
                .
              </p>
            </div>
            <StudioFAQ items={studioFaq} />
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="st-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-24 text-center">
          <h2 className="st-display text-[clamp(2.6rem,8vw,6rem)] mb-5">
            Got a show <span className="st-flare-text">coming up?</span>
          </h2>
          <p className="st-lede !text-[#2A251E] max-w-xl mx-auto mb-8">
            Get someone to film it on a phone. We&rsquo;ll do the rest.
          </p>
          <Link href={bookHref} className="st-btn st-btn-primary" data-book-cta>
            Book my show · {formatPrice(showPack.price)}
          </Link>
        </div>
      </section>

      <StickyBook href={bookHref} price={formatPrice(showPack.price)} />
    </>
  );
}
