<template>
  <div>
    面试
    <Product ref="productRef" v-model="text" name="A"></Product>
    <Product name="B"></Product>
    <Product name="D"></Product>
    <div>{{ name }}</div>
    <input v-model="name" />

    <!-- 列表渲染与条件判断 -->

    <ul>
      <li v-for="item in filterList" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- 新增属性 -->
    <h5>新增属性</h5>
    <p>
      <span v-for="(item, key) in items" :key="key">{{ item }}</span>
    </p>
    <p>
      <input v-model="text" />
    </p>
    <button @click="update">更新</button>
    <button @click="add">增加</button>
    <button @click="toast">ref获取</button>

    <!-- 组件通信 -->
    <ShopCart></ShopCart>

    <!-- nexTick -->
    <p>限制{{ limit }}</p>
    <button @click="handleTick">更新nextTick</button>

    <!-- mixins -->
    <p>
      mixins
      <button @click="addPic">添加图片</button>
    </p>

    <!-- modal -->

    <Modal>
      <template #header>
        <p>头部</p>
      </template>

      <template #main> 主题 </template>
    </Modal>

    <!--keepalive  -->
    <button @click="goTab">回到首页</button>
    <button @click="goPage">跳转详情</button>

    <h5>表单修饰符</h5>
    <input v-model.trim="searchText1" />
    <input v-model.lazy="searchText2" />
    <input v-model.number="searchText3" />
    <button @click="getResult">获取结果</button>
    <hr />
    <h5>事件修饰符</h5>
    <button @click.stop="stop">阻止冒泡</button>
    <button @click.prevent="prevent">阻止默认行为</button>
    <div>
      <div @click.capture="shout(1)">
        点击1
        <div @click="shout(2)">
          点击2
          <div @click.stop="shout(3)">
            点击3
            <div @click.stop="shout(4)">点击4</div>
          </div>
        </div>
      </div>
    </div>
    <h5>键盘事件符</h5>

    <hr />
    <h5>指令</h5>
    <button v-throttle @click="shout(1)">点击</button>
    <button v-if="tapShow" v-tap>点击</button>
    <button @click="tapShow = false">点击</button>

    <!-- 过滤 -->
    <hr />
    <div>{{ message | reverse }}</div>
    <div>{{ price | toThousandFilter }}</div>

    <!-- toast -->
    <button @click="toast">点击</button>

    <h5>上拉加载\下拉刷新</h5>
    <ul class="list">
      <li v-for="item in 10000" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Product from './product/index.vue'
import ShopCart from './shopcart/index.vue'
import Modal from './modal/index.vue'
import './tool/throttle/index.js'
import './tool/tap/index.js'
import './filter/index.js'
import { httpGet } from '@/http/index.js'
var myMixin = {
  methods: {
    addPic() {
      console.log('添加图片')
    }
  }
}
import Vue from 'vue'

var app = new Vue({
  data: {
    name: '宋江aaa'
  }
})
console.log('app', app)
export default {
  name: 'InterViewComponent',
  components: {
    Product,
    ShopCart,
    Modal
  },
  mixins: [myMixin],
  provide() {
    return {
      food: '菠菜'
    }
  },

  // 路由跳转问题
  // /修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteLeave(to, from, next) {
    from.meta.keepAlive = false
    next()
  },
  data() {
    return {
      name: '宋江',
      list: [
        {
          name: '晁盖',
          id: '1'
        },
        {
          name: '宋江',
          id: '2'
        },
        {
          name: '论均已',
          id: '3'
        }
      ],
      show: true,
      items: {
        age: '25'
      },
      text: '',
      limit: 0,
      searchText1: '',
      searchText2: '',
      searchText3: '',
      tapShow: true,
      message: 'abc',
      price: 10000
    }
  },
  computed: {
    filterList() {
      return this.list.filter((item) => item.name != '宋江')
    }
  },
  watch() {},
  beforeCreate() {
    console.log('父组件加载beforeCreate')
    // console.log(this,this._data.name)
  },
  created() {
    console.log('父组件加载created')
    //  console.log(this,this.$data)
  },
  beforeMount() {
    console.log('父组件加载beforeMount')
  },
  mounted() {
    console.log('父组件加载mounted')
    this.$bus.$on('addCart', (data) => {
      console.log('data', data)
    })
    this.getList()
  },
  activated() {
    this.getData() // 获取数据
  },
  beforeUpdate() {
    console.log('父组件加载beforeUpdate')
  },
  updated() {
    console.log('父组件加载update')
  },
  methods: {
    getList() {
      httpGet('/api/list').then((res) => {
        console.log(res)
      })
    },
    update() {
      this.items.age = 30
      this.items.sex = '男'
      this.list[0].name = '奥特曼'
    },

    add() {
      this.list.push({
        name: this.text,
        id: Math.floor(Math.random() * 100 * 88)
      })
    },
    toast() {
      console.log('点击')
      console.log(this.$refs.productRef)
      this.$refs.productRef.toast()
      // this.$message('我是toast')
      Vue.prototype.$message('我是')
    },
    handleTick() {
      for (let i = 0; i < 100; i++) {
        this.limit += 1
      }
      console.log('Updated DOM1:', this.$el)
      this.$nextTick(() => {
        console.log('Updated DOM:', this.$el)
      })
    },
    getData() {
      console.log('获取数据')
    },
    goTab() {
      this.$router.push({
        name: 'tabs'
      })
    },
    goPage() {
      this.$router.push({
        name: 'interviewDetail'
      })
    },
    getResult() {
      console.log(`${this.searchText1},${this.searchText2},${this.searchText3}`)
    },
    shout(txt) {
      console.log(txt)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  height: 300px;
  overflow: scroll;
  li {
    height: 40px;
    line-height: 40px;
  }
}
</style>
