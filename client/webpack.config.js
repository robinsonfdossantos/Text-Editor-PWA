const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file. *********
// TODO: Add CSS loaders and babel to webpack. ****************

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new WebpackPwaManifest({
        name: 'My Text Editor',
        short_name: 'Text Editor',
        description: 'A progressive text editor application.',
        background_color: '#ffffff',
        theme_color: '#2196F3',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512], // Add the required sizes for your icons
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src/sw.js', // Path to your service worker file
        swDest: 'sw.js', // Output service worker file name
      }),
    ],
    module: {
      rules: [
        // Add CSS loaders
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Add Babel loader for JavaScript
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};