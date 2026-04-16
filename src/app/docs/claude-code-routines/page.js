import Link from 'next/link';
import Button from '@/components/ui/Button';
import CTA from '@/components/ui/CTA';
import GuideFooterCTA from '@/components/ui/GuideFooterCTA';

export const metadata = {
  title: 'Your First Claude Code Routine in Under 60 Minutes',
  description: 'The operator playbook for non-developers. Build a working Claude Code Routine that runs your Monday morning briefing on a schedule, using just prompts. No terminal required.',
};

function PageDivider() {
  return <div className="w-48 h-1 bg-gradient-to-r from-purple to-indigo rounded-full my-6" />;
}

function PageFooter({ page, total = 12 }) {
  return (
    <div className="mt-12 pt-5 border-t border-border/30 flex justify-between text-xs text-text-tertiary">
      <span>Symphony AI &nbsp;|&nbsp; Strategic AI Consulting</span>
      <span>{page} / {total}</span>
    </div>
  );
}

function EyebrowPair({ left, right }) {
  return (
    <div className="mb-3 font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning">
      {left}<span className="text-text-tertiary mx-2">|</span>{right}
    </div>
  );
}

function PromptBlock({ children }) {
  return (
    <div className="bg-[#111827] rounded-lg p-5 mb-4">
      <p className="text-xs font-semibold tracking-wider uppercase text-cyan mb-3">Prompt</p>
      <pre className="font-mono text-[13px] leading-relaxed text-text-secondary whitespace-pre-wrap overflow-x-auto">{children}</pre>
    </div>
  );
}

function BuildStep({ step, time, title, desc, prompt, tip }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-warning">{step}</span>
        <span className="text-xs text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">{time}</span>
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm mb-3">{desc}</p>
      {prompt && <PromptBlock>{prompt}</PromptBlock>}
      {tip && (
        <div className="bg-purple/10 rounded-lg px-5 py-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-purple">Pro Tip: </span>
          <span className="text-text-secondary text-sm">{tip}</span>
        </div>
      )}
    </div>
  );
}

export default function ClaudeCodeRoutinesGuidePage() {
  return (
    <div className="max-w-[900px] mx-auto">

      {/* PAGE 1: COVER */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Operator Playbook</span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">Your First Claude Code<br />Routine in Under 60 Minutes</h1>
        <PageDivider />
        <p className="italic text-purple text-xl md:text-2xl font-medium mb-6">Automate One Weekly Task This Afternoon</p>

        <div className="rounded-xl bg-bg-secondary p-7 mb-8">
          <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-2">About This Guide</span>
          <p className="text-text-secondary mb-3">
            A complete walkthrough for shipping your first Claude Code Routine: an automated workflow that runs on a schedule, an API call, or a repo event. See the same Monday morning briefing Routine Symphony AI runs internally, then build it for your business in nine focused steps.
          </p>
          <p className="text-text-tertiary text-sm mb-3">
            Written for operators, owner-operators, and ops leads. No developer required.
          </p>
          <p className="text-text-tertiary text-sm">Symphony AI &nbsp;|&nbsp; Strategic AI Consulting</p>
        </div>

        <a href="/symphony-claude-code-routines-guide.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-purple-dark transition-colors">
          Download PDF Version
        </a>

        {/* Services Showcase */}
        <div className="mt-10">
          <p className="font-heading text-[11px] font-semibold tracking-[2px] uppercase text-purple mb-4">What We Build</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { title: 'Custom AI Agents', desc: 'Production-ready agents built around your workflows.', color: 'border-t-purple' },
              { title: 'Workflow Automation', desc: 'Routines, MCP servers, and pipelines that run themselves.', color: 'border-t-indigo' },
              { title: 'Hands-On Training', desc: 'Your team learns to ship Routines, not just use them.', color: 'border-t-cyan' },
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

      {/* PAGE 2: WHAT CLAUDE CODE ROUTINES ARE */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Concept" right="Definition" />
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">What Claude Code Routines Are</h1>
        <PageDivider />

        <p className="text-text-secondary mb-7">
          A Claude Code Routine is a saved instruction set that runs on a trigger. The trigger fires (Monday at 7 AM, an inbound webhook, a new commit), Claude wakes up, follows your instructions, calls whatever tools it needs, and posts the result wherever you tell it to. No babysitting, no chat window, no clicking Run.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-bg-secondary border-l-4 border-error rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-error mb-2">The Dumb Timer</p>
            <h3 className="font-heading text-lg font-semibold text-error mb-3">Cron Job</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              {['Same script every run', 'Breaks when data shifts', 'No language understanding', 'Fails silently'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-error shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-secondary border-l-4 border-warning rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-warning mb-2">The Rule Mover</p>
            <h3 className="font-heading text-lg font-semibold text-warning mb-3">Zapier Workflow</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              {['Moves data between apps', 'One trigger, one fixed path', 'Pricey at any scale', 'Breaks on API changes'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-success/10 border-l-4 border-success rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-success mb-2">The Operator</p>
            <h3 className="font-heading text-lg font-semibold text-success mb-3">Claude Code Routine</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              {['Reads, decides, reports', 'Adapts to messy inputs', 'Connects to anything via MCP', 'Explains what it did'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">What a Routine Actually Looks Like</h3>
        <p className="text-text-secondary text-sm mb-6">
          A Routine is a single file with two parts. The top is configuration: what triggers it, what tools it can use, where to send output. The bottom is plain English instructions Claude follows. That is it. No drag-and-drop builder, no node graph, no premium tier to unlock features.
        </p>

        <h3 className="font-heading text-lg font-semibold text-success mb-3">Where Routines Beat Everything Else</h3>
        <ul className="space-y-2 mb-6">
          {[
            'Tasks where the inputs are messy, varied, or written by humans.',
            'Workflows that need a real summary, not a copy-paste of source data.',
            'Anything where the cost of getting it wrong is small and the cost of skipping it is large.',
            'Recurring work that takes 30+ minutes and you keep meaning to delegate.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
              <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-success shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-purple/10 rounded-lg px-6 py-4 text-center italic text-warning font-medium">
          A Routine you ship in an afternoon will save you 90 minutes every week for the next two years.
        </div>

        <PageFooter page={2} />
      </section>

      {/* PAGE 3: SYMPHONY AI EXAMPLE */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Example" right="A Monday in the Life" />
        <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-2">See a Routine in Action</h1>
        <PageDivider />

        <p className="text-text-secondary mb-8">
          Symphony AI runs on its own Routines. Before the first one shipped, Monday mornings started with the founder reading 47 messages across four Slack channels and a KPI sheet to figure out what mattered that week. Here is what one Monday looks like now that the briefing Routine is live.
        </p>

        {/* Timeline */}
        <p className="font-heading text-sm font-semibold tracking-wider uppercase text-purple mb-4">The Timeline</p>
        <div className="bg-bg-secondary rounded-xl p-6 mb-8">
          <ol className="relative space-y-5">
            {[
              { time: '7:00:00 AM  Mon', event: 'The schedule fires; the Routine wakes up.', color: 'bg-cyan', text: 'text-cyan' },
              { time: '7:00:14 AM  Mon', event: 'Claude pulls 47 messages from #client-ops and #eng-alerts since last Monday.', color: 'bg-purple', text: 'text-purple' },
              { time: '7:00:38 AM  Mon', event: 'It reads the Q2 Pipeline Google Sheet for MRR, deal value, and churn deltas.', color: 'bg-indigo', text: 'text-indigo' },
              { time: '7:00:52 AM  Mon', event: 'A formatted briefing posts to #monday-briefing tagged @founder.', color: 'bg-warning', text: 'text-warning' },
              { time: '7:14 AM  Mon', event: 'The founder reads it over coffee, walks into the week with full context.', color: 'bg-success', text: 'text-success' },
            ].map((t, i, arr) => (
              <li key={t.time} className="flex gap-4 items-start relative">
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <span className={`w-3 h-3 rounded-full ${t.color}`} />
                  {i < arr.length - 1 && <span className="w-px flex-1 bg-border/40 mt-1 min-h-[36px]" />}
                </div>
                <div className="flex-1 pb-1">
                  <p className={`font-heading text-[11px] font-semibold tracking-wider uppercase ${t.text} mb-1`}>{t.time}</p>
                  <p className="text-text-secondary text-sm">{t.event}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Before / After */}
        <p className="font-heading text-sm font-semibold tracking-wider uppercase text-purple mb-4">
          Before the Routine <span className="text-text-tertiary mx-2">vs.</span> After the Routine
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-error/10 border-l-4 border-error rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-error mb-4">Before</p>
            <dl className="space-y-3">
              {[
                { label: 'Time gathering data', value: '90 minutes' },
                { label: 'Briefing arrives', value: 'Wednesday' },
                { label: 'Coverage', value: '3 of 8 channels' },
                { label: 'Cost per run', value: '1.5 hrs founder time' },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-text-tertiary text-xs">{row.label}</dt>
                  <dd className="font-heading text-base font-semibold text-text-secondary">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-success/10 border-l-4 border-success rounded-lg p-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-success mb-4">After</p>
            <dl className="space-y-3">
              {[
                { label: 'Time gathering data', value: '14 seconds' },
                { label: 'Briefing arrives', value: 'Monday 7:01 AM' },
                { label: 'Coverage', value: 'All channels + KPI sheet' },
                { label: 'Cost per run', value: '$0.34' },
              ].map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-text-tertiary text-xs">{row.label}</dt>
                  <dd className="font-heading text-base font-semibold text-white">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Result callout */}
        <div className="bg-purple/10 border-l-4 border-purple rounded-r-lg p-5">
          <p className="text-xs font-semibold tracking-wider uppercase text-warning mb-2">The Result</p>
          <p className="text-text-secondary text-sm">
            In 8 weeks, Symphony AI&rsquo;s founder has reclaimed 12 Monday mornings and never walked into a week blind again. You are about to build the same Routine for your business.
          </p>
        </div>

        <PageFooter page={3} />
      </section>

      {/* PAGE 4: STRATEGY - PICK YOUR FIRST ROUTINE */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Strategy" right="Pick Your First Routine" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Find Your First Automation</h1>
        <PageDivider />

        <p className="text-text-secondary italic mb-6">
          Symphony AI&rsquo;s first Routine was the Monday briefing because that was the meeting prep that ate our Sunday nights. Yours will be different. Spend 15 minutes with the audit below before you write a single line of config.
        </p>

        <div className="rounded-xl bg-bg-secondary p-6 text-center mb-8">
          <h3 className="font-heading text-lg font-semibold">&ldquo;What recurring task takes 30+ minutes and we keep meaning to delegate?&rdquo;</h3>
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">The 5-Question Pick-Your-Routine Audit</h3>

        {[
          { n: '1', label: 'Cadence:', question: 'How often does this task happen? Weekly is a great starting cadence.' },
          { n: '2', label: 'Time cost:', question: 'How many minutes does it take each time? Multiply by frequency.' },
          { n: '3', label: 'Inputs:', question: 'What sources does it pull from? Slack, Sheets, CRM, and email all qualify.' },
          { n: '4', label: 'Output:', question: 'What does the finished work look like? A message, a draft, a list, or a summary.' },
          { n: '5', label: 'Stakes:', question: 'If the Routine gets it 90% right, is that good enough on the first pass?' },
        ].map((item) => (
          <div key={item.n} className="flex gap-5 items-start bg-bg-secondary rounded-xl p-5 mb-3">
            <div className="shrink-0 w-9 h-9 bg-warning text-bg-primary rounded-full flex items-center justify-center font-heading font-bold text-sm">{item.n}</div>
            <div>
              <span className="font-heading text-sm font-semibold text-warning">{item.label}</span>
              <p className="text-text-secondary text-sm">{item.question}</p>
            </div>
          </div>
        ))}

        <h3 className="font-heading text-lg font-semibold text-success mt-8 mb-4">Top 5 Starter Routines (Ranked by Time Saved)</h3>
        {[
          { rank: '1', title: 'Monday Morning Business Digest', desc: 'Pulls Slack activity and KPIs into a Monday briefing. Saves ~90 minutes a week.', tag: 'Symphony AI started here' },
          { rank: '2', title: 'Nightly Overdue-Invoice Chase', desc: 'Reads QuickBooks aging, drafts Gmail follow-ups for founder review.' },
          { rank: '3', title: 'Weekly Content-Calendar Nudges', desc: 'Checks Notion calendar, pings owners for posts due within 48 hours.' },
          { rank: '4', title: 'Daily Pipeline Stand-Up', desc: 'Compares CRM stage changes, posts wins, losses, and stalls to the sales channel.' },
          { rank: '5', title: 'End-of-Quarter Re-Engagement', desc: 'Surfaces clients silent 60+ days, drafts tailored re-engagement emails per account.' },
        ].map((item) => (
          <div key={item.rank} className="grid grid-cols-[40px_1fr] gap-4 items-start bg-bg-secondary rounded-lg px-5 py-4 mb-2.5">
            <span className="text-purple font-heading font-bold text-2xl">{item.rank}</span>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="font-heading text-sm font-semibold">{item.title}</span>
                {item.tag && (
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-success bg-success/10 px-2 py-0.5 rounded-full ml-auto">{item.tag}</span>
                )}
              </div>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          </div>
        ))}

        <PageFooter page={4} />
      </section>

      {/* PAGE 5: TRIGGERS + SETUP + PRICING */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Setup" right="Triggers and Pricing" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">The Three Triggers, Translated</h1>
        <PageDivider />

        <p className="text-text-secondary mb-6">
          Every Routine fires on one of three triggers. Most operators only need the first one for years. Here is what each trigger does and when to reach for it.
        </p>

        <div className="space-y-4 mb-8">
          {[
            { name: 'Schedule', pitch: 'Cron expression. Best for recurring digests, weekly reports, daily check-ins.', example: 'Monday 7 AM  =  0 7 * * 1', color: 'border-purple', textColor: 'text-purple' },
            { name: 'API', pitch: 'A webhook URL. Best for "do this when X happens in another tool."', example: 'POST https://routines.claude.com/r/<id>', color: 'border-indigo', textColor: 'text-indigo' },
            { name: 'GitHub Event', pitch: 'Repo push, PR opened, issue labeled. Best for teams that ship code.', example: 'on: pull_request.opened, label = ready-review', color: 'border-cyan', textColor: 'text-cyan' },
          ].map((t) => (
            <div key={t.name} className={`bg-bg-secondary border-l-4 ${t.color} rounded-r-lg p-5`}>
              <h3 className="font-heading text-lg font-semibold mb-1">{t.name}</h3>
              <p className="text-text-secondary text-sm mb-2">{t.pitch}</p>
              <p className={`font-mono text-xs ${t.textColor}`}>{t.example}</p>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">Pro vs Max: Which Tier for a 10-Person Team</h3>
        <p className="text-text-secondary text-sm mb-5">
          Three daily Routines across 22 work days = 66 runs per month. Five daily Routines = 110 runs. Both fit comfortably inside the Pro tier. The math only flips to Max when you start running hourly cadences or wire Routines into customer-facing API endpoints.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-bg-secondary border-l-4 border-purple rounded-r-lg p-5">
            <p className="font-heading text-sm font-semibold text-purple mb-3">Claude Pro &nbsp;|&nbsp; $20/mo</p>
            <ul className="space-y-2 text-text-secondary text-sm">
              {['5 Routine runs per day', '~150 runs per month', 'Right for: 3-5 daily or weekly Routines', 'Right for: most 10-person teams'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-secondary border-l-4 border-indigo rounded-r-lg p-5">
            <p className="font-heading text-sm font-semibold text-indigo mb-3">Claude Max &nbsp;|&nbsp; $200/mo</p>
            <ul className="space-y-2 text-text-secondary text-sm">
              {['50 Routine runs per day', '~1,500 runs per month', 'Right for: hourly cadences', 'Right for: customer-facing API trigger'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-indigo shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-purple/10 rounded-lg px-6 py-4 text-center italic text-warning font-medium">
          Start on Pro. Move to Max only when you have proof of three Routines running daily.
        </div>

        <PageFooter page={5} />
      </section>

      {/* PAGE 6: BUILD PART 1 - FOUNDATION */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Hands-On" right="Build Part 1 of 3" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Lay the Foundation</h1>
        <PageDivider />

        {/* Prereq box */}
        <div className="bg-bg-secondary border-l-4 border-warning rounded-r-xl p-6 mb-6">
          <p className="font-heading text-xs font-semibold tracking-wider uppercase text-warning mb-3">Before You Start</p>
          <ul className="space-y-2 text-text-secondary text-sm">
            {[
              'Claude Code already installed and logged in (one-time setup, ~10 minutes)',
              'Active Claude Pro or Max subscription (covered on page 5)',
              'Admin access to your Slack workspace and KPI Google Sheet',
              'A folder on your computer where Routines will live',
              '60 minutes of focused time',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-warning shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-text-secondary mb-8">
          You are going to build the same Monday Morning Business Digest Symphony AI uses internally. Every step is a prompt you paste into Claude Code; the only typing required is filling in your channel and sheet names.
        </p>

        <BuildStep
          step="Step 1"
          time="3 min"
          title="Open Claude Code in Your Routines Folder"
          desc={`Use Finder or File Explorer to create a new folder anywhere on your computer. Symphony AI calls ours "symphony-routines." Open Claude Code and point it at this folder when it asks where to start. No commands required.`}
        />

        <BuildStep
          step="Step 2"
          time="10 min"
          title="Ask Claude to Write Your Routine"
          desc="Paste the prompt below into Claude Code. Edit the bracketed parts to match your business. Claude creates the Routine file with the right structure and a starter draft for you to refine."
          prompt={`Create a Routine called monday-briefing.

Trigger: schedule, Monday 7 AM America/New_York.

Pull last 7 days from Slack [#client-ops, #eng-alerts]
and KPIs from Google Sheet [Q2 Pipeline]. Compose a
briefing with three sections: Wins, Blockers, and
KPI Movement. Post to [#monday-briefing], tag [@founder].

Write the file and show it to me when done.`}
          tip={`Treat the prompt like onboarding instructions for a new analyst on day one. Be specific about format, tone, and what NOT to include. Vague prompts make vague briefings.`}
        />

        <BuildStep
          step="Step 3"
          time="10 min"
          title="Read Claude's Draft and Refine the Prompt"
          desc={`Claude shows you the draft. Read it carefully. Anything vague or missing? Tell Claude exactly what to tighten in plain English. Examples: "Limit Wins to 5 bullets" or "Always lead with the KPI that moved the most." Two or three rounds is normal.`}
        />

        <PageFooter page={6} />
      </section>

      {/* PAGE 7: BUILD PART 2 - CONNECT SOURCES */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Hands-On" right="Build Part 2 of 3" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Connect Your Data Sources</h1>
        <PageDivider />

        <p className="text-text-secondary mb-8">
          A Routine is only as useful as the data it can reach. Steps 4, 5, and 6 connect your Routine to Slack and Google Sheets, then nail down how the briefing should look. Total time: about 25 minutes.
        </p>

        <BuildStep
          step="Step 4"
          time="10 min"
          title="Connect Slack as a Source"
          desc={`Tell Claude to add Slack. A browser tab opens for Slack's approval screen; pick the workspace and grant access only to the channels the Routine actually needs.`}
          prompt={`Add the Slack connector to this Routine.
Grant read access only to [#client-ops, #eng-alerts].
Walk me through the approval step by step.`}
          tip={`Grant least-privilege access. Symphony AI's briefing reads two channels and writes to one. Wider permissions look harmless on day one and turn into a security review on day 90.`}
        />

        <BuildStep
          step="Step 5"
          time="10 min"
          title="Connect Your KPI Sheet"
          desc={`Same pattern as Slack. Claude installs the Google Sheets connector and walks you through Google's approval flow.`}
          prompt={`Add the Google Sheets connector.
Grant read-only access to [Q2 Pipeline] only.
Walk me through the approval.`}
        />

        <BuildStep
          step="Step 6"
          time="5 min"
          title="Format the Output the Way You Want"
          desc="The default briefing works, but yours should match how you actually consume info. Tell Claude exactly what the final briefing should look like."
          prompt={`Update the briefing format. Three sections:
1. Wins (max 5 bullets, lead with revenue)
2. Blockers (only items with no clear path forward)
3. KPI Movement (lead with the biggest delta)
Keep total under 200 words.`}
        />

        <PageFooter page={7} />
      </section>

      {/* PAGE 8: BUILD PART 3 - SCHEDULE, TEST, DEPLOY */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Hands-On" right="Build Part 3 of 3" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Schedule, Test, and Deploy</h1>
        <PageDivider />

        <p className="text-text-secondary mb-8">
          The last three steps take about 13 minutes plus one Monday of patience. By the end of this page, your Routine is live and you know it works because you have already watched it run.
        </p>

        <BuildStep
          step="Step 7"
          time="3 min"
          title="Verify the Schedule"
          desc={`Ask Claude to confirm the trigger. Specifically check the timezone: a default of UTC fires at the wrong time in your local zone, and "Monday 7 AM" by mistake means 2 AM ET.`}
          prompt={`Read the trigger in monday-briefing.
Confirm it fires Monday at 7 AM America/New_York.
If anything is off, fix it and show me the change.`}
        />

        <BuildStep
          step="Step 8"
          time="10 min"
          title="Test-Run the Routine"
          desc="Tell Claude to do a dry test first. Read the draft briefing Claude shows you. If it looks right, give the green light to ship the real one to Slack."
          prompt={`Run monday-briefing as a dry test. Show me the
briefing it would post, but do not send to Slack
yet. After my review, I will tell you to ship it.`}
        />

        <BuildStep
          step="Step 9"
          time="Ongoing"
          title="Activate and Monitor the First Real Run"
          desc="Tell Claude to turn on the schedule and add a fallback so silent failures never go unnoticed. The first three Mondays, read the briefing critically and refine the prompt; by week 4 it should feel like it was written by your sharpest analyst."
          prompt={`Enable monday-briefing on its schedule.
Add a fallback: if any run fails, post the
error to [#ops-alerts].`}
          tip={`Symphony AI added an on-failure fallback in week 2 after one silent miss. One line of config, zero silent failures since.`}
        />

        <div className="bg-success/10 border-l-4 border-success rounded-lg p-5 mt-4">
          <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-success">Result</span>
          <h3 className="font-heading text-xl font-semibold text-success mt-2 mb-1">Your Routine Is Live</h3>
          <p className="text-text-secondary text-sm">Total time: roughly 60 minutes. From now on, every Monday at 7 AM, your briefing arrives without you.</p>
        </div>

        <PageFooter page={8} />
      </section>

      {/* PAGE 9: UPGRADES */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">Level Up</span>
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Make It Smarter</h1>
        <PageDivider />

        <p className="text-text-secondary mb-8">
          Your first Routine works. Now make it better. These three upgrades are the same ones Symphony AI rolled out on its own Monday briefing in the first 90 days, plus the next two Routines we shipped after the briefing proved itself.
        </p>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-purple bg-bg-secondary rounded-r-xl p-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-purple mb-2">Upgrade 1</p>
            <h3 className="font-heading text-xl font-semibold mb-2">Add a Memory File</h3>
            <p className="text-text-secondary text-sm mb-3">
              Point the Routine at a CLAUDE.md file that captures recurring context: people, channels, KPI definitions, and last quarter&rsquo;s priorities. Briefings get sharper week over week instead of resetting every Monday.
            </p>
            <div className="bg-purple/10 rounded-lg px-4 py-3 text-sm">
              <span className="text-purple font-semibold">Symphony AI rollout:</span>{' '}
              <span className="text-text-secondary">Memory went live in week 3 after the briefing kept calling Greenfield Partners &ldquo;the new client&rdquo; eight weeks running.</span>
            </div>
          </div>

          <div className="border-l-4 border-warning bg-bg-secondary rounded-r-xl p-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-warning mb-2">Upgrade 2</p>
            <h3 className="font-heading text-xl font-semibold mb-2">Build the Next Two Routines</h3>
            <p className="text-text-secondary text-sm mb-3">
              Once the briefing is stable, ship the Nightly Overdue-Invoice Chase and the Weekly Content-Calendar Nudges. Same pattern, new connectors, 30 minutes each.
            </p>
            <div className="bg-warning/10 rounded-lg px-4 py-3 text-sm">
              <span className="text-warning font-semibold">Symphony AI rollout:</span>{' '}
              <span className="text-text-secondary">Both shipped within two weeks of the briefing. Together they reclaim about 4 hours per week with zero new headcount.</span>
            </div>
          </div>

          <div className="border-l-4 border-success bg-bg-secondary rounded-r-xl p-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-success mb-2">Upgrade 3</p>
            <h3 className="font-heading text-xl font-semibold mb-2">Add a Human Approval Step</h3>
            <p className="text-text-secondary text-sm mb-3">
              For Routines that send anything outside the company, like invoice chases or re-engagement emails, add a draft-only-then-post-to-Slack-for-approval step before delivery. The Routine still does the work; a human still owns the send.
            </p>
            <div className="bg-success/10 rounded-lg px-4 py-3 text-sm">
              <span className="text-success font-semibold">Rule of thumb:</span>{' '}
              <span className="text-text-secondary">If the Routine&rsquo;s output reaches a customer, a human approves it. If it reaches your team, it ships automatically.</span>
            </div>
          </div>
        </div>

        <PageFooter page={9} />
      </section>

      {/* PAGE 10: MEASURE */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Measurement" right="Routine Scorecard" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Measure What Matters</h1>
        <PageDivider />

        <p className="text-text-secondary mb-6">
          Routines are easy to ship and easy to forget. Track these five metrics from week one to know whether yours is delivering value or quietly drifting.
        </p>

        <div className="space-y-3 mb-8">
          {[
            { n: '1', metric: 'Hours Saved Per Week', before: 'Manual time x cadence', after: 'Subtract Routine handle', desc: 'The clearest ROI metric. Multiply minutes saved by frequency. The Monday briefing alone reclaims ~90 minutes per week.' },
            { n: '2', metric: 'Run Success Rate', before: 'Untracked', after: 'Above 95% on schedule', desc: 'Of scheduled runs, how many completed without an error. Anything below 95% means you have a data-source or auth problem.' },
            { n: '3', metric: 'Time to First Value', before: 'Hours of manual prep', after: 'Under 30 seconds', desc: 'How long between the trigger firing and the result landing. Routines should clear this in under a minute.' },
            { n: '4', metric: 'Cost Per Run', before: '$15-30 in human time', after: '$0.20-0.50 per run', desc: 'Total monthly Claude tier divided by Routine runs. Monday briefing costs Symphony AI $0.34 per run.' },
            { n: '5', metric: 'Operator Trust Score', before: 'Briefing ignored', after: 'Briefing acted on', desc: 'A 1-to-5 weekly rating from the person who reads the output. If it drifts below 4, refine the prompt before the trust dies.' },
          ].map((item) => (
            <div key={item.n} className="bg-bg-secondary rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="shrink-0 w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">{item.n}</div>
                <h4 className="font-heading text-base font-semibold">{item.metric}</h4>
              </div>
              <p className="text-text-secondary text-sm mb-3">{item.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-xs"><span className="text-text-tertiary">Before: </span><span className="text-error">{item.before}</span></div>
                <div className="text-xs"><span className="text-text-tertiary">Target: </span><span className="text-success">{item.after}</span></div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">ROI Quick Calculation</h3>
        <div className="bg-[#111827] rounded-lg p-5 font-mono text-[13px] leading-relaxed text-text-secondary overflow-x-auto whitespace-pre-wrap mb-4">
{`Hours saved per week:        _____ hrs
Hourly cost of that work:    $_____ /hr
Weekly savings:              _____ x _____ = $_____

Monthly ROI:  (weekly savings x 4) - $20 (Claude Pro) = $_____`}
        </div>

        <div className="bg-purple/10 rounded-lg px-6 py-4 text-center italic text-warning font-medium">
          Symphony AI hit positive ROI in week 1. Three Routines later, the math is not even close.
        </div>

        <PageFooter page={10} />
      </section>

      {/* PAGE 11: DECISION TABLE */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-b-[3px] border-purple">
        <EyebrowPair left="Decision" right="Routines vs the Field" />
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">When Routines Win, When They Do Not</h1>
        <PageDivider />

        <p className="text-text-secondary mb-6">
          Claude Code Routines, n8n, and Zapier all automate work, but they win in different lanes. Use this table to pick the right tool the first time instead of rebuilding in month three.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-bg-secondary">
                <th className="text-left px-4 py-3 font-heading font-semibold border-b border-border/30">Use Case</th>
                <th className="text-left px-4 py-3 font-heading font-semibold border-b border-border/30">Routines</th>
                <th className="text-left px-4 py-3 font-heading font-semibold border-b border-border/30">n8n</th>
                <th className="text-left px-4 py-3 font-heading font-semibold border-b border-border/30">Zapier</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                ['Summarize messy text', 'Best', 'Weak', 'Weak'],
                ['Move data between known apps', 'Fine', 'Best', 'Best'],
                ['Draft an email a human reviews', 'Best', 'Weak', 'Weak'],
                ['Strict if-this-then-that', 'Overkill', 'Best', 'Best'],
                ['8,000+ pre-built integrations', 'No', 'No', 'Best'],
                ['Self-hosted control + cost', 'No', 'Best', 'No'],
                ['Setup in under 60 minutes', 'Best', 'Fine', 'Best'],
              ].map((row, ri) => (
                <tr key={row[0]} className={ri % 2 === 0 ? 'bg-bg-secondary/50' : ''}>
                  <td className="px-4 py-3 text-text-secondary">{row[0]}</td>
                  {row.slice(1).map((cell, ci) => {
                    const colorMap = { Best: 'text-success', Fine: 'text-cyan', Weak: 'text-warning', No: 'text-error', Overkill: 'text-warning' };
                    return (
                      <td key={ci} className={`px-4 py-3 font-semibold ${colorMap[cell] || 'text-text-secondary'}`}>{cell}</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">Quick Decision Guide</h3>
        {[
          { scenario: 'your task is "read messy stuff and summarize it"', rec: 'Routines. Nothing else handles unstructured text this well.', color: 'border-l-success' },
          { scenario: 'your task is "when X in app A, then Y in app B"', rec: 'Zapier or n8n. Routines work but you are paying for intelligence you do not need.', color: 'border-l-warning' },
          { scenario: 'you want one tool for both kinds of work', rec: 'Start with Routines and call n8n through an API trigger when you need it.', color: 'border-l-purple' },
          { scenario: 'cost matters more than convenience', rec: 'Self-hosted n8n. Routines and Zapier both come out cheaper at low volume; n8n wins at scale.', color: 'border-l-cyan' },
        ].map((item) => (
          <div key={item.scenario} className={`${item.color} border-l-4 bg-bg-secondary rounded-r-lg p-4 mb-3`}>
            <p className="font-heading text-sm font-semibold mb-1">If {item.scenario}:</p>
            <p className="text-text-secondary text-sm">{item.rec}</p>
          </div>
        ))}

        <PageFooter page={11} />
      </section>

      {/* PAGE 12: SCALE + CTA */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <span className="inline-block font-heading text-xs font-semibold tracking-[1.5px] uppercase text-warning mb-3">What Comes Next</span>
        <h1 className="text-3xl md:text-4xl font-bold font-heading leading-tight mb-2">Your Next Three Routines</h1>
        <PageDivider />

        <p className="text-text-secondary mb-6">
          Your first Routine is live. Here is the order Symphony AI recommends shipping the next three, plus the one we should build with you when you are ready to wire Routines into your full stack.
        </p>

        <div className="space-y-3 mb-8">
          {[
            { phase: 'Next 1', title: 'Nightly Overdue-Invoice Chase', desc: 'QuickBooks aging in, Gmail drafts out. Founder approves with one click.', color: 'border-l-success' },
            { phase: 'Next 2', title: 'Weekly Content-Calendar Nudges', desc: 'Notion calendar in, Slack pings out. Posts due in 48 hours get owner-tagged.', color: 'border-l-warning' },
            { phase: 'Next 3', title: 'Daily Pipeline Stand-Up', desc: 'CRM stage changes in, sales-channel summary out. Wins, losses, and stalls at 8:55 AM.', color: 'border-l-purple' },
          ].map((item) => (
            <div key={item.phase} className={`${item.color} border-l-4 bg-bg-secondary rounded-r-lg p-5`}>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-heading text-[11px] font-semibold tracking-wider uppercase text-text-tertiary">{item.phase}</span>
                <span className="font-heading text-base font-semibold">{item.title}</span>
              </div>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-lg font-semibold text-warning mb-3">The One Symphony Should Build With You</h3>
        <p className="text-text-secondary text-sm mb-8">
          When you are ready to wire Routines into your CRM, billing, and ticketing with proper auth, audit logs, and human-approval gates, that is a custom engagement. Three to five connected Routines, full guardrails, and your team trained to own them.
        </p>

        <GuideFooterCTA
          headline="You shipped your first Routine. Imagine five of them running your operations."
          body="Symphony AI wires Routines into your full stack with auth, audit, and guardrails. No subscriptions, no lock-in, just systems that ship."
        />

        <PageFooter page={12} />
      </section>
    </div>
  );
}
