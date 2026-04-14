'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/config';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/60 backdrop-blur-xl" style={{ borderBottom: '1px solid transparent', borderImage: 'linear-gradient(to right, transparent, rgba(124,58,237,0.3), rgba(6,182,212,0.2), transparent) 1' }}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-heading gradient-text">Symphony</span>
          <span className="text-xl font-light font-heading text-text-secondary">AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple ${
                  isActive ? 'text-purple border-b-2 border-purple pb-0.5' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-lg bg-gradient-to-r from-purple to-purple-dark px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] glow-purple hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
        >
          Book a Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 w-6 bg-text-primary transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text-primary transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-bg-primary/95 backdrop-blur-xl bg-mesh">
          <nav className="flex flex-col items-center gap-6 pt-12" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive ? 'text-purple' : 'text-text-secondary hover:text-purple'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-lg bg-gradient-to-r from-purple to-purple-dark px-8 py-3 text-base font-semibold text-white glow-purple"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
