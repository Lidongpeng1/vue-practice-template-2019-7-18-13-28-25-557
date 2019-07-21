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
    export default {
        name: "TodoList",
        components: {
            Header,
        },
        data() {
            return {
            }
        },
        methods: {
            },
    }
</script>

<style scoped>

</style>