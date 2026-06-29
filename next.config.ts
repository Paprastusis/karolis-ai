import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The booking page became the full Contact page. Keep old links working.
      {
        source: "/book-call",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
