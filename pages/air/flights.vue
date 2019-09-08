<template>
    <section class="contianer">
        <el-row type="flex" justify="space-between">
            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                 <FlightsFilters  :data="filterData" @filterevent="filterEvent"/>
                <!-- 航班信息 -->
                <div>
                    <flightsListHead />
                </div>

                <!-- 航班头部布局 -->
                <div>
                    <flightsItem :data="item" v-for="(item, index) in dataList" :key="index" />
                    <div v-show="isShow" style="text-align:center; padding:50px 0;">
                        <span >很抱歉！！！暂时没有此航班信息</span>
                    </div>
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
                <FlightsAside/>
            </div>
        </el-row>
    </section>
</template>

<script>
import flightsItem from "@/components/air/flightsItem";
import flightsListHead from "@/components/air/flightsListHead";
import FlightsFilters from "@/components/air/flightsFilters";
import FlightsAside from "@/components/air/flightsAside";
export default {
    components: {
        flightsItem,
        flightsListHead,
        FlightsFilters,
        FlightsAside
    },
    data() {
        return {
            total: 0,
            pageIndex: 1,
            pageSize: 5,
            ListItem: {},
            dataList: [],
            isShow:false,
            filterData: { // 航班总数据   
                flights: [],
                info: {},
                options: {}
            }, 
        };
    },
    watch:{
        $route(){
             this.init()
        }
    },
    mounted() {
       this.init()
    },
    methods: {
        init(){
             this.$axios({
            url: "/airs",
            params: this.$route.query
        }).then(res => {
            this.ListItem = res.data;
            this.filterData = {...res.data}
            this.dataList = this.ListItem.flights.slice(0, this.pageSize);
            this.total = this.ListItem.total;
            if(this.total ===0){
                this.isShow = true;
            }
        });
        },
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
        },
        filterEvent(value){
            this.pageIndex=1;
            this.dataList = value
             this.total = value.length
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