module.exports = {
    entry: './src/index.tsx',
    output: {filename: "dist/bundle.js"},
    module: {
        // '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        loaders: [{ test: /\.tsx?$/, loader: "ts-loader" }]
    },
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
};
