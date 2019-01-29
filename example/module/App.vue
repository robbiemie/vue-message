<template>
  <div id="app">
    <div class="test__btn test__btn--info" @click="doInfo">info</div>
    <div class="test__btn test__btn--success" @click="doSuccess">success</div>
    <div class="test__btn test__btn--warning" @click="doWarning">warning</div>
    <div class="test__btn test__btn--error" @click="doError">error</div>
  </div>
</template>

<script>
export default {
  name: 'id',
  methods: {
    doInfo () {
      // console.log('info')
      this.$Message.info('info message')
    },
    doSuccess () {
      // console.log('success')
      this.$Message.success('success message')
    },
    doWarning () {
      // console.log('warning')
      this.$Message.warning('warning message')
    },
    doError () {
      // console.log('error')
      this.$Message.error('error message')
    }
  }
}
</script>
<style lang="scss">
@import url('./../css/index.scss');

.test__btn {
  margin: 0 10px;
  width: 400px;
  height: 100px;
  border-radius: 20px;
  line-height: 100px;
  font-size: 26px;
  color: #fff;
  border-radius: 8px;
  text-align: center;
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
