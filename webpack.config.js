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
    entry: {
        app: './client',
        vendor: [
            'isomorphic-fetch',
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style', `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`)
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
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ]
};