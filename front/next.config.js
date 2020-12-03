
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enable: process.env.ANALYZE === 'true',
});
const withLess = require('@zeit/next-less');

//  노드에 .less 파일이 필요한 경우 오류 방지
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { };
}



module.exports = withLess({
    compress: true,//파일압축 해주기 g.zip
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    distDir: '.next',
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';
        const newConfig = {
            ...config,
            mode: prod ? 'production' : 'development',
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
            ],
        }
        if (prod) {
            newConfig.devtool = 'hidden-source-map';
        }
        return newConfig;
    },
});