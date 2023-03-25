const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.conf");

const webpackDevConfig = merge(webpackBaseConfig, {
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(
                __dirname,
                webpackBaseConfig.externals.paths.dist
            ),
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});

module.exports = new Promise((resolve, reject) => {
    resolve(webpackDevConfig);
});
