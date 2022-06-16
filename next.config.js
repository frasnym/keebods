/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.tokopedia.net"],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      child_process: false,
      // http2: false,
      net: false,
      tls: false,
    };
    return config;
  },
  // reactStrictMode: false, // Ref: https://stackoverflow.com/questions/71835580/useeffect-being-called-twice-in-nextjs-typescript-app

  // config.node = {
  //   fs: "empty",
  //   child_process: "empty",
  //   net: "empty",
  //   dns: "empty",
  //   tls: "empty",
  // };

  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       fs: false,
  //       path: false,
  //       child_process: false,
  //       http2: "empty",
  //       net: false,
  //       tls: false,
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
