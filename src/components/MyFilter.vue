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
    import showType from '../store/showType'
    export default {
        name: "MyFilter",
        methods: {
            showAll() {
                this.$store.commit('setShowType', showType.SHOW_ALL);
            },
            showActive() {
                this.$store.commit('setShowType', showType.SHOW_ACTIVE);
            },
            showComplete() {
                this.$store.commit('setShowType', showType.SHOW_COMPLETED);
            }
        }
    };
</script>