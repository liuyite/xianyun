<template>
    <div class="index">
        <span
            v-for="(item, index) in ['新闻','体育','娱乐']"
            :key="index"
            @click="handleBtn(index)"
            :class="{active:current===index }"
        >{{item}}</span>
        <div v-show="current===0">
            <ul>
                <li>新闻</li>
                <li>新闻</li>
                <li>新闻</li>
            </ul>
        </div>
        <div v-show="current===1">
            <ul>
                <li>体育</li>
                <li>体育</li>
                <li>体育</li>
            </ul>
        </div>
        <div v-show="current===2">
            <ul>
                <li>娱乐</li>
                <li>娱乐</li>
                <li>娱乐</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
        };
    },
    methods: {
        handleBtn(index) {
            this.current = index;
        }
    }
};
</script>
<style lang="less" scoped>
.active {
    color: red;
}
.index {
    margin: 0 auto;
    font-size: 20px;
    text-align: center
}
ul {
    list-style: none;
    margin-top:30px; 
    margin-left:-100px;
}
li{
    margin-top:10px; 
}
span{
    padding-right: 30px;
}
</style>