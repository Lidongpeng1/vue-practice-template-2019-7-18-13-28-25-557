import axios from 'axios';

const url = 'http://localhost:3001/todos';


const actions = {
    getTodolists({ commit }) {
        axios.get(url).then(function (response) {
            commit('loadTodo', response.data)
        }).catch(error => console.log(error));
    },
    addTodo({ commit }, item) {
        axios.post(url, item).then(function (response) {
            commit('push', response.data)
        }).catch(error => console.log(error))
    },
    updateTodo({ commit }, item) {
        axios.put(`${url}/${item.id}`,item).then(function (response) {
            commit('updateTodo', response.data)
        }).catch(error => console.log(error))
    },
    deleteItem({ commit }, item) {
        axios.delete(`${url}/${item.id}`).then(function () {
            commit('deleteItem', item)
        }).catch(error => console.log(error))
    }
};

export default actions;