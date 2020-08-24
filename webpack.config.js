'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MergeJsonPlugin = require('merge-json-webpack-plugin');

const { version } = require('./package.json');

const isFirefox = process.env.PLATFORM === 'firefox';

module.exports = ({ outDir, env }) => {
  const isDevMode = env === 'development';

  return {
    devtool: false,
    entry: {
      content: './src/content/index.js',
      options: isDevMode
        ? ['react-devtools', './src/options/index.js']
        : './src/options/index.js',
    },
    mode: env,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          use: 'babel-loader',
        },
      ],
    },
    output: {
      path: outDir,
    },
    performance: {
      hints: false,
    },
    plugins: [
      new HTMLPlugin({
        chunks: ['options'],
        filename: 'options.html',
        template: 'src/options/index.html',
      }),
      new MergeJsonPlugin({
        group: [
          {
            beforeEmit: (manifest) => ({ version, ...manifest }),
            files: [
              'src/manifest.json',
              isFirefox && 'src/firefox-manifest.json',
            ].filter(Boolean),
            to: 'manifest.json',
          },
        ],
      }),
      !isDevMode && new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
    ].filter(Boolean),
    watch: isDevMode,
  };
};
