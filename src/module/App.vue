<template>
<div id="app">
  <div class="test__btn test__btn--info" @click="info">info</div>
  <div class="test__btn test__btn--success" @click="success">success</div>
  <div class="test__btn test__btn--warning" @click="warning">warning</div>
  <div class="test__btn test__btn--error" @click="error">error</div>
</div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    info () {
      this.$Message.info({
        content: 'This is a normal message.',
        duration: 1,
        themes: 'blackGold', // classic blackGold
        styles: {
          fontSize: 14 // 单位: px
        },
        before () {
          console.log('my before hook')
        },
        done () {
          console.log('my done hook')
        }
      })
    },
    error () {
      this.$Message.error('I\'m sorry，throw an error for you!')
    },
    warning () {
      this.$Message.warning('FBI Warning!')
    },
    success () {
      this.$Message.success('loading success.ok~')
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  margin-top: 200px;
  overflow: hidden;
}
.test__btn {
  margin-top: 30px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 26px;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  background: #000;
  &--info {
  background: #2db7f5;

  }
  &--success {
  background: #19be6b;

  }
  &--warning {
  background: #ff9900;

  }
  &--error {
  background: #ed4014;

  }
}
</style>
