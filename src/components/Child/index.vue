<template>
    <div class="child">子组件</div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        beforeCreate() {
            console.log('子组件', 'beforeCreate')
            console.log('数据beforeCreate',this.$el,this.$data);
        },
        created() {
            console.log('子组件', 'created')
            console.log('数据created',this.$el,this.$data);
        },
        beforeMount() {
            console.log('子组件', 'beforeMount')
            console.log('数据beforeMount',this.$el,this.$data);
        },
        mounted() {
            console.log('子组件', 'mounted')
            console.log('数据mounted',this.$el,this.$data);
        },
        activated() {
            console.log('子组件', 'activated')
        },
    }
</script>
<style lang="less" scoped>
</style>