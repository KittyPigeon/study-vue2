<template>
  <div>
    购物车{{count}}
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: '购物车',
            count:0
        }
    },
    methods:{
        add(){
            this.count++;
            this.$bus.$emit('addCart',this.count)
        }
    }
}
</script>

<style>

</style>