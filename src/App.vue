<template>
  <div id="app">
    <TodoList/>
    <router-link  to="/home/:username">去Home组件</router-link>
 
    <router-link  to="/Welcome">去Welcome组件</router-link>
<router-view></router-view>
  </div>
</template>

<script>

import TodoList from "./components/TodoList";
export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style>
@import "style.css";
</style>
