<template>
  <transition name="slide-fade" mode="out-in">
      <template id="message-cell-template">
        <div v-if="show" class="message" ref="messageCell">
          <div class="message__icon" :class="getClass"></div>
          <div class="message__content" ref="messageContent">{{itemInfo.content}}</div>
        </div>
      </template>
  </transition>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      show: false,
      themeConfig: {
        'classic': {
          color: 'rgb(78, 78, 78)',
          backgroundColor: '#fff'
        },
        'blackGold': {
          color: 'rgb(255, 255, 255)',
          backgroundColor: '#000'
        }
      }
    }
  },
  props: [
    'itemInfo'
  ],
  created () {
  },
  computed: {
    getClass () {
      const clazz = {}
      const clazzName = `message__icon--${this.itemInfo.type}`
      clazz[clazzName] = true
      return clazz
    }
  },
  async mounted () {
    this.$nextTick(() => {
      // console.log(this.itemInfo)
      let theme = this.itemInfo.themes || 'classic'
      let w = document.body.clientWidth
      let cw = this.$refs.messageCell.clientWidth
      this.$refs.messageCell.style.top = `${this.itemInfo.styles.top}px`
      this.$refs.messageCell.style.left = `${(w - cw) / 2}px`
      this.$refs.messageCell.style.fontSize = `${this.itemInfo.styles.fontSize}px`
      this.$refs.messageCell.style.fontWeight = this.itemInfo.styles.fontWeight
      this.$refs.messageCell.style.color = this.themeConfig[theme].color
      this.$refs.messageCell.style.backgroundColor = this.themeConfig[theme].backgroundColor
    })
    this.show = true
    await this.sleep(this.itemInfo.duration).then(res => {
      this.show = false
      this.$emit('remove', this.itemInfo.name)
    })
  },
  methods: {
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time * 1000))
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  position: absolute;
  top: 30px;
  padding: 16px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 28px;
  z-index: 99999;
  box-shadow: 0px 0px 15px #ccc;
  background: #fff;
  &__icon {
    width: 40px;
    height: 40px;
    &--info {
      background: url(../../img/info.png) no-repeat;
      background-size: contain;
    }
    &--error {
      width: 30px;
      height: 30px;
      background: url(../../img/error.png) no-repeat;
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
    line-height: 30px;
    padding: 10px;
  }
}
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
