export default {
    push(state, item) {
        state.items.push(item);
    },
    setIsShowAll(state, isShowAll) {
        state.isShowAll = isShowAll;
    },
    setIsShowActive(state, isShowActive) {
        state.isShowAll = false;
        state.isShowActive = isShowActive;
    },
    loadTodo(state, items) {
        state.items = items;
    },
    updateTodo(state, item) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === item.id) {
                state.items[i] = item;
            }
        }
    },
    deleteItem(state, item) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === item.id) {
                state.items.splice(i, 1);
            }
        }
    }
};
