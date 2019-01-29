import Vue from 'vue'
import App from './module/App.vue'
import VueMessages from './../src/index'

Vue.use(VueMessages, { content: '', duration: 2 })

console.log('window', window.$Message)
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
