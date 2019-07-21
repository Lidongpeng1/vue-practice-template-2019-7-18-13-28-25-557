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
    export default {
        name: "TodoList",
        components: {
            Header,
            ItemList
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
        }
    }
</script>

<style scoped>

</style>