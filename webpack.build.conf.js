const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.conf");

const webpackBuildConfig = merge(webpackBaseConfig, {
    mode: "production",
});

module.exports = new Promise((resolve, reject) => {
    resolve(webpackBuildConfig);
});
