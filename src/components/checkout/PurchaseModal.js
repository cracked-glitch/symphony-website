'use client';

import { useEffect } from 'react';

// Global success modal. Shown by LemonProvider whenever Lemon Squeezy fires
// Checkout.Success, regardless of which page the customer bought from.

export default function PurchaseModal({ purchase, onClose }) {
  // Close on Escape.
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Lock body scroll while modal is open.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const productName = purchase.product?.name || 'Your Pack';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-primary/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="purchase-modal-title"
    >
      <div
        className="relative w-full max-w-lg gradient-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass rounded-[calc(1rem-1px)] p-7 md:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary transition-colors w-8 h-8 flex items-center justify-center text-lg"
          >
            &times;
          </button>

          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-success mb-3">
            Purchase Complete
          </span>
          <h2
            id="purchase-modal-title"
            className="text-2xl md:text-3xl font-bold font-heading mb-3"
          >
            You&rsquo;re in. <span className="gradient-text">Welcome to the Suite.</span>
          </h2>
          <p className="text-text-secondary mb-6 text-sm md:text-base">
            A receipt is on its way to{' '}
            <strong>{purchase.email || 'your email'}</strong> with your license key
            and the download link. Your pack is ready right now.
          </p>

          {purchase.receiptUrl ? (
            <a
              href={purchase.receiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple to-purple-dark px-6 py-3.5 text-base font-semibold text-white glow-purple hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] transition-all duration-300"
            >
              Download {productName}
            </a>
          ) : (
            <div className="rounded-lg bg-bg-secondary p-4 text-sm text-text-secondary">
              Your download link is in the receipt email. Check your inbox.
            </div>
          )}

          <div className="mt-6 rounded-lg bg-bg-secondary p-4 text-sm text-text-secondary">
            <p className="font-semibold text-text-primary mb-1">What happens next</p>
            <ul className="space-y-1 text-xs leading-relaxed">
              <li>1. Click the download button above to get the zip and your license key.</li>
              <li>2. Watch your inbox: a permanent receipt link arrives in seconds.</li>
              <li>3. Save the receipt email. It is your re-download link forever.</li>
            </ul>
          </div>

          <p className="text-xs text-text-tertiary mt-5 text-center">
            Need help? Email{' '}
            <a
              href="mailto:nathan@symphonylabs.ai"
              className="text-cyan hover:underline"
            >
              nathan@symphonylabs.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
