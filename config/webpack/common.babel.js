import path from 'path';
import webpack from 'webpack';
import ExtractPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import vendors from './vendors.babel';
import { ForkCheckerPlugin } from 'awesome-typescript-loader';

const exclude = /\/node_modules\//;
const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/;
const resolve = (rel) => path.resolve(process.cwd(), rel);
const resources = resolve('./src/assets');
const include = resolve('./src');

export default {
  entry: {
    vendors: [
      './src/polyfills.ts',
      ...vendors
    ],
    app: './src/main.ts',
  },

  output: {
    path: './dist',
    filename: '[name].js',
  },

  module: {
    preLoaders: [{
      include,
      test: /\.js$/,
      loader: 'source-map',
    }],

    loaders: [
      {
        test: /\.ts$/,
        // loader: 'ts',
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
      },
      {
        include,
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: [
            'stage-0',
            'es2015',
          ],
          plugins: [
            'add-module-exports',
          ]
        }
      },
      {
        include,
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          presets: [
            'stage-0',
            'es2015',
            'react',
          ],
          plugins: [
            'add-module-exports',
            'transform-class-properties',
          ]
        }
      },
      {
        include,
        loader: 'raw',
        test: /\.html$/,
      },
      /*
      {
        include,
        test: /template.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]',
      },
      */
      {
        test: /\.css$/,
        include: [
          resolve('./node_modules/angular'),
          resolve('./node_modules/bootstrap/dist'),
          include,
        ],
        loader: extractCSS.extract('style', 'css?importloader=1&sourceMap', 'postcss'),
      },
      {
        include,
        test: /\.styl$/,
        loader: extractCSS.extract('style', 'css!postcss!stylus?sourceMap'),
      },
      {
        include: exclude,
        loader: 'file?name=vendors/[1]&regExp=node_modules/(.*)',
        test: assets,
      },
      {
        include: resources,
        loader: 'file?name=resources/[1]&regExp=src/assets/(.*)',
        test: assets,
      },
      {
        exclude: [exclude, resources],
        loader: 'file?name=[path]/[name].[ext]',
        test: assets,
      },
    ],

    noParse: [
      /.+zone\.js\/dist\/.+/,
      /.+angular2\/bundles\/.+/,
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    extractCSS,
    new ForkCheckerPlugin(),
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      favicon: './src/assets/favicon.ico',
      template: './src/assets/index.html',
      minify: { collapseWhitespace: true }
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
  ],

  postcss: () => [
    autoprefixer,
    cssnano
  ],

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  }
};
