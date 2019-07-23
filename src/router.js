import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Vue-Router-test/Home'
import Welcome from '@/Vue-Router-test/Welcome'

Vue.use(Router)

export default new Router({
    routes: [
     {
          path : '/home/:username',  //到时候地址栏会显示的路径
          name : 'home',
          component :  Home   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
      },
      {
          path : '/welcome',
          name : 'welcome',
          component :  Welcome
      },
  ],
      mode: "history"
  })