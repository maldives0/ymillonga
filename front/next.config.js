// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enable: process.env.ANALYZE === 'false',
// });


// module.exports = withBundleAnalyzer({
//     distDir: '.next',
//     compress: true,
//     webpack(config, { webpack }) {
//         const prod = process.env.NODE_ENV === 'production';

//         return {
//             ...config,
//             mode: prod ? 'production' : 'development',
//             devtool: prod ? 'hidden-source-map' : 'eval',
//             plugins: [
//                 ...config.plugins,
//                 new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
//             ],
//         };
//     },
// });