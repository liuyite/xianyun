<template>
    <div class="email">
        <div>
            <h4 class="draft-title">草稿箱（3）</h4>
            <div class="draft-list">
                <div class="draft-item">
                    <div class="title">
                        <i class="el-icon-edit"></i>
                        <span></span>
                    </div>
                    <p class="date">2019-09-09</p>
                </div>
                 <div class="draft-item">
                    <div class="title">
                        <i class="el-icon-edit"></i>
                        <span></span>
                    </div>
                    <p class="date">2019-09-09</p>
                </div>
                 <div class="draft-item">
                    <div class="title">
                        <i class="el-icon-edit"></i>
                        <span></span>
                    </div>
                    <p class="date">2019-09-09</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.email {
    border: 1px solid #ddd;
    padding: 10px;
    .draft-title {
        margin-bottom: 10px;
        font-weight: 400;
        color: #666;
    }
    .draft-item {
        margin-bottom: 10px;
        font-size: 14px;
        .title{
            &:hover{
                color: orange;
                cursor: pointer;
            }
        }
        .date {
            color: #999;
        }
    }
}
</style>
