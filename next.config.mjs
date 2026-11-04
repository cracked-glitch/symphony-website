/** @type {import('next').NextConfig} */
const nextConfig = {
  // /studio/free was a free-clip page for one day (2026-11-04). Comics now pay
  // from the first order, so old links land on the 2-for-$5 page, ?src= intact.
  async redirects() {
    return [{ source: '/studio/free', destination: '/studio/try', permanent: false }];
  },
};

export default nextConfig;
