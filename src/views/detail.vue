<template>
    <div>详情
        <div>是否登录：<span v-if="isLogin">是</span></div>
        <div>是否购买：<span v-show="isBuy">黄金</span></div>
        <button @click="()=>isBuy=!isBuy">购买</button>
        <button @click="()=>isLogin=!isLogin">登录</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                id: '',
                isLogin:false,
                isBuy:false
            }
        },
        methods: {
            getData() {
                console.log('获取数据')
            },
        },
        activated() {
            console.log(this)
            console.log(this.$route)
            if (this.id != this.$route.query.id) {
                this.getData();
                this.id = this.$route.query.id;
            }
        },
    }
</script>
<style lang="less" scoped>
</style>