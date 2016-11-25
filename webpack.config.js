const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: './public/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'public/build/'),
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js?/,
            loader: 'babel-loader',
            resolveLoader: {
                root: path.join(__dirname, 'node_modules')
            },
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-decorators-legacy'],
            }
        }]
    }
};