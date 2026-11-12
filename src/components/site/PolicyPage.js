import Link from 'next/link';
import { Fragment } from 'react';

// Renders one policy from src/lib/policies.js. Paragraph text may hold [label](href) links.
function Rich({ text }) {
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    const cls = 'st-flare-text underline underline-offset-4';
    parts.push(
      href.startsWith('/') ? (
        <Link key={m.index} href={href} className={cls}>{label}</Link>
      ) : (
        <a key={m.index} href={href} className={`${cls} break-all`}>{label}</a>
      ),
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}

export default function PolicyPage({ policy, updated, kicker, links = [] }) {
  return (
    <section className="st-spotlight">
      <div className="mx-auto max-w-[760px] px-4 sm:px-6 pt-12 pb-16 md:pt-16">
        <p className="st-kicker mb-4">{kicker}</p>
        <h1 className="st-display text-[clamp(2.1rem,6vw,3.2rem)] mb-3">{policy.title}</h1>
        <p className="st-hint mb-8">Last updated {updated}</p>
        <p className="st-body !text-[var(--st-bone)] text-[1.02rem] mb-10">
          <Rich text={policy.intro} />
        </p>

        {policy.sections.map((s) => (
          <div key={s.h} className="mb-9">
            <h2 className="st-display text-[1.35rem] mb-3">{s.h}</h2>
            {(s.p || []).map((t) => (
              <p key={t} className="st-body mb-3">
                <Rich text={t} />
              </p>
            ))}
            {s.list && (
              <ul className="space-y-2.5 mb-3">
                {s.list.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">&ndash;</span>
                    <span className="st-body">
                      <Rich text={t} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {(s.after || []).map((t) => (
              <p key={t} className="st-body mb-3">
                <Rich text={t} />
              </p>
            ))}
          </div>
        ))}

        {links.length > 0 && (
          <p className="st-body border-t border-[var(--st-line)] pt-6 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="st-flare-text underline underline-offset-4">
                {l.label}
              </Link>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
