const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssConditionals = require('postcss-conditionals');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssMath = require('postcss-math');
const postcssNesting = require('postcss-nesting');
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
                test:   /\.css$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5',
                    'postcss'
                ]
            },
            {
                test: /\.(ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    postcss: function() {
        return [
            postcssImport,
            postcssMixins,
            postcssConditionals,
            postcssSimpleVars,
            postcssMath,
            postcssNesting,
            autoprefixer
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]

}
