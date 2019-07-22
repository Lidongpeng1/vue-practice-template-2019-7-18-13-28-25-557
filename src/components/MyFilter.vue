<template>
    <div id="filters">
        <ul>
            <li>
                <a @click="showAll">ALL</a>
            </li>
            <li>
                <a @click="showActive">Active</a>
            </li>
            <li>
                <a @click="showComplete">Complete</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyFilter",
        methods: {
            showAll() {
                this.$store.commit('setIsShowAll', true);
            },
            showActive() {
                this.$store.commit('setIsShowActive', true);
            },
            showComplete() {
                this.$store.commit('setIsShowActive', false);
            }
        }
    };
</script>