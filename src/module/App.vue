<template>
<div id="app">
  <div class="test__btn" @click="info">信息</div>
  <div class="test__btn" @click="error">错误</div>
  <div class="test__btn" @click="warning">警告</div>
  <div class="test__btn" @click="success">成功</div>
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
      this.$Message.info('这是一个有内涵的消息')
    },
    error () {
      this.$Message.error('对方不想理你，并向你throw一个error')
    },
    warning () {
      this.$Message.warning('FBI Warning!')
    },
    success () {
      this.$Message.success('加载成功')
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}
.test__btn {
  margin-top: 30px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 26px;
  color: #ccc;
  border-radius: 8px;
  text-align: center;
  background: #000;
}
</style>
