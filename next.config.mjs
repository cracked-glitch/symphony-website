/** @type {import('next').NextConfig} */
const nextConfig = {
  // /studio/free was a free-clip page for one day (2026-11-04). Comics now pay
  // from the first order, so old links land on the 2-for-$5 page, ?src= intact.
  // Clip pages and their videos are private: never indexed, cached by search, or sent as a referrer.
  async headers() {
    const priv = [
      { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive, nosnippet, noimageindex' },
      { key: 'Referrer-Policy', value: 'no-referrer' },
    ];
    return [
      { source: '/c/:path*', headers: priv },
      { source: '/clips/:path*', headers: priv },
    ];
  },
  async redirects() {
    return [{ source: '/studio/free', destination: '/studio/try', permanent: false }];
  },
};

export default nextConfig;
