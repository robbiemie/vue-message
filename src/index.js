// import Vue from 'vue'
// import VueMessage from '../dist/src/bundle.js'
// import VueMessage from '~/lib/vue-message' // eslint-disable-line
// import App from '@/module/App'

import '@/css/normalize.scss'
import '@/css/reset.scss'
import { VueMessage } from '../dist/src/bundle.js'
// const VueMessage = require('../dist/src/bundle.js')

console.log('VueMessage', VueMessage)

/** 默认配置 */
// Vue.use(VueMessage)

/** advance configuration */
// Vue.use(VueMessage, {
//   duration: 1,
//   themes: 'classic', // classic blackGold
//   styles: {
//     top: 24, // 单位: px
//     fontWeight: 'normal',
//     fontSize: 18
//   },
//   before () {
//     console.log('custom before hook')
//   },
//   done () {
//     console.log('custom done hook')
//   }
// })

// function init () {
//   new Vue({ // eslint-disable-line
//     el: '#app',
//     render: h => h(App)
//   })
// }

// init()
