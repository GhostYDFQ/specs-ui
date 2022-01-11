<template>
  <button @click="buttonHandle">测试</button>
</template>
<script>
export default {
  name: 'sp-button',
  props: {},
  data() {
    return {
      a: 1
    }
  },
  methods: {
    buttonHandle(e) {
      this.$emit('click', e);
    }
  }
}
</script>
<style lang="scss">

</style>
