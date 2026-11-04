// Single source of truth for Symphony Studio.
// Mirrors the shape of products.js: pages and the order flow read from here,
// so copy and pricing change in one place.

export const studioMeta = {
  name: 'Symphony Studio',
  tagline: 'Your set, cut into clips.',
  blurb:
    'Send us one set. Get up to 15 captioned vertical clips for Reels, TikTok, and Shorts. The first clips come back the same day, the rest within 24 hours.',
};

// Where the order flow sends briefs.
// Today this is the same Formspree form the contact page uses; submissions are
// tagged with formType so they filter cleanly. Swap in a dedicated form ID or a
// real backend endpoint here and nothing else has to change.
export const studioIntakeEndpoint = 'https://formspree.io/f/mgopdoqy';

// ---------- Comedians: the lead offer ----------
// These are the same Stripe Payment Links the cold emails send (see
// marketing/studio-sprint/COMEDY-PROGRAM.md), so a comic who lands here from
// the email signature sees the exact price and checkout they were quoted.
// Stripe sends One Clip and Whole Set buyers back to /studio/order?tier=drop and
// Whole Tour buyers to ?tier=season; PaidBrief asks what they booked.
export const comedyTiers = [
  {
    id: 'clip',
    name: 'One Clip',
    price: 5,
    unit: 'per clip',
    note: 'Buy 1 to 50',
    summary: 'Got one bit you know kills? Send it and we cut just that.',
    features: ['Pick the bit, we cut it', 'Captioned vertical clip', 'Back the same day'],
    cta: 'Buy one clip',
    paymentUrl: 'https://buy.stripe.com/dRm8wP1jm2eo0c26y783C0d',
    highlight: false,
  },
  {
    id: 'set',
    name: 'Whole Set',
    price: 50,
    unit: 'per set',
    note: 'Up to 15 clips',
    summary: 'One set becomes up to 15 clips you can post for weeks.',
    features: [
      'Up to 15 clips from one set',
      'Captions timed word by word',
      'Sized for Reels, TikTok, and Shorts',
      'First clips the same day, the rest within 24 hours',
      'Changes included',
    ],
    cta: 'Cut my set',
    paymentUrl: 'https://buy.stripe.com/8x200jaTWcT2e2Sg8H83C0c',
    highlight: true,
  },
  {
    id: 'tour',
    name: 'Whole Tour',
    price: 500,
    unit: 'up to 20 shows',
    note: '$25 a show',
    summary: 'On the road? Send each set as you play it and the clips keep coming.',
    features: [
      'Up to 20 shows or sets',
      'Up to 15 clips from each one',
      'Everything in the Whole Set, every night',
      'One checkout for the whole run',
    ],
    cta: 'Book my tour',
    paymentUrl: 'https://buy.stripe.com/aFabJ16DG1ak9MC8Gf83C0e',
    highlight: false,
  },
];

export const wholeSet = comedyTiers[1];
export const wholeTour = comedyTiers[2];

export const comedyHowItWorks = [
  { n: '01', title: 'Check out', desc: '$50 for one set, up to 15 clips. No subscription.' },
  {
    n: '02',
    title: 'Send the set',
    desc: 'A one-minute form asks for the link: YouTube, Drive, or Dropbox. A master file cuts cleanest.',
  },
  {
    n: '03',
    title: 'Get your clips',
    desc: 'The first clips come back the same day, the rest within 24 hours. Changes included.',
  },
];

// How we treat a comic's set. Each line answers a worry a comic raised in a
// reply: fake laughs, titles they didn't write, a face lost to the crop.
export const comedyPromises = [
  {
    title: 'Captions, no titles',
    desc: "Words appear as you say them, three at most on screen. We don't add a title or hook unless you ask, so the tease stays yours.",
  },
  {
    title: 'Real laughs only',
    desc: "We never add or sweeten laughter. If the room mic is quiet we can lift it, and that's all.",
  },
  {
    title: 'You stay in frame',
    desc: 'Every clip is checked start to finish so your face stays inside the vertical crop. A shot that loses you gets recut or dropped.',
  },
  {
    title: 'Your clips, your call',
    desc: "You own every clip. We don't post for you or ask for logins, and we never show your set as our work without your OK.",
  },
];

// Real comedy client clips for the page. Empty on purpose: a client owns their
// set, so a clip goes here only after they say yes in writing. Files go in
// public/studio/comedy. Shape:
// { src: 'file-stem', comic: 'Name', where: 'Club, City', bit: 'Bit name' }
export const comedyExamples = [];

// Anyone else with a mic. Churches were quoted $199 a Sunday in outreach, the
// same price as a Show Pack, so the Show Pack link covers one event.
export const otherUses = ['Sermons', 'Podcasts', 'Keynotes and talks', 'Panels', 'Live events', 'Workshops'];

// ---------- Musicians ----------

// The music reel. Real client edits, re-encoded as short muted loops
// (public/studio/reel). Get the artist's OK before adding one here.
export const reel = [
  { src: 'chef-pov', artist: 'DJ Chef', where: 'Georgia Theatre' },
  { src: 'brendan-chaotic', artist: 'Brendan Abernathy', where: 'Live set' },
  { src: 'chef-walkout', artist: 'DJ Chef', where: 'Green room' },
  { src: 'brendan-ghosts', artist: 'Brendan Abernathy', where: 'Live set' },
  { src: 'chef-cooking', artist: 'DJ Chef', where: 'Georgia Theatre' },
  { src: 'brendan-angel', artist: 'Brendan Abernathy', where: 'Live set' },
];

export const musicHowItWorks = [
  { n: '01', title: 'Book your show', desc: 'Pay for the pack. No subscription.' },
  { n: '02', title: 'Send the footage', desc: 'A Drive or Dropbox link. Phone clips work.' },
  { n: '03', title: 'Get 6 edits in 1 day', desc: 'Cut to your songs, with hooks and a posting plan.' },
];

// paymentUrl: a Stripe Payment Link. When set, that tier's pricing button goes
// straight to checkout; when null it falls back to the brief form.
export const studioTiers = [
  {
    id: 'drop',
    name: 'Show Pack',
    price: 199,
    unit: 'per show',
    summary: "One show's footage becomes 6 vertical edits cut to your songs. Back in 1 day.",
    footageHours: 1,
    postCount: '6 edits from one show',
    features: [
      '6 vertical edits cut to your songs',
      'Five hook options per edit, plus a no-text version',
      'Sized for TikTok, Reels, and Shorts',
      'A posting plan: song, caption, and when to post',
      'One round of revisions',
    ],
    cta: 'Book my show',
    paymentUrl: 'https://buy.stripe.com/5kQ9AT8LObOY5wmf4D83C02',
    highlight: true,
  },
  {
    id: 'season',
    name: 'Three Shows',
    price: 499,
    unit: 'for three shows',
    note: '$166 a show',
    summary: 'Three Show Packs up front. Use them across a tour, a residency, or your next three nights.',
    footageHours: 3,
    postCount: '18 edits across three shows',
    features: [
      'Everything in the Show Pack, three times',
      '18 edits in all',
      'Lyric syncs, line by line or word by word',
      'Use them whenever you play. They don’t expire.',
    ],
    cta: 'Book my 3 shows',
    paymentUrl: 'https://buy.stripe.com/bJeaEX7HKdX6bUKg8H83C03',
    highlight: false,
  },
  {
    id: 'catalog',
    name: 'Managers & Venues',
    price: null,
    unit: 'custom',
    summary:
      'For managers running more than one act, and for venues that want recaps of every night.',
    footageHours: null,
    postCount: 'Scoped to the roster',
    features: [],
    cta: 'Talk to us',
    paymentUrl: null,
    highlight: false,
  },
];

// Where a tier's button goes: Stripe checkout once the link exists, the brief
// form until then, and a conversation for managers and venues. The utm tags
// tell site sales apart from email sales in Stripe and carry through to the
// post-payment redirect.
export function tierHref(tier) {
  if (tier.paymentUrl) return `${tier.paymentUrl}?utm_source=symphonylabs&utm_medium=studio_page`;
  return tier.id === 'catalog' ? '/contact?topic=studio-catalog' : `/studio/order?tier=${tier.id}`;
}

export const showPack = studioTiers[0];

// Comedy questions first, since most visitors arrive from a comedy email.
export const studioFaq = [
  {
    question: 'What footage works?',
    answer:
      "A YouTube link to your set is enough to start. A master file from the camera cuts cleanest, because a vertical clip uses about a third of the frame. Phone video from the back of the room, or a wide shot where you're tiny, is hard to crop. Not sure about yours? Send the link and we'll tell you before you pay.",
  },
  {
    question: 'I got a free clip in my email. Is it really mine?',
    answer:
      "Yes. Post it or don't, no strings. If you want the rest of that set done the same way, the Whole Set is $50.",
  },
  {
    question: 'How do you pick the bits?',
    answer:
      'We look for bits that stand on their own: a clear setup and a punchline that lands without the rest of the set. Tell us anything to keep or skip in the form after checkout.',
  },
  {
    question: 'What if a clip misses?',
    answer: "Reply with what's off and we'll recut it. Changes are included in every set.",
  },
  {
    question: 'Who owns the clips?',
    answer:
      "You do. Your jokes, your footage, your files. We'll ask before showing any of it as an example of our work, and you can say no.",
  },
  {
    question: "Musicians: what if I don't have masters?",
    answer:
      "That's fine. We'll cut to the live audio, or you add the song in TikTok when you post. Masters do perform better, so send them if you have them.",
  },
  {
    question: 'Can you cut something other than stand-up or music?',
    answer:
      "Yes. Sermons, podcasts, talks, panels, and events all work the same way: send the video, get vertical clips with captions. One event or service is $199, or tell us what you have and we'll quote it.",
  },
];
