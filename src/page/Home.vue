<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo" />
            <div id="head-left">
                <a-button id="headButton" type="primary" @click="goBack">
                    <a-icon type="left" />Go back
                </a-button>
            </div>
            <div id="head-right">
                <span id="welcomeSpan">欢迎您，{{userName}}</span>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                        mode="inline"
                        :defaultSelectedKeys="['1']"
                        :defaultOpenKeys="['sub1']"
                        :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-sub-menu key="sub1">
                        <span slot="title" style="font-size: 18px"><a-icon type="user" />Menu</span>
                        <a-menu-item key="1">
                            <router-link to="/todolist" style="font-size: 18px">Go to TodoList</router-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <router-link to="/info" style="font-size: 18px">My Information</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        name: "Home",
        mounted:function() {
            this.$router.push('/todolist')
        },
        computed: {
            userName() {
                return this.$store.state.userName;
            }
        },
        methods: {
            goBack() {
                const goBack = window.confirm("going back");
                if (goBack) {
                    this.$router.push('/')
                }
            },
        }
    }
</script>

<style scoped>
    #head {
        height: 10vh;
        background-color: aliceblue;
    }

    #head-left {
        display: inline-block;
        height: 100%;
        width: 10%;
        float: left;
    }

    #headButton {
        height: 60%;
        width: 100%;
    }

    #head-right {
        float: right;
    }

    #welcomeSpan {
        font-size: 20px;
        color: white;
    }

</style>