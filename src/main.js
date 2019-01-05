import Vue from 'vue'
import App from './App.vue'
import './directive/drag';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
