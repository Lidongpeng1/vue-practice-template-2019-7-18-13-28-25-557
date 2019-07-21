<template>
    <div>
        <span id="counterTips">计数器个数：</span><input v-model="counterNumber"/>
        <CounterSum :sum="sum" />
        <Counter v-for="index in parseInt(counterNumber)" :key="index" v-on:click-counter="onClickCounter" />
    </div>
</template>

<script>
    import Counter from "./Counter";
    import CounterSum from "./CounterSum"
    export default {
        name: "CounterGroup",
        components: {
            Counter,
            CounterSum
        },
        data() {
            return {
                counterNumber: 1,
                sum: 0
            }
        },
        methods: {
            onClickCounter: function (num) {
                this.sum += num;
            }
        }
    }
</script>

<style scoped>

</style>