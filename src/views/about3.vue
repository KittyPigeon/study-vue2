<template>
    <div>
        <button @click="back">返回</button>
        <Child></Child>
    </div>
</template>

<script>
    import Child from '@/components/Child'
    export default {
        name: '',
        data() {
            return {}
        },
        components: {
            Child
        },
        beforeCreate() {
            console.log('父组件', 'beforeCreate')

        },
        created() {
            console.log('父组件', 'created')
        },
        beforeMount() {
            console.log('父组件', 'beforeMount')
        },
        mounted() {
            console.log('父组件', 'mounted')
        },
        activated() {
            console.log('父组件', 'activated')
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="less" scoped>
</style>