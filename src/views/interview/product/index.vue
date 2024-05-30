<template>
  <div>
    子组件{{ name }}{{ food }}{{ text }}
    <input type="text" @input="change" />
    <button @click="update">更新</button>
    {{ sex }}
  </div>
</template>

<script>
export default {
  inject: ['food'],
  props: {
    name: {
      type: String,
      default() {
        return ''
      }
    },
    text: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      age: 25,
      sex: '男'
    }
  },
  beforeCreate() {
    console.log('子组件——beforeCreate')
  },
  created() {
    console.log('子组件——created')
  },
  beforeMount() {
    console.log('子组件——beforeMount')
  },
  mounted() {
    console.log('子组件——mounted')
  },
  beforeUpdate() {
    console.log('子组件——beforeUpdate')
  },
  updated() {
    console.log('子组件——updated')
  },
  beforeDestroy() {
    console.log('子组件-beforeDestroy')
  },
  destroyed() {
    console.log('子组件destroyed')
  },
  methods: {
    change(e) {
      console.log('e', e)
      this.$emit('input', e.target.value)
    },
    toast() {
      console.log('组件消息')
    },
    update() {
      this.sex = '女'
    }
  }
}
</script>

<style></style>
