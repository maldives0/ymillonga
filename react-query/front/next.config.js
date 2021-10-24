const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withLess = require("@zeit/next-less");
const withAntdLessConfig = {
  compress: true, //파일압축 해주기 g.zip
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
};

const nextConfig = {
  webpack: (config, { webpack }) => {
    const prod = process.env.NODE_ENV === "production";
    const newConfig = {
      ...config,
      mode: prod ? "production" : "development",
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
    if (prod) {
      newConfig.devtool = "hidden-source-map";
    }

    return newConfig;
  },
};

const plugins = [[withBundleAnalyzer]];

module.exports = withPlugins(plugins, nextConfig);
