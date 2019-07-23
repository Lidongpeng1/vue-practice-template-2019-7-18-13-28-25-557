<template>
    <div id="home">
  <h1>Hello welcome!</h1>
  <input type="input" v-model="username">
  <button @click="tohome">开始使用</button>
  <p>
    <router-link to="/home/:username">Home</router-link>
  </p>

  <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return{
            username:''
        }
    },
    methods:{
        tohome:function(){
            this.$router.push({ name: 'home', params: { username: this.username }})
        }
    }
}
</script>
