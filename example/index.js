import Vue from 'vue'
import App from './module/App.vue'
import VueMessages from './../dist/index'

Vue.use(VueMessages, {
  content: '',
  duration: 2,
  themes: 'blackGold', // classic or classicBold
  styles: {
    fontSize: '16px',
    top: '28px'
  }
})

// console.log('window', window.$Message)
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
