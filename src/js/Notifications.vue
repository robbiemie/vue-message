<template>
  <div class="notification">
    <Message v-for="item in notices" :key="item.key" @remove="remove" :itemInfo="item"/>
  </div>
</template>

<script>
import Message from './message'
export default {
  name: 'notifications',
  data () {
    return {
      notices: [],
      props: {}
    }
  },
  components: {
    Message
  },
  methods: {
    notice (props) {
      // console.log('props', this.notices)
      this.notices.push(props)
    },
    remove (key) {
      this.notices = this.notices.filter(item => {
        return item.key !== key
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.notification {
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
}
</style>
