import Vue from 'vue'
import App from './App.vue'

//import vueRouter library, and this app's routes
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import StateApiService from '@/services/stateService'

Vue.use(VueRouter)// use VueRouter

//Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//add API service to Vue prototype
Vue.prototype.$stateService = StateApiService

//Add Leaflet's css
import "leaflet/dist/leaflet.css"

new Vue({
  render: h => h(App),
  router//include the routes
}).$mount('#app')
