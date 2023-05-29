<template>
  <div class="radio-group">
    <label for="radio">难</label>
    <input type="checkbox" id="radio" @change="change">
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: [Number, String],
      default() {
        return 1
      },
    },
    options:{
        type:Object,
    
    },
    list:{
        type:Array,
        default(){
            return []
        }
    },

  },
  name: '',
  data() {
    return {}
  },
  methods:{
    change(e){
        console.log('测试',e.target.value)
        
        this.$emit('change',e.target.value)
    }
  }
}
</script>
<style  lang="less" scoped>
</style>