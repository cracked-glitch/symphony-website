'use client';

// One-click buy button. Opens the Lemon Squeezy overlay on the current page —
// the customer never navigates away. lemon.js is loaded globally by
// LemonProvider in the root layout; this component calls
// LemonSqueezy.Url.Open() directly on click. The href is preserved as a
// no-JS fallback that opens the hosted checkout page in a new tab.
//
// Variants and sizes mirror the design tokens used by ui/Button.js.

const variants = {
  primary:
    'bg-gradient-to-r from-purple to-purple-dark text-white glow-purple hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:scale-[1.02]',
  secondary:
    'bg-gradient-to-r from-indigo to-indigo-dark text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-[1.02]',
  ghost:
    'bg-transparent text-cyan border border-cyan/30 hover:bg-cyan/5 hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

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

export default function BuyButton({
  product,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
}) {
  if (!product?.checkoutUrl) return null;

  const overlayUrl = product.checkoutUrl.includes('?')
    ? `${product.checkoutUrl}&embed=1`
    : `${product.checkoutUrl}?embed=1`;

  const classes = `lemonsqueezy-button inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  function handleClick(e) {
    if (typeof window === 'undefined') return;
    if (window.LemonSqueezy?.Url?.Open) {
      e.preventDefault();
      window.LemonSqueezy.Url.Open(overlayUrl);
    }
    // If LemonSqueezy is not yet loaded, let the link navigate as a fallback.
  }

  return (
    <a
      href={overlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={classes}
    >
      {children || `Buy ${formatPrice(product.price, product.currency)}`}
    </a>
  );
}
