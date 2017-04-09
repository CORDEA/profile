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
 * date  : 2017-04-08
 */

import Vue from 'vue'
import axios from 'axios'
import _ from './my_header'
import _ from './my_footer'
import _ from './drawer'
import _ from './char_icon'

var colors = [
  'purple',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange'
]

new Vue({
  el: '#app',
  data: {
    skillMap: [],
  },
  created: function() {
    this.fetchSkills()
  },
  methods: {
    color: function(char) {
      var c = 26 / colors.length;
      return colors[Math.floor((char.charCodeAt(0) - 'A'.charCodeAt(0)) / c)]
    },
    click: function(skill) {
      if (!skill.clickable) {
        return
      }
      var link = skill.linkName
      if (!link) {
        link = skill.title.toLowerCase()
      }

      if (skill.type === 'Language') {
        window.open(
          'https://github.com/CORDEA?language=' +
          link +
          '&tab=repositories', '_self'
        )
        return;
      }
      window.open(
        'https://github.com/CORDEA?q=topic%3A' +
        link +
        '&tab=repositories', '_self'
      )
    },
    fetchSkills: function() {
      var self = this
      axios
      .get('./skills.json')
      .then(function (response) {
        var list = response.data.skills;
        var map = {};
        list.forEach(function(x) {
          if (!(x.type in map)) {
            map[x.type] = []
          }
          var char = x.title[0].toUpperCase()
          var item = {
            type: x.type,
            title: x.title,
            linkName: x.linkName,
            char: char,
            color: self.color(char),
            year: x.startYear + ' ~ ' + x.endYear,
            level: x.level,
            clickable: x.type !== 'OS / Distribution (User)',
          }
          item.click = function() {
            self.click(item)
          }
          map[x.type].push(item)
        })
        var compare_ = function(a, b) {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        }
        for (var k in map) {
          map[k] = map[k].sort(compare_);
        }
        self.skillMap = map
      })
      .catch(function (error) {
      });
    },
  }
})
