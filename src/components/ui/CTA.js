import Button from './Button';

export default function CTA({
  heading,
  subheading,
  primaryLabel,
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="py-16 md:py-24 bg-bg-tertiary">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-2xl border border-border bg-bg-secondary p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{heading}</h2>
          {subheading && (
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">{subheading}</p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} size="lg">{primaryLabel}</Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="ghost" size="lg">{secondaryLabel}</Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
