<template>
  <div id="app">
    <button @click="increase()"> + </button>
    <input id = 'testone' v-model="inputNumber">
    <button @click="decrease()"> + </button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      inputNumber : 0
      }
      },
  methods:{
    increase(){
      this.inputNumber++;
    },
    decrease(){
      this.inputNumber--;
    }
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
