import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import WaveformBg from '@/components/backgrounds/WaveformBg';

const footerLinks = {
  Services: [
    { label: 'AI Literacy Workshops', href: '/services' },
    { label: 'Custom Agent Development', href: '/services' },
    { label: 'Workflow Automation', href: '/services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Docs', href: '/docs' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg-primary">
      <div className="gradient-line-thick" />
      <WaveformBg variant="subtle" className="opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-heading gradient-text">Symphony</span>
              <span className="text-xl font-light font-heading text-text-secondary">AI</span>
            </Link>
            <p className="text-sm text-text-tertiary leading-relaxed max-w-xs">
              Custom AI agents and automation for teams that demand measurable results.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold font-heading text-text-primary mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-tertiary hover:text-purple transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid transparent', borderImage: 'linear-gradient(to right, transparent, rgba(124,58,237,0.2), transparent) 1' }}>
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Built with precision. No hype.
          </p>
        </div>
      </div>
    </footer>
  );
}
