import Link from 'next/link';
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google';
import { showPack, tierHref } from '@/lib/studio';
import LogoMark from '@/components/ui/LogoMark';
import './studio.css';

// Two families only: Bebas Neue for display, Barlow (plus its condensed cut)
// for everything else. Loaded through next/font, not a CSS @import: the bundler
// drops @import url() from route-level stylesheets, which silently fell the
// whole Studio identity back to Impact. next/font also self-hosts, so there is
// no render-blocking request to Google on every view.
const bebas = Bebas_Neue({
  variable: '--font-st-display',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const barlow = Barlow({
  variable: '--font-st-ui',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-st-cond',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const fontVars = [bebas, barlow, barlowCondensed].map((f) => f.variable).join(' ');

// Studio runs its own brand system. The global Symphony AI header and footer
// still wrap this from the root layout, so site navigation persists, but
// everything inside .studio-brand switches to the Studio identity.
export default function StudioLayout({ children }) {
  return (
    <div className={`studio-brand ${fontVars}`}>
      {/* Identity bar. Establishes the sub-brand immediately under the site nav. */}
      <div className="border-b border-[rgba(244,239,228,0.14)]">
        <div className="mx-auto max-w-[1280px] px-6 py-3.5 flex items-center justify-between gap-4">
          <Link href="/studio" className="flex items-baseline gap-2.5 group">
            <span className="st-display text-[1.7rem] leading-none">Studio</span>
            <span className="st-kicker st-kicker-dim hidden sm:inline-flex items-center gap-1.5 self-center">
              by <LogoMark className="h-4 w-4" /> Symphony AI
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/studio#pricing"
              className="st-kicker st-kicker-dim hover:text-[var(--st-flare)] transition-colors hidden sm:inline"
            >
              Pricing
            </Link>
            <Link
              href={tierHref(showPack)}
              className="st-btn st-btn-primary !px-4 sm:!px-5 !py-2 !text-[0.72rem] sm:!text-[0.8rem] whitespace-nowrap"
            >
              Book my show
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
