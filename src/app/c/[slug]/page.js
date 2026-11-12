import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getClipPage, mediaUrl, checkoutHref, prettyDate } from '@/lib/clipPages';
import { studioHuman, studioIntakeEndpoint } from '@/lib/studio';
import DeleteMyClip from '@/components/clips/DeleteMyClip';
import '../../studio/studio.css';

// One page per person: their free clip first, then the offer. After they pay, their clips are added
// to the same page.json in storage and appear under "Your clips". Rendered on each visit from private
// storage (see src/lib/clipPages.js); sent by email only, never indexed or linked from the site.

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const rec = await getClipPage(slug);
  return {
    title: rec ? `Your clip, ${rec.firstName || rec.name}` : 'Your clip',
    robots: { index: false, follow: false },
  };
}

function Clip({ slug, clip, label }) {
  const src = mediaUrl(slug, clip.file);
  return (
    <figure className="w-full">
      <video
        className="w-full rounded-2xl border border-[var(--st-line)] bg-black aspect-[9/16]"
        src={src}
        poster={mediaUrl(slug, clip.poster) || undefined}
        controls
        playsInline
        preload="metadata"
        aria-label={label || clip.title || 'Video clip'}
      />
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2">
        {clip.title && <span className="st-body !text-[0.9rem] !text-[var(--st-bone)]">{clip.title}</span>}
        <span className="flex gap-3">
          <a href={src} download className="st-flare-text underline underline-offset-4 text-[0.9rem]">
            Download
          </a>
          {clip.clean && (
            <a
              href={mediaUrl(slug, clip.clean)}
              download
              className="st-flare-text underline underline-offset-4 text-[0.9rem]"
            >
              No-caption copy
            </a>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

export default async function ClipPage({ params }) {
  const { slug } = await params;
  const rec = await getClipPage(slug);
  if (!rec) notFound();
  const { v } = rec;
  const paid = rec.paid || [];
  const first = rec.firstName || rec.name;
  const phoneDigits = studioHuman.phone.replace(/\D/g, '');
  const buy = checkoutHref(rec);
  const expires = paid.length ? null : prettyDate(rec.expires);

  return (
    <div className="studio-brand">
      {/* ---------- Private notice: first thing on the page ---------- */}
      <div className="border-b border-[var(--st-line)] bg-[var(--st-ink-2)]">
        <p className="mx-auto max-w-[1000px] px-5 py-3 st-body !text-[0.86rem] flex gap-2 items-start">
          <span aria-hidden="true">&#128274;</span>
          <span>
            <strong className="!text-[var(--st-bone)]">A private page, just between you and me.</strong>{' '}It isn&rsquo;t
            listed, linked or searchable, and only someone with this exact link can open it.
            {expires ? <> It deletes itself on {expires} unless you order more clips.</> : null}
          </span>
        </p>
      </div>

      {/* ---------- Their clip ---------- */}
      <section className="st-spotlight">
        <div className="mx-auto max-w-[1000px] px-5 pt-10 pb-12 md:pt-14 grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] items-start">
          <div className="mx-auto w-full max-w-[280px] md:max-w-[340px]">
            <Clip slug={slug} clip={rec.sample} label={`Clip for ${rec.name}`} />
          </div>

          <div>
            <p className="st-kicker mb-4">For {rec.name}{rec.channel ? ` · ${rec.channel}` : ''}</p>
            <h1 className="st-display text-[clamp(2.2rem,6vw,3.6rem)] mb-5">
              {first}, here&rsquo;s <span className="st-gradient-text">your clip.</span>
            </h1>
            <p className="st-body !text-[var(--st-bone)] text-[1.02rem] mb-4">
              I cut it from your {v.noun}
              {rec.source?.title ? (
                <>
                  {' '}
                  &ldquo;
                  {rec.source.url ? (
                    <a href={rec.source.url} className="underline underline-offset-4">
                      {rec.source.title}
                    </a>
                  ) : (
                    rec.source.title
                  )}
                  &rdquo;
                </>
              ) : null}
              {rec.sample?.moment ? <>, {rec.sample.moment}</> : null}. It&rsquo;s captioned and sized for{' '}
              {v.platforms}.
            </p>
            <p className="st-body mb-8">
              It&rsquo;s yours. Download it and post it, or don&rsquo;t. I never post it anywhere, and it isn&rsquo;t
              shared with anyone.
            </p>

            {/* ---------- The offer ---------- */}
            <div className="st-panel p-6 md:p-7">
              <p className="st-kicker mb-3">Want the rest of the {v.noun}?</p>
              <p className="st-display text-[1.6rem] leading-tight mb-3">
                {v.offer[0].toUpperCase() + v.offer.slice(1)}, ${v.price}
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Each one captioned, plus a clean copy with no captions',
                  `First 3 within 24 hours, the rest within 48`,
                  'Two rounds of changes included',
                  `Pick the ${v.noun} at checkout, or use this one`,
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">
                      &#10003;
                    </span>
                    <span className="st-body !text-[0.93rem]">{line}</span>
                  </li>
                ))}
              </ul>
              <a href={buy} className="st-btn st-btn-primary w-full sm:w-auto">
                Get {v.offer.split(' from')[0]} · ${v.price}
              </a>
              <p className="st-hint mt-3">Secure checkout by Stripe. You get a receipt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Their paid clips, once delivered ---------- */}
      {paid.length > 0 && (
        <section className="border-t border-[var(--st-line)] bg-[var(--st-ink-2)]">
          <div className="mx-auto max-w-[1100px] px-5 py-12 md:py-16">
            <h2 className="st-display text-[clamp(1.8rem,4vw,2.6rem)] mb-2">Your {v.clipWord}</h2>
            <p className="st-body mb-8">
              Want something changed? Reply to my email or text {studioHuman.phone} with the clip number.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paid.map((clip, i) => (
                <li key={clip.file}>
                  <Clip slug={slug} clip={{ ...clip, title: `${i + 1}. ${clip.title || ''}`.trim() }} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- How it works and who ---------- */}
      <section className="border-t border-[var(--st-line)]">
        <div className="mx-auto max-w-[1000px] px-5 py-12 md:py-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="st-display text-[1.8rem] mb-4">How it works</h2>
            <p className="st-body mb-5">{v.pitch}</p>
            <ol className="space-y-3">
              {[
                `Check out and tell me which ${v.noun}. Nothing to upload if it’s on YouTube.`,
                'Your first 3 land on this page within 24 hours.',
                'Ask for any changes. The rest arrive within 48 hours.',
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="st-num">{i + 1}</span>
                  <span className="st-body !text-[var(--st-bone)] text-[0.95rem] pt-1.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-5 items-start">
            <Image
              src={studioHuman.photo}
              alt={studioHuman.name}
              width={96}
              height={96}
              className="h-20 w-20 rounded-full object-cover border border-[var(--st-line)] shrink-0"
            />
            <div>
              <h2 className="st-display text-[1.8rem] mb-3">Who I am</h2>
              <p className="st-body mb-3">
                I&rsquo;m {studioHuman.name}, in {studioHuman.city}. I pick the moments and check every caption
                myself. Software I wrote handles the cropping and timing, which is why it&rsquo;s fast.
              </p>
              <p className="st-body mb-3">
                Your video is only used to make your clips. Nothing gets posted, shared or sold, and I delete my
                working copies when the page goes.
              </p>
              <p className="st-body">
                Call or text{' '}
                <a href={`tel:+1${phoneDigits}`} className="st-flare-text underline underline-offset-4">
                  {studioHuman.phone}
                </a>
                , or email{' '}
                <a href={`mailto:${studioHuman.email}`} className="st-flare-text underline underline-offset-4">
                  {studioHuman.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why a private page ---------- */}
      <section className="border-t border-[var(--st-line)] bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1000px] px-5 py-10">
          <h2 className="st-display text-[1.5rem] mb-3">Why a private page?</h2>
          <p className="st-body !text-[var(--st-bone)] max-w-2xl mb-3">
            This is how I get clips to you: this one, and any you order later. It&rsquo;s one link that opens on
            your phone or your computer, with no sign-in and no account to set up. The video plays right here and
            downloads in one tap.
          </p>
          <p className="st-body max-w-2xl">
            Only you and I have the link. It isn&rsquo;t on my website&rsquo;s menus, search engines are told never to
            list it, and nobody can find it without the exact address.
          </p>
        </div>
      </section>

      {/* ---------- Your page, your call ---------- */}
      <section className="border-t border-[var(--st-line)]">
        <div className="mx-auto max-w-[1000px] px-5 py-10 grid gap-6 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="st-display text-[1.5rem] mb-2">Your page, your call</h2>
            <p className="st-body">
              {expires
                ? `This page and the clip delete themselves on ${expires}. Want them gone now? One tap, and you won’t hear from me again.`
                : 'Want this page and your clips deleted? One tap, and they’re gone within 24 hours.'}
            </p>
          </div>
          <DeleteMyClip code={slug} endpoint={studioIntakeEndpoint} />
        </div>
        <p className="mx-auto max-w-[1000px] px-5 pb-8 st-hint">
          Symphony Studio, 698 Rochelle Drive NE, Atlanta, GA.
        </p>
      </section>
    </div>
  );
}
