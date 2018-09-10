const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssestsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        // another: './src/another-module.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ title: 'Output Management' }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        // "Dedup" technic (Prevent duplication)
        // splitChunks: { chunks: 'all' },
        minimizer: [ 
            new UglifyJsPlugin({ 
                test: /\.js($|\?)/i ,
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssestsPlugin({})
        ],

    },
    module: {
        rules: [
            {
                // regular expression
                test: /\.css$/,     
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '../' }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [ 'file-loader' ]
            }
        ]
    }
}