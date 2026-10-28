// Single source of truth for Symphony Studio.
// Mirrors the shape of products.js: pages and the order flow read from here,
// so copy and pricing change in one place.

export const studioMeta = {
  name: 'Symphony Studio',
  tagline: 'Your show, cut for TikTok.',
  blurb:
    'Send us the footage from one show, phone clips included. In 5 days you get 6 vertical edits cut to your songs, ready for TikTok and Reels.',
};

// Where the order flow sends briefs.
// Today this is the same Formspree form the contact page uses; submissions are
// tagged with formType so they filter cleanly. Swap in a dedicated form ID or a
// real backend endpoint here and nothing else has to change.
export const studioIntakeEndpoint = 'https://formspree.io/f/mgopdoqy';

// The reel at the top of /studio. Real client edits, re-encoded as short muted
// loops (public/studio/reel). Get the artist's OK before adding one here.
export const reel = [
  { src: 'chef-pov', artist: 'DJ Chef', where: 'Georgia Theatre' },
  { src: 'brendan-chaotic', artist: 'Brendan Abernathy', where: 'Live set' },
  { src: 'chef-walkout', artist: 'DJ Chef', where: 'Green room' },
  { src: 'brendan-ghosts', artist: 'Brendan Abernathy', where: 'Live set' },
  { src: 'chef-cooking', artist: 'DJ Chef', where: 'Georgia Theatre' },
  { src: 'brendan-angel', artist: 'Brendan Abernathy', where: 'Live set' },
];

export const howItWorks = [
  { n: '01', title: 'Book your show', desc: 'Pay for the pack. No subscription.' },
  { n: '02', title: 'Send the footage', desc: 'A Drive or Dropbox link. Phone clips work.' },
  { n: '03', title: 'Get 6 edits in 5 days', desc: 'Cut to your songs, with hooks and a posting plan.' },
];

// paymentUrl: a Stripe Payment Link. When set, that tier's pricing button goes
// straight to checkout; when null it falls back to the brief form.
export const studioTiers = [
  {
    id: 'drop',
    name: 'Show Pack',
    price: 199,
    unit: 'per show',
    summary: "One show's footage becomes 6 vertical edits cut to your songs. Back in 5 days.",
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
    paymentUrl: null,
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
    paymentUrl: null,
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
// form until then, and a conversation for managers and venues.
export function tierHref(tier) {
  if (tier.paymentUrl) return tier.paymentUrl;
  return tier.id === 'catalog' ? '/contact?topic=studio-catalog' : `/studio/order?tier=${tier.id}`;
}

export const showPack = studioTiers[0];

export const studioFaq = [
  {
    question: 'What kind of footage works?',
    answer:
      "Anything from the night: phone clips, a friend's camera, the venue's video, the green room. Most of what we've cut started on a phone. Not sure yours is enough? Email it over and we'll tell you before you pay.",
  },
  {
    question: "What if I don't have masters?",
    answer:
      "That's fine. We'll cut to the live audio, or you add the song in TikTok when you post. Masters do perform better, so send them if you have them.",
  },
  {
    question: 'Do you post to my accounts?',
    answer:
      "No. You get the files and a plan. You pick what goes up and you post it. We'll never ask for your logins.",
  },
  {
    question: 'What if an edit misses?',
    answer:
      "Tell us what's off and we'll rebuild it. Every pack includes a round of revisions.",
  },
  {
    question: 'Who owns the edits?',
    answer:
      "You do. Your footage, your music, your files. We'll ask before showing any of it as an example of our work, and you can say no.",
  },
];
