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
        // eslint-disable-next-line no-debugger
        debugger
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].id === item.id) {
                state.items[i] = item;
            }
        }
    }
};
