'use client';

import { usePathname } from 'next/navigation';

// The Studio bar's button follows the page: the music proof page sells the
// Show Pack, the order page sells nothing (they've already paid), and
// everywhere else sells the comedy Whole Set.
export default function StudioBarCta({ comedy, music }) {
  const path = usePathname();
  if (path?.startsWith('/studio/order')) return null;
  const cta = path?.startsWith('/studio/brendan') ? music : comedy;

  return (
    <a href={cta.href} className="st-btn st-btn-primary !px-4 !py-2 !text-[0.85rem] whitespace-nowrap">
      {cta.label}
    </a>
  );
}
