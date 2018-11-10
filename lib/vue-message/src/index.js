import Notification from './js/notification'
import merge from 'lodash.merge'

let instance
let VueMessage = {}
let count = 1
const prefixKey = 'prefixKey'

// 全局属性
const Gconfig = {
  top: 24,
  duration: 2
}
/** 插件配置 */
const _options = {
  content: '', // 提示内容
  styles: {
    top: 24, // webview Top距离 单位: px
    fontWeight: 'normal',
    fontSize: 28
  },
  themes: 'classic',
  duration: Gconfig.duration, // 单位:s
  // hook 函数
  before: () => {
    // default before hook
    // console.log('default before hook')
  },
  done: () => {
    // default done hook
    // console.log('default done hook')
  }
}

function getInstance () {
  instance = instance || Notification.getInstance()
  return instance
}

function notice ({ duration, content, type, done, styles, themes }) {
  let ins = getInstance()
  // console.log(themes)
  ins.notice({
    key: `${prefixKey}-${count++}`,
    styles,
    transitionName: 'move-up',
    themes,
    content,
    duration,
    type,
    done
  })
  return {}
}
const Message = function (config) {
  return {
    name: 'Message',
    info (opts) {
      return this.message('info', opts)
    },
    error (opts) {
      return this.message('error', opts)
    },
    warning (opts) {
      return this.message('warning', opts)
    },
    success (opts) {
      return this.message('success', opts)
    },
    loading (opts) {
      return this.message('loading', opts)
    },
    // removeAll () {
    //   return this.message('removeAll')
    // },
    message (type, opts) {
      let opt
      // before hook
      if (typeof opts === 'string') {
        opt = merge({}, config, {
          content: opts,
          type
        })
      } else {
        opt = merge(_options, opts, { type })
      }
      // console.log(opt)
      opt.before()
      return notice(opt)
    }
  }
}

VueMessage.install = function (Vue, config = null) {
  // 默认配置
  if (!config) config = _options
  // 注入Vue hook
  // Vue.mixin({
  //   created () {
  //     console.log('created')
  //   },
  //   mounted () {
  //     console.log('mounted')
  //   }
  // })
  if (typeof config.styles === 'undefined') {
    config.styles = _options.styles
  }
  if (typeof config.before === 'undefined') {
    config.before = _options.before
  }
  if (typeof config.done === 'undefined') {
    config.done = _options.done
  }
  if (typeof config.themes === 'undefined') {
    config.themes = _options.themes
  }
  // 添加实例属性
  window.$Message = Vue.prototype.$Message = Message(config)
}
export default VueMessage
