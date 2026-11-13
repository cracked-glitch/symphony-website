// Single source of truth for Symphony Studio.
// Mirrors the shape of products.js: pages and the order flow read from here,
// so copy and pricing change in one place.

export const studioMeta = {
  name: 'Symphony Studio',
  tagline: 'Send us your set. Get back a stack of clips.',
  blurb:
    'Send the raw video of one set. For $99 we cut it into up to 15 vertical clips with captions, ready for TikTok, Reels, and Shorts. Back in 24 hours.',
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
    price: 99,
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
    paymentUrl: 'https://buy.stripe.com/3cI8wPfac7yI0c24pZ83C0g',
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
  'Check out and paste the link to your set: YouTube, Drive, or Dropbox',
  'I watch the whole set and cut the best jokes',
  'Get your clips back within 24 hours',
];

// ---------- Who cuts your clips ----------
// The most common reply from comics is "are you a real person?", so /studio and
// /studio/try say who does the work and how to reach him.
// photo: path under /public to a real, recent photo (a phone shot is fine).
// Leave null and the block shows initials. Don't use the AI-generated headshot.
// phone: remove it to take the number off the site.
export const studioHuman = {
  name: 'Nathan Settlage',
  initials: 'NS',
  city: 'Atlanta',
  photo: '/studio/nathan.jpg',
  phone: '770-286-8865',
  email: 'nathan@symphonylabs.ai',
};

// Comedian quotes for /studio. Add one only with the comic's written OK, in
// their own words: { quote, name, credit } (credit like "Helium Atlanta").
// The block stays hidden while this is empty. Scott's quote lives in
// clientSpotlight below, so it isn't repeated here.
export const testimonials = [];

// ---------- Real client work ----------
// Scott Bedgood, our first paying comic. On 2026-11-12 he wrote back (Gmail thread 1a18ae364d34073c) with the
// quote below, word for word, and "You can pick a clip of mine to feature." That's ONE clip, so `clips` holds
// one until he OKs more in writing (only clips[0] is shown). It sits first in the hero, labelled "My work",
// side by side with the Nate Bargatze reference, and his quote and Instagram sit right under it.
// Nathan, 11/12: no backstory and no booking email. It's proof of my work, not an ad for Scott; the Instagram
// link is the thank-you. Files: public/studio/clients/<src>.mp4 and .jpg (720x1280).
export const clientSpotlight = {
  name: 'Scott Bedgood',
  where: 'Helium Comedy Club',
  quote:
    'Nathan was really great to work with. Very professional, got the clips cut quickly, and they look great!',
  instagram: 'scottbedgood',
  clips: [{ src: 'scott-falcons', title: 'The Atlanta Falcons of my marriage' }],
};

// ---------- First order: 2 clips for $5 (/studio/try) ----------
// The link that Facebook group posts, DMs, and QR cards point to. Comics pay
// from the start: the regular $5 One Clip checkout, and Nathan adds the second
// clip by hand on a comic's first order. The free clip lives only in cold
// emails. Add ?src= to the page link (fb-atl, ig, qr) and it rides through to
// Stripe as utm_source and client_reference_id, so each sale shows its channel.
// paymentUrl: the Stripe Payment Link "First order: 2 clips" ($5, quantity
// locked at 1), whose confirmation redirects to
// /studio/order?tier=try&paid=1&session={CHECKOUT_SESSION_ID} so the paid
// brief says what was bought. Created 2026-11-04. If it's ever null again, the
// trial falls back to the One Clip link.
export const firstOrder = {
  id: 'try',
  name: 'First order: 2 clips',
  price: 5,
  paymentUrl: 'https://buy.stripe.com/7sY14nbY02eo3oee0z83C0f',
};

export function trialCheckoutHref(source) {
  const src = source || 'studio_try';
  const params = new URLSearchParams({
    client_reference_id: `try-${src}`,
    utm_source: src,
    utm_medium: 'studio_try',
    utm_campaign: 'first2for5',
  });
  return `${firstOrder.paymentUrl || oneClip.paymentUrl}?${params}`;
}

// The Whole Set button on /studio/try, tagged the same way (set-<src>) so a
// $99 sale from a Facebook post shows which post it came from.
export function setCheckoutHref(source) {
  const src = source || 'studio_try';
  const params = new URLSearchParams({
    client_reference_id: `set-${src}`,
    utm_source: src,
    utm_medium: 'studio_try',
    utm_campaign: 'first2for5',
  });
  return `${wholeSet.paymentUrl}?${params}`;
}

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
// A section at the bottom of /studio, plus the /studio/brendan proof page.

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
      "A link to the video of your set. You paste it at checkout. YouTube, Google Drive, and Dropbox links all work. If you have the master file from the camera, put it in Drive or Dropbox and paste that link, because it cuts cleanest. A wide shot from the back of the room is hard to crop, so if yours won't work I'll tell you.",
  },
  {
    question: 'Can I use the clips anywhere?',
    answer: "Yes. They're yours. Post them, repost them, run them as ads, use them however you want.",
  },
];
