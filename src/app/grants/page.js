import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import FAQ from '@/components/ui/FAQ';
import GradientOrbsBg from '@/components/backgrounds/GradientOrbsBg';
import WaveformBg from '@/components/backgrounds/WaveformBg';

export const metadata = {
  title: 'Grant Desk: grant applications drafted for your nonprofit',
  description:
    'Hiring a grant writer takes months. We draft your next grant application now. First section free, $750 flat for a finished application you approve and submit.',
  alternates: { canonical: '/grants' },
};

const START = 'mailto:nathan@symphonylabs.ai?subject=Grant%20Desk%3A%20first%20section';

const steps = [
  {
    step: '1',
    title: 'Send the grant',
    time: '5 minutes',
    desc: 'Email us the funder’s guidelines, or just a link. Add a past proposal or an annual report if you have one.',
  },
  {
    step: '2',
    title: 'Read the first section',
    time: 'Free, in 2 business days',
    desc: 'We draft the first section of that application from your own materials. You judge the writing before you pay anything.',
  },
  {
    step: '3',
    title: 'Get the full draft',
    time: '5 business days',
    desc: 'Every question answered, inside the word limits, with the attachments listed. A person checks each page against the funder’s rules.',
  },
  {
    step: '4',
    title: 'You approve and submit',
    time: 'Two rounds of edits',
    desc: 'It goes out under your name, from your account. You stay in charge of every word and every number.',
  },
];

const included = [
  'Every narrative question, written to the funder’s own prompts and limits',
  'An eligibility check against the funder’s rules before we start',
  'Your numbers pulled from your 990, annual report, and past proposals',
  'A budget narrative that matches the budget you give us',
  'A list of every attachment the funder asks for',
  'Two rounds of edits',
];

const faqs = [
  {
    question: 'Who actually writes it?',
    answer:
      'We draft with AI, working only from your materials and the funder’s guidelines. Then a person reads every page against those guidelines, checks each number against your documents, and fixes what is off. You get the checked version, never a raw draft.',
  },
  {
    question: 'Do funders allow AI-assisted applications?',
    answer:
      'Most do. Some ask you to disclose it, and a few do not allow it. We read the funder’s policy before we start and tell you what it says. If a funder does not allow it, we say so and do not take the job.',
  },
  {
    question: 'Will it sound like us?',
    answer:
      'That is what the free first section is for. Send a past proposal or your annual report and we match the way you already write about your work. If the sample does not sound like you, you owe nothing.',
  },
  {
    question: 'Do you take a percentage of the award?',
    answer:
      'No. The price is flat and due whether or not the grant is awarded. Fundraising ethics codes do not allow pay tied to the award, and neither do many funders.',
  },
  {
    question: 'Can you promise we will win?',
    answer:
      'No, and nobody honestly can. We promise a complete, accurate application that follows the funder’s rules and is ready before the deadline.',
  },
  {
    question: 'What kinds of grants do you take?',
    answer:
      'Foundation, corporate, state, and local applications. Large federal applications are bigger jobs, so we quote those one by one before starting.',
  },
  {
    question: 'What happens to our documents?',
    answer:
      'They stay private. We use them for your application and nothing else, and we delete them when you ask.',
  },
  {
    question: 'We are hiring a grant writer. Does this replace the hire?',
    answer:
      'It covers the gap. Deadlines do not wait for a search to finish. When your new writer starts, they inherit finished applications and a calendar instead of a backlog.',
  },
];

export default function GrantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-noise">
        <WaveformBg variant="subtle" />
        <GradientOrbsBg variant="section" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
          <div className="glass-subtle inline-block rounded-full text-cyan text-xs font-semibold px-3 py-1 mb-6">
            Grant Desk &middot; For nonprofits
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 max-w-3xl mx-auto">
            Your next grant application, <span className="gradient-text">drafted this week</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Hiring a grant writer takes months. Deadlines keep coming. Send us the grant you are
            applying for and we draft the first section free. A finished application is $750 flat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={START} size="lg">Get the first section free</Button>
            <Button href="#pricing" variant="ghost" size="lg">See pricing</Button>
          </div>
          <p className="text-xs text-text-tertiary mt-4">
            Email is all it takes. No call, no contract, no card.
          </p>
        </div>
      </section>

      <div className="gradient-line-thick" />

      {/* How it works */}
      <Section background="dots" decoration="orbs">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            You send one email. You read a sample. You decide.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <Card key={item.step} hover={false}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple to-indigo text-white font-bold text-sm mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold font-heading mb-1">{item.title}</h3>
              <p className="text-xs text-purple font-medium mb-2">{item.time}</p>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What you get */}
      <Section bg="bg-bg-tertiary" background="grid">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-4">What a finished application includes</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              You get a document you can paste into the funder&rsquo;s portal. Nothing is invented.
              Every fact comes from your own materials, and anything we could not confirm is flagged
              for you to fill in.
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                  <span className="text-cyan mt-0.5">&#x2713;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-bg-secondary border-l-4 border-purple p-6">
            <h3 className="text-lg font-bold font-heading mb-3">What stays with you</h3>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed">
              <li>You choose which grants to go after.</li>
              <li>You approve the final text and the budget.</li>
              <li>You submit it from your own account, under your own name.</li>
              <li>You keep the funder relationship. We never contact a funder for you.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" decoration="waveform">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Flat <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            No percentage of the award. No retainer you cannot cancel.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card hover={false}>
            <p className="text-xs font-semibold text-cyan mb-2">Start here</p>
            <h3 className="text-xl font-bold font-heading mb-1">First section</h3>
            <p className="font-heading font-bold text-3xl gradient-text mb-4">Free</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              One section of a real application you plan to submit, drafted from your materials.
              Back to you in two business days.
            </p>
          </Card>
          <Card hover={false} glow>
            <p className="text-xs font-semibold text-cyan mb-2">One application</p>
            <h3 className="text-xl font-bold font-heading mb-1">Finished application</h3>
            <p className="font-heading font-bold text-3xl gradient-text mb-4">$750</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              The whole application, checked and ready to submit, with two rounds of edits.
              Full draft in five business days.
            </p>
          </Card>
          <Card hover={false}>
            <p className="text-xs font-semibold text-cyan mb-2">Monthly</p>
            <h3 className="text-xl font-bold font-heading mb-1">Grant desk</h3>
            <p className="font-heading font-bold text-3xl gradient-text mb-4">
              $2,000<span className="text-base text-text-tertiary font-medium"> a month</span>
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Up to three applications a month, a calendar of deadlines that fit your work, and
              funder reports when they come due. Cancel any month.
            </p>
          </Card>
        </div>
        <div className="text-center mt-10">
          <Button href={START} size="lg">Get the first section free</Button>
          <p className="text-xs text-text-tertiary mt-3">
            Or write to nathan@symphonylabs.ai with the grant you have in mind.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="bg-bg-tertiary" background="grid">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">Questions directors ask</h2>
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Closing */}
      <Section decoration="orbs">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Pick one grant. See the first section.
          </h2>
          <p className="text-text-secondary mb-8">
            If it does not sound like you, you have lost nothing. If it does, the rest takes five
            business days.
          </p>
          <Button href={START} size="lg">Send us the grant</Button>
        </div>
      </Section>
    </>
  );
}
