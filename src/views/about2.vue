<template>
  <div class="home">
    <Good v-if="childVis" ref="child"></Good>
    <ShopCart></ShopCart>
    <List>
      <div style="color: red">你好，我是匿名插槽</div>
      <template #header="{ arr }">
        <div class="list">
          <div v-for="(item, index) in arr" :key="'item_' + index" class="item">{{ item }}</div>
        </div>
        <div>大家好，我是头部具名插槽</div>
      </template>
    </List>
    <ul>
      <li v-for="(item, index) in list" :key="`item_${index}`">{{ item }}</li>
    </ul>
    <button @click="change">修改</button>
    <router-link to="about3">页面3</router-link>
    <div>版本：{{ version }}</div>
    <button @click="childVis = !childVis">显示子元素</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
// import Good from '@/components/Goods';
const Good = () => import('@/components/Goods')

import ShopCart from '@/components/ShopCart'
import List from '@/components/List'
export default {
  name: 'HomeView',
  components: {
    Good,
    ShopCart,
    List
  },
  inject: ['version'],
  data() {
    return {
      childVis: false,
      form: {
        name: ''
      },
      list: ['卢俊义']
    }
  },
  mounted() {
    this.getData(0)
    this.getData(1)
    this.getData(2)
  },
  methods: {
    getData(num) {
      axios.post('http://localhost:3001/api/search').then((res) => {
        console.log('父', num)
        console.log(res)
      })
    },
    change() {
      this.$refs.child.msg = 'hello world'
    }
  }
}
</script>
