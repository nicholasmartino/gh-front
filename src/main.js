import Vue from "vue"
import App from "./App.vue"
import { store } from "./store/store"
import "vuetify/dist/vuetify.min.css"

import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router/index'
import * as VueThreejs from 'vue-threejs'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueThreejs)

new Vue({
  router,
  store: store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app")
