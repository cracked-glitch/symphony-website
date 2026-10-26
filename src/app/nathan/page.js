// symphonylabs.ai/nathan  — copy this file to src/app/nathan/page.js in the symphony-website repo.
// Self-contained: no imports beyond React, inline styles, works with the existing Next.js App Router.
export const metadata = {
  title: "Nathan Settlage: a Fortune 100 AI rollout, decomposed",
  description:
    "How I deploy AI with customers and take new things from zero to one: a Delta Air Lines rollout decomposed, the product I ship as CPO at PinnTag, and the product I ship now.",
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
      <div style={s.box}>
        <p><strong>PinnTag, Chief Product Officer (seed-stage AI local commerce).</strong> I started as the consultant who reviewed the AI codebase and wrote the architecture assessment, then prototyped a background marketing agent: it reads a merchant's own data (sales curve, inventory, brand voice) and public signals (weather, holidays, local events) and writes three ready-to-post campaigns per goal, each citing the signal that produced it, approved in one tap. That engagement became the CPO seat. Since then: onboarding redesigned, releases from every three to four months to weekly with a team in India, a 474-item launch list cut to 36, and Atlanta's BeltLine venue corridor opened in person, the first venues signed door to door; multiple venues are live, the list is growing, and a weekly scorecard goes to investors unchanged.</p>
      </div>

      <h2 style={s.h2}>Background</h2>
      <ul>
        <li>Delta Air Lines, 2021 to 2026: Enterprise Agile Coach, then Senior Enterprise AI and Agile Coach (AI delivery lead). Founding team of Delta Concierge. System administrator and strategy owner for the 5,000-user Agility tool. SAFe 6.0 Practice Consultant.</li>
        <li>Capgemini, 2019 to 2021: Lean Six Sigma and automation engagements for a Class I railroad and a national restaurant chain; coached teams in six countries.</li>
        <li>Symphony AI, founder: hands-on Claude trainings and skills with eval suites; automated trading systems on the Alpaca and Kalshi APIs.</li>
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
