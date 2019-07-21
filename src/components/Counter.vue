<template>
    <div id="app">
        <button v-on:click="$emit('click-counter', -1, count--)"> - </button>
        <span id="countText">{{count}}</span>
        <button v-on:click="$emit('click-counter', +1, count++)"> + </button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        data() {
            return {
                count: 0,
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #app button {
        width: 100px;
        height: 100px;
        font-size: 100px;
    }
    #countText {
        width: 100px;
        margin: 50px;
        font-size: 100px;
    }
</style>