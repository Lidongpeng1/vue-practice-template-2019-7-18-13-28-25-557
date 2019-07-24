import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
})

Vue.config.productionTip = false

export default store;

