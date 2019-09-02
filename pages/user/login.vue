<template>
    <div class="login" :style="`background:url(${$axios.defaults.baseURL+ bgc}) center center no-repeat;background-size:contain contain;`">
      
    </div>
</template>
<script>
export default {
    data() {
        return {
          bgc:''
        }
    },
    mounted() {
        this.$axios({
            url: "/scenics/banners"
        }).then(res => {
            this.bgc = res.data.data[2].url;
            
            console.log(this.bgc);
        });
    }
};
</script>
<style scoped lang="less">
.login{
  height: 700px;
}

</style>