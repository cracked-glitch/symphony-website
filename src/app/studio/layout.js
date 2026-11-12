import Link from 'next/link';
import { wholeSet, showPack, tierHref } from '@/lib/studio';
import LogoMark from '@/components/ui/LogoMark';
import StudioBarCta from '@/components/studio/StudioBarCta';
import './studio.css';

// Studio runs on the Symphony AI brand: Inter and Sora come from the root
// layout's next/font variables, so there is nothing to load here. The global
// header and footer still wrap this page; .studio-brand scopes the st-* styles.
export default function StudioLayout({ children }) {
  return (
    <div className="studio-brand">
      {/* Studio bar: names the product and keeps the $99 button in reach. */}
      <div className="border-b border-[var(--st-line)] bg-[rgba(10,10,10,0.6)]">
        <div className="mx-auto max-w-[1180px] px-6 py-3 flex items-center justify-between gap-4">
          <Link href="/studio" className="flex items-baseline gap-2">
            <span className="st-display text-[1.25rem] leading-none">Studio</span>
            <span className="st-kicker st-kicker-dim !text-[0.62rem] hidden sm:inline-flex items-center gap-1.5 self-center">
              by <LogoMark className="h-4 w-4" /> Symphony AI
            </span>
          </Link>
          <nav className="flex items-center gap-5" aria-label="Studio">
            <Link
              href="/studio#pricing"
              className="st-kicker st-kicker-dim !tracking-[0.12em] hover:text-[var(--st-bone)] transition-colors hidden md:inline"
            >
              Pricing
            </Link>
            <Link
              href="/studio#more"
              className="st-kicker st-kicker-dim !tracking-[0.12em] hover:text-[var(--st-bone)] transition-colors hidden md:inline"
            >
              Not a comedian?
            </Link>
            <StudioBarCta
              comedy={{ href: tierHref(wholeSet), label: `Cut my set · $${wholeSet.price}` }}
              music={{ href: tierHref(showPack), label: `Book my show · $${showPack.price}` }}
            />
          </nav>
        </div>
      </div>
      {children}
      <nav
        aria-label="Studio policies"
        className="border-t border-[var(--st-line)] mx-auto max-w-[1180px] px-6 py-5 flex flex-wrap gap-x-6 gap-y-2 st-hint"
      >
        <span>Symphony Studio. Payments by Stripe.</span>
        <Link href="/studio/terms" className="hover:text-[var(--st-bone)]">Terms</Link>
        <Link href="/studio/refunds" className="hover:text-[var(--st-bone)]">Refunds</Link>
        <Link href="/studio/privacy" className="hover:text-[var(--st-bone)]">Privacy</Link>
      </nav>
    </div>
  );
}
