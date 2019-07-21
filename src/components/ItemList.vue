<template>
    <div id="item-list">
        <ol>
            <li v-for="(item, index) in items" :key="index">
                <input type="checkbox" v-model="item.isChecked" />
                <span v-bind:class="{checked: item.isChecked}">{{  item.content  }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "ItemList",
        props: ['items']
    }
</script>

<style scoped>

</style>