/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.tokopedia.net"],
  },
  webpack: (config) => {
    // config.node = {
    //   fs: "empty",
    //   child_process: "empty",
    //   net: "empty",
    //   dns: "empty",
    //   tls: "empty",
    // };
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
