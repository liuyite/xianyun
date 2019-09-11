<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main">
                <OrderForm />
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <OrderAside :data="formdata" />
            </div>
        </el-row>
    </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm";
import OrderAside from "@/components/air/orderAside";
export default {
    data() {
        return {
            formdata: {
                seat_infos: {}
            }
        };
    },
    components: {
        OrderForm,
        OrderAside
    },
    mounted() {
        setTimeout(() => {
            this.formdata = this.$store.state.air.formData;
        }, 10);
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 1000px;
    margin: 20px auto;
}

/*aside*/
.aside {
    width: 350px;
    height: fit-content;
    border: 1px #ddd solid;
}
</style>