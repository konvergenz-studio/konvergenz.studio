const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    // mode: 'production',
    entry: { app: './src/index.js' },
    output: {
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|ico|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        //name: "./images/[name][hash].[ext]",
                        name: '[path][name].[ext]'
                    },

                }
              ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                // sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /\.(mov|mp4)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.css$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        extractSass,
        // new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
};
