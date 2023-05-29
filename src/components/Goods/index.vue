<template>
  <div class="good">我是about2组件
    <div>我是内容{{msg}}</div>
    <button @click="login">组件1</button>
    <button @click="change">改变父组件data</button>
  </div>
</template>

<script>
import axios from 'axios'
import Bus from '@/utils/bus'
export default {
  name: '',

  data() {
    return {
      msg:'你好'
    }
  },
  created() {
    this.getData(0)
    this.getData(1)
    this.getData(2)
  },
  methods: {
    getData(num) {
      axios.post('http://localhost:3001/api/search').then((res) => {
        console.log('子', num)
        console.log(res)
      })
    },
    change(){
      this.$parent.list.push('宋江')
    },
    login(){
      Bus.$emit('login','已登录')
    }
  }
}
</script>
<style  lang="less" scoped>
  .good{
    background:red;
  }
</style>