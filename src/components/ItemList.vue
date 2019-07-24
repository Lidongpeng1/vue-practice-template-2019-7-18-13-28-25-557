<template>
    <div id="item-list">
        <ol>
            <li v-for="(item, index) in showItems" :key="index" style="height: 40px; line-height: 30px">
                <a-checkbox @change="changeStatu(item)" :checked="item.completed"></a-checkbox>
                <span :class="{checked: item.completed}">{{  item.content  }}</span>
                <button id="delete" @click="deleteItem(item)">Delete</button>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "ItemList",
        //mounted用法示例
        mounted: function () {
            this.$store.dispatch('getTodolists');
            console.log("load all")
        },
        computed: {
            showItems() {
                return this.$store.getters.showItems;
            }
        },
        methods: {
            changeStatu(item) {
                let newItem = item;
                newItem.completed = !item.completed;
                this.$store.dispatch('updateTodo', newItem);
            },
            deleteItem(item) {
                this.$store.dispatch('deleteItem', item);
            }
        }
    }
</script>

<style scoped>

</style>