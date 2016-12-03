const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
module.exports = {
    entry: {
        vendor: [ ],
        app: './src/index',
    },
    output: {
        filename: 'public/js/[name].js',
    },
    module: {
        // '.ts' or '.tsx' will be handled by 'ts-loader'.
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style','css!sass') },
            { test: /\.css$/,  loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
        ]
    },
    plugins: [
        new ExtractTextPlugin("dist/style.min.css", {allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:"public/js/vendor.js",minChunks: Infinity}),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // other plugins
    ],
    // Add '.ts' and '.tsx' as resolvable extensions.
    resolve: {extensions: ["", ".ts", ".tsx", ".js"]},
    externals: {
        // This is to avoid bundling all of our dependencies,
        // which allows browsers to cache those libraries between builds.
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devtool: "source-map", // Enable sourcemaps for debugging webpack's output.
};
