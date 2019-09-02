<template>
    <div class="header">
        <el-row type="flex" class="row" justify="space-between">
            <div>
                <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
            </div>
            <el-row class="nav" type="flex">
                <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotel">酒店</nuxt-link>
                <nuxt-link to="/air">国内机票</nuxt-link>
            </el-row>
            <div class="lohin">
                <nuxt-link to="/user/login">登录/注册</nuxt-link>
            </div>
        </el-row>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header {
    width: 100%;
    border-bottom: 1px solid #409eff;
    box-shadow: 0 2px 2px #ccc;
    .row {
        width: 1000px;
        margin: 0 auto;
        height: 60px;
        line-height: 60px;

        .nav {
            flex: 1;
            font-size: 16px;
            a {
                height: 60px;
                line-height: 60px;
                display: block;
                padding: 0 20px;
                box-sizing:border-box;
                &:hover{
                    border-bottom:5px solid #409eff;
                }    
            }
            .nuxt-link-exact-active{
                    background: #409eff;
                    color: #fff;
                }
        }
    }
    img {
        display: block;
        width: 156px;
        height: 43px;
        padding-top: 8px;
        margin-right: 20px
    }
}
</style>