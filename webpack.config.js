const path = require('path');
const dotenv = require('dotenv');

const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require(__dirname + '/src/configs/config');
const { META_TITLE, META_DESCRIPTION, META_KEYWORDS } = config;


const PUBLIC_PATH = '/';
const dist = 'public';

module.exports = {
    output: {
        path: path.join(__dirname, dist),
        publicPath: PUBLIC_PATH,
        filename: 'js/[name]-[fullhash:8].js',
        clean: true,
    },


    module: {
        rules: [
            // == Type script
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // == fonts
            {
                test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash:8][ext]',
                },
            },
            // == images
            {
                test: /\.(png|jpe?g|gif|ico|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash:8][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            _components: path.resolve(__dirname, 'src/components/'),
            _ui: path.resolve(__dirname, 'src/components/_ui/'),
            _redux: path.resolve(__dirname, 'src/redux/'),
            _styles: path.resolve(__dirname, 'src/styles/'),
            _images: path.resolve(__dirname, 'src/assets/images/'),
            _utils: path.resolve(__dirname, 'src/utils/'),
            _configs: path.resolve(__dirname, 'src/configs/'),
            _api: path.resolve(__dirname, 'src/api/'),
        },
    },

    plugins: [
        // == create html files
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            title: META_TITLE,
            meta: {
                description: {
                    name: 'description',
                    content: META_DESCRIPTION,
                },
                keywords: { name: 'keywords', content: META_KEYWORDS },
            },
            // favicon: 'src/assets/images/favicons/icon_1024x1024.png',?
            inject: true,
        }),

        // == create css files
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[fullhash:8].css',
        }),

        // == allow global constants
        new DefinePlugin({
            'process.env': JSON.stringify(dotenv.config().parsed),
        }),
    ],
};