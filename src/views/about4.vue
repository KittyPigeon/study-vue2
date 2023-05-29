<template>
  <div>
    <XTabRadio></XTabRadio>
    {{ this.$store.state.message }}
    <div>今日价格：{{ price }}</div>
    <div class="ts" v-has="'has:delete'">测试</div>
    <div>{{ message }}</div>
    <ul>
      <li v-for="(item, index) in list" :key="`item_i${index}`">{{ item }}</li>
    </ul>
    <div>{{ obj.name }}-{{ obj.data.address }}</div>
    <button @click="setMsg">修改</button>
    <button @click="updateList">修改数组</button>
    <button @click="updateObj">修改对象</button>
    <hr />
    <input type="text" v-model="count" />
    <input type="text" v-model="formatStr">
    {{formatStr}}
    {{ totalCount }}
    {{ totalCount }}
    {{ totalCount }}
    {{ totalCount }}
    {{ totalCount }}
    {{ totalCount2() }}
    {{ totalCount2() }}
    {{ totalCount2() }}
    {{ totalCount2() }}
    {{ totalCount2() }}
  </div>
</template>

<script>
import XTabRadio from '@/components/x-tab-radio'
import { mapState } from 'vuex'
export default {
  name: '',
  components: {
    XTabRadio
  },
  computed: {
    ...mapState(['price']),
    totalCount() {
      console.log('total')
      return this.number * this.count
    },
    formatStr: {
      get() {
        return this.str;
      },
      set(val) {
        this.str = val
      }
    }
  },
  data() {
    return {
      message: 'abc',
      number: 10,
      list: [1, 2, 4],
      obj: {
        name: '松江',
        data: {
          address: '海上海二期111'
        }
      },
      count: 0,
      str: 'hello word'
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal)
    },
    obj: {
      handler(newVal, oldVal) {
        console.log('obj', newVal)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    setMsg() {
      this.message = 'abcxxx'
    },
    totalCount2() {
      console.log('total2')
      return this.number * this.count
    },
    updateList() {
      // this.list[2]=11111
      this.$set(this.list, 2, 1111)
    },
    updateObj() {
      this.obj.name = '卢俊义'
      this.obj.data.address = '123'
    },
  }
}
</script>
<style  lang="less" scoped>
</style>