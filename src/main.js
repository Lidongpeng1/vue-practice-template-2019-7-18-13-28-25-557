import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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
    store,
    render: h => h(App),
}).$mount('#app')
