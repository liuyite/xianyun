<template>
    <div class="create">
        <el-container>
            <el-main width="750px">
                <h3>发表新攻略</h3>
                <p>分享你的个人游记，让更多人看到哦！</p>
                <el-form>
                    <el-input v-model="form.title" placeholder="请输入标题"></el-input>
                    <div
                        class="quill-editor"
                        :content="form.content"
                        v-quill:myQuillEditor="editorOption"
                        @change="onEditorChange($event)"
                    ></div>
                    <div>
                        <span>选择城市</span>
                        <el-autocomplete
                            class="inline-input"
                            v-model="form.city"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            @select="handleSelect"
                        ></el-autocomplete>
                    </div>
                    <el-button type="primary" @click="submitBtn" class="el-button--small">提交</el-button>
                    <span class="text">
                        或者
                        <nuxt-link to="#">保存到草稿</nuxt-link>
                    </span>
                </el-form>
            </el-main>
            <!-- 侧边栏 -->
            <el-aside width="200px">
                <!-- 添加组件"components/post/email.vue" -->
                <email />
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import email from "@/components/post/email";
export default {
    components: { email },
    data() {
        return {
            editorOption: {
                /* quill options */
            },
            form: {
                content: "<p>&nbsp;</p>",
                title: "",
                city: ""
            }
        };
    },
    methods: {
        //城市建议
        querySearch(value, cb) {
            if (!value) {
                cb([]);
                return;
            }
            this.$axios({
                url: "/airs/city",
                params: { name: value }
            }).then(res => {
                const { data } = res.data;
                data.forEach(e => {
                    e.value = e.name;
                });
                cb(data);
            });
        },
        handleSelect(item) {},
        submitBtn() {
            const token = JSON.parse( localStorage.getItem('store')).user.userInfo.token
            this.$axios({
                url:'/posts',
                method:'post',
                data:this.form,
                headers: { 'Authorization': 'Bearer ' + token}//设置header信息
            })
            .then(res =>{
                if(res.status===0){
                    this.$alert(res.message,'提示');
                }
            })
        },
        //读取富文本内容
        onEditorChange({ editor, html }) {
            this.form.content = html;
        }
    }
};
</script>


<style lang="less" scope>
.create {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    .el-main {
        padding: 0px;
        h3 {
            font-weight: 400;
            font-size: 22px;
            margin-bottom: 10px;
        }
        p {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }
        .el-input__inner {
            margin-bottom: 22px;
        }
        .ql-container {
            height: 400px;
            margin-bottom: 22px;
        }
        .text {
            font-size: 14px;
            padding-left: 10px;
            a {
                color: orange;
            }
        }
    }
    .el-aside {
        margin-left: 50px;
    }
}
</style>