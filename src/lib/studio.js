// Single source of truth for Symphony Studio.
// Mirrors the shape of products.js: pages and the order flow read from here,
// so copy and pricing change in one place.

export const studioMeta = {
  name: 'Symphony Studio',
  tagline: 'Send us your set. Get back a stack of clips.',
  blurb:
    'Send the raw video of one set. For $50 we cut it into up to 15 vertical clips with captions, ready for TikTok, Reels, and Shorts. Back in 24 hours.',
};

// Where the order flow sends briefs.
// Today this is the same Formspree form the contact page uses; submissions are
// tagged with formType so they filter cleanly. Swap in a dedicated form ID or a
// real backend endpoint here and nothing else has to change.
export const studioIntakeEndpoint = 'https://formspree.io/f/mgopdoqy';

// ---------- Comedians: the whole page ----------
// These are the same Stripe Payment Links the cold emails send (see
// marketing/studio-sprint/COMEDY-PROGRAM.md), so a comic who lands here sees
// the exact price and checkout they were quoted.
// Stripe sends One Clip and Whole Set buyers back to /studio/order?tier=drop and
// Whole Tour buyers to ?tier=season; PaidBrief asks what they booked.
export const comedyTiers = [
  {
    id: 'clip',
    name: 'One Clip',
    price: 5,
    unit: 'per clip',
    note: 'Buy 1 to 50',
    summary: 'One bit you know kills, cut on its own.',
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
    note: 'One set',
    summary: 'Send the raw video of one set. Get back up to 15 clips.',
    features: [
      'Up to 15 clips from one set',
      'Captions timed to every word',
      'Sized for TikTok, Reels, and Shorts',
      'Back within 24 hours, changes included',
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
    note: 'Up to 20 shows',
    summary: 'On the road? Send each set as you play it and the clips keep coming.',
    features: [
      'Up to 20 shows or sets',
      'Up to 15 clips from each one',
      'Every set back within 24 hours',
      '$25 a show',
    ],
    cta: 'Book my tour',
    paymentUrl: 'https://buy.stripe.com/aFabJ16DG1ak9MC8Gf83C0e',
    highlight: false,
  },
];

export const oneClip = comedyTiers[0];
export const wholeSet = comedyTiers[1];
export const wholeTour = comedyTiers[2];

export const comedySteps = [
  'Check out',
  'Send the link to your set: YouTube, Drive, or Dropbox',
  'Get your clips back within 24 hours',
];

// The "this is the look" clip at the top of /studio. It is NOT our work: it's
// a comic's own Short, played through YouTube's official embed from their own
// channel (embedding allowed, checked 2026-11-04), labelled as a reference.
// Never download or re-upload someone else's clip. If the owner objects, or
// embedding gets switched off, swap this out.
export const exampleClip = {
  youtubeId: 'fDP2ojm8q6Y',
  comic: 'Nate Bargatze',
  title: '40 just feels old',
  channel: 'Nateland',
};

// ---------- Musicians and everyone else ----------
// A short strip at the bottom of /studio, plus the /studio/brendan proof page.

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
export const threeShows = studioTiers[1];

export const studioFaq = [
  {
    question: 'What do I send?',
    answer:
      "The raw video of your set. A YouTube link works. A master file from the camera cuts cleanest. A wide shot from the back of the room is hard to crop, so if yours won't work we'll tell you.",
  },
  {
    question: 'Can I use the clips anywhere?',
    answer: "Yes. They're yours. Post them, repost them, run them as ads, use them however you want.",
  },
  {
    question: 'Will you add laughs or titles?',
    answer:
      "No. Real laughs only, and captions only, so you write your own caption when you post. Want something changed? Tell us and we'll recut it.",
  },
];
