// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue' // Imports bootstrap vue library

import 'bootstrap/dist/css/bootstrap.css' // Imports the Bootstrap CSS
import 'bootstrap-vue/dist/bootstrap-vue.css' // Imports the bootstrap-vue css

import { library } from '@fortawesome/fontawesome-svg-core' // Imports svg core
import { faCoffee } from '@fortawesome/free-solid-svg-icons' // Imports base icons
import { fab } from '@fortawesome/free-brands-svg-icons' // Imports brand icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // Imports the font awesome core js

library.add(faCoffee) // add svg icons to the library
library.add(fab) // Add the brand icons to the library
Vue.component('font-awesome-icon', FontAwesomeIcon) // create the vue-component so you can use it

Vue.config.productionTip = false // production release

Vue.use(BootstrapVue) // Let vue use bootstrap vue across the whole project

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
