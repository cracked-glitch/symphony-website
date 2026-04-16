import Link from 'next/link';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';
import GuideFooterCTA from '@/components/ui/GuideFooterCTA';

export const metadata = {
  title: 'The Art of the Prompt',
  description: 'A step-by-step guide to writing effective AI prompts for your business. Role + Task + Context = great output.',
};

function PageDivider() {
  return <div className="w-48 h-1 bg-gradient-to-r from-purple to-indigo rounded-full my-6" />;
}

function PageFooter({ page, total = 6 }) {
  return (
    <div className="mt-12 pt-5 border-t border-border/30 flex justify-between text-xs text-text-tertiary">
      <span>Symphony AI &nbsp;|&nbsp; Strategic AI Consulting</span>
      <span>{page} / {total}</span>
    </div>
  );
}

export default function PromptingGuidePage() {
  return (
    <div className="max-w-[900px] mx-auto">

      {/* PAGE 1: COVER */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Step-by-Step Guide</span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">The Art of<br />the Prompt</h1>
        <PageDivider />
        <p className="italic text-purple text-xl md:text-2xl font-medium mb-6">For Every Team, Every Workflow</p>

        <div className="rounded-xl bg-bg-secondary p-7 mb-8">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-2">About This Guide</span>
          <p className="text-text-secondary mb-3">
            A step-by-step walkthrough for writing effective AI prompts in your daily work.
            Use this alongside a training session or work through each page on your own.
            By the end, you will have built a real, production-ready prompt.
          </p>
          <p className="text-text-tertiary text-sm">Symphony AI &nbsp;|&nbsp; Strategic AI Consulting</p>
        </div>

        <a href="/symphony-prompting-guide.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-purple-dark transition-colors">
          Download PDF Version
        </a>

        {/* Services Showcase */}
        <div className="mt-10">
          <p className="font-heading text-[11px] font-semibold tracking-[2px] uppercase text-purple mb-4">What We Build</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'Custom AI Agents', desc: 'Production-ready agents built around your specific workflows, data, and team structure.', color: 'border-t-purple' },
              { title: 'Workflow Automation', desc: 'Orchestrate repeatable processes from intake to output. Measurable time savings from week one.', color: 'border-t-indigo' },
              { title: 'Hands-On Training', desc: 'Your team learns to build, not just use. Skills-based sessions that compound over time.', color: 'border-t-cyan' },
            ].map((s) => (
              <div key={s.title} className={`bg-bg-secondary rounded-lg p-5 border-t-[3px] ${s.color}`}>
                <p className="font-heading text-sm font-semibold mb-1">{s.title}</p>
                <p className="text-[13px] text-text-tertiary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-5 font-heading text-[13px] font-medium text-text-tertiary tracking-wide">No hype, no hallucinations, just systems that ship.</p>
        </div>

        <PageFooter page={1} />
      </section>

      {/* PAGE 2: FUNDAMENTALS */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">The Fundamentals</span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">What Is a Prompt?</h1>
        <PageDivider />

        <div className="rounded-xl bg-bg-secondary p-7 text-center italic mb-6">
          <p className="text-warning font-heading font-semibold text-lg mb-1">Think of it as a blueprint.</p>
          <p className="text-text-secondary">Vague directions get you filler. A detailed blueprint gets you precision.</p>
        </div>

        {[
          { n: '1', title: 'A prompt is an instruction', desc: "Not a search query. Not a keyword. A full, specific instruction that tells Claude exactly who to be, what to do, and what format to return." },
          { n: '2', title: 'Clarity beats cleverness', desc: "You don't need fancy language. You need specific language. The more context you give, the more precise the output becomes. Simple words, exact details." },
          { n: '3', title: "It's a conversation", desc: "A bad first output doesn't mean start over. It means refine the prompt. Each iteration gets you closer. Claude remembers the full thread." },
        ].map((item) => (
          <div key={item.n} className="flex gap-5 items-start bg-bg-secondary rounded-xl p-6 mb-4">
            <div className="shrink-0 w-11 h-11 bg-warning text-bg-primary rounded-full flex items-center justify-center font-heading font-bold text-lg">{item.n}</div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-error/10 border-l-4 border-error rounded-lg p-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-error mb-2">&#10007; Vague Prompt</p>
            <p className="italic text-text-secondary text-sm">&ldquo;Write me a summary of this report.&rdquo;</p>
          </div>
          <div className="bg-success/10 border-l-4 border-success rounded-lg p-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-success mb-2">&#10003; Specific Prompt</p>
            <p className="italic text-text-secondary text-sm">&ldquo;As a senior analyst, write a 4-bullet executive summary of Q2 results for the leadership meeting...&rdquo;</p>
          </div>
        </div>

        <PageFooter page={2} />
      </section>

      {/* PAGE 3: FRAMEWORK */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">The Framework</span>
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-purple mb-3 ml-6">Symphony Framework</span>
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Role + Task + Context<br />= Great Output</h1>
        <PageDivider />

        <div className="bg-bg-secondary rounded-lg px-6 py-3.5 font-heading font-semibold text-[15px] flex flex-wrap items-center gap-2 mb-8">
          <span className="text-purple">ROLE</span><span className="text-text-tertiary">+</span>
          <span className="text-warning">TASK</span><span className="text-text-tertiary">+</span>
          <span className="text-success">CONTEXT</span><span className="text-text-tertiary">=</span>
          <span className="text-text-primary">GREAT OUTPUT</span>
        </div>

        {[
          { label: 'ROLE', color: 'border-l-purple', labelColor: 'text-purple', subtitle: 'Who Claude should be', desc: "Give Claude a specific identity with expertise. Not just a job title. The more precise the persona, the better the mindset Claude brings to the output.", example: '"You are a Senior Financial Analyst with 10 years of experience reviewing quarterly earnings for mid-market SaaS companies."' },
          { label: 'TASK', color: 'border-l-warning', labelColor: 'text-warning', subtitle: 'What you want done', desc: "State the exact action and the specific deliverable. Be explicit about format, length, and purpose. Claude performs best when it knows the exact output expected.", example: '"Write a 4-bullet executive summary formatted for the Monday leadership meeting."' },
          { label: 'CONTEXT', color: 'border-l-success', labelColor: 'text-success', subtitle: 'Everything Claude needs to know', desc: "Paste the real data. State the situation. Include any constraints, tone requirements, or audience notes. This is where most prompts fail. Don't make Claude guess.", example: '"Here is the raw Q2 data: Revenue $2.4M, up 18% QoQ. Churn at 4.1%. 3 new enterprise deals closed. Marketing spend over budget by 12%."' },
        ].map((item) => (
          <div key={item.label} className={`${item.color} border-l-4 bg-bg-secondary rounded-r-xl p-5 md:p-6 mb-5`}>
            <h3 className="font-heading text-lg font-semibold mb-1"><span className={item.labelColor}>{item.label}</span> <span className="text-text-tertiary font-normal text-sm">&nbsp; {item.subtitle}</span></h3>
            <p className="text-text-secondary text-sm mb-3">{item.desc}</p>
            <div className={`bg-purple/10 ${item.color} rounded-lg p-4 italic text-text-secondary text-sm`}>{item.example}</div>
          </div>
        ))}

        <PageFooter page={3} />
      </section>

      {/* PAGE 4: HANDS-ON */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Hands-On</span>
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-success mb-3 ml-6">Step-by-Step Example</span>
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Build a Prompt from Scratch</h1>
        <PageDivider />

        <p className="text-text-secondary italic mb-7">We start with a weak prompt and upgrade it one element at a time using Role, Task, Context.</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-error/10 border-l-4 border-error rounded-lg p-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-error mb-2">&#10007; Weak Prompt (Before)</p>
            <p className="italic text-text-secondary text-sm">&ldquo;Summarize these meeting notes.&rdquo;</p>
            <p className="text-text-tertiary text-xs mt-2">No role. No data. No format. Output is vague filler with no operational value.</p>
          </div>
          <div className="bg-bg-secondary rounded-lg p-5">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-tertiary mb-3">Meeting Data</h4>
            <p className="text-text-secondary text-sm">Client: Greenfield Partners</p>
            <p className="text-text-secondary text-sm">Date: March 12, 2026</p>
            <p className="text-text-secondary text-sm">Attendees: Sarah (PM), David (Eng Lead), Client VP</p>
            <p className="text-text-secondary text-sm">Topics: Timeline delay, scope change request, budget impact</p>
            <p className="text-text-secondary text-sm">Decision: Extend deadline 2 weeks, hold budget flat</p>
            <p className="text-text-secondary text-sm">Action items: 4 items assigned across team</p>
          </div>
        </div>

        {[
          { label: 'Step 1: Add Role', text: '"You are a Senior Project Manager with 10 years of experience running client engagements."', note: "Claude now has an expert identity." },
          { label: 'Step 2: Add Task', text: '"Write a structured meeting recap with action items, formatted for the internal team Slack channel."', note: 'Claude knows the exact deliverable.' },
          { label: 'Step 3: Add Context', text: '"Here are the raw meeting notes from the Greenfield Partners call: [paste notes]"', note: 'Claude now has real data. Precise output.' },
        ].map((step) => (
          <div key={step.label}>
            <p className="font-heading text-[13px] font-semibold tracking-wider uppercase text-warning mb-1.5">{step.label}</p>
            <div className="rounded-xl bg-bg-secondary p-5 mb-4">
              <p className="italic text-text-secondary text-sm">{step.text}</p>
              <p className="text-text-tertiary text-xs mt-2">{step.note}</p>
            </div>
          </div>
        ))}

        <div className="bg-success/10 border-l-4 border-success rounded-lg p-4 mt-2 mb-6">
          <p className="text-xs font-semibold tracking-wider uppercase text-success mb-2">&#10003; Complete Prompt (After)</p>
          <p className="text-text-secondary text-sm">Role + Task + Context combined. Result: Key Decisions, Action Items with Owners, Timeline Updates, Next Steps.</p>
        </div>

        <p className="font-heading text-sm font-semibold tracking-wider uppercase text-warning mb-3">The Complete Prompt: Copy and Use This</p>
        <div className="bg-[#111827] rounded-lg p-5 font-mono text-sm leading-relaxed text-text-secondary overflow-x-auto">
          You are a Senior Project Manager with 10 years of experience running client engagements. Here are the raw notes from the Greenfield Partners call on March 12: Sarah (PM), David (Eng Lead), and the Client VP discussed a timeline delay, scope change request, and budget impact. Decision: extend deadline 2 weeks, hold budget flat. 4 action items assigned. Write a structured meeting recap for the internal team Slack channel. Include: Key Decisions (2 sentences), Action Items (owner + deadline for each), Timeline Update, and Next Steps. Keep it under 200 words. Professional but concise.
        </div>

        <PageFooter page={4} />
      </section>

      {/* PAGE 5: ITERATION */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Quick Reference</span>
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Iteration &amp; Common Mistakes</h1>
        <PageDivider />

        <h3 className="font-heading text-lg font-semibold text-warning mb-4">When the Output Isn&rsquo;t Right: Iterate, Don&rsquo;t Start Over</h3>

        {[
          { problem: 'Wrong format?', fix: 'Add to your Context: "Always use exactly this structure: [paste ideal output]"' },
          { problem: 'Too generic?', fix: 'Tighten the Role: add specific expertise, e.g. "...with focus on enterprise SaaS renewals"' },
          { problem: 'Missing a section?', fix: 'Add it explicitly to the Task: "Include a section on..."' },
          { problem: 'Too long / short?', fix: 'Add a constraint to Context: "Keep total response between 150 and 200 words"' },
        ].map((item) => (
          <div key={item.problem} className="grid grid-cols-[160px_1fr] md:grid-cols-[180px_1fr] gap-4 items-center bg-bg-secondary rounded-lg px-5 py-4 mb-2.5">
            <span className="text-warning font-semibold text-[15px]">{item.problem}</span>
            <span className="text-text-secondary text-sm">{item.fix}</span>
          </div>
        ))}

        <h3 className="font-heading text-lg font-semibold mt-10 mb-4">Common Mistakes &rarr; The Fix</h3>

        {[
          { bad: 'Treating Claude like a search engine (2-3 word queries)', fix: 'Write full Role + Task + Context instructions' },
          { bad: 'Skipping the Role: jumping straight to the question', fix: 'Always start with "You are a..." to set Claude\'s mindset' },
          { bad: 'Not providing the actual data: making Claude guess', fix: 'Paste the real data directly into your Context every time' },
          { bad: 'Accepting a bad first output and starting over', fix: 'Iterate on the prompt: refine one element. Claude remembers.' },
          { bad: 'Vague Task requests like "write something good"', fix: 'Specify exactly: bullets, 3 sections, under 200 words, memo format' },
          { bad: 'Writing one giant paragraph with everything jumbled', fix: 'Label clearly: Role: ... / Task: ... / Context: ...' },
        ].map((item, i) => (
          <div key={i} className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center bg-bg-secondary rounded-lg px-5 py-4 mb-2.5">
            <span className="text-text-secondary text-sm">{item.bad}</span>
            <span className="text-text-tertiary hidden md:block">&rarr;</span>
            <span className="font-semibold text-sm">{item.fix}</span>
          </div>
        ))}

        <PageFooter page={5} />
      </section>

      {/* PAGE 6: CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <GuideFooterCTA
          headline="Ready to build AI into your workflow?"
          body="Custom agents, automated workflows, and hands-on training for your team."
        />

        <div className="max-w-[900px] mx-auto">
          <PageFooter page={6} />
        </div>
      </section>
    </div>
  );
}
