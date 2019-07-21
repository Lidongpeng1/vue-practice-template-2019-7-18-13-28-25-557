<template>
    <div class="container">
        <Header/>
        <div>
            <input class="input-text" type="text" v-model="newItem">
            <div id="button" @click="add">Add</div>
        </div>
        <ItemList :items="showItems" />
        <MyFilter v-on:status="filter" />
    </div>
</template>

<script>
    import Header from "./Header";
    import ItemList from "./ItemList"
    import MyFilter from "./MyFilter"
    export default {
        name: "TodoList",
        components: {
            Header,
            ItemList,
            MyFilter
        },
        data() {
            return {
                newItem: "",
                items: [],
                showItems: [],
            }
        },
        methods: {
            add() {
                this.items.push({
                    isChecked: false,
                    content: this.newItem
                });
                this.newItem = "";
                this.showItems = this.items.slice();
            },
            filter(status) {
                const active = 1;
                const complete = 2;
                switch(status) {
                    case active:
                        this.showItems = this.items.filter(item => item.isChecked == false);
                        break;
                    case complete:
                        this.showItems = this.items.filter(item => item.isChecked == true);
                        break;
                    default:
                        this.showItems = this.items.slice();
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>