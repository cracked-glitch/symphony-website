// Single source of truth for Symphony Studio.
// Mirrors the shape of products.js: pages and the order flow read from here,
// so copy and pricing change in one place.

export const studioMeta = {
  name: 'Symphony Studio',
  tagline: 'You send footage. We send back posts.',
  blurb:
    'Symphony Studio makes social content for musicians. Send us an hour of raw footage and we send back finished Instagram Reels, TikToks, carousel slides, and captions. Ready to post, in your voice.',
};

// Where the order flow sends briefs.
// Today this is the same Formspree form the contact page uses; submissions are
// tagged with formType so they filter cleanly. Swap in a dedicated form ID or a
// real backend endpoint here and nothing else has to change.
export const studioIntakeEndpoint = 'https://formspree.io/f/mgopdoqy';

// The trade, stated literally. This is the thing artists need to understand in
// the first five seconds: what goes in, what comes out.
export const whatYouSend = [
  'An hour of raw studio or session footage',
  'Live show video, phone clips, tour B roll',
  'The songs you want it scored to',
  'Five of your own posts, so we learn your voice',
];

export const whatYouGetBack = [
  '6 vertical edits per show, cut to your songs',
  'Five hook options per edit, plus no-text versions',
  'Captions written in your voice, per post',
  'A posting guide for TikTok, Reels, and Shorts',
];

// Where the output is aimed. Video is the hard part and the part that travels,
// so Reels and TikTok lead. The rest ships alongside it.
export const platforms = [
  {
    name: 'Instagram Reels',
    format: 'Vertical video',
    primary: true,
    note: 'The main event. 15 and 30 second cuts, 9:16, scored and captioned.',
  },
  {
    name: 'TikTok',
    format: 'Vertical video',
    primary: true,
    note: 'Same cuts, paced and hooked for a colder audience that does not know you yet.',
  },
  {
    name: 'Instagram Carousels',
    format: 'Slides',
    primary: false,
    note: 'Full-resolution stills from the same shoot, sequenced as a swipe post.',
  },
  {
    name: 'Facebook and long-form',
    format: 'Written posts',
    primary: false,
    note: 'The longer story behind a show or a song, written the way you would tell it.',
  },
];

// paymentUrl: a Stripe Payment Link. When set, that tier's pricing button goes
// straight to checkout; when null it falls back to the brief form.
export const studioTiers = [
  {
    id: 'drop',
    name: 'Show Pack',
    price: 199,
    unit: 'per show',
    summary:
      "One show's footage, phone clips included, becomes 6 vertical edits cut to your songs. Back in 5 days.",
    footageHours: 1,
    postCount: '6 edits from one show',
    features: [
      '6 vertical edits cut to your songs',
      'Five on-screen hook options per edit',
      'No-text versions of every edit',
      'Sized for TikTok, Reels, and Shorts',
      'A posting guide: song, start point, caption, and post time',
      'One round of revisions',
    ],
    cta: 'Book a Show Pack',
    paymentUrl: null,
    highlight: true,
  },
  {
    id: 'season',
    name: 'Three Shows',
    price: 499,
    unit: 'for three shows',
    summary:
      'Three Show Packs, booked up front. Use them across a tour, a residency, or your next three nights out.',
    footageHours: 3,
    postCount: '18 edits across three shows',
    features: [
      'Everything in the Show Pack, three times over',
      'Lyric syncs, line by line or word by word',
      'Section chops that turn one song into several edits',
      'A posting plan across all three shows',
      'Use them whenever you play, no expiry',
    ],
    cta: 'Book Three Shows',
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
    features: [
      'Packs for every artist on the roster',
      'Voice profiles for each act',
      'Venue recap edits for your own channels',
      'One point of contact, one invoice',
      'Standing turnaround',
    ],
    cta: 'Talk to Us',
    paymentUrl: null,
    highlight: false,
  },
];

// What actually ships in a drop. Every item here is something we have built and
// a client has reviewed, not a roadmap promise.
export const deliverables = [
  {
    title: 'Trial-ready reels',
    desc: '6 vertical cuts per show at 10 to 60 seconds, cut on the beat of your song, framed 9:16 for Reels, TikTok, and Shorts.',
  },
  {
    title: 'Hook variants',
    desc: 'Five on-screen hook options per concept, so you can test what lands before you commit your main account to one.',
  },
  {
    title: 'Lyric syncs',
    desc: 'Your lyrics timed to the track, appearing line by line or word by word as the song plays.',
  },
  {
    title: 'Clean versions',
    desc: 'Every cut also ships with no text burned in, so you can drop your own copy on top.',
  },
  {
    title: 'Captions in your voice',
    desc: 'We build them off your past posts. What you have already written tells us more than any description of your style could.',
  },
  {
    title: 'Swipe slides',
    desc: 'Full-resolution stills pulled from the peaks of the set, sequenced as a carousel.',
  },
  {
    title: 'Section chops',
    desc: 'One song split into verse and chorus segments. One edit becomes a week of trial reels.',
  },
  {
    title: 'An ideas template',
    desc: 'A blank template with the next round of concepts written out, so you can keep going without us.',
  },
];

// The account lanes. This is the part artists cannot build alone: the volume
// problem is not one account, it is running four.
export const accountLanes = [
  {
    title: 'Your main account',
    desc: "The posts you would have made anyway, done properly. Performance cuts, lyric edits, and the moments you'd want to keep.",
  },
  {
    title: 'The archive page',
    desc: "A dedicated page for the deep catalog: live clips, unreleased snippets, crowd moments. All the stuff your main account shouldn't be cluttered with.",
  },
  {
    title: 'Aesthetic pages',
    desc: 'Pages built around a niche instead of around you. Nature, small-town Americana, whatever world your songs already live in. Your music is the recurring soundtrack, and listeners show up for the theme before they know your name.',
  },
  {
    title: 'Discovery pages',
    desc: "Genre pages where you're one of a rotating cast of artists. The audience comes for the scene, and you're always in the lineup.",
  },
];

export const pipeline = [
  {
    n: '01',
    title: 'Send your footage',
    desc: 'Drop a link to your raw footage and any audio you want used. Dropbox, Drive, or WeTransfer. Nothing to install, no upload to babysit.',
  },
  {
    n: '02',
    title: 'Set the brief',
    desc: 'Tell us the platform, the audience, and which accounts you want to feed. Point us at five of your own posts that performed.',
  },
  {
    n: '03',
    title: 'We build',
    desc: 'We find the moments, cut them vertical, sync them to your track, and write the captions in your voice.',
  },
  {
    n: '04',
    title: 'You post',
    desc: 'Files land in your inbox with a posting plan. Review them, pick your hooks, post on your own schedule. Nothing publishes without you.',
  },
];

// The intake checklist. Masters are strongly recommended rather than required:
// the first client run proved master-synced cuts outperform, but plenty of
// working artists do not have masters cleared or finished, and that is their call.
export const intakeRequirements = [
  {
    label: 'Raw footage',
    required: true,
    desc: 'A link to the unedited files. Concert footage, sessions, B roll, phone video. More is better than less.',
  },
  {
    label: 'Audio',
    required: false,
    desc: "Mastered audio gives the strongest result, and cuts synced to a master outperform camera audio every time. If you don't have masters, or you'd rather not send them, we'll work from live audio or a scratch take. Your call.",
  },
  {
    label: 'Five of your posts',
    required: true,
    desc: 'Links to five posts of yours that landed. This is how we learn your voice. What you have written counts for more than how you would describe it.',
  },
  {
    label: 'The brief',
    required: true,
    desc: 'Who this is for, what you want made, and which accounts you want to feed. The sharper you get about the audience, the sharper the output.',
  },
];

export const studioFaq = [
  {
    question: 'What kind of footage works?',
    answer:
      'Anything unedited and reasonably lit. Concert footage, studio sessions, tour B roll, phone video from the road. We have worked from a 40 hour solo recording run and from a single sold out show. Volume helps, but one good hour is enough for a drop.',
  },
  {
    question: "What if I don't have masters?",
    answer:
      "You still get a drop. Master-synced cuts do perform better and we'll say so, but plenty of working artists have tracks sitting unreleased, uncleared, or half finished. Send live audio, a scratch take, or a rough mix and we'll build from that. Whether your masters ever leave your drive is your call. It's never a condition of working with us.",
  },
  {
    question: "What's in a Show Pack, exactly?",
    answer:
      "6 vertical edits from one show, each cut to one of your songs. Every edit comes with five on-screen hook options and a no-text version, so you can test what lands. You also get a posting guide with the song, the start point, a caption, and a time to post for each one. Phone clips are fine. Most of what we've cut started on a phone.",
  },
  {
    question: 'Can you help me run more than one account?',
    answer:
      "Yes, and it's the part most artists can't pull off alone. Feeding a main account, an archive page, and a couple of niche pages is a full-time job at the volume the platforms now expect. We build for every lane and hand you a posting plan, so one shoot feeds four pages.",
  },
  {
    question: 'Do you post to my accounts?',
    answer:
      "No. We hand you files and a plan. You review, you pick, you post. We'll never ask for your account logins, and nothing goes live without you pressing the button.",
  },
  {
    question: 'Is this just an editor I could hire on Fiverr?',
    answer:
      'An editor cuts what you tell them to cut, once. We find the moments first, write the words around them in your voice, then hand you variants to test across several accounts. You end up with a whole set to try, built out of your own catalog.',
  },
  {
    question: 'Who owns the output?',
    answer:
      "You do. Your footage, your music, your finished files. We'll ask before showing any of it as an example of our work, and the answer can be no.",
  },
  {
    question: 'What if the output misses?',
    answer:
      "Tell us what missed and we'll rebuild it. Every tier includes revisions. Usually the concept lands and the format needs tuning, so revisions tend to be about pacing, text placement, and which section of the song to use.",
  },
  {
    question: 'How long does a Show Pack take?',
    answer:
      'Five days from the footage landing. Half-finished briefs are the main thing that slows a pack down, which is why the intake asks for your reference posts up front.',
  },
];
