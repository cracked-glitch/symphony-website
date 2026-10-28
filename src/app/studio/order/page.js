import { Suspense } from 'react';
import Link from 'next/link';
import OrderFlow from '@/components/studio/OrderFlow';
import PaidBrief from '@/components/studio/PaidBrief';

export const metadata = {
  title: 'Book a Show Pack',
  description:
    'Send us your footage and your brief. We confirm scope and price before any work starts.',
  robots: { index: false },
};

function OrderFlowFallback() {
  return (
    <div className="st-panel p-10 text-center">
      <p className="st-body text-[0.9rem]">Loading the intake form...</p>
    </div>
  );
}

// Stripe's Payment Links redirect here with ?paid=1&session={CHECKOUT_SESSION_ID}.
// A buyer who has paid gets the short footage form; anyone else gets the full
// brief, which confirms price by email before charging.
export default async function StudioOrderPage({ searchParams }) {
  const params = await searchParams;
  const paid = params?.paid === '1';

  return (
    <section>
      <div className="mx-auto max-w-[900px] px-6 py-14 md:py-20">
        <div className="mb-10">
          <Link
            href="/studio"
            className="st-kicker st-kicker-dim hover:text-[var(--st-flare)] transition-colors"
          >
            &#8592; Back to Studio
          </Link>
          {paid ? (
            <>
              <h1 className="st-display text-[clamp(2.6rem,8vw,5rem)] mt-5 mb-4">
                You&rsquo;re <span className="st-flare-text">booked</span>.
              </h1>
              <div className="st-rule-flare max-w-xs mb-6" />
              <p className="st-lede max-w-xl">
                Payment&rsquo;s in. Tell us which show and where the footage is, and the clock
                starts. About a minute.
              </p>
            </>
          ) : (
            <>
              <h1 className="st-display text-[clamp(2.6rem,8vw,5rem)] mt-5 mb-4">
                Book a <span className="st-flare-text">show</span>
              </h1>
              <div className="st-rule-flare max-w-xs mb-6" />
              <p className="st-lede max-w-xl">
                Four steps, about three minutes. We reply by email to confirm scope and price.
                No payment is taken through this form.
              </p>
            </>
          )}
        </div>

        {paid ? (
          <PaidBrief tierId={params?.tier} sessionId={params?.session} />
        ) : (
          <Suspense fallback={<OrderFlowFallback />}>
            <OrderFlow />
          </Suspense>
        )}
      </div>
    </section>
  );
}
