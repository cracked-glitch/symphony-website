'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import PurchaseModal from './PurchaseModal';
import { suiteProducts } from '@/lib/products';

// Mounts once at the root layout. Loads lemon.js, registers the global
// Checkout.Success handler, and shows a purchase-complete modal regardless
// of which page the customer bought from.

const LEMON_LOADED = '__symphony_lemon_loaded__';

export default function LemonProvider({ children }) {
  const pathname = usePathname();
  const [purchase, setPurchase] = useState(null);
  const [scriptState, setScriptState] = useState(
    typeof window !== 'undefined' && window[LEMON_LOADED] === 'ready' ? 'ready' : 'loading'
  );

  // Load lemon.js once per session.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window[LEMON_LOADED] === 'ready') {
      setScriptState('ready');
      return;
    }

    const existing = document.querySelector('script[data-lemon-js]');
    const handleLoad = () => {
      window[LEMON_LOADED] = 'ready';
      setScriptState('ready');
    };
    const handleError = () => setScriptState('error');

    if (existing) {
      existing.addEventListener('load', handleLoad);
      existing.addEventListener('error', handleError);
      return;
    }

    const s = document.createElement('script');
    s.src = 'https://app.lemonsqueezy.com/js/lemon.js';
    s.defer = true;
    s.dataset.lemonJs = 'true';
    s.addEventListener('load', handleLoad);
    s.addEventListener('error', handleError);
    document.head.appendChild(s);
  }, []);

  // Initialize lemon.js + bind the global success handler.
  useEffect(() => {
    if (scriptState !== 'ready') return;
    if (typeof window === 'undefined') return;

    if (typeof window.createLemonSqueezy === 'function') {
      window.createLemonSqueezy();
    }

    if (!window.LemonSqueezy) return;

    window.LemonSqueezy.Setup({
      eventHandler: (event) => {
        if (!event || event.event !== 'Checkout.Success') return;
        const order = event.data?.data;
        if (!order) return;

        const variantId = order.attributes?.first_order_item?.variant_id;
        const product = suiteProducts.find(
          (p) => String(p.variantId) === String(variantId)
        );

        setPurchase({
          orderId: order.id,
          email: order.attributes?.user_email,
          receiptUrl: order.attributes?.urls?.receipt || null,
          orderNumber: order.attributes?.order_number,
          product: product || null,
        });
      },
    });
  }, [scriptState]);

  // Re-scan the DOM for newly-mounted .lemonsqueezy-button anchors after
  // client-side route changes.
  useEffect(() => {
    if (scriptState !== 'ready') return;
    if (typeof window === 'undefined') return;
    if (typeof window.createLemonSqueezy === 'function') {
      window.createLemonSqueezy();
    }
  }, [pathname, scriptState]);

  return (
    <>
      {children}
      {purchase && (
        <PurchaseModal
          purchase={purchase}
          onClose={() => setPurchase(null)}
        />
      )}
    </>
  );
}
