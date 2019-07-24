<template>
    <div id="item-list">
        <ol>
            <li v-for="(item, index) in items" :key="index" v-show="showMethod(item)">
<!--                <input type="checkbox" v-model="item.isChecked" />-->
                <input type="checkbox" @click="changeStatu(item)" :checked="item.completed" />
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
            items() {
                return this.$store.getters.items;
            }
        },
        methods: {
            showMethod(item) {
                return this.$store.getters.isShowAll ? true :
                    (this.$store.getters.isShowActive ? !item.completed : item.completed);
            },
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