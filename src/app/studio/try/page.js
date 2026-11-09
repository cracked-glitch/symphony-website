import Link from 'next/link';
import WhoCuts from '@/components/studio/WhoCuts';
import PriceCard from '@/components/studio/PriceCard';
import StickyBook from '@/components/studio/StickyBook';
import { trialCheckoutHref, setCheckoutHref, oneClip, wholeSet } from '@/lib/studio';

export const metadata = {
  title: 'First order: 2 clips for $5 · Studio',
  description:
    'For stand-up comedians: your first order is two captioned vertical clips from your set for $5, back the same day. Or get your whole set cut for $99, up to 15 clips.',
};

const steps = [
  'Check out: 2 clips for $5, or the whole set for $99',
  'Send the link to your set in the one-minute form',
  'Get your clips back: 2 the same day, a whole set within 24 hours',
];

// Where Facebook group posts, DMs, and QR cards send comics. Not linked from
// /studio's nav. Two ways to buy: the one-time 2-for-$5 first order, or the
// $99 Whole Set (same card as /studio). ?src= (fb-atl, ig, qr) is passed
// through to Stripe on both buttons so each sale shows where it came from.
// After checkout Stripe returns the buyer to /studio/order, which asks for the set.
export default async function StudioTryPage({ searchParams }) {
  const params = await searchParams;
  const raw = typeof params?.src === 'string' ? params.src : '';
  const source = raw.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
  const trialHref = trialCheckoutHref(source);
  const setHref = setCheckoutHref(source);

  return (
    <>
      <section className="st-spotlight">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-20">
          <Link
            href="/studio"
            className="st-kicker st-kicker-dim hover:text-[var(--st-flare)] transition-colors"
          >
            &#8592; Studio
          </Link>
          <p className="st-kicker mt-6 mb-4">For stand-up comedians · first order only</p>
          <h1 className="st-display text-[clamp(2.6rem,8vw,5rem)] mb-4 max-w-3xl">
            Your first order: 2 clips <span className="st-gradient-text">for $5.</span>
          </h1>
          <div className="st-rule-flare max-w-xs mb-6" />
          <p className="st-lede !text-[var(--st-bone)] max-w-xl mb-10">
            {`On your first order, you get 2 clips for $5. My standard rate is $${oneClip.price} a clip, or $${wholeSet.price} for your whole set (up to 15 clips). To start, check out below, send me a link to your set, and I’ll send your clips back the same day.`}
          </p>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mb-12">
            <div className="st-stub st-stub-featured p-7 md:p-8 flex flex-col">
              <h3 className="st-display text-[1.45rem] mb-4">First Order</h3>
              <div className="flex items-baseline gap-2.5 mb-3">
                <span className="st-display text-[3rem] leading-none">$5</span>
                <span className="st-kicker st-kicker-dim !tracking-[0.12em]">2 clips · one time</span>
              </div>
              <p className="st-body text-[0.93rem] mb-5">
                Buy one clip, get the second free. See the work before you send the whole set.
              </p>
              <ul className="space-y-2.5 mb-7 flex-1">
                {[
                  'Two clips from one set',
                  'You pick the bits, or I pick the ones that land',
                  'Captions word by word, real laughs only, no titles',
                  'Back the same day',
                  `One time per comic. After that it’s $${oneClip.price} a clip or $${wholeSet.price} a set.`,
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">
                      &#10003;
                    </span>
                    <span className="st-body !text-[0.92rem]">{f}</span>
                  </li>
                ))}
              </ul>
              <a href={trialHref} className="st-btn st-btn-primary w-full" data-book-cta>
                Get 2 clips · $5
              </a>
            </div>

            <PriceCard tier={wholeSet} href={setHref} />
          </div>

          <ol className="grid sm:grid-cols-3 gap-4 max-w-4xl">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="st-num">{i + 1}</span>
                <span className="st-body !text-[var(--st-bone)] text-[0.95rem] pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WhoCuts />

      <StickyBook href={setHref} price={`$${wholeSet.price}`} detail="Up to 15 clips · 24 hours" label="Cut my set" />
    </>
  );
}
