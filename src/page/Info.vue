<template>
    <div id="info">
        <ul>
            <li>头像</li>
            <li>{{userName}}</li>
            <li>13888886666</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Info",
        computed: {
            userName() {
                return this.$store.state.userName;
            }
        }
    }
</script>

<style scoped>

    li {
        margin: 20px;
        font-size: 20px;
    }
</style>