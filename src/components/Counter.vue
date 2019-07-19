<template>
  <div>
    <button @click="increase()"> + </button>
    <input id = 'testone' v-model="inputNumberone">
    <button @click="decrease()"> - </button>
  </div>
</template>

<script>

export default {
  data: function(){
    return{
      inputNumberone : 20
      }
    },
  methods:{
    increase(){
      this.inputNumberone++;
    },
    decrease(){
      this.inputNumberone--;
    }
  }  
}
</script>