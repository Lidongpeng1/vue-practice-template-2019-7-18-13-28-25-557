<template>
    <div>
        <span id="sumTips">各计数器总和：{{$story.static.sum}}</span>
    </div>
</template>

<script>
import store from '@/store'
    export default {
        name: "CounterSum",
        props: ["sum"],
    }
</script>

<style scoped>

</style>