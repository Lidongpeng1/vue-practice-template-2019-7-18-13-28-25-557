import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter);
import router from './router'

const store = new Vuex.Store({
    state: {
        items: [],
        isShowAll: true,
        isShowActive: false
    },
    mutations: {
        push(state, item) {
            state.items.push(item);
        },
        setIsShowAll(state, isShowAll) {
            state.isShowAll = isShowAll;
        },
        setIsShowActive(state, isShowActive) {
            state.isShowAll = false;
            state.isShowActive = isShowActive;
        }
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
