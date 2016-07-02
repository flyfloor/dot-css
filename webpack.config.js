var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForceCaseSensitivityPlugin = require('force-case-sensitivity-webpack-plugin');

var publicPath = process.env.NODE_ENV === 'dev' ? '/dist/' : '';

module.exports = {
    entry: "./entre.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'example.js',
        publicPath: publicPath
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("example.css"),
        new webpack.NoErrorsPlugin(),
        new ForceCaseSensitivityPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // })
    ],
    module: {
        loaders: [
            { 
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
            }, { 
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=./image/[name].[ext]' 
            },  { 
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'url-loader?limit=10000&name=./font/[name].[ext]'
            }
        ],
        postcss: function () {
            return [autoprefixer, precss];
        }
    },
    
};