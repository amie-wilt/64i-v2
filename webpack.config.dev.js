const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        './client.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style',
                    `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`)
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass'
                ]
            },
            {
                test: /\.(ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]

};