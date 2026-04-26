import Link from 'next/link';
import BuyButton from './BuyButton';

// Cart-style checkout panel. Used on product detail pages where we want to
// show the cart, license terms, and delivery details alongside the buy CTA.
//
// lemon.js is loaded once at the root layout via LemonProvider. The buy
// button rendered here uses the .lemonsqueezy-button class (via BuyButton),
// so clicks open the Lemon Squeezy overlay automatically. Purchase success
// is handled by the global PurchaseModal — no inline success state needed.
//
// Phase 1: single item per cart. Phase 2: multi-item carts for bundles.

function formatPrice(amount, currency = 'USD') {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `$${amount}`;
  }
}

export default function SuiteCheckout({ cart = [] }) {
  if (cart.length === 0) return null;

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const hasMultiple = cart.length > 1;
  const primary = cart[0];

  return (
    <div className="gradient-border">
      <div className="glass rounded-[calc(1rem-1px)] p-7 md:p-8">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-xs font-semibold tracking-[1.5px] uppercase text-purple mb-1">
              {hasMultiple ? 'Your Bundle' : 'One-Time Purchase'}
            </p>
            <p className="text-text-tertiary text-sm">
              Lifetime access. No subscription. Refund within 14 days, no questions.
            </p>
          </div>
        </div>

        <ul className="divide-y divide-border/30 mb-6">
          {cart.map((item) => (
            <li
              key={item.variantId}
              className="flex items-start justify-between gap-4 py-3"
            >
              <div>
                <p className="font-heading font-semibold text-base">{item.name}</p>
                {item.license && (
                  <p className="text-xs text-text-tertiary mt-0.5">{item.license}</p>
                )}
              </div>
              <span className="font-heading font-semibold text-base shrink-0">
                {formatPrice(item.price, item.currency)}
              </span>
            </li>
          ))}
        </ul>

        {hasMultiple && (
          <div className="flex items-center justify-between border-t border-border/40 pt-4 mb-5">
            <span className="font-heading font-semibold">Total</span>
            <span className="font-heading font-bold text-lg gradient-text">
              {formatPrice(total, primary.currency)}
            </span>
          </div>
        )}

        <BuyButton
          product={primary}
          size="md"
          fullWidth
          className="text-base py-3.5"
        >
          Get {hasMultiple ? 'the Bundle' : primary.name}.{' '}
          {formatPrice(total, primary.currency)}
        </BuyButton>

        <p className="text-xs text-text-tertiary text-center mt-3">
          Secure checkout by Lemon Squeezy. You stay on this page the whole time.
        </p>

        <div className="mt-6 pt-5 border-t border-border/30 grid sm:grid-cols-3 gap-3 text-xs text-text-tertiary">
          <div>
            <p className="font-semibold text-text-secondary mb-0.5">Delivery</p>
            <p>Instant download link by email plus on this page.</p>
          </div>
          <div>
            <p className="font-semibold text-text-secondary mb-0.5">Format</p>
            <p>{primary.format || 'PDF + source files'}</p>
          </div>
          <div>
            <p className="font-semibold text-text-secondary mb-0.5">License</p>
            <p>{primary.license || 'Single seat. Lifetime updates.'}</p>
          </div>
        </div>

        <p className="text-xs text-text-tertiary text-center mt-5">
          Already a customer?{' '}
          <Link href="/suite/redownload" className="text-cyan hover:underline">
            Re-download your pack
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
