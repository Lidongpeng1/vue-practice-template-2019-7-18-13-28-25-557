<template>
  <div id="app">
    <button v-on:click="increase"> + </button>
    <input type="text" v-model="this.$store.state.count">
    <button v-on:click="decrease"> - </button>
  </div>
</template>


<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods:{
    increase:function () {
      this.$store.commit("increase");
    },
    decrease:function () {
      this.$store.commit("decrease");
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
