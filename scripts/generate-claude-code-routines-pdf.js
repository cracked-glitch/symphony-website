const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'letter' });

// Brand colors
const PURPLE = [124, 58, 237];
const INDIGO = [99, 102, 241];
const CYAN = [6, 182, 212];
const DARK_BG = [10, 10, 10];
const DARK_SECONDARY = [31, 41, 55];
const CODE_BG = [17, 24, 39];
const WHITE = [255, 255, 255];
const TEXT_SECONDARY = [209, 213, 219];
const TEXT_TERTIARY = [156, 163, 175];
const SUCCESS = [16, 185, 129];
const WARNING = [245, 158, 11];
const ERROR = [239, 68, 68];

const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN = 54;
const CONTENT_W = PAGE_W - 2 * MARGIN;
const TOTAL_PAGES = 12;

let currentY = MARGIN;

function setFont(style = 'normal', size = 11) {
  doc.setFontSize(size);
  if (style === 'bold') {
    doc.setFont('helvetica', 'bold');
  } else if (style === 'italic') {
    doc.setFont('helvetica', 'italic');
  } else if (style === 'bolditalic') {
    doc.setFont('helvetica', 'bolditalic');
  } else if (style === 'mono') {
    doc.setFont('courier', 'normal');
  } else if (style === 'monobold') {
    doc.setFont('courier', 'bold');
  } else {
    doc.setFont('helvetica', 'normal');
  }
}

function setColor(rgb) {
  doc.setTextColor(rgb[0], rgb[1], rgb[2]);
}

function drawRect(x, y, w, h, fillColor) {
  doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
  doc.rect(x, y, w, h, 'F');
}

function drawLine(x1, y1, x2, y2, color, width = 1) {
  doc.setDrawColor(color[0], color[1], color[2]);
  doc.setLineWidth(width);
  doc.line(x1, y1, x2, y2);
}

function drawGradientBar(x, y, w, h) {
  const steps = 20;
  const stepW = w / steps;
  for (let i = 0; i < steps; i++) {
    const t = i / steps;
    const r = Math.round(PURPLE[0] + (INDIGO[0] - PURPLE[0]) * t);
    const g = Math.round(PURPLE[1] + (INDIGO[1] - PURPLE[1]) * t);
    const b = Math.round(PURPLE[2] + (INDIGO[2] - PURPLE[2]) * t);
    doc.setFillColor(r, g, b);
    doc.rect(x + i * stepW, y, stepW + 0.5, h, 'F');
  }
}

function pageFooter(pageNum, total = TOTAL_PAGES) {
  setFont('normal', 8);
  setColor(TEXT_TERTIARY);
  doc.text('Symphony AI  |  Strategic AI Consulting', MARGIN, PAGE_H - 30);
  doc.text(`${pageNum} / ${total}`, PAGE_W - MARGIN, PAGE_H - 30, { align: 'right' });
  drawLine(MARGIN, PAGE_H - 42, PAGE_W - MARGIN, PAGE_H - 42, [50, 50, 50], 0.5);
}

function newPage() {
  doc.addPage();
  currentY = MARGIN;
}

function writeWrapped(text, x, maxW, lineH) {
  const lines = doc.splitTextToSize(text, maxW);
  lines.forEach((line) => {
    doc.text(line, x, currentY);
    currentY += lineH;
  });
  return lines.length;
}

function pageHeader(eyebrow, title, eyebrowColor = WARNING) {
  setFont('bold', 9);
  setColor(eyebrowColor);
  doc.text(eyebrow, MARGIN, currentY);
  currentY += 25;

  setFont('bold', 26);
  setColor(WHITE);
  doc.text(title, MARGIN, currentY);
  currentY += 15;
  drawGradientBar(MARGIN, currentY, 180, 4);
  currentY += 22;
}

function codeBlock(lines, label = null) {
  const padX = 14;
  const padY = 14;
  const lineH = 12;
  const fontSize = 8.5;
  const labelH = label ? 16 : 0;
  const blockH = padY * 2 + labelH + lines.length * lineH;
  drawRect(MARGIN, currentY, CONTENT_W, blockH, CODE_BG);
  if (label) {
    setFont('bold', 7.5);
    setColor(CYAN);
    doc.text(label, MARGIN + padX, currentY + 14);
  }
  setFont('mono', fontSize);
  setColor([220, 230, 240]);
  lines.forEach((line, i) => {
    doc.text(line, MARGIN + padX, currentY + padY + 8 + labelH + i * lineH);
  });
  currentY += blockH + 8;
}

function proTip(text, color = PURPLE) {
  const lines = doc.splitTextToSize(text, CONTENT_W - 90);
  const blockH = 10 + lines.length * 11 + 8;
  drawRect(MARGIN, currentY, CONTENT_W, blockH, [25, 18, 45]);
  drawLine(MARGIN, currentY, MARGIN, currentY + blockH, color, 3);
  setFont('bold', 8);
  setColor(color);
  doc.text('PRO TIP', MARGIN + 12, currentY + 16);
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  lines.forEach((line, i) => {
    doc.text(line, MARGIN + 70, currentY + 16 + i * 11);
  });
  currentY += blockH + 6;
}

function buildStep({ step, time, title, desc, code, codeLabel, tip }) {
  setFont('bold', 8);
  setColor(WARNING);
  doc.text(step.toUpperCase(), MARGIN, currentY);
  setFont('bold', 8);
  setColor(CYAN);
  doc.text(time, MARGIN + 60, currentY);
  currentY += 14;

  setFont('bold', 13);
  setColor(WHITE);
  doc.text(title, MARGIN, currentY);
  currentY += 14;

  setFont('normal', 9.5);
  setColor(TEXT_SECONDARY);
  writeWrapped(desc, MARGIN, CONTENT_W, 13);
  currentY += 4;

  if (code && code.length) {
    codeBlock(code, codeLabel);
  }

  if (tip) {
    proTip(tip);
  }

  currentY += 8;
}

// ============================================================
// PAGE 1: COVER
// ============================================================
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

setFont('bold', 9);
setColor(WARNING);
doc.text('OPERATOR PLAYBOOK', MARGIN, 100);

setFont('bold', 30);
setColor(WHITE);
doc.text('Your First Claude Code', MARGIN, 150);
doc.text('Routine in Under 60 Minutes', MARGIN, 184);

drawGradientBar(MARGIN, 204, 180, 4);

setFont('italic', 17);
setColor(PURPLE);
doc.text('Automate One Weekly Task This Afternoon', MARGIN, 240);

drawRect(MARGIN, 270, CONTENT_W, 122, DARK_SECONDARY);
setFont('bold', 9);
setColor(WARNING);
doc.text('ABOUT THIS GUIDE', MARGIN + 16, 293);
setFont('normal', 10);
setColor(TEXT_SECONDARY);
const aboutLines = doc.splitTextToSize(
  'A complete walkthrough for shipping your first Claude Code Routine: an automated workflow that runs on a schedule, an API call, or a repo event. See the same Monday morning briefing Routine Symphony AI runs internally, then build it for your business in three to nine focused steps.',
  CONTENT_W - 32
);
aboutLines.forEach((line, i) => {
  doc.text(line, MARGIN + 16, 313 + i * 14);
});
setFont('normal', 9);
setColor(TEXT_TERTIARY);
doc.text('Written for operators, owner-operators, and ops leads. No developer required.', MARGIN + 16, 365);
doc.text('Symphony AI  |  Strategic AI Consulting', MARGIN + 16, 380);

// Services
const services = [
  { title: 'Custom AI Agents', desc: 'Production-ready agents built around your workflows.', color: PURPLE },
  { title: 'Workflow Automation', desc: 'Routines, MCP servers, and pipelines that run themselves.', color: INDIGO },
  { title: 'Hands-On Training', desc: 'Your team learns to ship Routines, not just use them.', color: CYAN },
];
const svcW = (CONTENT_W - 20) / 3;
services.forEach((svc, i) => {
  const sx = MARGIN + i * (svcW + 10);
  const sy = 440;
  drawRect(sx, sy, svcW, 80, DARK_SECONDARY);
  drawLine(sx, sy, sx + svcW, sy, svc.color, 3);
  setFont('bold', 9);
  setColor(WHITE);
  doc.text(svc.title, sx + 10, sy + 22);
  setFont('normal', 8);
  setColor(TEXT_TERTIARY);
  const svcLines = doc.splitTextToSize(svc.desc, svcW - 20);
  svcLines.forEach((line, j) => {
    doc.text(line, sx + 10, sy + 38 + j * 11);
  });
});

setFont('italic', 9);
setColor(TEXT_TERTIARY);
doc.text('No hype, no hallucinations, just systems that ship.', PAGE_W / 2, 548, { align: 'center' });

pageFooter(1);

// ============================================================
// PAGE 2: WHAT CLAUDE CODE ROUTINES ACTUALLY ARE
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('CONCEPT  |  DEFINITION', 'What Claude Code Routines Are');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'A Claude Code Routine is a saved instruction set that runs on a trigger. The trigger fires (Monday at 7 AM, an inbound webhook, a new commit), Claude wakes up, follows your instructions, calls whatever tools it needs, and posts the result wherever you tell it to. No babysitting, no chat window, no clicking Run.',
  MARGIN, CONTENT_W, 15
);
currentY += 8;

// Three columns
const colW = (CONTENT_W - 20) / 3;
const colColors = [ERROR, WARNING, SUCCESS];
const colTitles = ['Cron Job', 'Zapier Workflow', 'Claude Code Routine'];
const colSubtitles = ['The Dumb Timer', 'The Rule Mover', 'The Operator'];
const colItems = [
  ['Same script every run', 'Breaks when data shifts', 'No language understanding', 'Fails silently'],
  ['Moves data between apps', 'One trigger, one fixed path', 'Pricey at any scale', 'Breaks on API changes'],
  ['Reads, decides, reports', 'Adapts to messy inputs', 'Connects to anything via MCP', 'Explains what it did'],
];

colTitles.forEach((title, i) => {
  const cx = MARGIN + i * (colW + 10);
  const cy = currentY;
  drawRect(cx, cy, colW, 145, DARK_SECONDARY);
  drawLine(cx, cy, cx, cy + 145, colColors[i], 3);
  setFont('bold', 8);
  setColor(colColors[i]);
  doc.text(colSubtitles[i].toUpperCase(), cx + 12, cy + 18);
  setFont('bold', 11);
  setColor(colColors[i]);
  doc.text(title, cx + 12, cy + 36);
  colItems[i].forEach((item, j) => {
    const dotY = cy + 54 + j * 18;
    doc.setFillColor(colColors[i][0], colColors[i][1], colColors[i][2]);
    doc.circle(cx + 14, dotY, 1.6, 'F');
    setFont('normal', 8.5);
    setColor(TEXT_SECONDARY);
    const itemLines = doc.splitTextToSize(item, colW - 28);
    itemLines.forEach((line, k) => {
      doc.text(line, cx + 22, dotY + 3 + k * 10);
    });
  });
});
currentY += 165;

setFont('bold', 12);
setColor(WARNING);
doc.text('What a Routine Actually Looks Like', MARGIN, currentY);
currentY += 18;

setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'A Routine is a single file with two parts. The top is configuration: what triggers it, what tools it can use, where to send output. The bottom is plain English instructions Claude follows. That is it. No drag-and-drop builder, no node graph, no premium tier to unlock features.',
  MARGIN, CONTENT_W, 13
);
currentY += 6;

setFont('bold', 12);
setColor(SUCCESS);
doc.text('Where Routines Beat Everything Else', MARGIN, currentY);
currentY += 18;

const beatsList = [
  'Tasks where the inputs are messy, varied, or written by humans.',
  'Workflows that need a real summary, not a copy-paste of source data.',
  'Anything where the cost of getting it wrong is small and the cost of skipping it is large.',
  'Recurring work that takes 30+ minutes and you keep meaning to delegate.',
];
beatsList.forEach((item) => {
  doc.setFillColor(SUCCESS[0], SUCCESS[1], SUCCESS[2]);
  doc.circle(MARGIN + 8, currentY - 3, 2, 'F');
  setFont('normal', 9.5);
  setColor(TEXT_SECONDARY);
  doc.text(item, MARGIN + 18, currentY);
  currentY += 15;
});
currentY += 6;

drawRect(MARGIN, currentY, CONTENT_W, 28, [30, 20, 50]);
setFont('italic', 10);
setColor(WARNING);
doc.text('A Routine you ship in an afternoon will save you 90 minutes every week for the next two years.', PAGE_W / 2, currentY + 18, { align: 'center' });

pageFooter(2);

// ============================================================
// PAGE 3: SYMPHONY AI EXAMPLE
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('EXAMPLE  |  A MONDAY IN THE LIFE', 'See a Routine in Action');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Symphony AI runs on its own Routines. Before the first one shipped, Monday mornings started with the founder reading 47 messages across four Slack channels and a KPI sheet to figure out what mattered that week. Here is what one Monday looks like now that the briefing Routine is live.',
  MARGIN, CONTENT_W, 15
);
currentY += 8;

setFont('bold', 10);
setColor(PURPLE);
doc.text('THE TIMELINE', MARGIN, currentY);
currentY += 16;

const timeline = [
  { time: '7:00:00 AM  MON', event: 'The schedule fires; the Routine wakes up.', color: CYAN },
  { time: '7:00:14 AM  MON', event: 'Claude pulls 47 messages from #client-ops and #eng-alerts since last Monday.', color: PURPLE },
  { time: '7:00:38 AM  MON', event: 'It reads the Q2 Pipeline Google Sheet for MRR, deal value, and churn deltas.', color: INDIGO },
  { time: '7:00:52 AM  MON', event: 'A formatted briefing posts to #monday-briefing tagged @founder.', color: WARNING },
  { time: '7:14 AM  MON', event: 'The founder reads it over coffee, walks into the week with full context.', color: SUCCESS },
];

drawRect(MARGIN, currentY, CONTENT_W, timeline.length * 28 + 10, DARK_SECONDARY);
const timelineStartY = currentY + 8;
timeline.forEach((t, i) => {
  const rowY = timelineStartY + i * 28;
  doc.setFillColor(t.color[0], t.color[1], t.color[2]);
  doc.circle(MARGIN + 14, rowY + 8, 3, 'F');
  if (i < timeline.length - 1) {
    drawLine(MARGIN + 14, rowY + 12, MARGIN + 14, rowY + 28, [60, 60, 70], 1);
  }
  setFont('bold', 8);
  setColor(t.color);
  doc.text(t.time, MARGIN + 26, rowY + 6);
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  doc.text(t.event, MARGIN + 26, rowY + 18);
});
currentY += timeline.length * 28 + 20;

setFont('bold', 10);
setColor(PURPLE);
doc.text('BEFORE THE ROUTINE  vs.  AFTER THE ROUTINE', MARGIN, currentY);
currentY += 16;

const halfColW = (CONTENT_W - 10) / 2;
const compareRows = [
  { label: 'Time gathering data', before: '90 minutes', after: '14 seconds' },
  { label: 'Briefing arrives', before: 'Wednesday', after: 'Monday 7:01 AM' },
  { label: 'Coverage', before: '3 of 8 channels', after: 'All channels + KPI sheet' },
  { label: 'Cost per run', before: '1.5 hrs founder time', after: '$0.34' },
];
const compareBoxH = compareRows.length * 20 + 24;
drawRect(MARGIN, currentY, halfColW, compareBoxH, [40, 15, 15]);
drawLine(MARGIN, currentY, MARGIN, currentY + compareBoxH, ERROR, 3);
drawRect(MARGIN + halfColW + 10, currentY, halfColW, compareBoxH, [10, 35, 25]);
drawLine(MARGIN + halfColW + 10, currentY, MARGIN + halfColW + 10, currentY + compareBoxH, SUCCESS, 3);

setFont('bold', 8);
setColor(ERROR);
doc.text('BEFORE', MARGIN + 12, currentY + 14);
setColor(SUCCESS);
doc.text('AFTER', MARGIN + halfColW + 22, currentY + 14);

compareRows.forEach((row, i) => {
  const rowY = currentY + 30 + i * 20;
  setFont('normal', 8);
  setColor(TEXT_TERTIARY);
  doc.text(row.label, MARGIN + 12, rowY);
  setFont('bold', 10);
  setColor(TEXT_SECONDARY);
  doc.text(row.before, MARGIN + halfColW - 12, rowY, { align: 'right' });

  setFont('normal', 8);
  setColor(TEXT_TERTIARY);
  doc.text(row.label, MARGIN + halfColW + 22, rowY);
  setFont('bold', 10);
  setColor(WHITE);
  doc.text(row.after, MARGIN + CONTENT_W - 12, rowY, { align: 'right' });
});
currentY += compareBoxH + 14;

drawRect(MARGIN, currentY, CONTENT_W, 56, [30, 20, 50]);
drawLine(MARGIN, currentY, MARGIN, currentY + 56, PURPLE, 3);
setFont('bold', 9.5);
setColor(WARNING);
doc.text('THE RESULT', MARGIN + 12, currentY + 16);
setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
doc.text('In 8 weeks, Symphony AI\u2019s founder has reclaimed 12 Monday mornings and never walked into', MARGIN + 12, currentY + 30);
doc.text('a week blind again. You are about to build the same Routine for your business.', MARGIN + 12, currentY + 44);

pageFooter(3);

// ============================================================
// PAGE 4: STRATEGY - PICK YOUR FIRST ROUTINE
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('STRATEGY  |  PICK YOUR FIRST ROUTINE', 'Find Your First Automation');

setFont('italic', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Symphony AI\u2019s first Routine was the Monday briefing because that was the meeting prep that ate our Sunday nights. Yours will be different. Spend 15 minutes with the audit below before you write a single line of config.',
  MARGIN, CONTENT_W, 15
);
currentY += 6;

drawRect(MARGIN, currentY, CONTENT_W, 36, DARK_SECONDARY);
setFont('bold', 11);
setColor(WHITE);
doc.text('"What recurring task takes 30+ minutes and we keep meaning to delegate?"', PAGE_W / 2, currentY + 22, { align: 'center' });
currentY += 50;

setFont('bold', 12);
setColor(WARNING);
doc.text('The 5-Question Pick-Your-Routine Audit', MARGIN, currentY);
currentY += 18;

const questions = [
  { n: '1', label: 'Cadence:', q: 'How often does this task happen? Weekly is a great starting cadence.' },
  { n: '2', label: 'Time cost:', q: 'How many minutes does it take each time? Multiply by frequency.' },
  { n: '3', label: 'Inputs:', q: 'What sources does it pull from? Slack, Sheets, CRM, and email all qualify.' },
  { n: '4', label: 'Output:', q: 'What does the finished work look like? A message, a draft, a list, or a summary.' },
  { n: '5', label: 'Stakes:', q: 'If the Routine gets it 90% right, is that good enough on the first pass?' },
];
questions.forEach((ex) => {
  drawRect(MARGIN, currentY, CONTENT_W, 30, DARK_SECONDARY);
  setFont('bold', 10);
  setColor(WARNING);
  doc.text(ex.n + '.', MARGIN + 10, currentY + 19);
  doc.text(ex.label, MARGIN + 25, currentY + 19);
  setFont('normal', 9.5);
  setColor(TEXT_SECONDARY);
  doc.text(ex.q, MARGIN + 95, currentY + 19);
  currentY += 36;
});
currentY += 6;

setFont('bold', 12);
setColor(SUCCESS);
doc.text('Top 5 Starter Routines (Ranked by Time Saved)', MARGIN, currentY);
currentY += 18;

const useCases = [
  { rank: '1', title: 'Monday Morning Business Digest', desc: 'Pulls Slack activity and KPIs into a Monday briefing. Saves ~90 minutes a week.', tag: 'SYMPHONY AI STARTED HERE' },
  { rank: '2', title: 'Nightly Overdue-Invoice Chase', desc: 'Reads QuickBooks aging, drafts Gmail follow-ups for founder review.' },
  { rank: '3', title: 'Weekly Content-Calendar Nudges', desc: 'Checks Notion calendar, pings owners for posts due within 48 hours.' },
  { rank: '4', title: 'Daily Pipeline Stand-Up', desc: 'Compares CRM stage changes, posts wins, losses, and stalls to the sales channel.' },
  { rank: '5', title: 'End-of-Quarter Re-Engagement', desc: 'Surfaces clients silent 60+ days, drafts tailored re-engagement emails per account.' },
];
useCases.forEach((uc) => {
  drawRect(MARGIN, currentY, CONTENT_W, 38, DARK_SECONDARY);
  setFont('bold', 16);
  setColor(PURPLE);
  doc.text(uc.rank, MARGIN + 10, currentY + 25);
  setFont('bold', 10);
  setColor(WHITE);
  doc.text(uc.title, MARGIN + 35, currentY + 15);
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  doc.text(uc.desc, MARGIN + 35, currentY + 30);
  if (uc.tag) {
    setFont('bold', 7);
    setColor(SUCCESS);
    doc.text(uc.tag, MARGIN + CONTENT_W - 12, currentY + 15, { align: 'right' });
  }
  currentY += 44;
});

pageFooter(4);

// ============================================================
// PAGE 5: TRIGGERS + SETUP + PRICING
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('SETUP  |  TRIGGERS AND PRICING', 'The Three Triggers, Translated');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Every Routine fires on one of three triggers. Most operators only need the first one for years. Here is what each trigger does and when to reach for it.',
  MARGIN, CONTENT_W, 15
);
currentY += 8;

const triggers = [
  {
    name: 'Schedule',
    pitch: 'Cron expression. Best for recurring digests, weekly reports, daily check-ins.',
    example: 'Monday 7 AM  =  0 7 * * 1',
    color: PURPLE,
  },
  {
    name: 'API',
    pitch: 'A webhook URL. Best for "do this when X happens in another tool."',
    example: 'POST https://routines.claude.com/r/<id>',
    color: INDIGO,
  },
  {
    name: 'GitHub Event',
    pitch: 'Repo push, PR opened, issue labeled. Best for teams that ship code.',
    example: 'on: pull_request.opened, label = ready-review',
    color: CYAN,
  },
];
triggers.forEach((t) => {
  drawRect(MARGIN, currentY, CONTENT_W, 56, DARK_SECONDARY);
  drawLine(MARGIN, currentY, MARGIN, currentY + 56, t.color, 3);
  setFont('bold', 11);
  setColor(WHITE);
  doc.text(t.name, MARGIN + 14, currentY + 18);
  setFont('normal', 9.5);
  setColor(TEXT_SECONDARY);
  doc.text(t.pitch, MARGIN + 14, currentY + 32);
  setFont('mono', 9);
  setColor(t.color);
  doc.text(t.example, MARGIN + 14, currentY + 48);
  currentY += 64;
});
currentY += 6;

setFont('bold', 12);
setColor(WARNING);
doc.text('Pro vs Max: Which Tier for a 10-Person Team', MARGIN, currentY);
currentY += 18;

setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Three daily Routines across 22 work days = 66 runs per month. Five daily Routines = 110 runs. Both fit comfortably inside the Pro tier. The math only flips to Max when you start running hourly cadences or wire Routines into customer-facing API endpoints.',
  MARGIN, CONTENT_W, 13
);
currentY += 6;

const pricingHalfW = (CONTENT_W - 10) / 2;
drawRect(MARGIN, currentY, pricingHalfW, 90, DARK_SECONDARY);
drawLine(MARGIN, currentY, MARGIN, currentY + 90, PURPLE, 3);
setFont('bold', 10);
setColor(PURPLE);
doc.text('CLAUDE PRO  |  $20/mo', MARGIN + 14, currentY + 18);
setFont('normal', 9);
setColor(TEXT_SECONDARY);
const proLines = [
  '5 Routine runs per day',
  '~150 runs per month',
  'Right for: 3-5 daily or weekly Routines',
  'Right for: most 10-person teams',
];
proLines.forEach((line, i) => {
  doc.setFillColor(PURPLE[0], PURPLE[1], PURPLE[2]);
  doc.circle(MARGIN + 18, currentY + 36 + i * 13, 1.6, 'F');
  doc.text(line, MARGIN + 26, currentY + 39 + i * 13);
});

drawRect(MARGIN + pricingHalfW + 10, currentY, pricingHalfW, 90, DARK_SECONDARY);
drawLine(MARGIN + pricingHalfW + 10, currentY, MARGIN + pricingHalfW + 10, currentY + 90, INDIGO, 3);
setFont('bold', 10);
setColor(INDIGO);
doc.text('CLAUDE MAX  |  $200/mo', MARGIN + pricingHalfW + 24, currentY + 18);
setFont('normal', 9);
setColor(TEXT_SECONDARY);
const maxLines = [
  '50 Routine runs per day',
  '~1,500 runs per month',
  'Right for: hourly cadences',
  'Right for: customer-facing API trigger',
];
maxLines.forEach((line, i) => {
  doc.setFillColor(INDIGO[0], INDIGO[1], INDIGO[2]);
  doc.circle(MARGIN + pricingHalfW + 28, currentY + 36 + i * 13, 1.6, 'F');
  doc.text(line, MARGIN + pricingHalfW + 36, currentY + 39 + i * 13);
});
currentY += 100;

drawRect(MARGIN, currentY, CONTENT_W, 28, [30, 20, 50]);
setFont('italic', 9.5);
setColor(WARNING);
doc.text('Start on Pro. Move to Max only when you have proof of three Routines running daily.', PAGE_W / 2, currentY + 18, { align: 'center' });

pageFooter(5);

// ============================================================
// PAGE 6: BUILD PART 1 - FOUNDATION
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('HANDS-ON  |  BUILD PART 1 OF 3', 'Lay the Foundation');

// Prereq callout
const prereqBoxH = 116;
drawRect(MARGIN, currentY, CONTENT_W, prereqBoxH, DARK_SECONDARY);
drawLine(MARGIN, currentY, MARGIN, currentY + prereqBoxH, WARNING, 3);
setFont('bold', 8);
setColor(WARNING);
doc.text('BEFORE YOU START', MARGIN + 14, currentY + 18);
const prereqs = [
  'Claude Code already installed and logged in (one-time setup, ~10 minutes)',
  'Active Claude Pro or Max subscription (covered on page 5)',
  'Admin access to your Slack workspace and KPI Google Sheet',
  'A folder on your computer where Routines will live',
  '60 minutes of focused time',
];
prereqs.forEach((item, i) => {
  doc.setFillColor(WARNING[0], WARNING[1], WARNING[2]);
  doc.circle(MARGIN + 22, currentY + 38 + i * 14, 1.6, 'F');
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  doc.text(item, MARGIN + 30, currentY + 41 + i * 14);
});
currentY += prereqBoxH + 14;

setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'You are going to build the same Monday Morning Business Digest Symphony AI uses internally. Every step is a prompt you paste into Claude Code; the only typing required is filling in your channel and sheet names.',
  MARGIN, CONTENT_W, 13
);
currentY += 6;

buildStep({
  step: 'Step 1',
  time: '3 min',
  title: 'Open Claude Code in Your Routines Folder',
  desc: 'Use Finder or File Explorer to create a new folder anywhere on your computer. Symphony AI calls ours "symphony-routines." Open Claude Code and point it at this folder when it asks where to start. No commands required.',
});

buildStep({
  step: 'Step 2',
  time: '10 min',
  title: 'Ask Claude to Write Your Routine',
  desc: 'Paste the prompt below into Claude Code. Edit the bracketed parts to match your business. Claude creates the Routine file with the right structure and a starter draft for you to refine.',
  code: [
    'Create a Routine called monday-briefing.',
    '',
    'Trigger: schedule, Monday 7 AM America/New_York.',
    '',
    'Pull last 7 days from Slack [#client-ops, #eng-alerts]',
    'and KPIs from Google Sheet [Q2 Pipeline]. Compose a',
    'briefing with three sections: Wins, Blockers, and',
    'KPI Movement. Post to [#monday-briefing], tag [@founder].',
    '',
    'Write the file and show it to me when done.',
  ],
  codeLabel: 'PROMPT',
  tip: 'Treat the prompt like onboarding instructions for a new analyst on day one. Be specific about format, tone, and what NOT to include. Vague prompts make vague briefings.',
});

buildStep({
  step: 'Step 3',
  time: '10 min',
  title: 'Read Claude\'s Draft and Refine the Prompt',
  desc: 'Claude shows you the draft. Read it carefully. Anything vague or missing? Tell Claude exactly what to tighten in plain English. Examples: "Limit Wins to 5 bullets" or "Always lead with the KPI that moved the most." Two or three rounds is normal.',
});

pageFooter(6);

// ============================================================
// PAGE 7: BUILD PART 2 - CONNECT SOURCES
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('HANDS-ON  |  BUILD PART 2 OF 3', 'Connect Your Data Sources');

setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'A Routine is only as useful as the data it can reach. Steps 4, 5, and 6 connect your Routine to Slack and Google Sheets, then nail down how the briefing should look. Total time: about 25 minutes.',
  MARGIN, CONTENT_W, 13
);
currentY += 6;

buildStep({
  step: 'Step 4',
  time: '10 min',
  title: 'Connect Slack as a Source',
  desc: 'Tell Claude to add Slack. A browser tab opens for Slack\'s approval screen; pick the workspace and grant access only to the channels the Routine actually needs.',
  code: [
    'Add the Slack connector to this Routine.',
    'Grant read access only to [#client-ops, #eng-alerts].',
    'Walk me through the approval step by step.',
  ],
  codeLabel: 'PROMPT',
  tip: 'Grant least-privilege access. Symphony AI\'s briefing reads two channels and writes to one. Wider permissions look harmless on day one and turn into a security review on day 90.',
});

buildStep({
  step: 'Step 5',
  time: '10 min',
  title: 'Connect Your KPI Sheet',
  desc: 'Same pattern as Slack. Claude installs the Google Sheets connector and walks you through Google\'s approval flow.',
  code: [
    'Add the Google Sheets connector.',
    'Grant read-only access to [Q2 Pipeline] only.',
    'Walk me through the approval.',
  ],
  codeLabel: 'PROMPT',
});

buildStep({
  step: 'Step 6',
  time: '5 min',
  title: 'Format the Output the Way You Want',
  desc: 'The default briefing works, but yours should match how you actually consume info. Tell Claude exactly what the final briefing should look like.',
  code: [
    'Update the briefing format. Three sections:',
    '1. Wins (max 5 bullets, lead with revenue)',
    '2. Blockers (only items with no clear path forward)',
    '3. KPI Movement (lead with the biggest delta)',
    'Keep total under 200 words.',
  ],
  codeLabel: 'PROMPT',
});

pageFooter(7);

// ============================================================
// PAGE 8: BUILD PART 3 - SCHEDULE, TEST, DEPLOY
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('HANDS-ON  |  BUILD PART 3 OF 3', 'Schedule, Test, and Deploy');

setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'The last three steps take about 13 minutes plus one Monday of patience. By the end of this page, your Routine is live and you know it works because you have already watched it run.',
  MARGIN, CONTENT_W, 13
);
currentY += 6;

buildStep({
  step: 'Step 7',
  time: '3 min',
  title: 'Verify the Schedule',
  desc: 'Ask Claude to confirm the trigger. Specifically check the timezone: a default of UTC fires at the wrong time in your local zone, and "Monday 7 AM" by mistake means 2 AM ET.',
  code: [
    'Read the trigger in monday-briefing.',
    'Confirm it fires Monday at 7 AM America/New_York.',
    'If anything is off, fix it and show me the change.',
  ],
  codeLabel: 'PROMPT',
});

buildStep({
  step: 'Step 8',
  time: '10 min',
  title: 'Test-Run the Routine',
  desc: 'Tell Claude to do a dry test first. Read the draft briefing Claude shows you. If it looks right, give the green light to ship the real one to Slack.',
  code: [
    'Run monday-briefing as a dry test. Show me the',
    'briefing it would post, but do not send to Slack',
    'yet. After my review, I will tell you to ship it.',
  ],
  codeLabel: 'PROMPT',
});

buildStep({
  step: 'Step 9',
  time: 'Ongoing',
  title: 'Activate and Monitor the First Real Run',
  desc: 'Tell Claude to turn on the schedule and add a fallback so silent failures never go unnoticed. The first three Mondays, read the briefing critically and refine the prompt; by week 4 it should feel like it was written by your sharpest analyst.',
  code: [
    'Enable monday-briefing on its schedule.',
    'Add a fallback: if any run fails, post the',
    'error to [#ops-alerts].',
  ],
  codeLabel: 'PROMPT',
  tip: 'Symphony AI added an on-failure fallback in week 2 after one silent miss. One line of config, zero silent failures since.',
});

drawRect(MARGIN, currentY, CONTENT_W, 50, [10, 40, 30]);
drawLine(MARGIN, currentY, MARGIN, currentY + 50, SUCCESS, 3);
setFont('bold', 8);
setColor(SUCCESS);
doc.text('RESULT', MARGIN + 12, currentY + 16);
setFont('bold', 11);
setColor(WHITE);
doc.text('Your Routine Is Live', MARGIN + 12, currentY + 30);
setFont('normal', 9);
setColor(TEXT_SECONDARY);
doc.text('Total time: roughly 60 minutes. From now on, every Monday at 7 AM, your briefing arrives without you.', MARGIN + 12, currentY + 44);

pageFooter(8);

// ============================================================
// PAGE 9: UPGRADES
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('LEVEL UP', 'Make It Smarter');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Your first Routine works. Now make it better. These three upgrades are the same ones Symphony AI rolled out on its own Monday briefing in the first 90 days, plus the next two Routines we shipped after the briefing proved itself.',
  MARGIN, CONTENT_W, 15
);
currentY += 12;

const upgrades = [
  {
    n: '1', title: 'Add a Memory File', color: PURPLE,
    desc: 'Point the Routine at a CLAUDE.md file that captures recurring context: people, channels, KPI definitions, and last quarter\'s priorities. Briefings get sharper week over week instead of resetting every Monday.',
    tip: 'Symphony AI added memory in week 3 after the briefing kept calling Greenfield Partners "the new client" eight weeks running.'
  },
  {
    n: '2', title: 'Build the Next Two Routines', color: WARNING,
    desc: 'Once the briefing is stable, ship the Nightly Overdue-Invoice Chase (QuickBooks reads, Gmail drafts) and the Weekly Content-Calendar Nudges (Notion reads, Slack pings). Same pattern, new MCP servers, 30 minutes each.',
    tip: 'Symphony AI shipped both within two weeks of the briefing. Together they reclaim about 4 hours per week with zero new headcount.'
  },
  {
    n: '3', title: 'Add a Human Approval Step', color: SUCCESS,
    desc: 'For Routines that send anything outside the company (invoice chases, re-engagement emails), add a "draft only, post to Slack for approval" step before delivery. The Routine still does the work; a human still owns the send.',
    tip: 'Rule of thumb: if the Routine\'s output reaches a customer, a human approves it. If it reaches your team, it ships automatically.'
  },
];
upgrades.forEach((u) => {
  drawRect(MARGIN, currentY, CONTENT_W, 130, DARK_SECONDARY);
  drawLine(MARGIN, currentY, MARGIN, currentY + 130, u.color, 3);
  setFont('bold', 8);
  setColor(u.color);
  doc.text('UPGRADE ' + u.n, MARGIN + 12, currentY + 18);
  setFont('bold', 13);
  setColor(WHITE);
  doc.text(u.title, MARGIN + 12, currentY + 36);
  setFont('normal', 9.5);
  setColor(TEXT_SECONDARY);
  const descLines = doc.splitTextToSize(u.desc, CONTENT_W - 30);
  descLines.forEach((line, i) => {
    doc.text(line, MARGIN + 12, currentY + 54 + i * 13);
  });
  const tipY = currentY + 54 + descLines.length * 13 + 8;
  setFont('bold', 8);
  setColor(u.color);
  doc.text('SYMPHONY AI ROLLOUT: ', MARGIN + 12, tipY);
  setFont('normal', 9);
  setColor(TEXT_TERTIARY);
  const tipLines = doc.splitTextToSize(u.tip, CONTENT_W - 145);
  tipLines.forEach((line, i) => {
    doc.text(line, MARGIN + 130, tipY + i * 12);
  });
  currentY += 140;
});

pageFooter(9);

// ============================================================
// PAGE 10: MEASURE
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('MEASUREMENT  |  ROUTINE SCORECARD', 'Measure What Matters');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Routines are easy to ship and easy to forget. Track these five metrics from week one to know whether yours is delivering value or quietly drifting.',
  MARGIN, CONTENT_W, 15
);
currentY += 10;

const metrics = [
  { n: '1', metric: 'Hours Saved Per Week', before: 'Manual time x cadence', after: 'Subtract Routine handle', desc: 'The clearest ROI metric. Multiply minutes saved by frequency. The Monday briefing alone reclaims ~90 minutes per week.' },
  { n: '2', metric: 'Run Success Rate', before: 'Untracked', after: '> 95% on schedule', desc: 'Of scheduled runs, how many completed without an error. Anything below 95% means you have a data-source or auth problem.' },
  { n: '3', metric: 'Time to First Value', before: 'Hours of manual prep', after: '< 30 seconds', desc: 'How long between the trigger firing and the result landing. Routines should clear this in under a minute.' },
  { n: '4', metric: 'Cost Per Run', before: '$15-30 in human time', after: '$0.20-0.50 per run', desc: 'Total monthly Claude tier divided by Routine runs. Monday briefing costs Symphony AI $0.34 per run.' },
  { n: '5', metric: 'Operator Trust Score', before: 'Briefing ignored', after: 'Briefing acted on', desc: 'A 1-to-5 weekly rating from the person who reads the output. If it drifts below 4, refine the prompt before the trust dies.' },
];
metrics.forEach((m) => {
  drawRect(MARGIN, currentY, CONTENT_W, 68, DARK_SECONDARY);
  setFont('bold', 14);
  setColor(PURPLE);
  doc.text(m.n, MARGIN + 10, currentY + 22);
  setFont('bold', 11);
  setColor(WHITE);
  doc.text(m.metric, MARGIN + 30, currentY + 16);
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  const descLines = doc.splitTextToSize(m.desc, CONTENT_W - 50);
  descLines.slice(0, 2).forEach((line, i) => {
    doc.text(line, MARGIN + 30, currentY + 30 + i * 12);
  });
  setFont('normal', 8.5);
  setColor(ERROR);
  doc.text('Before: ' + m.before, MARGIN + 30, currentY + 60);
  setColor(SUCCESS);
  doc.text('Target: ' + m.after, MARGIN + 270, currentY + 60);
  currentY += 76;
});
currentY += 4;

setFont('bold', 12);
setColor(WARNING);
doc.text('ROI Quick Calculation', MARGIN, currentY);
currentY += 18;

drawRect(MARGIN, currentY, CONTENT_W, 78, CODE_BG);
setFont('mono', 9);
setColor([220, 230, 240]);
const roiText = [
  'Hours saved per week:        _____ hrs',
  'Hourly cost of that work:    $_____ /hr',
  'Weekly savings:              _____ x _____ = $_____',
  '',
  'Monthly ROI:  (weekly savings x 4) - $20 (Claude Pro) = $_____',
];
roiText.forEach((line, i) => {
  doc.text(line, MARGIN + 14, currentY + 16 + i * 12);
});
currentY += 88;

drawRect(MARGIN, currentY, CONTENT_W, 28, [30, 20, 50]);
setFont('italic', 9.5);
setColor(WARNING);
doc.text('Symphony AI hit positive ROI in week 1. Three Routines later, the math is not even close.', PAGE_W / 2, currentY + 18, { align: 'center' });

pageFooter(10);

// ============================================================
// PAGE 11: DECISION TABLE - ROUTINES vs n8n vs ZAPIER
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('DECISION  |  ROUTINES VS THE FIELD', 'When Routines Win, When They Do Not');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Claude Code Routines, n8n, and Zapier all automate work, but they win in different lanes. Use this table to pick the right tool the first time instead of rebuilding in month three.',
  MARGIN, CONTENT_W, 15
);
currentY += 10;

const tableData = [
  ['Use Case', 'Routines', 'n8n', 'Zapier'],
  ['Summarize messy text', 'Best', 'Weak', 'Weak'],
  ['Move data between known apps', 'Fine', 'Best', 'Best'],
  ['Draft an email a human reviews', 'Best', 'Weak', 'Weak'],
  ['Strict if-this-then-that', 'Overkill', 'Best', 'Best'],
  ['8,000+ pre-built integrations', 'No', 'No', 'Best'],
  ['Self-hosted control + cost', 'No', 'Best', 'No'],
  ['Setup in under 60 minutes', 'Best', 'Fine', 'Best'],
];
const tColW = [CONTENT_W * 0.46, CONTENT_W * 0.18, CONTENT_W * 0.18, CONTENT_W * 0.18];

tableData.forEach((row, ri) => {
  const rowH = 24;
  let cx = MARGIN;
  if (ri === 0) {
    drawRect(MARGIN, currentY - 3, CONTENT_W, rowH, DARK_SECONDARY);
  } else if (ri % 2 === 0) {
    drawRect(MARGIN, currentY - 3, CONTENT_W, rowH, [20, 25, 35]);
  }
  row.forEach((cell, ci) => {
    if (ri === 0) {
      setFont('bold', 9.5);
      setColor(WHITE);
    } else if (ci === 0) {
      setFont('normal', 9.5);
      setColor(TEXT_SECONDARY);
    } else {
      setFont('bold', 9);
      if (cell === 'Best') setColor(SUCCESS);
      else if (cell === 'Fine') setColor(CYAN);
      else if (cell === 'Weak') setColor(WARNING);
      else if (cell === 'No') setColor(ERROR);
      else if (cell === 'Overkill') setColor(WARNING);
      else setColor(TEXT_SECONDARY);
    }
    doc.text(cell, cx + 8, currentY + 13);
    cx += tColW[ci];
  });
  currentY += rowH;
});
currentY += 14;

setFont('bold', 12);
setColor(WARNING);
doc.text('Quick Decision Guide', MARGIN, currentY);
currentY += 18;

const decisions = [
  { scenario: 'Your task is "read messy stuff and summarize it"', rec: 'Routines. Nothing else handles unstructured text this well.', color: SUCCESS },
  { scenario: 'Your task is "when X in app A, then Y in app B"', rec: 'Zapier or n8n. Routines work but you are paying for intelligence you do not need.', color: WARNING },
  { scenario: 'You want one tool for both kinds of work', rec: 'Start with Routines and call n8n through an API trigger when you need it.', color: PURPLE },
  { scenario: 'Cost matters more than convenience', rec: 'Self-hosted n8n. Routines and Zapier both come out cheaper at low volume; n8n wins at scale.', color: CYAN },
];
decisions.forEach((d) => {
  drawRect(MARGIN, currentY, CONTENT_W, 32, DARK_SECONDARY);
  drawLine(MARGIN, currentY, MARGIN, currentY + 32, d.color, 3);
  setFont('bold', 9.5);
  setColor(WHITE);
  doc.text('If ' + d.scenario + ':', MARGIN + 12, currentY + 14);
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  doc.text(d.rec, MARGIN + 12, currentY + 26);
  currentY += 38;
});

pageFooter(11);

// ============================================================
// PAGE 12: SCALE + CTA
// ============================================================
newPage();
drawRect(0, 0, PAGE_W, PAGE_H, DARK_BG);

pageHeader('WHAT COMES NEXT', 'Your Next Three Routines');

setFont('normal', 10.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'Your first Routine is live. Here is the order Symphony AI recommends shipping the next three, plus the one we should build with you when you are ready to wire Routines into your full stack.',
  MARGIN, CONTENT_W, 15
);
currentY += 10;

const nextRoutines = [
  { phase: 'NEXT 1', title: 'Nightly Overdue-Invoice Chase', desc: 'QuickBooks aging in, Gmail drafts out. Founder approves with one click.', color: SUCCESS },
  { phase: 'NEXT 2', title: 'Weekly Content-Calendar Nudges', desc: 'Notion calendar in, Slack pings out. Posts due in 48 hours get owner-tagged.', color: WARNING },
  { phase: 'NEXT 3', title: 'Daily Pipeline Stand-Up', desc: 'CRM stage changes in, sales-channel summary out. Wins, losses, and stalls at 8:55 AM.', color: PURPLE },
];
nextRoutines.forEach((p) => {
  drawRect(MARGIN, currentY, CONTENT_W, 44, DARK_SECONDARY);
  drawLine(MARGIN, currentY, MARGIN, currentY + 44, p.color, 3);
  setFont('bold', 8);
  setColor(p.color);
  doc.text(p.phase, MARGIN + 12, currentY + 16);
  setFont('bold', 11);
  setColor(WHITE);
  doc.text(p.title, MARGIN + 75, currentY + 16);
  setFont('normal', 9);
  setColor(TEXT_SECONDARY);
  doc.text(p.desc, MARGIN + 12, currentY + 34);
  currentY += 50;
});
currentY += 4;

setFont('bold', 12);
setColor(WARNING);
doc.text('The One Symphony Should Build With You', MARGIN, currentY);
currentY += 16;

setFont('normal', 9.5);
setColor(TEXT_SECONDARY);
writeWrapped(
  'When you are ready to wire Routines into your CRM, billing, and ticketing with proper auth, audit logs, and human-approval gates, that is a custom engagement. Three to five connected Routines, full guardrails, and your team trained to own them.',
  MARGIN, CONTENT_W, 13
);
currentY += 14;

// Brand wordmark
setFont('bold', 16);
setColor(WHITE);
doc.text('Symphony AI', PAGE_W / 2, currentY, { align: 'center' });
currentY += 14;
setFont('normal', 9);
setColor(TEXT_TERTIARY);
doc.text('Strategic AI Consulting', PAGE_W / 2, currentY, { align: 'center' });
currentY += 18;
setFont('italic', 12);
setColor(PURPLE);
doc.text('From Prompt to Power.', PAGE_W / 2, currentY, { align: 'center' });
currentY += 22;

// CTA gradient box
const ctaBoxY = currentY;
const ctaBoxH = 100;
const gradSteps = 30;
const gradStepW = CONTENT_W / gradSteps;
for (let i = 0; i < gradSteps; i++) {
  const t = i / gradSteps;
  const r = Math.round(PURPLE[0] + (INDIGO[0] - PURPLE[0]) * t);
  const g = Math.round(PURPLE[1] + (INDIGO[1] - PURPLE[1]) * t);
  const b = Math.round(PURPLE[2] + (INDIGO[2] - PURPLE[2]) * t);
  doc.setFillColor(r, g, b);
  doc.rect(MARGIN + i * gradStepW, ctaBoxY, gradStepW + 0.5, ctaBoxH, 'F');
}

setFont('bold', 14);
setColor(WHITE);
doc.text('You shipped your first Routine.', PAGE_W / 2, ctaBoxY + 25, { align: 'center' });
doc.text('Imagine five of them running your operations.', PAGE_W / 2, ctaBoxY + 43, { align: 'center' });
setFont('normal', 10);
setColor(WHITE);
doc.text('Symphony AI wires Routines into your full stack with auth, audit, and guardrails.', PAGE_W / 2, ctaBoxY + 62, { align: 'center' });
doc.text('No subscriptions. No lock-in. Just systems that ship.', PAGE_W / 2, ctaBoxY + 76, { align: 'center' });

const btnX = PAGE_W / 2 - 75;
const btnY = ctaBoxY + ctaBoxH - 10;
const btnW = 150;
const btnH = 28;
drawRect(btnX, btnY, btnW, btnH, WHITE);
setFont('bold', 10);
setColor(PURPLE);
doc.text('Book a Strategy Call', PAGE_W / 2, ctaBoxY + ctaBoxH + 9, { align: 'center' });
doc.link(btnX, btnY, btnW, btnH, { url: 'https://symphonylabs.ai/contact' });

currentY = ctaBoxY + ctaBoxH + 35;
setFont('normal', 9);
setColor(TEXT_TERTIARY);
doc.text('symphonylabs.ai/contact', PAGE_W / 2, currentY, { align: 'center' });
doc.link(PAGE_W / 2 - 60, currentY - 10, 120, 14, { url: 'https://symphonylabs.ai/contact' });

pageFooter(12);

// Save
const outputPath = path.join(__dirname, '..', 'public', 'symphony-claude-code-routines-guide.pdf');
fs.writeFileSync(outputPath, Buffer.from(doc.output('arraybuffer')));
console.log('PDF generated:', outputPath);
