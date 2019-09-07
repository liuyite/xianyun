<template>
    <section class="contianer">
        <el-row type="flex" justify="space-between">
            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div></div>
                <!-- 航班信息 -->
                <div>
                    <flightsListHead />
                </div>

                <!-- 航班头部布局 -->
                <div>
                    <flightsItem :data="item" v-for="(item, index) in dataList" :key="index" />
                </div>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageIndex"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                ></el-pagination>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
            </div>
        </el-row>
    </section>
</template>

<script>
import flightsItem from "@/components/air/flightsItem";
import flightsListHead from "@/components/air/flightsListHead";
export default {
    components: {
        flightsItem,
        flightsListHead
    },
    data() {
        return {
            total: 0,
            pageIndex: 1,
            pageSize: 5,
            ListItem: {},
            dataList: []
        };
    },
    mounted() {
        this.$axios({
            url: "/airs",
            params: this.$route.query
        }).then(res => {
            this.ListItem = res.data;
            console.log(this.ListItem);
            this.dataList = this.ListItem.flights.slice(0, this.pageSize);
            this.total = this.ListItem.total;
        });
    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
            this.dataList = this.ListItem.flights.slice(
                0,
                this.pageIndex * this.pageSize
            );
        },
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.dataList = this.ListItem.flights.slice(
                (this.pageIndex - 1) * this.pageSize,
                this.pageIndex * this.pageSize
            );
        }
    }
};
</script>

<style scoped lang="less">
.contianer {
    width: 1000px;
    margin: 20px auto;
}

.flights-content {
    width: 745px;
    font-size: 14px;
}

.aside {
    width: 240px;
}
</style>