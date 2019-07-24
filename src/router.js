import Vue from 'vue'
import Router from 'vue-router'
import TodoList from "@/components/TodoList";
import Home from "./page/Home";
import Main from "./page/Main";
import Info from "./page/Info";

Vue.use(Router);

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home,
        children: [
            {
                name: 'TodoList',
                path: '/todolist',
                component: TodoList
            },
            {
                name: 'Info',
                path: '/info',
                component: Info
            },
        ]
    },
    {
        name: 'Main',
        path: '/',
        component: Main
    }
];

export default new Router({
    routes
});

