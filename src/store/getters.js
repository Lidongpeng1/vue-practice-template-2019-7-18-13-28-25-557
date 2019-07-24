import showType from './showType'

export default {
    Items: state => state.items,
    showItems: function (state) {
        switch (state.showType) {
            case showType.SHOW_ACTIVE:
                return state.items.filter(item => item.completed === false);
            case showType.SHOW_COMPLETED:
                return state.items.filter(item => item.completed === true);
            default:
                return state.items;
        }
    }
}
