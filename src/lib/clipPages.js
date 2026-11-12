// Per-prospect clip pages: symphonylabs.ai/c/<code>.
//
// Private by design. Nothing about a prospect lives in this (public) repo: each page's details and video
// sit in private object storage under CLIP_BASE/<code>/ (page.json, sample.mp4, sample.jpg, paid clips),
// and the page fetches them when opened. <code> is random, never the person's name; storage has no
// listing, so a page can only be opened with its exact link. Pages and videos are never indexed
// (X-Robots-Tag in next.config.mjs). Deleting the storage folder takes the page down at once, with no
// deploy: verticals/expire_pages.py does that on the expiry date or on a delete request.
//
// One page per person we contact. It starts as the outreach page (their free clip, the offer, who we
// are) and becomes their delivery page: when they pay, their clips are added to the same page.json.

// Public base URL of the clip storage bucket. Set CLIP_BASE locally to test against another bucket.
export const CLIP_BASE = (process.env.CLIP_BASE || 'https://clips.symphonylabs.ai').replace(/\/$/, '');

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

const CODE = /^[a-z0-9]{8,24}$/;

// The page's details, read from storage on every visit (never cached), or null if there is no such page.
export async function getClipPage(code) {
  if (!CODE.test(code || '')) return null;
  try {
    const res = await fetch(`${CLIP_BASE}/${code}/page.json`, { cache: 'no-store' });
    if (!res.ok) return null;
    const rec = await res.json();
    const v = verticals[rec.vertical] || verticals['b2b-podcast'];
    return { ...rec, slug: code, v };
  } catch {
    return null;
  }
}

export function mediaUrl(code, file) {
  if (!file) return null;
  if (/^https?:\/\//.test(file)) return file;
  return `${CLIP_BASE}/${code}/${file}`;
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
