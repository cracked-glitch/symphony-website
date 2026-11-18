// symphonylabs.ai/nathan  — copy this file to src/app/nathan/page.js in the symphony-website repo.
// Self-contained: no imports beyond React, inline styles, works with the existing Next.js App Router.
export const metadata = {
  title: "Nathan Settlage: a Fortune 100 AI rollout, decomposed",
  description:
    "How I deploy AI with customers and take new things from zero to one: a Delta Air Lines rollout decomposed, Symphony Clips, a clip studio run by AI agents, and the product I ship as CPO at PinnTag.",
};

const s = {
  main: { maxWidth: 760, margin: "0 auto", padding: "40px 16px 64px", color: "#F3F4F6", font: "16px/1.5 Inter, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" },
  h1: { fontSize: 30, lineHeight: 1.2, margin: "0 0 8px" },
  h2: { fontSize: 21, margin: "40px 0 10px", paddingBottom: 6, borderBottom: "1px solid #374151" },
  h3: { fontSize: 17, margin: "20px 0 6px" },
  lede: { fontSize: 18, color: "#9CA3AF" },
  num: { fontSize: 15, color: "#9CA3AF", marginBottom: 24 },
  video: { position: "relative", paddingTop: "56.25%", background: "#1F2937", borderRadius: 8, overflow: "hidden", margin: "16px 0" },
  ph: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF", textAlign: "center", padding: 16 },
  table: { borderCollapse: "collapse", width: "100%", fontSize: 14, margin: "8px 0 16px" },
  th: { border: "1px solid #374151", padding: "6px 8px", textAlign: "left", background: "#3F3A1A" },
  td: { border: "1px solid #374151", padding: "6px 8px", verticalAlign: "top" },
  box: { border: "1px solid #374151", borderRadius: 8, padding: "14px 16px", margin: "12px 0" },
  cta: { display: "inline-block", margin: "8px 8px 0 0", padding: "8px 14px", border: "1px solid #93C5FD", borderRadius: 6, color: "#93C5FD", textDecoration: "none", fontWeight: 600 },
  footer: { marginTop: 48, color: "#9CA3AF", fontSize: 14, borderTop: "1px solid #374151", paddingTop: 16 },
};

export default function NathanPage() {
  return (
    <main style={s.main}>
      <h1 style={s.h1}>Nathan Settlage</h1>
      <p style={s.lede}>I deploy AI with customers, and I take new things from zero to one. One example, decomposed, below.</p>
      <p style={s.num}>Chief Product Officer, PinnTag (seed-stage AI) · ex-Delta Air Lines AI delivery lead · Georgia Tech finance · relocating to New York · <a href="mailto:nathansettlage@gmail.com" style={{ color: "#93C5FD" }}>nathansettlage@gmail.com</a></p>


      <h2 style={s.h2}>A Fortune 100 AI rollout, decomposed</h2>
      <p><strong>The result first.</strong> Effort per feature in the first pilot went from about 96 hours and a team of 10 to about 5 hours and three people, and AI-generated features shipped to production. The pattern was repeated across five Delta Air Lines departments, a non-developer in Airport Operations shipped production-bound features, and AI-assisted prototyping became a permanent practice in Delta's Digital organization.</p>

      <h3 style={s.h3}>1. The problem, in the sponsor's words</h3>
      <p>Delta's product teams had more approved work than delivery capacity. The ask was not "use AI"; it was "find out whether AI-assisted delivery can move real backlog items to production inside our controls, and if it can, make it the way we work."</p>

      <h3 style={s.h3}>2. What I needed to know before touching a tool</h3>
      <ul>
        <li>Who owns the outcome in each department, and the one backlog item they would accept as the test.</li>
        <li>The baseline: a comparable feature took about 96 hours and a team of 10, by the Employee Services team's own retrospective estimate.</li>
        <li>The controls a change must pass to go live: code review, the CI/CD pipeline, security scanning. Nothing bypassed them.</li>
        <li>Where data and environments lived, and who could grant access the same week.</li>
      </ul>

      <h3 style={s.h3}>3. The pilot design</h3>
      <ul>
        <li>One real backlog item per team, never a toy problem. Five departments: Employee Services, Airport Operations, Digital, Crew, Reservations.</li>
        <li>Environment setup as mandatory pre-work; people arrived able to build.</li>
        <li>A shaping accelerator to turn the idea into a spec in the room, spec-driven development with Kiro, then a rapid build session: idea to working software in one sitting.</li>
        <li>A measured before-and-after on effort per feature, published to the sponsor.</li>
      </ul>

      <h3 style={s.h3}>4. The metric</h3>
      <table style={s.table}>
        <thead><tr><th style={s.th}>Pilot</th><th style={s.th}>Baseline</th><th style={s.th}>AI-enabled</th><th style={s.th}>Note</th></tr></thead>
        <tbody>
          <tr><td style={s.td}>Employee Services</td><td style={s.td}>about 96 hours, a team of 10</td><td style={s.td}>about 5 hours, three people</td><td style={s.td}>baseline from the team's retrospective</td></tr>
          <tr><td style={s.td}>Airport Operations</td><td style={s.td}>roadmap items scheduled for future years</td><td style={s.td}>shipped in the current cycle</td><td style={s.td}>built by a non-developer subject-matter expert</td></tr>
          <tr><td style={s.td}>Digital (Fly Delta app, Delta Concierge)</td><td style={s.td}>spec documents, weeks of alignment</td><td style={s.td}>a working prototype in the three-day product workshop</td><td style={s.td}>proactive outreach to customers during irregular operations</td></tr>
        </tbody>
      </table>

      <h3 style={s.h3}>5. What broke</h3>
      <ul>
        <li>The bottleneck moved. Once build was fast, review and deployment became the queue.</li>
        <li>Text specs left too much room; stakeholders imagined different products and rework showed up downstream.</li>
        <li>Security sat as a gate at the end, which would have turned a fast pipeline into a slow one.</li>
      </ul>

      <h3 style={s.h3}>6. What I changed</h3>
      <ul>
        <li>Rebuilt the path to production with the owners of review, pipeline, and security in the room: AI-assisted code review immediately after generation, automated CI/CD, and security scanning at generation time and at deployment. Controls got stronger while cycle time dropped.</li>
        <li>Moved shaping to prototypes. Leaders aligned on a running prototype instead of a spec; Delta's Digital teams adopted it as a permanent practice.</li>
        <li>Codified the pattern into playbooks, built a Product Owner agent in Copilot Studio that drafts features from documentation, and taught it to over 400 product owners, product managers, and Scrum Masters. Participants ranked the sessions above the vendor-led training.</li>
      </ul>

      <h3 style={s.h3}>7. What I would tell a CTO before their rollout</h3>
      <ul>
        <li>Measure the baseline on day one; the number is the adoption engine.</li>
        <li>Put the review, pipeline, and security owners in the pilot design, not at the end of it.</li>
        <li>Start with the team's own backlog and make setup a condition of attendance.</li>
        <li>Expect the bottleneck to move twice; plan the second move before the first lands.</li>
      </ul>

      <h2 style={s.h2}>What I ship now</h2>
      <h3 style={s.h3}>Symphony Clips: a clip studio run by AI agents</h3>
      <p><strong>The result first.</strong> I launched <a href="https://symphonyclips.com" style={{ color: "#93C5FD" }}>Symphony Clips</a> at the end of October 2026. In its first three weeks the system has researched and contacted 827 prospects, cut and sent more than 600 personalized spec clips, drawn 189 replies, and turned that into 10 paying clients and hundreds of finished, captioned short-form clips delivered. The customers are stand-up comedians first, then podcasters, speakers, realtors, and creators. I am one person; the AI agents do the volume.</p>

      <h3 style={s.h3}>How it works, end to end</h3>
      <table style={s.table}>
        <thead><tr><th style={s.th}>Step</th><th style={s.th}>What the agents do</th><th style={s.th}>What I do</th></tr></thead>
        <tbody>
          <tr><td style={s.td}>1. Find leads</td><td style={s.td}>Claude research agents work fixed lanes every night (club lineups, podcast directories, speaker bureaus), score each prospect, check for a usable public video and a real email or contact form, and drop duplicates and do-not-contact names.</td><td style={s.td}>Set the lanes and the scoring rules.</td></tr>
          <tr><td style={s.td}>2. Cut a spec clip</td><td style={s.td}>My software pulls the prospect's own public set, transcribes it, picks the strongest bit, reframes it to vertical with a smooth virtual camera, and burns in phrase-by-phrase captions with the active word highlighted.</td><td style={s.td}>Wrote the cutting, reframing, and caption engine.</td></tr>
          <tr><td style={s.td}>3. AI quality check</td><td style={s.td}>Automated checks look at a frame grid for crop jumps and a speaker drifting out of frame, flag captions that break on weak words, catch doubled or clipped audio, and confirm each private clip page plays the right video before anything is sent.</td><td style={s.td}>Watch every clip as the final pass.</td></tr>
          <tr><td style={s.td}>4. Outreach</td><td style={s.td}>Agents write a short personal email around the clip (where it came from, that it is theirs to post, the price) or fill the prospect's contact form, send from four warmed domains under daily caps, and thread follow-ups from the same mailbox.</td><td style={s.td}>Approve the batches; take calls and venue meetings.</td></tr>
          <tr><td style={s.td}>5. Replies and checkout</td><td style={s.td}>An inbox agent reads every reply across the mailboxes, updates the tracker, and drafts the answer. Stripe checkout collects which set, notes, and caption preferences, so there is no intake form to chase.</td><td style={s.td}>Approve anything involving money or a paying client.</td></tr>
          <tr><td style={s.td}>6. Delivery</td><td style={s.td}>The full set is cut into a batch of clips, run through the same checks, and published to the client's own private clip page with download links; the delivery email is drafted in thread.</td><td style={s.td}>Final review, then send.</td></tr>
        </tbody>
      </table>

      <h3 style={s.h3}>What I built, and what I still do myself</h3>
      <ul>
        <li><strong>The software is mine.</strong> A Python video pipeline (download, transcribe, select, reframe, caption, render), the QA tools, a private clip-page publisher on Cloudflare, the outreach sender with threading and caps, the reply checker, and the lead pool that splits fresh leads between agents and a second operator.</li>
        <li><strong>The operation runs on agents.</strong> Lead research, clip cutting, outreach, follow-ups, inbox triage, and individual client management happen in parallel Claude sessions, many of them overnight. The playbooks they follow are written down and get tighter every time a client or prospect points out a flaw.</li>
        <li><strong>I am the final pass and the closer.</strong> I watch every clip before it goes out, approve every send and every dollar, and handle the conversations that need a person: calls, venue visits, and custom requests.</li>
      </ul>

      <h3 style={s.h3}>How it is scaling</h3>
      <ul>
        <li>Volume: from a few dozen hand-picked comedians a day to 80 new prospects and up to 100 follow-ups a day across four sending domains, with no added headcount.</li>
        <li>Markets: the same engine now serves comedians, podcasters, company podcasts, speakers, realtors, and creators, each with its own landing page and offer.</li>
        <li>Recurring revenue: a monthly "Lineup Clips" subscription for comedy clubs, where I sell in person and the agents run delivery.</li>
        <li>Quality: when a professional comedian flagged a jerky crop and doubled audio, both were fixed in the engine the same week and every site sample was re-rendered. Feedback becomes a rule the agents enforce, not a one-off fix.</li>
      </ul>

      <div style={s.box}>
        <p><strong>PinnTag, Chief Product Officer (seed-stage AI local commerce).</strong> I started as the consultant who reviewed the AI codebase and wrote the architecture assessment, then prototyped a background marketing agent: it reads a merchant's own data (sales curve, inventory, brand voice) and public signals (weather, holidays, local events) and writes three ready-to-post campaigns per goal, each citing the signal that produced it, approved in one tap. That engagement became the CPO seat. Since then: onboarding redesigned, releases from every three to four months to weekly with a team in India, a 474-item launch list cut to 36, and Atlanta's BeltLine venue corridor opened in person, the first venues signed door to door; multiple venues are live, the list is growing, and a weekly scorecard goes to investors unchanged.</p>
      </div>

      <h2 style={s.h2}>Background</h2>
      <ul>
        <li>Delta Air Lines, 2021 to 2026: Enterprise Agile Coach, then Senior Enterprise AI and Agile Coach (AI delivery lead). Founding team of Delta Concierge. System administrator and strategy owner for the 5,000-user Agility tool. SAFe 6.0 Practice Consultant.</li>
        <li>Capgemini, 2019 to 2021: Lean Six Sigma and automation engagements for a Class I railroad and McDonald's; coached teams in six countries.</li>
        <li>Symphony AI, founder: Symphony Clips (above), hands-on Claude trainings and skills with eval suites; automated trading systems on the Alpaca and Kalshi APIs.</li>
        <li>Georgia Institute of Technology, B.S.B.A. Finance (2019); University of Oxford (2016). 2,000+ options trades.</li>
      </ul>

      <p>
        <a style={s.cta} href="/nathan/Nathan_Settlage_Resume.pdf">Resume (PDF)</a>
        <a style={s.cta} href="https://www.linkedin.com/in/nathan-settlage">LinkedIn</a>
        <a style={s.cta} href="mailto:nathansettlage@gmail.com">Email</a>
      </p>

      <footer style={s.footer}>Everything on this page is from my own work and is defensible on a reference call. Relocating to New York; remote works too.</footer>
    </main>
  );
}
