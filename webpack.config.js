const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
                loader: ExtractTextPlugin.extract('style', `css?modules&localIdentName=[name]_[local]__[hash:base64:5]!postcss`),
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