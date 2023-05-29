<template>
  <div class="home">
    <router-link to="pdf">html生成PDF</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import config from './config'
export default {
  name: 'HomeView',
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
