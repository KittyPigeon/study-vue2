<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="hide">点击</button>
   <List v-if="isShow"></List>
  </div>
</template>

<script>
import List from '@/components/List'
import axios from 'axios';
export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {
    List
  },
  methods: {
    hide() {
      this.isShow = !this.isShow;
    },
    getData(){
      axios.post('http://localhost:3001/api/search').then(res=>{
        console.log(res)
      })
    }
  },
  beforeCreate() {
    
    console.log('beforeCreate:组件实例',this,this.$data)
    console.log('父组件', 'beforeCreate')
    
  },
  created() {
    console.log('created:组件实例',this,this.$data)
    console.log('父组件', 'created')
    this.getData()
  },
  beforeMount() {
    console.log('父组件', '挂载之前')
  },
  mounted() {
    console.log('父组件', '挂载完成')
  },
  beforeDestroy() {
    console.log('父组件', '摧毁之前')
  },
  destroyed() {
    console.log('父组件', '已摧毁')
  }
}
</script>
