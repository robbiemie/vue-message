/**
 * 源码参考链接
 * https://github.com/iview/iview/blob/2.0/src/components/message/index.js
 */
import Vue from 'vue'
import Notification from './js/notification'

let instance
let count = 1
const prefixKey = 'prefixKey'

// 全局配置
const Gconfig = {
  top: 24,
  duration: 1.5
}

const options = {
  title: '', // 提示标题
  content: '', // 提示内容
  duration: Gconfig.duration,
  type: ''
}

function getInstance () {
  instance = instance || Notification.getInstance()
  return instance
}

function notice ({ title, content, duration, type }) {
  let ins = getInstance()
  ins.notice({
    key: `${prefixKey}-${count++}`,
    styles: {},
    transitionName: 'move-up',
    content,
    title,
    duration,
    type
  })
  return {}
}

const Message = {
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
  message (type, opts) {
    let opt

    if (typeof opts === 'string') {
      opt = Object.assign(options, {
        content: opts,
        type
      })
    } else {
      opt = Object.assign(options, opts, { type })
    }
    return notice(opt)
  }
  /**
   * 后期扩展功能
   */
  // // 全局属性配置
  // gConfig (opts) {
  // },
  // // 全局销毁组件
  // gDestroy () {}
}
window.$Message = Vue.prototype.$Message = Message
// console.log('Mess', window.$Message)
export default Message
