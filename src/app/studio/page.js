import Link from 'next/link';
import StudioFAQ from '@/components/studio/StudioFAQ';
import Marquee from '@/components/studio/Marquee';
import {
  studioMeta,
  studioTiers,
  deliverables,
  accountLanes,
  pipeline,
  intakeRequirements,
  studioFaq,
} from '@/lib/studio';

export const metadata = {
  title: 'Studio',
  description:
    'Send us your raw footage. We turn it into a month of trial-ready reels, captions in your voice, and the alternate accounts to post them from.',
};

function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function StudioPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="st-kicker mb-6">For working artists</p>

          <h1 className="st-display text-[clamp(3.4rem,13vw,10.5rem)] mb-2">
            Post like you
          </h1>
          <h1 className="st-display text-[clamp(3.4rem,13vw,10.5rem)] mb-8">
            have a <span className="st-flare-text">label</span>
          </h1>

          <div className="st-rule-flare max-w-md mb-8" />

          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-start">
            <p className="st-lede max-w-2xl">
              {studioMeta.blurb}
            </p>
            <div className="lg:pt-2">
              <p className="st-body text-[0.95rem] mb-7">
                The platforms now expect an unsustainable amount of content. Artists with
                nepotism or a label budget hire a team for it. This is how everyone else
                competes on the same footing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/studio/order" className="st-btn st-btn-primary">
                  Start a Drop
                </Link>
                <Link href="#tracklist" className="st-btn st-btn-ghost">
                  What Ships
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          '12 to 15 reels per drop',
          'Captions in your voice',
          'Fan pages built and fed',
          'You own everything',
          'No subscription',
        ]}
      />

      {/* ---------- The pitch, inverted to paper ---------- */}
      <section className="st-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20">
            <div>
              <p className="st-kicker mb-5">The problem</p>
              <h2 className="st-display text-[clamp(2.4rem,5.5vw,4.2rem)]">
                One shoot.
                <br />
                Four accounts.
                <br />
                <span className="st-flare-text">No team.</span>
              </h2>
            </div>
            <div className="lg:pt-3">
              <p className="st-serif text-[clamp(1.3rem,2.4vw,1.75rem)] leading-[1.45] mb-7 text-[#1E1A15]">
                Every working musician has the same archive: hours of raw video on a drive,
                a catalog of finished songs, and no time to turn one into the other.
              </p>
              <p className="st-body mb-5">
                The footage isn&rsquo;t the problem. Cutting it vertical, scoring it, finding
                the fifteen seconds that hold attention, writing something that sounds
                like you, then doing it again four times a week across four different
                pages: that&rsquo;s the job. At label tier it&rsquo;s somebody&rsquo;s actual title.
              </p>
              <p className="st-body">
                Studio does that work at a price a working artist can absorb. You stay the
                editor of record. Nothing goes out that you didn&rsquo;t choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Tracklist: what ships ---------- */}
      <section id="tracklist" className="scroll-mt-20">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="st-kicker mb-4">In every drop</p>
              <h2 className="st-display text-[clamp(2.4rem,6vw,4.5rem)]">What ships</h2>
            </div>
            <p className="st-body max-w-sm text-[0.95rem]">
              A whole set to try, built out of your own catalog, so you learn what lands
              before your main account commits to it.
            </p>
          </div>

          <div>
            {deliverables.map((d, i) => (
              <div key={d.title} className="st-track">
                <div className="st-track-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="st-track-title">{d.title}</h3>
                  <p className="st-body text-[0.95rem] max-w-3xl">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Account lanes ---------- */}
      <section className="bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-14">
            <p className="st-kicker mb-4">The part you can&rsquo;t do alone</p>
            <h2 className="st-display text-[clamp(2.4rem,6vw,4.5rem)] mb-6">
              We build your <span className="st-flare-text">other</span> accounts
            </h2>
            <p className="st-lede">
              Nobody breaks through on one page anymore. Labels run a network: the artist
              account, the archive, the niche pages that pull listeners in before they
              know your name. We build for every lane and hand you the plan to run them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {accountLanes.map((lane, i) => (
              <div key={lane.title} className="st-panel p-7 md:p-9">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="st-display text-[1.65rem]">{lane.title}</h3>
                  <span className="st-display text-[1.4rem] text-[rgba(244,239,228,0.22)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="st-body text-[0.95rem]">{lane.desc}</p>
              </div>
            ))}
          </div>

          <p className="st-hint mt-8 max-w-2xl">
            Every page we help you build says who runs it. We don&rsquo;t invent fake personas,
            and we don&rsquo;t fake comment threads between your own accounts.
          </p>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="mb-14">
            <p className="st-kicker mb-4">The process</p>
            <h2 className="st-display text-[clamp(2.4rem,6vw,4.5rem)]">
              Four steps. You&rsquo;re in two.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {pipeline.map((step) => (
              <div key={step.n}>
                <div className="st-ghost-num mb-4">{step.n}</div>
                <div className="st-rule mb-5" />
                <h3 className="st-display text-[1.5rem] mb-3">{step.title}</h3>
                <p className="st-body text-[0.93rem]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What we need ---------- */}
      <section className="st-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <div>
              <p className="st-kicker mb-4">Intake</p>
              <h2 className="st-display text-[clamp(2.2rem,5vw,3.6rem)] mb-6">
                What we need from you
              </h2>
              <p className="st-body">
                A complete brief is the difference between a drop that lands and a drop that
                needs rebuilding. Only three of these are hard requirements.
              </p>
            </div>

            <div>
              {intakeRequirements.map((req, i) => (
                <div
                  key={req.label}
                  className={`py-6 ${i === 0 ? '' : 'border-t border-[rgba(12,11,10,0.14)]'}`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span className="st-display text-[1.35rem] text-[rgba(12,11,10,0.3)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="st-display text-[1.4rem]">{req.label}</h3>
                    <span
                      className={`st-kicker ${
                        req.required ? '' : 'st-kicker-dim'
                      } !text-[0.66rem] !tracking-[0.18em]`}
                    >
                      {req.required ? 'Required' : 'Your call'}
                    </span>
                  </div>
                  <p className="st-body text-[0.95rem]">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="pricing" className="scroll-mt-20 bg-[var(--st-ink-2)]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="st-kicker mb-4">Pay per drop</p>
              <h2 className="st-display text-[clamp(2.4rem,6vw,4.5rem)]">Pricing</h2>
            </div>
            <p className="st-body max-w-sm text-[0.95rem]">
              You pay when you have something to promote. No monthly fee sitting on your
              card between releases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {studioTiers.map((tier) => {
              const featured = tier.highlight;
              return (
                <div
                  key={tier.id}
                  className={`st-stub p-7 md:p-8 flex flex-col ${
                    featured ? 'st-stub-featured' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <h3 className="st-display text-[1.7rem]">{tier.name}</h3>
                    {featured && (
                      <span className="st-kicker !text-[0.62rem]">Most start here</span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2.5 mb-4">
                    <span className="st-display text-[3.2rem] leading-none">
                      {tier.price === null ? 'Talk' : formatPrice(tier.price)}
                    </span>
                    <span
                      className={`st-kicker !tracking-[0.14em] ${
                        featured ? '' : 'st-kicker-dim'
                      }`}
                    >
                      {tier.unit}
                    </span>
                  </div>

                  <p className="st-body text-[0.93rem] mb-6">{tier.summary}</p>

                  <div
                    className={`st-perf mb-6 ${featured ? 'text-[#0C0B0A]' : 'text-[#F4EFE4]'}`}
                  />

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[0.9rem]">
                        <span className="st-flare-text shrink-0 leading-6">&#9656;</span>
                        <span className="st-body !text-[0.9rem]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={
                      tier.id === 'catalog'
                        ? '/contact?topic=studio-catalog'
                        : `/studio/order?tier=${tier.id}`
                    }
                    className={`st-btn w-full ${
                      featured ? 'st-btn-primary' : 'st-btn-ghost'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="st-hint mt-8 max-w-2xl">
            Prices are indicative while we run our first cohort. We confirm the number with
            you before any work starts, and you&rsquo;re never charged automatically.
          </p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-12 lg:gap-20">
            <div>
              <p className="st-kicker mb-4">Questions</p>
              <h2 className="st-display text-[clamp(2.2rem,5vw,3.6rem)] mb-6">
                What artists ask
              </h2>
              <p className="st-body mb-7">
                Not sure your footage is workable? Send it over and we&rsquo;ll tell you straight,
                before you pay anything.
              </p>
              <Link href="/contact" className="st-btn st-btn-ghost">
                Ask Us Directly
              </Link>
            </div>
            <StudioFAQ items={studioFaq} />
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="st-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:py-28 text-center">
          <p className="st-kicker mb-6">Start here</p>
          <h2 className="st-display text-[clamp(2.8rem,9vw,7rem)] mb-8">
            Send us an hour
            <br />
            of <span className="st-flare-text">footage</span>
          </h2>
          <p className="st-serif text-[clamp(1.15rem,2vw,1.4rem)] max-w-xl mx-auto mb-10 text-[#2A251E]">
            Start with one drop. If nothing in it earns a post, you&rsquo;ve lost one upload and
            nothing else.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/studio/order" className="st-btn st-btn-primary">
              Start a Drop
            </Link>
            <Link href="/contact" className="st-btn st-btn-ghost">
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          'Symphony Studio',
          'Built for working artists',
          'You own the output',
          'Nothing publishes without you',
        ]}
        reverse
      />
    </>
  );
}
