import Link from 'next/link';
import WhoCuts from '@/components/studio/WhoCuts';
import { trialCheckoutHref, wholeSet } from '@/lib/studio';

export const metadata = {
  title: 'Try it: 2 clips for $5 · Studio',
  description:
    'First order for stand-up comedians: two captioned vertical clips from your set for $5, ready for Reels, TikTok, and Shorts, back the same day.',
};

const steps = [
  'Check out: $5',
  'Send the link to your set in the one-minute form',
  'Get your 2 clips back the same day',
];

// Where Facebook group posts, DMs, and QR cards send comics. Not linked from
// /studio's nav: the main page sells the $50 set. ?src= (fb-atl, ig, qr) is
// passed through to Stripe so each sale shows where it came from. After
// checkout Stripe returns the buyer to /studio/order, which asks for the set.
export default async function StudioTryPage({ searchParams }) {
  const params = await searchParams;
  const raw = typeof params?.src === 'string' ? params.src : '';
  const source = raw.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
  const checkoutHref = trialCheckoutHref(source);

  return (
    <>
      <section className="st-spotlight">
        <div className="mx-auto max-w-[900px] px-6 py-14 md:py-20">
          <Link
            href="/studio"
            className="st-kicker st-kicker-dim hover:text-[var(--st-flare)] transition-colors"
          >
            &#8592; Studio
          </Link>
          <p className="st-kicker mt-6 mb-4">For stand-up comedians · first order</p>
          <h1 className="st-display text-[clamp(2.6rem,8vw,5rem)] mb-4">
            Try it: 2 clips <span className="st-gradient-text">for $5.</span>
          </h1>
          <div className="st-rule-flare max-w-xs mb-6" />
          <p className="st-lede !text-[var(--st-bone)] max-w-xl mb-8">
            My rate is $5 a clip. On your first order, the second one&rsquo;s free. Send a link to a
            recent set and get two captioned vertical clips for Reels, TikTok, and Shorts, back the
            same day.
          </p>

          <div className="st-stub st-stub-featured p-7 md:p-8 max-w-md mb-10">
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="st-display text-[3rem] leading-none">$5</span>
              <span className="st-kicker st-kicker-dim !tracking-[0.12em]">2 clips · first order</span>
            </div>
            <ul className="space-y-2.5 mb-7">
              {[
                'Two clips from one set',
                'You pick the bits, or I pick the ones that land',
                'Captions word by word, real laughs only, no titles',
                'Back the same day',
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">
                    &#10003;
                  </span>
                  <span className="st-body !text-[0.92rem]">{f}</span>
                </li>
              ))}
            </ul>
            <a href={checkoutHref} className="st-btn st-btn-primary w-full" data-book-cta>
              Get 2 clips · $5
            </a>
          </div>

          <ol className="grid sm:grid-cols-3 gap-4 max-w-3xl mb-8">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="st-num">{i + 1}</span>
                <span className="st-body !text-[var(--st-bone)] text-[0.95rem] pt-1.5">{step}</span>
              </li>
            ))}
          </ol>

          <p className="st-body text-[0.92rem]">
            Like them? The whole set is ${wholeSet.price}, up to 15 clips.{' '}
            <Link href="/studio#pricing" className="st-flare-text underline underline-offset-4">
              See the full offer
            </Link>
            .
          </p>
        </div>
      </section>

      <WhoCuts />
    </>
  );
}
