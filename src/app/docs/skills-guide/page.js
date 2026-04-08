import Link from 'next/link';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';

export const metadata = {
  title: 'Building Your First Claude Skill',
  description: 'A step-by-step guide to creating reusable Claude Skills for your workflow. Build once, use forever.',
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

export default function SkillsGuidePage() {
  return (
    <div className="max-w-[900px] mx-auto">

      {/* PAGE 1: COVER */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Step-by-Step Guide</span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">Building Your<br />First Claude Skill</h1>
        <PageDivider />
        <p className="italic text-purple text-xl md:text-2xl font-medium mb-6">For Every Team, Every Workflow</p>

        <div className="rounded-xl bg-bg-secondary p-7 mb-8">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-2">About This Guide</span>
          <p className="text-text-secondary mb-3">
            A step-by-step guide to creating reusable Claude Skills for your daily workflow.
            Follow each step in sequence. By the end, you will have a working Skill you can use starting today.
          </p>
          <p className="text-text-tertiary text-sm">Symphony AI &nbsp;|&nbsp; Strategic AI Consulting</p>
        </div>

        <a href="/symphony-skills-guide.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-purple-dark transition-colors">
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

      {/* PAGE 2: WHAT IS A SKILL */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Concept</span>
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-success mb-3 ml-6">Definition</span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">What Is a Claude Skill?</h1>
        <PageDivider />

        <p className="text-text-secondary mb-7">
          A Claude Skill is a saved set of instructions that pre-loads Claude with the role, format, and rules it needs for a specific recurring task. Instead of re-explaining your context every time, a Skill makes Claude an always-ready specialist.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-error/10 border-l-4 border-error rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-error mb-2">One-Off Prompt</p>
            <h3 className="font-heading text-lg font-semibold text-error mb-3">The Temp</h3>
            <ul className="space-y-1.5 text-text-secondary text-sm">
              <li>&mdash; Re-explain context every time</li>
              <li>&mdash; Output format varies wildly</li>
              <li>&mdash; No memory of preferences</li>
              <li>&mdash; Works for anything, optimized for nothing</li>
            </ul>
          </div>
          <div className="bg-success/10 border-l-4 border-success rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-success mb-2">Claude Skill</p>
            <h3 className="font-heading text-lg font-semibold text-success mb-3">The Specialist</h3>
            <ul className="space-y-1.5 text-text-secondary text-sm">
              <li>&#10003; Briefed once. Remembers forever.</li>
              <li>&#10003; Same structure every single run</li>
              <li>&#10003; Holds context, preferences, data</li>
              <li>&#10003; Built once. Used forever. Gets better as you refine it.</li>
            </ul>
          </div>
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">Build a Skill When...</h3>
        <ul className="space-y-2 mb-6">
          {[
            'You do the same task more than twice a week',
            'You always re-explain the same context to Claude',
            'You need consistent format every time (drafts, reports, emails)',
            'You want output quality to improve with each use',
          ].map((item) => (
            <li key={item} className="text-text-secondary text-[15px]"><span className="text-purple font-semibold mr-2">&rarr;</span>{item}</li>
          ))}
        </ul>

        <h3 className="font-heading text-lg font-semibold text-error mb-3">Skip the Skill When...</h3>
        <ul className="space-y-1.5 mb-6">
          {[
            'One-off questions you will never ask again',
            'Quick lookups or simple factual questions',
            'Tasks where the format changes every time',
          ].map((item) => (
            <li key={item} className="text-text-secondary text-sm">&#10007; {item}</li>
          ))}
        </ul>

        <div className="bg-purple/10 rounded-lg px-6 py-4 text-center italic text-warning font-medium">
          Rule of thumb: If you do it more than twice a week, it deserves a Skill.
        </div>

        <PageFooter page={2} />
      </section>

      {/* PAGE 3: STEP 1 */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Hands-On</span>
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-success mb-3 ml-6">Build Your Skill: Step 1 of 3</span>
        <p className="text-7xl font-bold font-heading text-purple leading-none">STEP 1</p>
        <h2 className="text-3xl font-bold font-heading mt-2 mb-2">Define the Purpose</h2>
        <PageDivider />

        <p className="text-text-secondary italic mb-5">Before you write a single instruction, answer one question:</p>

        <div className="rounded-xl bg-bg-secondary p-6 text-center mb-6">
          <h3 className="font-heading text-lg font-semibold">&ldquo;What is the ONE repetitive task this Skill will handle?&rdquo;</h3>
          <p className="text-text-tertiary text-sm mt-1">Be specific. One sentence. Test it: would a new hire know exactly what to do?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-error">&#10007; Too Vague</span>
            <div className="space-y-2 mt-2">
              {['"Help me with emails"', '"Make Claude better at writing"', '"Write things for meetings"'].map((t) => (
                <div key={t} className="bg-bg-secondary rounded-lg px-4 py-3 text-text-secondary text-sm">{t}</div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-success">&#10003; Sharp Purpose Statements</span>
            <div className="space-y-2 mt-2">
              {[
                '"Summarize any meeting notes into a 5-section recap for the team Slack"',
                '"Convert raw quarterly data into board-ready executive summaries"',
                '"Review contracts and flag key clauses with risk ratings"',
              ].map((t) => (
                <div key={t} className="bg-bg-secondary rounded-lg px-4 py-3 text-text-secondary text-sm border-l-[3px] border-success">{t}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-success/10 border-l-4 border-success rounded-lg p-5 mb-6">
          <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-success">For This Exercise, We Will Build:</span>
          <h3 className="font-heading text-xl font-semibold text-success mt-2 mb-1">Meeting Recap Generator</h3>
          <p className="text-text-secondary text-sm">Purpose: Summarize any meeting&rsquo;s raw notes into a standardized 5-section team recap.</p>
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">Anatomy of a Good Purpose Statement</h3>
        {[
          { label: 'Action verb:', color: 'text-warning', value: 'Summarize / Convert / Draft / Review / Flag' },
          { label: 'Input:', color: 'text-info', value: 'raw meeting notes / quarterly numbers / email thread' },
          { label: 'Output:', color: 'text-success', value: '5-section recap / ranked table / 3-bullet summary' },
          { label: 'Audience/Context:', color: 'text-purple', value: 'for the team Slack / in brand voice / per our contract standards' },
        ].map((row) => (
          <div key={row.label} className="grid grid-cols-[160px_1fr] gap-4 items-center bg-bg-secondary rounded-lg px-5 py-3.5 mb-2">
            <span className={`font-semibold text-sm ${row.color}`}>{row.label}</span>
            <span className="text-text-secondary text-sm">{row.value}</span>
          </div>
        ))}

        <PageFooter page={3} />
      </section>

      {/* PAGE 4: STEP 2 */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Hands-On</span>
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-success mb-3 ml-6">Build Your Skill: Step 2 of 3</span>
        <p className="text-7xl font-bold font-heading text-purple leading-none">STEP 2</p>
        <h2 className="text-3xl font-bold font-heading mt-2 mb-2">Write the Instructions</h2>
        <PageDivider />

        <p className="text-text-secondary mb-6">Your Skill instructions = a system prompt. They tell Claude who to be, what to return, and what rules to follow.</p>

        <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-warning">Meeting Recap Generator: Copy This Into Your Claude Project</span>

        <div className="grid lg:grid-cols-2 gap-5 mt-3">
          <div className="bg-[#111827] rounded-lg p-5 font-mono text-[13px] leading-relaxed text-text-secondary overflow-x-auto whitespace-pre-wrap">
{`# ROLE
You are a Senior Project Manager at
a professional services firm. When given
raw meeting notes, respond with a clear,
structured recap using professional
business language only.

# FORMAT (return in this exact order)
MEETING OVERVIEW
[2 sentences: who, what, why]
KEY DECISIONS
• [Decision 1] • [Decision 2] • [Decision 3]
ACTION ITEMS
• [Owner]: [Task] by [Date]
OPEN QUESTIONS
• [Question 1] • [Question 2]
NEXT STEPS
[1 to 2 sentences: what happens next]

# RULES
- Use only data provided. No speculation.
- Keep total response under 250 words.
- Professional business language only.
- Never omit a section.`}
          </div>
          <div>
            <div className="border-l-4 border-purple bg-bg-secondary rounded-r-xl p-5 mb-4">
              <h3 className="font-heading text-base font-semibold text-success mb-1">ROLE</h3>
              <p className="text-text-secondary text-sm">Set Claude&rsquo;s identity with specific expertise. &ldquo;Senior Project Manager&rdquo; gives it the mindset, vocabulary, and standards to apply automatically.</p>
            </div>
            <div className="border-l-4 border-warning bg-bg-secondary rounded-r-xl p-5 mb-4">
              <h3 className="font-heading text-base font-semibold text-warning mb-1">FORMAT</h3>
              <p className="text-text-secondary text-sm">The exact output structure Claude returns every time. No guessing, no variation. Label each section explicitly. This IS the consistency.</p>
            </div>
            <div className="border-l-4 border-error bg-bg-secondary rounded-r-xl p-5 mb-4">
              <h3 className="font-heading text-base font-semibold text-error mb-1">RULES</h3>
              <p className="text-text-secondary text-sm">Hard constraints that prevent common failures: speculation, format drift, word bloat. Add a rule for every edge case you discover.</p>
            </div>
            <div className="bg-indigo/15 rounded-lg px-5 py-3 text-center text-sm font-medium text-indigo">
              ADAPT: Change Role &rarr; your role. Change Format &rarr; your structure.
            </div>
          </div>
        </div>

        <h3 className="font-heading text-lg font-semibold mt-8 mb-3">Where to Put Your Skill Instructions</h3>
        {[
          { method: 'Method 1: Claude Project (easiest)', desc: 'Go to Claude.ai → Projects → New Project → Add Instructions. Paste your skill text. Every conversation in this project starts with Claude already briefed.', color: 'border-l-success' },
          { method: 'Method 2: SKILL.md File (for Cowork users)', desc: 'Create a file: .claude/skills/meeting-recap/SKILL.md. Place your instructions inside. Cowork detects it automatically. No manual reference needed.', color: 'border-l-warning' },
          { method: 'Method 3: Tell Claude directly (quick test)', desc: '"Read this skill before responding: [paste instructions]. Then process these meeting notes: [paste data]." Claude reads and applies it immediately.', color: 'border-l-error' },
        ].map((m) => (
          <div key={m.method} className={`${m.color} border-l-4 bg-bg-secondary rounded-r-lg p-4 mb-3`}>
            <h4 className="font-heading text-sm font-semibold mb-1">{m.method}</h4>
            <p className="text-text-secondary text-sm">{m.desc}</p>
          </div>
        ))}

        <PageFooter page={4} />
      </section>

      {/* PAGE 5: STEP 3 */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Hands-On</span>
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-success mb-3 ml-6">Build Your Skill: Step 3 of 3</span>
        <p className="text-7xl font-bold font-heading text-purple leading-none">STEP 3</p>
        <h2 className="text-3xl font-bold font-heading mt-2 mb-2">Test It &amp; Iterate</h2>
        <PageDivider />

        <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-warning">Test Input: Paste This Into Your Skill Now</span>
        <div className="bg-bg-secondary rounded-lg p-5 mt-2 mb-8">
          <p className="text-text-secondary text-sm">Client: Greenfield Partners &nbsp;|&nbsp; Date: March 12, 2026</p>
          <p className="text-text-secondary text-sm">Attendees: Sarah (PM), David (Eng Lead), Client VP of Operations</p>
          <p className="text-text-secondary text-sm">Topics: Q2 timeline delay (2 weeks), scope change request for reporting module</p>
          <p className="text-text-secondary text-sm">Budget: Client wants to hold flat despite scope increase</p>
          <p className="text-text-secondary text-sm">Decisions: Extend deadline 2 weeks, defer reporting module to Phase 2</p>
          <p className="text-text-secondary text-sm">Action items: Sarah to send revised timeline by Friday. David to scope Phase 2. Client VP to confirm budget sign-off by EOW.</p>
          <p className="text-text-secondary text-sm">Open: Staffing for Phase 2 TBD. QA timeline not yet confirmed.</p>
        </div>

        <h3 className="font-heading text-lg font-semibold mb-4">Before vs. After: What Your Skill Produces</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-error/10 border-l-4 border-error rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-error mb-2">Without a Skill: Prompt: &ldquo;Summarize these notes&rdquo;</p>
            <p className="italic text-text-secondary text-sm">The meeting with Greenfield Partners was about some delays and scope changes. Sarah and David were there along with the client. They discussed timelines and budgets. Some action items were assigned. The team will follow up later.</p>
            <p className="text-error text-xs mt-2">No structure. No owners. No deadlines. Useless.</p>
          </div>
          <div className="bg-success/10 border-l-4 border-success rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-success mb-2">With Your Skill: [paste data &rarr; skill does the rest]</p>
            <p className="text-sm"><strong>MEETING OVERVIEW:</strong> <span className="text-text-secondary">Greenfield Partners sync on Q2 timeline and scope. Decision to extend and defer.</span></p>
            <p className="text-sm mt-1"><strong>KEY DECISIONS:</strong></p>
            <p className="text-text-secondary text-sm">&bull; Extend deadline 2 weeks</p>
            <p className="text-text-secondary text-sm">&bull; Defer reporting module to Phase 2</p>
            <p className="text-sm mt-1"><strong>ACTION ITEMS:</strong></p>
            <p className="text-text-secondary text-sm">&bull; Sarah: Revised timeline by Friday</p>
            <p className="text-text-secondary text-sm">&bull; David: Scope Phase 2 by next week</p>
            <p className="text-sm mt-1"><strong className="text-warning">OPEN:</strong> <span className="text-warning">Phase 2 staffing | QA timeline</span></p>
          </div>
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">If the Output Isn&rsquo;t Right: Iterate the Instructions</h3>
        {[
          { problem: 'Wrong format?', fix: 'Add to Format section: "Always use exactly this structure: [paste your ideal output]"' },
          { problem: 'Too generic?', fix: 'Tighten the Role: "Senior PM specializing in enterprise client engagements"' },
          { problem: 'Missing a section?', fix: 'Add it explicitly: "Always include a section titled OPEN QUESTIONS"' },
          { problem: 'Too long?', fix: 'Add to Rules: "Keep total response between 150 and 200 words strictly"' },
          { problem: 'Wrong tone?', fix: 'Add to Rules: "Use professional business language. Never use casual phrasing"' },
        ].map((item) => (
          <div key={item.problem} className="grid grid-cols-[160px_1fr] md:grid-cols-[180px_1fr] gap-4 items-center bg-bg-secondary rounded-lg px-5 py-4 mb-2.5">
            <span className="text-warning font-semibold text-[15px]">{item.problem}</span>
            <span className="text-text-secondary text-sm">{item.fix}</span>
          </div>
        ))}

        <div className="bg-purple/10 rounded-lg px-6 py-4 text-center mt-6">
          <p className="italic text-error font-medium">A Skill is never &ldquo;done.&rdquo; It gets better with every edge case you encode.</p>
          <p className="text-text-tertiary text-sm mt-1">The first version you write today is v1.0. Plan to iterate once after your first real use.</p>
        </div>

        <PageFooter page={5} />
      </section>

      {/* PAGE 6: CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold font-heading mb-1">SYMPHONY AI</h2>
        <p className="text-text-tertiary underline underline-offset-4 mb-1">Strategic AI Consulting</p>
        <p className="italic font-semibold text-xl text-text-secondary mb-8">From Prompt to Power.</p>

        <div className="w-full max-w-lg bg-gradient-to-br from-purple to-indigo rounded-xl p-8 md:p-10 text-center mb-6">
          <h3 className="font-heading text-2xl font-bold mb-2">Ready to automate your workflows?</h3>
          <p className="text-white/85 mb-5">Custom Claude Skills, AI agents, and hands-on training built for your team.</p>
          <Link href="/contact" className="inline-block bg-white text-purple font-heading font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Book a Discovery Call</Link>
        </div>

        <p className="text-text-tertiary text-sm">nathan@symphonylabs.ai</p>

        <PageFooter page={6} />
      </section>
    </div>
  );
}
