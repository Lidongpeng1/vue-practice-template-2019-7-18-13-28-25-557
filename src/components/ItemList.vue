<template>
    <div id="item-list">
        <ol>
            <li v-for="(item, index) in items" :key="item.content + index" v-show="showMethod(item)">
                <input type="checkbox" v-model="item.isChecked" />
                <span v-bind:class="{checked: item.isChecked}">{{  item.content  }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "ItemList",
        computed: {
            items() {
                return this.$store.state.items;
            }
        },
        methods: {
            showMethod(item) {      //未实现：用每个item自己的isChecked属性判断
                return this.$store.state.isShowAll ? true :
                    (this.$store.state.isShowActive ? !item.isChecked : item.isChecked);
            }
        }
    }
</script>

<style scoped>

</style>