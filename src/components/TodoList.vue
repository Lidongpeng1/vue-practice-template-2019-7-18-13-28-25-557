<template>
    <div class="container">
        <Header/>
        <InputBox/>
        <ItemList/>
        <MyFilter/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import InputBox from "@/components/InputBox";
    import ItemList from "@/components/ItemList";
    import MyFilter from "@/components/MyFilter";

    export default {
        name: "TodoList",
        components: {
            MyFilter,
            ItemList,
            InputBox,
            Header
        }
    }
</script>

<style scoped>

</style>