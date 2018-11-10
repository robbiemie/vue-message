<template>
  <div class="notification">
    <Message v-for="item in notices" @remove="remove" :key="item.key" :itemInfo="item" ></Message>
  </div>
</template>

<script>
import Message from './message'
export default {
  name: 'notification',
  data () {
    return {
      notices: [],
      props: {
      }
    }
  },
  components: {
    Message
  },
  mounted () {
  },
  methods: {
    notice (props) {
      this.props.done = props.done
      let _notice = Object.assign({
        key: props.key,
        type: props.type,
        styles: props.styles,
        themes: props.themes,
        content: props.content,
        duration: props.duration
      })
      this.notices.push(_notice)
    },
    remove (key) {
      this.notices = this.notices.filter(item => {
        if (item.key !== key) { return item }
      })
      // done Hook
      this.props.done()
      // console.log('remove', this.props)
    },
    removeAll () {
      this.notices = []
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  width: 0;
  height: 0;
}
</style>
