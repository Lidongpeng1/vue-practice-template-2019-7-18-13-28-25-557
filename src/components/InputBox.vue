<template>
    <div>
        <input class="input-text" type="text" v-model="input" @keyup.enter="add">
        <div id="button" @click="add">Add</div>
    </div>
</template>

<script>
    export default {
        name: "InputBox",
        data() {
            return {
                input: "",
            }
        },
        methods: {
            add() {
                if (this.input.length == 0) {
                    alert("输入为空")
                } else {
                    this.$store.dispatch('addTodo',{
                        completed: false,
                        content: this.input
                    });
                    this.input = "";
                }
            }
        }
    }
</script>

<style scoped>

</style>