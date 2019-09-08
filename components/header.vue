<template>
    <div class="header">
        <el-row type="flex" class="row" justify="space-between">
            <div class="imgs">
               <nuxt-link to="/"><img src="http://157.122.54.189:9093/images/logo.jpg" alt /></nuxt-link> 
            </div>
            <el-row class="nav" type="flex">
                <nuxt-link to="/">首页</nuxt-link>
                <nuxt-link to="/post">旅游攻略</nuxt-link>
                <nuxt-link to="/hotel">酒店</nuxt-link>
                <nuxt-link to="/air">国内机票</nuxt-link>
            </el-row>
            <div class="login" v-if="$store.state.user.userInfo.token ===''">
                <nuxt-link to="/user/login">登录/注册</nuxt-link>
            </div>
            <div class="login" v-else>
                <el-dropdown>
                    <el-row type="flex" align="middle" class="el-dropdown-link">
                        <nuxt-link to="#">
                            <img
                                :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar"
                            />
                            {{$store.state.user.userInfo.user.nickname}}
                        </nuxt-link>
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-row>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item @click.native="cancal">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-row>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" >
            <span>你确定要退出登录吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="tuichu">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogVisible:false
        }
    },
    methods: {
        cancal() {
            this.dialogVisible = true;
        },
        tuichu(){
            this.$store.commit("user/clearUserInfo");
            this.dialogVisible = false;
            this.$message.success('退出成功！！！')
        }
    }
};
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
                box-sizing: border-box;
                &:hover {
                    border-bottom: 5px solid #409eff;
                }
            }
            .nuxt-link-exact-active {
                background: #409eff;
                color: #fff;
            }
        }
        .imgs img {
            display: block;
            width: 156px;
            height: 43px;
            padding-top: 8px;
            margin-right: 20px;
        }
    }

    .el-dropdown-link img {
        width: 36px;
        height: 36px;
        margin: 0px;
        padding: 0px;
        vertical-align: middle;
        border: 2px solid #fff;
        border-radius: 50%;
        &:hover {
            border: 2px solid red;
        }
    }
    .el-dialog__wrapper .el-dialog__body{
       padding: 0px
    }
}
</style>