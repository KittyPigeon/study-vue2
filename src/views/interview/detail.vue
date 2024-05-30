<template>
  <div>
    <!-- 面试详情 -->
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  // 从详情页返回主页时把主页的keepAlive值设置为true（要做个判断，判断是不是返回到主页的）
  beforeRouteLeave(to, from, next) {
    if (to.name === 'interview') {
      to.meta.keepAlive = true
    } else {
      to.meta.keepAlive = false
    }
    next()
  },
  activated() {
    this.getData() // 获取数据
  },
  methods: {
    back() {
      this.$router.back()
    },
    getData() {
      // 获取数据
      console.log('组件详情', 'abc')
    }
  }
}
</script>

<style></style>
