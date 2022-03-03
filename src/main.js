import Vue from 'vue'
import VueRouter from 'vue-router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import Store from './Store'
import Routes from '../src/Router/routes'

const options = {
  // You can set your default options here
  position: 'bottom-right',
  timeout: 6000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false
};

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toast, options);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  Store,
  router: router,
  render: h => h(App),
}).$mount('#app')
