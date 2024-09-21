/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Look for .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack loader to treat SVGs as components
    });

    return config; // Return the updated config
  },
};

export default nextConfig;
