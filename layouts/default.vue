<template>
  <div class="app">
    <Header></Header>
    <nuxt />
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components:{
    Header
  }
}
</script>
<style lang="less">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color:#000;
  &:hover{
    color:#409eff;
  }
}


</style>
