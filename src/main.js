import Vue from 'vue'
import { MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(MdIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
