<template>
    <div class="create">
        <el-container>
            <el-main width="750px">
                <h3>发表新攻略</h3>
                <p>分享你的个人游记，让更多人看到哦！</p>
                <el-form>
                    <el-input v-model="form.title" placeholder="请输入标题" ></el-input>
                        <div
                        class="quill-editor"
                        :content="form.content"
                        v-quill:myQuillEditor="editorOption"
                          @change="onEditorChange($event)"
                    ></div>
                    <div>
                        <span>选择城市</span>
                        <!-- <el-autocomplete
                            class="inline-input"
                            v-model="form.city"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            @select="handleSelect"
                        ></el-autocomplete> -->
                    </div>
                     <el-button type="primary" @click="submitBtn">主要按钮</el-button>
                </el-form>
            </el-main>
            <el-aside>Aside</el-aside>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editorOption: {
                /* quill options */
            },
            form:{
                content: "<p>&nbsp;</p>",
                title:'',
                city:''
            }
        }
    },
    methods:{
        submitBtn(){
            console.log(this.form)
        },
        //读取富文本内容
         onEditorChange({ editor, html}) {
        this.form.content = html
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
    }
}
</style>