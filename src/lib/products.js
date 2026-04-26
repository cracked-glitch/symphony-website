// Single source of truth for everything sold under /suite.
// Add new products here; pages and checkout pick them up automatically.

export const suiteProducts = [
  {
    slug: 'manager-pack',
    name: 'Symphony Manager Pack',
    tagline: 'Fourteen ready-to-run prompts for the work that eats your week.',
    blurb:
      'Performance reviews, PIPs, promotion cases, weekly 1:1s, standup digests, and the hard conversations. Calibrated, tested, and tuned to produce defensible drafts in minutes.',
    price: 59,
    currency: 'USD',
    license: 'Single seat. Lifetime updates.',
    variantId: '1580083',
    checkoutUrl: 'https://symphonyai.lemonsqueezy.com/checkout/buy/ef3eb227-e1a2-4471-8544-07ed851cde52',
    pages: 14,
    format: 'PDF + 14 individual prompt files',
    promptCount: 14,
    relatedGuide: {
      title: 'The Art of the Prompt',
      href: '/docs/prompting-guide',
    },
    badges: ['Lifetime Access', 'No Subscription', 'Tested on Real Work'],
    groupings: [
      {
        title: 'Performance Reviews',
        prompts: [1, 2, 3, 4, 7],
      },
      {
        title: 'Compensation & Calibration',
        prompts: [6, 8],
      },
      {
        title: 'Recurring Conversations',
        prompts: [9, 10],
      },
      {
        title: 'Difficult Conversations & Feedback',
        prompts: [5, 13],
      },
      {
        title: 'Team Communication & Problem-Solving',
        prompts: [11, 12, 14],
      },
    ],
    prompts: [
      {
        number: 1,
        title: 'Annual Review, Senior Direct Report',
        whatItDoes:
          'Drafts behaviorally anchored annual reviews using SBI structure that survive calibration committee and HR scrutiny.',
        whenToUse:
          'Annual review cycle for tenured direct reports (12+ months) needing a draft defensible at compensation committee.',
        outputType: 'locked-range',
      },
      {
        number: 2,
        title: 'Annual Review, Junior Direct Report',
        whatItDoes:
          'Drafts annual reviews for newer direct reports (under 18 months) emphasizing ramp trajectory and learning velocity over mature performance.',
        whenToUse:
          'Annual review cycle for direct reports with under 18 months tenure focused on ramp speed and developmental coaching.',
        outputType: 'locked-range',
      },
      {
        number: 3,
        title: 'Mid-Year Check-in',
        whatItDoes:
          'Drafts a goal-tracking document that resets H2 priorities based on H1 progress without the weight of formal performance judgment.',
        whenToUse:
          'Mid-year cycle to reset priorities and surface what changed since H1 planning.',
        outputType: 'locked-range',
      },
      {
        number: 4,
        title: '30/60/90 Day New Hire Review',
        whatItDoes:
          'Drafts phase-appropriate new-hire reviews that scale from 30-day onboarding checks to 90-day full-scope ramp assessments.',
        whenToUse:
          'At 30, 60, or 90 days to document ramp progress and surface early risks or accelerators.',
        outputType: 'locked-range',
      },
      {
        number: 5,
        title: 'Performance Improvement Plan Draft',
        whatItDoes:
          'Drafts legally defensible PIPs with specific behavioral expectations, measurable criteria, and documented support.',
        whenToUse:
          'After documented performance feedback has not resulted in improvement; needs HR and legal review before delivery.',
        outputType: 'locked-range',
      },
      {
        number: 6,
        title: 'Promotion Case Brief',
        whatItDoes:
          'Drafts evidence-based promotion briefs with scope, impact, and peer calibration to survive committee scrutiny.',
        whenToUse:
          'Building a promotion case for calibration committee; requires demonstrated target-level scope, not future potential.',
        outputType: 'locked-range',
      },
      {
        number: 7,
        title: 'Peer Feedback Synthesis',
        whatItDoes:
          'Synthesizes raw peer feedback into coherent themes ranked by frequency, separating signal from noise.',
        whenToUse:
          'After collecting peer feedback from three or more respondents that needs to distill into actionable themes.',
        outputType: 'guideline',
      },
      {
        number: 8,
        title: 'Calibration Prep',
        whatItDoes:
          'Pressure-tests team rating distribution against expected curves and surfaces outliers with anticipatory committee talking points.',
        whenToUse:
          'Before calibration meetings to identify which proposed ratings will get challenged and prep your defense.',
        outputType: 'locked-range',
      },
      {
        number: 9,
        title: 'Weekly 1:1 Agenda',
        whatItDoes:
          'Drafts structured 1:1 agendas with specific questions calibrated to avoid status-report drift.',
        whenToUse:
          'Before every weekly 1:1, with context from last week, to surface signal the standup cannot capture.',
        outputType: 'guideline',
      },
      {
        number: 10,
        title: 'Skip-Level 1:1 Prep',
        whatItDoes:
          'Prepares skip-level conversations with ranked questions and guardrails that surface team health without undermining the direct manager.',
        whenToUse:
          'Quarterly or semi-annual skip-levels to listen for real signal about team dynamics and manager performance.',
        outputType: 'guideline',
      },
      {
        number: 11,
        title: 'Team Standup Digest',
        whatItDoes:
          'Converts messy standup notes into exec-readable digests ranked by impact on audience priority, not speaking order.',
        whenToUse:
          'Communicating standup output to a skip-level or cross-functional partners; extracts signal from noisy notes.',
        outputType: 'guideline',
      },
      {
        number: 12,
        title: 'Blocker Triage',
        whatItDoes:
          'Ranks competing blockers by impact and effort, recommends priority tier and next action for each.',
        whenToUse:
          'Sequencing known blockers when team capacity is constrained, or defending why a blocker is being deferred.',
        outputType: 'guideline',
      },
      {
        number: 13,
        title: 'Difficult Feedback Script',
        whatItDoes:
          'Drafts structured scripts for high-stakes feedback with core message, anticipated objections, and tone guardrails.',
        whenToUse:
          'Prior informal feedback has not shifted behavior; stakes high enough to rehearse the hard moments in advance.',
        outputType: 'locked-range',
      },
      {
        number: 14,
        title: 'Departure Communication',
        whatItDoes:
          'Drafts the full communication set for a departure: email, meeting talking points, and Slack variant. Aligned across all three channels.',
        whenToUse:
          'Announcing a team member departure (resignation, termination, transfer, or leave) to manage information flow.',
        outputType: 'locked-range',
      },
    ],
  },
];

export function getProduct(slug) {
  return suiteProducts.find((p) => p.slug === slug);
}
