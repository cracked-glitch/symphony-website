import Link from 'next/link';
import FreeClipForm from '@/components/studio/FreeClipForm';
import WhoCuts from '@/components/studio/WhoCuts';

export const metadata = {
  title: 'A free clip from your set · Studio',
  description:
    'Send a link to a recent stand-up set. We cut one bit into a captioned vertical clip for Reels, TikTok, and Shorts, free, within 24 hours.',
};

// Where Facebook group posts, DMs, and QR cards send comics. Not linked from
// /studio on purpose: the main page sells the $50 set on its own. ?src= tags
// each request with where it came from (fb-atl, ig, qr).
export default async function StudioFreeClipPage({ searchParams }) {
  const params = await searchParams;
  const source = typeof params?.src === 'string' ? params.src.slice(0, 40) : '';

  return (
    <>
      <section>
        <div className="mx-auto max-w-[900px] px-6 py-14 md:py-20">
          <div className="mb-10">
            <Link
              href="/studio"
              className="st-kicker st-kicker-dim hover:text-[var(--st-flare)] transition-colors"
            >
              &#8592; Studio
            </Link>
            <p className="st-kicker mt-6 mb-4">For stand-up comedians</p>
            <h1 className="st-display text-[clamp(2.6rem,8vw,5rem)] mb-4">
              One bit from your set. <span className="st-gradient-text">Free.</span>
            </h1>
            <div className="st-rule-flare max-w-xs mb-6" />
            <p className="st-lede max-w-xl">
              Send a link to a recent set. I&rsquo;ll cut one bit into a captioned vertical clip for
              Reels, TikTok, and Shorts and email it to you within 24 hours. If you like it, the whole
              set is $50.
            </p>
            <p className="st-body text-[0.88rem] !text-[var(--st-dust)] mt-4 max-w-xl">
              One free clip per comic. Real laughs only, no titles, and the clip is yours to post or
              not.
            </p>
          </div>

          <FreeClipForm source={source} />
        </div>
      </section>

      <WhoCuts />
    </>
  );
}
