<template>
    <div>
        <input class="input-text" type="text" v-model="input">
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
                if (this.input == undefined) {  //未实现
                    alert("输入为空")
                } else {
                    this.$store.commit('push',{
                        isChecked: false,
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