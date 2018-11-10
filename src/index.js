import Vue from 'vue'
import VueMessage from '~/lib/vue-message' // eslint-disable-line
import App from '@/module/App'

import '@/css/normalize.scss'
import '@/css/reset.scss'

/** 默认配置 */
// Vue.use(VueMessage)

/** 高级用法 */
Vue.use(VueMessage, {
  title: '13123', // 提示标题
  content: '123456', // 提示内容
  duration: 2,
  type: '',
  before () {
    console.log('custom before hook')
  },
  done () {
    console.log('custom done hook')
  }
})

function init () {
  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
  })
}

init()
