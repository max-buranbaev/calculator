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
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-decorators-legacy'],
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [
            'node_modules'
        ]
    },
};