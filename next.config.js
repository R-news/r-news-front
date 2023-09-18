/** @type {import('next').NextConfig} */
const CircularDependencyPlugin = require('circular-dependency-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {}
function getApiUrl(dev) {
  return dev ? 'http://localhost:3000/' : 'apiurl'
}

module.exports = withBundleAnalyzer({
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {

      const apiUrl = getApiUrl(dev);

      config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(dev),
            __IS_SERVER__: JSON.stringify(isServer),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify('frontend'),
        })
    );

    if(dev){
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true,
    })
    }
      return config
    }
  })


