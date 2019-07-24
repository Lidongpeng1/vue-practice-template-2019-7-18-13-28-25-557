<template>
    <div id="main">
        <a-avatar :size="100" icon="user" />
        <br/>
        <a-input id="input" type="text" placeholder="请输入姓名" v-model="userName" @change="setUserName" @keyup.enter="goToHome"></a-input>
        <a-button @click="goToHome">开始使用</a-button>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                userName: ''
            }
        },
        methods: {
            goToHome() {
                if (this.userName.length === 0) {
                    window.alert("输入非法")
                } else {
                    this.$router.push({path: '/home'})
                }
            },
            setUserName() {
                this.$store.state.userName = this.userName;
            }
        }
    }
</script>


<style scoped>
    #main {
        margin-top: 100px;
    }

    #input {
        margin: 10px 5px;
        width: 300px;
        height: 34px;
    }
</style>