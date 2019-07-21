<template>
    <div>
        <span id="sumTips">各计数器总和：{{sum}}</span>
    </div>
</template>

<script>
    export default {
        name: "CounterSum",
        props: ["sum"],
    }
</script>

<style scoped>

</style>