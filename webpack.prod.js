const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',

    module: {
        rules: [
            // == scss/css
            {
                test: /\.(sc|c)ss$/,
                use: [
                    // == create css files
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },

                    // == translate css into commonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                // this pattern matches with setting in `babel-plugin-react-css-modules`
                                localIdentName: '[hash:base64:5]',
                            },
                            sourceMap: false,
                        },
                    },

                    // == transform css
                    {
                        loader: 'postcss-loader',
                    },

                    // == compile scss to css
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    // TODO:  добавить поддержку PWA application

    plugins: [
        // == allow global constants | production
        new DefinePlugin({
            __WEBPACK_ENVIRONMENT__: JSON.stringify('production'),
        }),
    ],
});