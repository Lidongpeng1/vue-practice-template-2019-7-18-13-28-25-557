import axios from 'axios';

const url = 'http://localhost:3001/todos';

const request = {
    getTodolists: (commit) => {
        axios.get(url).then(function (response) {
            commit('loadTodo', response.data)
        }).catch(error => console.log(error));
        console.log("getTodolists")
    },
    addTodo: (commit, item) => {
        axios.post(url, item).then(() => {
            request.getTodolists(commit);
        }).catch(error => console.log(error));
    },
    updateTodo: (commit, item) => {
        axios.put(`${url}/${item.id}`,item).then(() => {
            request.getTodolists(commit);
        }).catch(error => console.log(error));
    },
    deleteItem: (commit, item) => {
        axios.delete(`${url}/${item.id}`).then(() => {
            request.getTodolists(commit);
        }).catch(error => console.log(error))
    }
}

export default request;