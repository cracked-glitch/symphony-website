import { tierHref } from '@/lib/studio';

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

// A comedy tier as a ticket-stub card with its checkout button. Used on
// /studio and /studio/try. href defaults to the tier's own checkout link;
// /studio/try passes one tagged with the visitor's ?src=.
export default function PriceCard({ tier, href = tierHref(tier), featured = tier.highlight }) {
  return (
    <div className={`st-stub p-7 md:p-8 flex flex-col ${featured ? 'st-stub-featured' : ''}`}>
      <h3 className="st-display text-[1.45rem] mb-4">{tier.name}</h3>

      <div className="flex items-baseline gap-2.5 mb-3">
        <span className="st-display text-[3rem] leading-none">{formatPrice(tier.price)}</span>
        <span className="st-kicker st-kicker-dim !tracking-[0.12em]">{tier.note}</span>
      </div>

      <p className="st-body text-[0.93rem] mb-5">{tier.summary}</p>

      <ul className="space-y-2.5 mb-7 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3">
            <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">
              &#10003;
            </span>
            <span className="st-body !text-[0.92rem]">{f}</span>
          </li>
        ))}
      </ul>

      <a href={href} className={`st-btn w-full ${featured ? 'st-btn-primary' : 'st-btn-ghost'}`} data-book-cta>
        {tier.cta} · {formatPrice(tier.price)}
      </a>
    </div>
  );
}
