import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== Tells Next.js to generate static HTML files
  images: {
    unoptimized: true, // <=== Required for Next.js images to work on GitHub Pages
  },
  // If you are deploying to a custom domain or user-site (username.github.io),
  // you don't need basePath. If deploying to username.github.io/portfolio,
  // you might need basePath: "/portfolio". 
  // Let's stick to the root method for simplicity.
};

export default nextConfig;