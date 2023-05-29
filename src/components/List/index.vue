<template>
  <div class="list">
    子组件
    <div class="header">
      <slot name="header" :arr="list"></slot>
    </div>

    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[1,2,3,4]
    }
  },
  beforeCreate() {
    console.log('子组件', 'beforeCreate')
  },
  created() {
    console.log('子组件', 'created')
  },
  beforeMount() {
    console.log('子组件', '挂载之前')
  },
  mounted() {
    console.log('子组件', '挂载完成')
  },
  beforeDestroy() {
    console.log('子组件', '摧毁之前')
  },
  destroyed() {
    console.log('子组件', '已摧毁')
  }
}
</script>