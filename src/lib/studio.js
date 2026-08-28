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
  '12 to 15 Instagram Reels and TikToks, cut and captioned',
  'Carousel slides pulled from the same footage',
  'Captions written in your voice, per post',
  'Long-form text posts for Facebook and newsletters',
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

export const studioTiers = [
  {
    id: 'drop',
    name: 'Single Drop',
    price: 10,
    unit: 'per drop',
    summary:
      'One hour of footage becomes 3 to 5 post concepts, cut into 12 to 15 trial-ready reels.',
    footageHours: 1,
    postCount: '12 to 15 reels from 3 to 5 concepts',
    features: [
      '3 to 5 post concepts, built from your footage',
      '12 to 15 trial-ready reels across those concepts',
      'Five on-screen hook options per concept',
      'Captions written in your voice',
      'A blank template with ideas for the next round',
      'One round of revisions',
    ],
    cta: 'Start a Drop',
    highlight: false,
  },
  {
    id: 'season',
    name: 'Season',
    price: 40,
    unit: 'for five drops',
    summary:
      'Five drops at eight dollars each. Enough output to run a main account and two alternates.',
    footageHours: 5,
    postCount: '60 to 75 reels across five drops',
    features: [
      'Everything in Single Drop, five times over',
      'Lyric syncs, line by line or word by word',
      'Section chops that turn one song into many reels',
      'Aesthetic-page campaigns on licensed stock footage',
      'A posting plan across your main and alternate accounts',
      'Two rounds of revisions per drop',
    ],
    cta: 'Start a Season',
    highlight: true,
  },
  {
    id: 'catalog',
    name: 'Catalog',
    price: null,
    unit: 'custom',
    summary:
      'For artists sitting on a back catalog, and for managers running more than one act.',
    footageHours: null,
    postCount: 'Scoped to the catalog',
    features: [
      'Full back catalog and archive footage',
      'Multiple voice profiles across artists',
      'Fan pages and aesthetic pages built and seeded',
      'Named creative direction per campaign',
      'Standing revision cycle',
    ],
    cta: 'Talk to Us',
    highlight: false,
  },
];

// What actually ships in a drop. Every item here is something we have built and
// a client has reviewed, not a roadmap promise.
export const deliverables = [
  {
    title: 'Trial-ready reels',
    desc: '12 to 15 vertical cuts per drop at 15 and 30 seconds, synced to your audio, framed 9:16 for Reels, TikTok, and Shorts.',
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
    question: 'How many posts is a drop, really?',
    answer:
      "A drop is 3 to 5 post concepts, and each concept ships as several usable cuts: a hook version, a clean version, lyric-synced versions, and section chops. That works out to 12 to 15 trial-ready reels, plus a blank template with the next round of ideas written out. They're built for testing. Post the ones that earn it.",
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
    question: 'How long does a drop take?',
    answer:
      'Plan on a few days from a complete brief. Half-finished briefs are the main thing that slows a drop down, which is why the intake asks for your reference posts up front.',
  },
];
