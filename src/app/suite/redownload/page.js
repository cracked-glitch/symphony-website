import Link from 'next/link';
import Section from '@/components/ui/Section';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';

export const metadata = {
  title: 'Re-download Your Pack',
  description:
    'How to get your Symphony Suite files again if you have lost the download link.',
};

const LEMON_PORTAL = 'https://app.lemonsqueezy.com/my-orders';

export default function RedownloadPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24 bg-noise">
        <GradientOrbsBg variant="section" />
        <WaveformBg variant="subtle" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <Link
            href="/suite"
            className="inline-flex items-center gap-1 text-sm text-text-tertiary hover:text-cyan transition-colors mb-6"
          >
            &larr; The Suite
          </Link>
          <div className="max-w-xl">
            <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">
              Existing Customers
            </span>
            <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-4">
              Re-download <span className="gradient-text">your pack</span>
            </h1>
            <p className="text-text-secondary leading-relaxed">
              Your purchase comes with lifetime access. Two ways to get your files again.
            </p>
          </div>
        </div>
      </section>

      <Section bg="bg-bg-tertiary">
        <div className="max-w-2xl space-y-5">
          <div className="gradient-border">
            <div className="glass rounded-[calc(1rem-1px)] p-6 md:p-7">
              <span className="inline-block font-heading text-[10px] font-semibold tracking-[2px] uppercase text-purple mb-2">
                Option 1
              </span>
              <h2 className="font-heading text-xl font-bold mb-2">
                Use your receipt email
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                The receipt Lemon Squeezy sent at purchase contains a permanent download
                link and your license key. The link does not expire. Search your inbox for
                <strong> &ldquo;Symphony AI&rdquo;</strong> or
                <strong> &ldquo;Lemon Squeezy&rdquo;</strong>.
              </p>
              <p className="text-text-tertiary text-xs leading-relaxed">
                Tip: check spam if you cannot find it. Forward the receipt to yourself so
                it stays at the top of your inbox.
              </p>
            </div>
          </div>

          <div className="gradient-border">
            <div className="glass rounded-[calc(1rem-1px)] p-6 md:p-7">
              <span className="inline-block font-heading text-[10px] font-semibold tracking-[2px] uppercase text-purple mb-2">
                Option 2
              </span>
              <h2 className="font-heading text-xl font-bold mb-2">
                Open the customer portal
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Lemon Squeezy hosts a customer portal that lists every Symphony AI purchase
                made with your email. Enter the email you bought with and they will send a
                magic link to sign in.
              </p>
              <a
                href={LEMON_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple to-purple-dark px-5 py-2.5 text-sm font-semibold text-white hover:scale-[1.01] transition-transform"
              >
                Open My Orders &rarr;
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-bg-secondary border-l-4 border-warning p-5">
            <p className="font-heading font-semibold mb-1">Still stuck?</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Email{' '}
              <a
                href="mailto:nathan@symphonylabs.ai"
                className="text-cyan hover:underline"
              >
                nathan@symphonylabs.ai
              </a>{' '}
              with the email you bought with and the approximate purchase date. We will
              send the files directly within two business days.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
