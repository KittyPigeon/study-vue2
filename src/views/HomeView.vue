<template>
  <div class="home">
    <countTo :startVal="2000" :endVal="3000" :duration='2000'></countTo>
  </div>
</template>

<script>
// @ is an alias to /src
import config from './config'
import countTo from 'vue-count-to';

export default {
  name: 'HomeView',
  components:{
    countTo
  },
  data() {
    return {
      form: {
        name: ''
      },
      config
    }
  }
}
</script>
