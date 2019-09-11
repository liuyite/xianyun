<template>
    <div class="flight-item">
        <div @click="isShow = !isShow">
            <!-- 显示的机票信息 -->
            <el-row type="flex" align="middle" class="flight-info">
                <el-col :span="6">
                    <span>{{data.airline_name}}</span>
                    {{data.flight_no}}
                </el-col>
                <el-col :span="12">
                    <el-row type="flex" justify="space-between" class="flight-info-center">
                        <el-col :span="8" class="flight-airport">
                            <strong>{{data.dep_time}}</strong>
                            <span>{{data.org_airport_name}}{{data.org_airport_quay}}</span>
                        </el-col>
                        <el-col :span="8" class="flight-time">
                            <span>{{timer}}</span>
                        </el-col>
                        <el-col :span="8" class="flight-airport">
                            <strong>{{data.arr_time}}</strong>
                            <span>{{data.dst_airport_name}}{{data.dst_airport_quay}}</span>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6" class="flight-info-right">
                    ￥
                    <span class="sell-price">{{data.base_price /2}}</span>起
                </el-col>
            </el-row>
        </div>
        <div class="flight-recommend" v-show="isShow">
            <!-- 隐藏的座位信息列表 -->
            <el-row type="flex" justify="space-between" align="middle">
                <el-col :span="4">低价推荐</el-col>
                <el-col :span="20">
                    <el-row
                        type="flex"
                        justify="space-between"
                        align="middle"
                        class="flight-sell"
                        v-for="(item , index) in seatList"
                        :key="index"
                    >
                        <el-col :span="16" class="flight-sell-left">
                            <span>{{item.group_name}}</span>
                            | {{item.supplierName}}
                        </el-col>
                        <el-col :span="5" class="price">￥{{item.settle_price}}</el-col>
                        <el-col :span="3" class="choose-button">
                            <el-button type="warning" size="mini" @click="submitBtn(item.seat_xid)">选定</el-button>
                            <p>剩余：{{item.discount}}</p>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seatList: [],
            isShow: false
        };
    },
    props: {
        // 数据
        data: {
            type: Object,
            // 默认是空对象
            default: {}
        }
    },
    mounted() {
        this.seatList = this.data.seat_infos;
    },
    computed: {
        timer() {
            let arrs = this.data.dep_time.split(":");
            let dsts = this.data.arr_time.split(":");
            if (dsts[0] < arrs[0]) {
                dsts[0] += 24;
            }
            let cha = dsts[0] * 60 + +dsts[1] - (arrs[0] * 60 + +arrs[1]);
            let hours = Math.floor(cha / 60);
            let mins = cha % 60;
            if (mins < 10) {
                mins = "0" + mins;
            }
            return `${hours}时${mins}分`;
        }
    },
    methods:{
        submitBtn(seat_xid){
            console.log(seat_xid)
            this.$router.push(`/air/order?id=${this.data.id}&seat_xid=${seat_xid}`)
        }
    }
};
</script>

<style scoped lang="less">
.flight-item {
    border: 1px #ddd solid;
    margin-bottom: 10px;

    .flight-info {
        padding: 15px;
        cursor: pointer;

        > div {
            &:first-child,
            &:last-child {
                text-align: center;
            }
        }
    }

    .flight-info-center {
        padding: 0 30px;
        text-align: center;

        .flight-airport {
            strong {
                display: block;
                font-size: 24px;
                font-weight: normal;
            }
            span {
                font-size: 12px;
                color: #999;
            }
        }

        .flight-time {
            span {
                display: inline-block;
                padding: 10px 0;
                border-bottom: 1px #eee solid;
                color: #999;
            }
        }
    }

    .flight-info-right {
        .sell-price {
            font-size: 24px;
            color: orange;
            margin: 0 2px;
        }
    }
}

.flight-recommend {
    background: #f6f6f6;
    border-top: 1px #eee solid;
    padding: 0 20px;

    .flight-sell {
        border-bottom: 1px #eee solid;
        padding: 10px 0;

        &:last-child {
            border-bottom: none;
        }

        .flight-sell-left {
            font-size: 12px;
            span {
                color: green;
            }
        }

        .price {
            font-size: 20px;
            color: orange;
        }

        .choose-button {
            text-align: center;
            color: #666;
            button {
                display: block;
                width: 100%;
                margin-bottom: 5px;
            }
        }
    }
}
</style>