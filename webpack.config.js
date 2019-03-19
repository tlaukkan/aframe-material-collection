const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        "aframe-material-collection": "./src/entry.ts",
        "aframe-material-collection.min": "./src/entry.ts"
     },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [ '.ts', ".js", ".json"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    devServer: {
        stats: "errors-only",
        contentBase: __dirname+"/dist",
        open:true
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: [/(node_modules)/,/(node)/,/(lib)/],
                loader: "ts-loader"
            }
        ]
    },
    externals: {
        three: 'THREE',
        aframe: 'AFRAME'
    },
    /*optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },*/
};