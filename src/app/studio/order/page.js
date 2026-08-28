import { Suspense } from 'react';
import Link from 'next/link';
import OrderFlow from '@/components/studio/OrderFlow';

export const metadata = {
  title: 'Start a Drop',
  description:
    'Send us your footage and your brief. We confirm scope and price before any work starts.',
};

function OrderFlowFallback() {
  return (
    <div className="st-panel p-10 text-center">
      <p className="st-body text-[0.9rem]">Loading the intake form...</p>
    </div>
  );
}

export default function StudioOrderPage() {
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
          <h1 className="st-display text-[clamp(2.6rem,8vw,5rem)] mt-5 mb-4">
            Start a <span className="st-flare-text">drop</span>
          </h1>
          <div className="st-rule-flare max-w-xs mb-6" />
          <p className="st-lede max-w-xl">
            Four steps, about three minutes. We reply by email to confirm scope and price.
            No payment is taken through this form.
          </p>
        </div>

        <Suspense fallback={<OrderFlowFallback />}>
          <OrderFlow />
        </Suspense>
      </div>
    </section>
  );
}
