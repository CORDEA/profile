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

Vue.component('my-header', {
  props: ['index'],
  template: `
  <header class="mdl-layout__header mdl-layout__header--waterfall header mdl-shadow--4dp">
    <div class="mdl-layout__header-row logo-container">
      <div></div>
    </div>
    <div class="mdl-layout__header-row header-content mdl-layout--large-screen-only">
      <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
        <a class="mdl-navigation__link"
          :class="{'is-active': index === 0}"
          href="index.html">Profile</a>
        <a class="mdl-navigation__link"
          :class="{'is-active': index === 1}"
          href="skill.html">Skill</a>
        <a class="mdl-navigation__link"
          :class="{'is-active': index === 2}"
          href="contact.html">Contact</a>
      </nav>
    </div>
  </header>
  `,
})
