'use strict';

/*** Build modules ***/

var webpack = require('webpack');
var path = require("path");
var WebpackShellPlugin = require('webpack-shell-plugin');


/*** Plugins ***/

// var ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// var legacyScssExtractPlugin = new ExtractTextPlugin("legacy-styles.css");


/*** Constants ***/

var PATHS = {
  entry: path.join(__dirname, 'webpack-entry'),
  dist: path.join(__dirname, 'dist'),
  npm: path.join(__dirname, 'node_modules'),
  // legacy: path.join(__dirname, 'legacy')
};


/*** Config ***/

var config = {
  resolve: {
    alias: {
      /*** Paths, for use in require()s ***/
      __src: path.join(__dirname, 'src'),
      __legacy: path.join(__dirname, 'legacy'),
      __npm: PATHS.npm,

      /*** Modules ***/
      jquery: PATHS.npm + '/jquery/dist/jquery.js',
      // socket_io: PATHS.npm + '/socket.io-client/socket.io.js',
      angular: PATHS.npm + '/angular/angular.js'
    }
  },

  entry: {
    app1: path.join(PATHS.entry, 'app1.js'),
    // vendor: ['jquery'], // refers to the resolve.alias
    vendor: path.join(PATHS.entry, 'vendor.js'),
    // 'legacy-styles': path.join(PATHS.entry, 'legacy-styles.js'),
    // 'legacy-scripts': path.join(PATHS.entry, 'legacy-scripts.js'),
    // 'legacy-pages': path.join(PATHS.entry, 'legacy-pages.js')
  },

  output: {
    path: PATHS.dist,
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },

  plugins: [
    // For dependencies that are expected on the global scope
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': "jquery",
      // angular: "angular"
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    // new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']})
    // new HtmlWebpackPlugin({
    //   filename: 'second-index.html',
    //   template: path.join(PATHS.legacy, 'static/secondary.jade')
    // })
    // legacyScssExtractPlugin

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
  ],

  devtool: 'source-map',

  module: {
    // noParse: [
    //   /\.spec\.js/
    // ],
    // noParse: [
    //   new RegExp(lib_dir + '/react.js'),
    //   new RegExp(lib_dir +'/jquery-1.11.2.min.js')
    // ],

    resolve: {
      extensions: ['', '.js', '.css', '.scss']
    },

    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loaders: ["eslint-loader"]
    //     // loader: 'babel',
    //     // query: {
    //     //   presets: ['react', 'es2015']
    //     // }
    //   }
    // ],

    loaders: [
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      // },

      {
        test: /\.scss$/,
        // include: /legacy/,
        // exclude: /node_modules/,
        // loader: legacyScssExtractPlugin.extract("style", "css?sourceMap", "sass?sourceMap")
        // loader: legacyScssExtractPlugin.extract("style-loader", "css-loader")
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },

      {
        test: /\.css$/,
        // include: /legacy/,
        // exclude: /node_modules/,
        // loader: legacyScssExtractPlugin.extract("style", "css?sourceMap", "sass?sourceMap")
        // loader: legacyScssExtractPlugin.extract("style-loader", "css-loader")
        loaders: ["style", "css?sourceMap"]
      },

      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   loaders: ["ts-loader"]
      // },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ["html-loader"]
      },

      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: ["ng-annotate"]
      }

      // {
      //   test: /\.jade$/,
      //   exclude: /node_modules/,
      //   // Compiles jade templates to html files in [dist], but can't move them to other locations while using webpack-dev-server
      //   loaders: ["file?name=[path][name].html", "jade-html-loader"]
      // }
    ]
  },

  // eslint: {
  //   configFile: '.eslintrc'
  // }
};

module.exports = config;
