import Link from 'next/link';

export default function GuideFooterCTA({
  headline,
  body,
  buttonLabel = 'Book a Strategy Call',
  buttonHref = '/contact',
}) {
  return (
    <>
      {/* Brand wordmark */}
      <div className="text-center mt-8 mb-6">
        <h2 className="text-2xl font-bold font-heading mb-1">Symphony AI</h2>
        <p className="text-text-tertiary mb-2">Strategic AI Consulting</p>
        <p className="italic font-medium text-lg text-purple">From Prompt to Power.</p>
      </div>

      {/* Gradient CTA */}
      <div className="w-full max-w-lg mx-auto bg-gradient-to-br from-purple to-indigo rounded-xl p-8 md:p-10 text-center mb-6">
        <h3 className="font-heading text-2xl font-bold mb-2">{headline}</h3>
        {body && <p className="text-white/85 mb-5">{body}</p>}
        <Link
          href={buttonHref}
          className="inline-block bg-white text-purple font-heading font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {buttonLabel}
        </Link>
      </div>

      {/* Secondary options */}
      <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
        <Link
          href="/services"
          className="text-center bg-bg-secondary rounded-lg px-5 py-4 hover:bg-bg-secondary/80 transition-colors"
        >
          <p className="font-heading text-sm font-semibold mb-1">Explore Services</p>
          <p className="text-text-tertiary text-xs">Workshops, custom agents, and automation</p>
        </Link>
        <Link
          href="/docs"
          className="text-center bg-bg-secondary rounded-lg px-5 py-4 hover:bg-bg-secondary/80 transition-colors"
        >
          <p className="font-heading text-sm font-semibold mb-1">More Guides</p>
          <p className="text-text-tertiary text-xs">Prompting, skills, and more</p>
        </Link>
      </div>
    </>
  );
}
