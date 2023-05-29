<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id" @click="goDetail(item.id)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                list: [{
                        name: 'ts',
                        id: 1
                    },
                    {
                        name: 'react',
                        id: 2
                    },
                    {
                        name: 'vie',
                        id: 3
                    },
                ]
            }
        },
        methods: {
            goDetail(id) {
                this.$router.push({
                    path: '/detail',
                    query: {
                        id: id
                    }
                })
            }
        },
    }
</script>
<style lang="less" scoped>
</style>