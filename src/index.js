import Vue from 'vue'
import VueMessage from '~/lib/vue-message' // eslint-disable-line
import App from '@/module/App'

import '@/css/normalize.scss'
import '@/css/reset.scss'

function init () {
  new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(App)
  })
}

init()
