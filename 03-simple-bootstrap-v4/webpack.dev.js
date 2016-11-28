const webpack = require('webpack');
const port = '3000';
module.exports = {
    entry: [
        './src/index.tsx',
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
    ],
    output: {
        filename: 'dist/bundle.js',
        publicPath: `http://localhost:${port}/`,
    },
    module: {
        // '.ts' or '.tsx' will be handled by 'awesome-typescript-loader'.
        loaders: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/,  loader: 'style!css' },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // other plugins
    ],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    externals: {
        // This is to avoid bundling all of our dependencies,
        // which allows browsers to cache those libraries between builds.
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devtool: "source-map", // Enable sourcemaps for debugging webpack's output.
    devServer: {
        port: port,
        quiet: true,
        noInfo: true,
        host: '0.0.0.0',
        contentBase: "public/",
        stats: { colors: true }
    }
};
