<template>
  <div>导航页

    <a @click="go('/interview')">跳转面试</a>
  </div>
</template>

<script>
export default {
    methods:{
        go(url){
            this.$router.push(url)
        }
    }
}
</script>

<style>

</style>