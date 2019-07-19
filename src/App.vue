<template>
  <div id="app">
    <button v-on:click="increase()"> + </button>
    <input type="text" id="textone" v-model="a">
    <button v-on:click="decrease()"> - </button>
    <!-- <input v-model = 'CreateCount'/>
    <CreateCounterList :createCount = 'CreateCount'>
    <Counter/> -->
  </div>
</template>

<script>

// import Counter from './components/Counter.vue'
export default {
  name: 'app',
  data:function(){
    return {
      a:1,
    }
  },
  methods:{
    increase:function(){
      this.a++
    },
    decrease:function(){
      this.a--
    }
  }
  // components: {
  //   // Counter
  // }
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
