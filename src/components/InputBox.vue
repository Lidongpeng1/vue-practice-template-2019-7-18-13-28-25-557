<template>
    <div style="line-height: 1">
        <a-input-search class="input-text" type="text" v-model="input" @search="add" placeholder="input to do list" size="large">
            <a-button slot="enterButton" id="button">Add</a-button>
        </a-input-search>
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
                console.log("add")
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