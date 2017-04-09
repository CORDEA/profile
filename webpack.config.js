/**
 *
 * Copyright 2017 Yoshihiro Tanaka
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Yoshihiro Tanaka <contact@cordea.jp>
 * date  : 2017-04-09
 */

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './js/index',
    skill: './js/skill',
    contact: './js/contact',
  },
  output: {
    path: path.join(__dirname, 'js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  resolve: {
    modules: ['bower_components'],
    descriptionFiles: ['bower.json', 'package.json'],
    mainFields: ['main'],
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          comments: false,
          compact: true,
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
}
