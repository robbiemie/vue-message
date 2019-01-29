import merge from 'lodash.merge'
import Notification from './js/Notification'

let VueMessages = {}
let _Vue = null
const init = (options = {}) => {
  const _options = {
    content: '',
    styles: {
      top: '20px',
      fontSize: '16px'
    },
    themes: 'classic',
    transitionName: 'move-up',
    duration: 2, // 单位:s
    before () {
      // default before hook
      console.log('before hook')
    },
    done () {
      // default done hook
      console.log('done hook')
    }
  }
  Object.keys(_options).forEach(key => {
    if (!options[key]) {
      options[key] = _options[key]
    }
  })
  return options
}

const notice = ({ content, styles, themes, transitionName, duration, type, done }) => {
  const ins = Notification.getInstance(_Vue)
  let options = {
    key: Date.now(),
    content,
    styles,
    themes,
    transitionName,
    duration,
    type,
    done
  }
  ins.notice(options)
}

const generations = options => {
  return {
    info (val) {
      this.message('info', val)
    },
    error (val) {
      this.message('error', val)
    },
    warning (val) {
      this.message('warning', val)
    },
    success (val) {
      this.message('success', val)
    },
    message (type, val = '') {
      let opt = {}
      if (typeof val === 'string') {
        opt = merge({}, options, {
          content: val,
          type
        })
      } else {
        opt = merge({}, options, val, {
          type
        })
      }
      opt.before()
      console.log('options', opt)
      notice(opt)
    }
  }
}

VueMessages.install = (VueRef, options = null) => {
  _Vue = VueRef
  // 初始化配置
  options = init(options)
  // 挂载全局方法
  window.$Message = VueRef.prototype.$Message = generations(options)
}

export default VueMessages
