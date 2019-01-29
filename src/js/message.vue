<template>
  <transition name="slide-fade" mode="out-in">
      <template id="message-cell-template">
        <div v-if="show" class="message" ref="messageCell" :style="getStyles">
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
    getStyles () {
      let style = Object.keys(this.itemInfo.styles).map(key => {
        return `${key}:${this.itemInfo.styles[key]};`
      })
      console.log('join', style.join(''))
      return style.join('')
    },
    getClass () {
      const clazz = {}
      const clazzName = `message__icon--${this.itemInfo.type}`
      clazz[clazzName] = true
      return clazz
    }
  },
  async mounted () {
    this.$nextTick(_ => {
      console.log(this.itemInfo)
      let theme = this.itemInfo.themes || 'classic'
      this.$refs.messageCell.style.color = this.themeConfig[theme].color
      this.$refs.messageCell.style.backgroundColor = this.themeConfig[theme].backgroundColor
    })
    this.show = true
    await this.sleep(this.itemInfo.duration).then(res => {
      this.show = false
      // done hook
      this.itemInfo.done()
      this.$emit('remove', this.itemInfo.key)
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
  display: flex;
  top: 30px;
  padding: 24px;
  height: auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 28px;
  z-index: 99999;
  box-shadow: 0px 0px 15px #ccc;
  background: #fff;
  &__icon {
    width: 60px;
    height: 60px;
    &--info {
      background: url(../img/info.png) no-repeat;
      background-size: contain;
    }
    &--error {
      width: 52px;
      height: 52px;
      background: url(../img/error.png) no-repeat;
      background-size: contain;
    }
    &--warning {
      background: url(../img/warning.png) no-repeat;
      background-size: contain;
    }
    &--success {
      background: url(../img/success.png) no-repeat;
      background-size: contain;
    }
  }
  &__content {
    margin-left: 10px;
    line-height: 60px;
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
