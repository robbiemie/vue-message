<template>
  <transition name="slide-fade" mode="out-in">
      <template id="message-cell-template">
        <div v-if="show" class="message" ref="messageCell">
          <div class="message__icon" :class="getClass"></div>
          <div class="message__content">{{item.content}}</div>
        </div>
      </template>
  </transition>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      show: false
    }
  },
  props: [
    'item',
    'content',
    'name'
  ],
  created () {
  },
  computed: {
    getClass () {
      const clazz = {}
      const clazzName = `message__icon--${this.item.type}`
      clazz[clazzName] = true
      return clazz
    }
  },
  async mounted () {
    this.$nextTick(() => {
      let w = document.body.clientWidth
      let cw = this.$refs.messageCell.clientWidth
      this.$refs.messageCell.style.left = `${(w - cw) / 2}px`
    })
    this.show = true
    await this.sleep(2000).then(res => {
      this.show = false
      this.$emit('remove', this.item.name)
    })
  },
  methods: {
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time))
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  top: 30px;
  margin-top: 30px;
  padding: 16px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #ccc;
  background: #fff;
  &__icon {
    width: 40px;
    height: 40px;
    &--error {
      background: url(../../img/error.png) no-repeat;
      background-size: contain;
    }
    &--info {
      background: url(../../img/info.png) no-repeat;
      background-size: contain;
    }
    &--warning {
      background: url(../../img/warning.png) no-repeat;
      background-size: contain;
    }
    &--success {
      background: url(../../img/success.png) no-repeat;
      background-size: contain;
    }
  }
  &__content {
    margin-left: 10px;
    padding: 10px;
    font-size: 24px;
    color: rgb(78, 78, 78);
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
</style>
