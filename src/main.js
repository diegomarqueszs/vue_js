import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


