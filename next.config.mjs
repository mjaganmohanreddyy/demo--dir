/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          // NextJS <Image> component needs to whitelist domains for src={}
          "lh3.googleusercontent.com",
          "pbs.twimg.com",
          "images.unsplash.com",
          "logos-world.net",
        ],
      },
};

export default nextConfig;

