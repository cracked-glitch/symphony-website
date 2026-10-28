import Link from 'next/link';
import { showPack, tierHref } from '@/lib/studio';

// The proof link in outreach emails: one artist's finished edits, with sound.
// Unlisted (noindex) and not linked from the nav; it exists to be sent.
export const metadata = {
  title: 'Brendan Abernathy · Studio',
  description: 'Six finished edits Symphony Studio cut for Brendan Abernathy.',
  robots: { index: false },
};

const edits = [
  { src: 'so-tired-floor', song: "I'm So Tired", audio: 'Live audio' },
  { src: 'barking', song: 'Crowd moment', audio: 'Live audio' },
  { src: 'ghosts', song: 'Ghosts', audio: 'Live audio' },
  { src: 'heartache', song: 'How Much Heartache', audio: 'Synced to the master' },
  { src: 'fourth-watch', song: 'Fourth Watch', audio: 'Synced to the master' },
  { src: 'heaven-or-hell', song: 'Heaven or Hell', audio: 'Synced to the master' },
];

export default function BrendanProofPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-[1280px] px-6 pt-10 pb-16 md:pt-14 md:pb-20">
          <p className="st-kicker mb-3">Studio work · tap for sound</p>
          <h1 className="st-display text-[clamp(2.6rem,7vw,5.5rem)] mb-4">
            Brendan <span className="st-flare-text">Abernathy</span>
          </h1>
          <p className="st-body text-[1.02rem] !text-[var(--st-bone)] max-w-xl mb-10">
            Six edits from Brendan&rsquo;s live shows and sessions, cut to his songs, with the hook
            on screen from the first frame.
          </p>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {edits.map((e) => (
              <li key={e.src}>
                <video
                  className="st-reel-video"
                  src={`/studio/brendan/${e.src}.mp4`}
                  poster={`/studio/brendan/${e.src}.jpg`}
                  controls
                  playsInline
                  preload="none"
                  aria-label={`${e.song}, edit for Brendan Abernathy`}
                />
                <p className="mt-2 leading-tight">
                  <span className="st-kicker !text-[0.66rem] !tracking-[0.14em] block">{e.song}</span>
                  <span className="st-kicker st-kicker-dim !text-[0.62rem] !tracking-[0.14em]">{e.audio}</span>
                </p>
              </li>
            ))}
          </ul>

          <p className="st-body text-[0.95rem] mt-10 max-w-2xl">
            Every edit also came with four other hook options, a version with no text, and a
            plan for when to post it.
          </p>
        </div>
      </section>

      <section className="st-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:py-20 text-center">
          <h2 className="st-display text-[clamp(2.4rem,7vw,5rem)] mb-5">
            Want this from <span className="st-flare-text">your show?</span>
          </h2>
          <p className="st-lede !text-[#2A251E] max-w-xl mx-auto mb-8">
            6 edits cut to your songs, back within a day of your footage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={tierHref(showPack)} className="st-btn st-btn-primary">
              Book my show · ${showPack.price}
            </Link>
            <Link href="/studio" className="st-btn st-btn-ghost">
              More about Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
