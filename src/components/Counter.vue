<template>
  <div>
    <button @click="decrease">-</button>
    <span>{{ count }}</span>
    <button @click="increase">+</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: {
    value: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data () {
    return {
      count: this.value
    }
  },
  methods: {
    decrease: function () {
      this.count--
    },
    increase: function () {
      this.count++
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 100px;
}
</style>