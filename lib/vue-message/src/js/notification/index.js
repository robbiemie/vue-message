import Notification from './notification.vue'
import Vue from 'vue'

Notification.getInstance = (...args) => {
  const _props = args || {}
  const Instance = new Vue({
    render (h) {
      return h(Notification, {
        props: _props
      })
    }
  })
  // console.log('ins', Instance)
  const component = Instance.$mount() // 获取未挂载实例

  // console.log('el', Instance)
  document.body.appendChild(component.$el)
  const notification = Instance.$children[0]
  return {
    component: notification,
    notice (props) {
      notification.notice(props)
    },
    delete (name) {
      notification.delete(name)
    },
    removeAll () {
      notification.removeAll()
    }
  }
}

export default Notification
