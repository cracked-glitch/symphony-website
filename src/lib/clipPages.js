// Per-prospect clip pages: symphonylabs.ai/c/<code>.
//
// Private by design: <code> is random (never the person's name), the page and its video are never
// listed, linked or indexed (X-Robots-Tag in next.config.mjs), an unpaid page is deleted on its
// `expires` date by verticals/expire_pages.py, and the page has a one-tap delete.
//
// One page per person we contact. It starts as the outreach page (their free clip, the offer, who we
// are) and becomes their delivery page: when they pay, their clips are added to the same record and
// show up under "Your clips". One JSON file per person in src/data/clips/<slug>.json.
//
// Video files live under CLIP_BASE/<slug>/<file>. Today that is the site itself (public/clips);
// set NEXT_PUBLIC_CLIP_BASE to the storage bucket's public URL (e.g. https://clips.cutmyset.com)
// once clips move to object storage, and nothing else changes.
import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'clips');
export const CLIP_BASE = process.env.NEXT_PUBLIC_CLIP_BASE || '/clips';

// What each audience is sold. One Stripe Payment Link per offer; checkout asks which video, what to
// skip, and captions or not, so there is no form after paying.
export const verticals = {
  'b2b-podcast': {
    noun: 'episode',
    clipWord: 'clips',
    platforms: 'LinkedIn, YouTube Shorts, Reels and TikTok',
    offer: '10 clips from one episode',
    price: 149,
    checkoutUrl: 'https://buy.stripe.com/8x24gz2nq1akf6W3lV83C0h',
    pitch:
      'Every episode has a handful of moments that work on their own. I find them, cut them vertical, caption them, and hand them back ready to post.',
  },
  realtor: {
    noun: 'video',
    clipWord: 'Shorts',
    platforms: 'YouTube Shorts, Reels and TikTok',
    offer: '10 Shorts from one video',
    price: 149,
    checkoutUrl: 'https://buy.stripe.com/4gM28r5zC8CMe2Se0z83C0i',
    pitch:
      'Your long videos win search. Shorts are how new people find the channel in the first place. I cut the moments that stand on their own and hand them back ready to post.',
  },
  comedy: {
    noun: 'set',
    clipWord: 'clips',
    platforms: 'TikTok, Reels and Shorts',
    offer: 'up to 10 clips from one set',
    price: 99,
    checkoutUrl: 'https://buy.stripe.com/3cI8wPfac7yI0c24pZ83C0g',
    pitch:
      'I watch the whole set, cut every bit that stands on its own, and caption it with your real audio and the real laughs. Nothing added.',
  },
};

export function clipSlugs() {
  if (!fs.existsSync(DATA_DIR)) return [];
  return fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}

export function getClipPage(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  const rec = JSON.parse(fs.readFileSync(file, 'utf8'));
  const v = verticals[rec.vertical] || verticals['b2b-podcast'];
  return { ...rec, v };
}

export function mediaUrl(slug, file) {
  if (!file) return null;
  if (/^https?:\/\//.test(file)) return file;
  return `${CLIP_BASE}/${slug}/${file}`;
}

// "November 26" for a YYYY-MM-DD date.
export function prettyDate(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });
}

// The checkout link for this person: tagged so a payment matches the page it came from. The page code
// is random; `ref` is the readable name the tracker uses.
export function checkoutHref(rec) {
  const base = rec.checkoutUrl || rec.v.checkoutUrl;
  const params = new URLSearchParams({
    client_reference_id: rec.ref || rec.slug,
    utm_source: 'clip_page',
    utm_medium: rec.vertical,
    utm_campaign: rec.campaign || 'outreach',
  });
  return `${base}?${params}`;
}
