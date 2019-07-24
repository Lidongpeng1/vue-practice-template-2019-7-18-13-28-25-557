import request from '../util/request'

const actions = {
    getTodolists({ commit }) {
        request.getTodolists(commit);
    },
    addTodo({ commit }, item) {
        request.addTodo(commit, item);
    },
    updateTodo({ commit }, item) {
        request.updateTodo(commit, item);
    },
    deleteItem({ commit }, item) {
        request.deleteItem(commit, item);
    }
};

export default actions;