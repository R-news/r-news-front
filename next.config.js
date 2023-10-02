/** @type {import('next').NextConfig} */
const CircularDependencyPlugin = require('circular-dependency-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {};
function getApiUrl(dev) {
    return dev ? 'http://localhost:3000/' : 'apiurl';
}

function getFrontUrl(dev) {
    return dev ? 'http://localhost:3001/' : 'fronturl';
}

module.exports = withBundleAnalyzer({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
    },
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
    ) => {
        //modules settings
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'convertColors',
                                    params: {
                                        currentColor: true,
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        });

        //plugins settings
        config.plugins.push(
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(dev),
                __IS_SERVER__: JSON.stringify(isServer),
                __FRONT_URL__: JSON.stringify(getFrontUrl(dev)),
                __API__: JSON.stringify(getApiUrl(dev)),
                __PROJECT__: JSON.stringify('frontend'),
            }),
        );

        //dev settings
        if (dev) {
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            });
        }

        return config;
    },
});
