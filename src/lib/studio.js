// Single source of truth for Symphony Studio.
// Mirrors the shape of products.js: pages and the order flow read from here,
// so copy and pricing change in one place.

export const studioMeta = {
  name: 'Symphony Studio',
  tagline: 'One upload. A month of posts.',
  blurb:
    'Send us your raw footage. We cut it into vertical video, write the captions in your voice, and hand back files you can post today.',
};

// Where the order flow sends briefs.
// Today this is the same Formspree form the contact page uses; submissions are
// tagged with formType so they filter cleanly. Swap in a dedicated form ID or a
// real backend endpoint here and nothing else has to change.
export const studioIntakeEndpoint = 'https://formspree.io/f/mgopdoqy';

export const studioTiers = [
  {
    id: 'drop',
    name: 'Single Drop',
    price: 10,
    unit: 'per drop',
    summary: 'One hour of footage. Three to five finished posts.',
    footageHours: 1,
    postCount: '3 to 5',
    features: [
      'Vertical cuts at 15 and 30 seconds',
      'Five on-screen hook options per cut',
      'Captions written in your voice',
      'Clean versions with no text burned in',
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
    summary: 'Five drops at eight dollars each. For artists shipping every week.',
    footageHours: 5,
    postCount: '15 to 25',
    features: [
      'Everything in Single Drop, five times over',
      'Lyric syncs, line by line or word by word',
      'Section chops that turn one song into many reels',
      'Swipe slides pulled at full resolution',
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
      'For labels, managers, and artists with a back catalog worth mining. We scope it with you.',
    footageHours: null,
    postCount: 'Scoped to the catalog',
    features: [
      'Full back catalog and archive footage',
      'Multiple voice profiles across artists',
      'Aesthetic and fan-page content lanes',
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
    title: 'Vertical cuts',
    desc: '15 and 30 second cuts, synced to your master audio, framed 9:16 for Reels, TikTok, and Shorts.',
  },
  {
    title: 'Hook variants',
    desc: 'Five on-screen hook options per cut, so you can test what lands before you commit to one.',
  },
  {
    title: 'Lyric syncs',
    desc: 'Your lyrics timed to the master, appearing line by line or word by word as the song plays.',
  },
  {
    title: 'Clean versions',
    desc: 'Every cut also ships with no text burned in, so you can drop your own copy on top.',
  },
  {
    title: 'Captions in your voice',
    desc: 'Written from your past posts, not from a template. The evidence of what you actually wrote beats any style description.',
  },
  {
    title: 'Swipe slides',
    desc: 'Still frames pulled at full resolution from the moments that matter, sequenced as a carousel.',
  },
  {
    title: 'Section chops',
    desc: 'One song split into verse and chorus segments. One edit becomes a week of trial reels.',
  },
  {
    title: 'Hook menus',
    desc: 'A written menu of on-screen hook options per post, tuned to suspense, relatability, or the direct ask.',
  },
];

export const pipeline = [
  {
    n: '01',
    title: 'Send your footage',
    desc: 'Drop a link to your raw footage and your song masters. Dropbox, Drive, or WeTransfer. Nothing to install, no upload to babysit.',
  },
  {
    n: '02',
    title: 'Set the brief',
    desc: 'Tell us the platform, the audience, and how many posts you want. Point us at five of your own posts that performed.',
  },
  {
    n: '03',
    title: 'We build',
    desc: 'We find the moments, sync the cuts to your master, frame them vertical, and write the captions in your voice.',
  },
  {
    n: '04',
    title: 'You post',
    desc: 'Files land in your inbox. Review them, pick your hooks, post on your schedule. Nothing publishes without you.',
  },
];

// The intake checklist. Master audio is required because the first client run
// failed without it: live audio alone cannot carry a post.
export const intakeRequirements = [
  {
    label: 'Raw footage',
    required: true,
    desc: 'A link to the unedited files. Concert footage, sessions, B roll, phone video. More is better than less.',
  },
  {
    label: 'Song masters',
    required: true,
    desc: 'The mastered audio for any song you want a cut scored to. Cuts synced to master audio outperform live audio every time.',
  },
  {
    label: 'Five of your posts',
    required: true,
    desc: 'Links to five posts of yours that landed. This is how we learn your voice. We weigh what you wrote over how you describe yourself.',
  },
  {
    label: 'The brief',
    required: true,
    desc: 'Who this is for and what you want made. The more specific the audience, the sharper the output.',
  },
];

export const studioFaq = [
  {
    question: 'What kind of footage works?',
    answer:
      'Anything unedited and reasonably lit. Concert footage, studio sessions, tour B roll, phone video from the road. We have worked from a 40 hour solo recording run and from a single sold out show. Volume helps, but one good hour is enough for a drop.',
  },
  {
    question: 'Do you really need my masters?',
    answer:
      'Yes, and this is the requirement people push back on most. Our first client run shipped without masters and every piece of feedback came back the same way: sync it to the master. Live audio off a camera mic reads as amateur in a feed. Send the mastered track for any song you want scored.',
  },
  {
    question: 'Do you post to my accounts?',
    answer:
      'No. We hand you files. You review, you pick, you post. We never ask for your account credentials and nothing goes live without you pressing the button.',
  },
  {
    question: 'How is this different from an editor on Fiverr?',
    answer:
      'An editor cuts what you tell them to cut. We find the moments first, then write the words around them in your voice, then give you variants to test. You get a set of options built on your own catalog, not one file built to one spec.',
  },
  {
    question: 'Who owns the output?',
    answer:
      'You do. Your footage, your music, your finished files. We ask permission before showing any of it as an example of our work, and the answer can be no.',
  },
  {
    question: 'What if the output misses?',
    answer:
      'Tell us what missed and we rebuild it. Every tier includes revisions. In practice the concepts land and the format needs tuning, so revisions are usually about pacing, text placement, and which section of the song to use.',
  },
  {
    question: 'How long does a drop take?',
    answer:
      'Plan on a few days from a complete brief. Incomplete briefs are the main thing that slows a drop down, which is why the intake asks for masters and reference posts up front.',
  },
];
