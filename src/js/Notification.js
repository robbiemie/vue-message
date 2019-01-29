import Notifications from './Notifications.vue'
export default class Notification {
  constructor (VueRef) {
    this.notification = null
    const vm = new VueRef({
      render: h => h(Notifications)
    })
    // 挂载实例
    const component = vm.$mount()
    document.body.appendChild(component.$el)
    this.notification = vm.$children[0]
  }
  notice (options) {
    this.notification.notice(options)
  }
  static getInstance (VueRef) {
    if (!Notification.instance) {
      Notification.instance = new Notification(VueRef)
    }
    return Notification.instance
  }
}
