const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const globule = require("globule");

const PATHS = {
    src: path.join(__dirname, "src"),
    dist: path.join(__dirname, "dist"),
    assets: "assets/",
};

const paths = globule.find("src/pages/**/*.html");

module.exports = {
    mode: "development",
    externals: {
        paths: PATHS,
    },
    entry: {
        main: PATHS.src,
    },
    output: {
        path: PATHS.dist,
        filename: `js/[name].bundle.js`,
        publicPath: "/",
        assetModuleFilename: `assets/[hash].[ext]`,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"), // шаблон
            filename: "index.html", // название выходного файла
        }),

        ...paths.map((path) => {
            return new HtmlWebpackPlugin({
                template: path, // шаблон
                filename: `${path.split("src")[1]}`, // название выходного файла
            });
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};
