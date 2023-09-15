/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        console.log(dev)
      return config
    },
  }
