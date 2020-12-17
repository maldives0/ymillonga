
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const withLess = require('@zeit/next-less');

module.exports = withBundleAnalyzer(withLess({
    compress: true,//파일압축 해주기 g.zip
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';

        const newConfig = {
            ...config,
            mode: prod ? 'production' : 'development',
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),  
                              ],
            };
        if (prod) {
            newConfig.devtool = 'hidden-source-map'; 
            newConfig.resolve.alias = {
             "@ant-design/icons$": resolve(__dirname, "path/to/your/src/icons.tsx")
            };          
        }
        return newConfig;
    },
}));