import { Suspense } from 'react';
import Link from 'next/link';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import OrderFlow from '@/components/studio/OrderFlow';

export const metadata = {
  title: 'Start a Drop',
  description:
    'Send us your footage, your masters, and your brief. We confirm scope and price before any work starts.',
};

function OrderFlowFallback() {
  return (
    <div className="gradient-border">
      <div className="glass rounded-[calc(1rem-1px)] p-10 text-center">
        <p className="text-text-tertiary text-sm">Loading the intake form...</p>
      </div>
    </div>
  );
}

export default function StudioOrderPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-noise">
      <GradientOrbsBg variant="section" />
      <div className="relative z-10 mx-auto max-w-[880px] px-6">
        <div className="mb-10">
          <Link
            href="/studio"
            className="text-sm text-text-tertiary hover:text-cyan transition-colors"
          >
            &#8592; Back to Studio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold font-heading mt-4 mb-3">
            Start a <span className="gradient-text">Drop</span>
          </h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Four steps, about three minutes. We reply by email to confirm scope and price. No
            payment is taken through this form.
          </p>
        </div>

        <Suspense fallback={<OrderFlowFallback />}>
          <OrderFlow />
        </Suspense>
      </div>
    </section>
  );
}
