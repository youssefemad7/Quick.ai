/** @type {import('next').NextConfig} */
const nextConfig = {
  // devIndicators: false // Uncomment this line to disable dev indicators
  images: {
    domains: [
      "anotherdomain.com",
      "cdn.dummyjson.com",
      "flowbite.com",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
