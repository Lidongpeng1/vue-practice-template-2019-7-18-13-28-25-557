<template>
  <div id="root">
    <counter v-for="(item, index) in forLength" :key="index" :value="index"></counter>
  </div>
</template>

<script>
import Counter from './Counter'
export default {
  name: 'home',
  components: { Counter },
  data () {
    return {
      forLength: new Array(3)
    }
  }
}
</script>

<style scoped>
  #root {
    text-align: center;
  }
</style>