const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPlugins = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

const withAntdLessConfig = {
  modifyVars: { "@primary-color": "#f5222d" },
  lessVarsFilePath: "./pages/antd-custom.less",
  lessVarsFilePathAppendToEndOfContent: false,
};
const plugins = [[withBundleAnalyzer], [withAntdLess, withAntdLessConfig]];
const nextConfig = {
  webpack: (config, { webpack }) => {
    const prod = process.env.NODE_ENV === "production";
    const newConfig = {
      ...config,
      mode: prod ? "production" : "development",
      module: {
        rules: [
          ...config.module.rules,
          {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000,
                name: "[name].[ext]",
              },
            },
          },
        ],
      },
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

module.exports = withPlugins(plugins, nextConfig);
