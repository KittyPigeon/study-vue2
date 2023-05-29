<template>
  <div>我是购物车</div>
</template>

<script>
import Bus from '@/utils/bus';
export default {
  name: '',
  data() {
    return {}
  },
  created(){
    Bus.$on('login',(val)=>{
        console.log(val)
    })
  }
}
</script>
<style  lang="less" scoped>
</style>