import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTA from '@/components/ui/CTA';

export const metadata = {
  title: 'About',
  description: "We don't start with the model. We start with your process. Learn about Symphony's approach to AI and automation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              We Don&rsquo;t Start With the Model. We Start With Your Process.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Most AI implementations fail because they&rsquo;re backward. They start with what the model can do. We start with what your business needs to achieve.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <Section accent>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">The Symphony Methodology</h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl">Five-step framework that consistently delivers results.</p>
        <div className="space-y-6">
          {[
            {
              step: '01',
              title: 'Map',
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>,
              desc: 'Understand your current workflows, bottlenecks, and success metrics. We interview stakeholders, observe processes, and document everything.',
            },
            {
              step: '02',
              title: 'Identify',
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
              desc: 'Pinpoint automation and AI opportunities with the highest ROI. Not everything needs AI. We find what does and prove it with data.',
            },
            {
              step: '03',
              title: 'Architect',
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25" /></svg>,
              desc: 'Design the data pipelines, API integrations, and agent logic. Every system gets a blueprint before a single line of code.',
            },
            {
              step: '04',
              title: 'Build & Test',
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L12 4.38l5.68 5.69m-11.36 0h11.36m-5.68 5.69l5.1-5.1" /></svg>,
              desc: 'Develop production-ready systems with human-in-the-loop controls. We test rigorously and iterate with your feedback.',
            },
            {
              step: '05',
              title: 'Measure & Iterate',
              icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
              desc: 'Track ROI, gather feedback, and optimize continuously. This process takes discipline. No shortcuts. No hype.',
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start rounded-xl border border-border bg-bg-secondary p-6 md:p-8">
              <div className="shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  {item.icon}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-text-tertiary">{item.step}</span>
                  <h3 className="text-lg font-bold font-heading">{item.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Founder */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-6">Built by Someone Who Ships</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Symphony AI was founded by Nathan Settlemyre, with a background in data operations, product development, and AI systems engineering. After seeing too many businesses burned by AI hype with nothing to show for it, he built Symphony to do things differently.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Philosophy: Start with the process, not the model. Measure everything. Ship systems that work in production, not demos that impress in meetings.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/nathansettlemyre" target="_blank" rel="noopener noreferrer" className="text-sm text-purple hover:text-purple-light transition-colors">LinkedIn &rarr;</a>
            </div>
          </div>
          <div className="rounded-xl bg-bg-secondary border border-border h-64 lg:h-80 flex items-center justify-center text-text-tertiary">
            Founder Photo Placeholder
          </div>
        </div>
      </Section>

      {/* How We're Different */}
      <Section bg="bg-bg-tertiary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How We&rsquo;re Different</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Speed Over Bureaucracy', desc: 'We move fast. Weeks to a working system, not months of planning documents. You get results while others are still scoping.' },
            { title: 'Security by Default', desc: 'Your data stays in your environment. NDAs are standard. We build with compliance in mind from day one.' },
            { title: 'White-Glove Onboarding', desc: 'Dedicated support through launch and beyond. Your success is our success.' },
          ].map((item) => (
            <Card key={item.title} hover={false}>
              <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <CTA
        heading="Let's Build Something That Lasts"
        subheading="Your success is our success. Let's talk about your goals."
        primaryLabel="Start a Discovery Call"
        primaryHref="/contact"
      />
    </>
  );
}
