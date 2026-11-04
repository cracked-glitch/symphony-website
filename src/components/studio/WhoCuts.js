import Image from 'next/image';
import { studioHuman, testimonials } from '@/lib/studio';

// Answers "is this a real person?" before a comic has to ask. Shows a real
// photo when studioHuman.photo is set, initials until then. Quotes appear only
// once testimonials has entries.
export default function WhoCuts() {
  const { name, initials, city, photo, phone, email } = studioHuman;
  const phoneDigits = phone ? phone.replace(/\D/g, '') : null;

  return (
    <section className="border-t border-[var(--st-line)]">
      <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-20 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={160}
            height={160}
            className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover border border-[var(--st-line)]"
          />
        ) : (
          <div
            className="h-28 w-28 md:h-40 md:w-40 rounded-full grid place-items-center border border-[var(--st-line)] bg-[var(--st-ink-2)]"
            aria-hidden="true"
          >
            <span className="st-display text-[2.4rem] md:text-[3.2rem] st-gradient-text">{initials}</span>
          </div>
        )}

        <div>
          <p className="st-kicker mb-3">Who cuts your clips</p>
          <h2 className="st-display text-[clamp(1.9rem,4.2vw,2.8rem)] mb-4">
            A real person, <span className="st-gradient-text">in {city}.</span>
          </h2>
          <p className="st-body !text-[var(--st-bone)] max-w-2xl mb-5">
            I&rsquo;m {name}. I watch your whole set, pick the bits that land, and check every clip
            before it gets to you: captions word by word, your audio, the room&rsquo;s real laughs.
            Nothing gets posted for you. You get a folder of clips and you decide what goes up.
          </p>
          <ul className="space-y-2 mb-6 max-w-2xl">
            {[
              'Your footage is only used to cut your clips. It never gets shared or posted.',
              'Changes until you’re happy.',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="st-flare-text shrink-0 leading-6" aria-hidden="true">
                  &#10003;
                </span>
                <span className="st-body !text-[0.93rem]">{line}</span>
              </li>
            ))}
          </ul>
          <p className="st-body text-[0.95rem]">
            Questions first?{' '}
            {phone && (
              <>
                Call or text{' '}
                <a href={`tel:+1${phoneDigits}`} className="st-flare-text underline underline-offset-4">
                  {phone}
                </a>
                , or email{' '}
              </>
            )}
            {!phone && 'Email '}
            <a href={`mailto:${email}`} className="st-flare-text underline underline-offset-4">
              {email}
            </a>
            .
          </p>

          {testimonials.length > 0 && (
            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <li key={t.name} className="st-panel p-6">
                  <p className="st-body !text-[var(--st-bone)] mb-3">&ldquo;{t.quote}&rdquo;</p>
                  <p className="st-kicker st-kicker-dim !tracking-[0.12em]">
                    {t.name}
                    {t.credit ? ` · ${t.credit}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
