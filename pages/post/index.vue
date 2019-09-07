<template>
    <div class="post">
        <el-container>
            <el-aside width="260px">
                <div class="aside-nav">
                    <div class="menus" @mouseleave="current =-1">
                        <div
                            :class="{br:current !==index,topindex:true}"
                            v-for="(item,index) in menusList"
                            :key="index"
                        >
                            <div class="menu-item" @mouseover="hoverBtn(index)">
                                {{item.type}}
                                <i></i>
                            </div>
                        </div>
                        <div class="menu-active" v-show="current !=-1" @mouseleave="current =-1">
                            <div
                                class="menu-option"
                                v-for="(item,index) in menuChild[current]"
                                :key="item.city"
                            >
                                <span>{{index +1}}</span>
                                <nuxt-link :to="`/post?city=${item.city}`">{{item.city}}</nuxt-link>
                                <nuxt-link :to="`/post?city=${item.city}`">{{item.desc}}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aside-recommend">
                    <h4 class="aside-title">推荐城市</h4>
                    <nuxt-link to="/post" class="aside-recommend-item">
                        <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" alt />
                    </nuxt-link>
                </div>
            </el-aside>
            <el-container>
                <div class="search">
                    <input
                        type="text"
                        placeholder="请输入想去的地方，比如：'广州'"
                        v-model="searchInfo"
                        class="search-info"
                    />
                    <i class="el-icon-search"></i>
                    <div class="search-recommend">
                        <span>推荐:</span>
                        <nuxt-link to="/post?city=广州">广州</nuxt-link>
                        <nuxt-link to="/post?city=上海">上海</nuxt-link>
                        <nuxt-link to="/post?city=北京">北京</nuxt-link>
                    </div>
                </div>
                <div class="post-title">
                    <div class="tuijian">
                        <h4>推荐攻略</h4>
                        <el-button type="primary">
                            <i class="el-icon-edit"></i>写游记
                        </el-button>
                    </div>
                </div>
                <!-- 此处是放组件的 -->
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: -1,
            searchInfo: "",
            menusList: [],
            menuChild: []
        };
    },
    methods: {
        hoverBtn(index) {
            this.current = index;
        }
    },
    mounted() {
        this.$axios({
            url: "/posts/cities"
        }).then(res => {
            console.log(res);
            this.menusList = res.data.data;
            this.menusList.forEach(e => {
                this.menuChild.push(e.children);
            });
            console.log(this.menuChild);
        });
    }
};
</script>
<style lang="less" scoped>
.el-container {
    width: 1000px;
    margin: 0 auto;
    height: 700px;
    padding: 20px 0;
}
.is-vertical {
    padding-top: 0px;
}
.search {
    height: 76px;
    color: #333;
    position: relative;
    .search-info {
        width: 700px;
        height: 40px;
        text-indent: 20px;
        box-sizing: border-box;
        line-height: 40px;
        border: 3px solid orange;
        outline: none;
    }
    i {
        position: absolute;
        top: 7px;
        right: 10px;
        font-size: 24px;
        color: orange;
        font-weight: 700;
    }
    .search-recommend {
        background-color: #fff;
        font-size: 12px;
        text-align: left;
        height: 37px;
        line-height: 37px;
        span {
            margin-right: 5px;
        }
        a {
            margin: 0 3px;
            &:hover {
                color: orange;
                text-decoration: underline;
            }
        }
    }
}
.post-title {
    color: #333;
    font-size: 14px;
    .tuijian {
        display: flex;
        height: 51.4px;
        line-height: 51.4px;
        padding: 0 0 10px;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        h4 {
            font-weight: 400;
            font-size: 18px;
            color: orange;
            position: relative;
            &::after {
                display: block;
                content: "";
                width: 72px;
                height: 2px;
                background: orange;
                position: absolute;
                bottom:-11px;
                left: 0;
            }
        }
        .el-icon-edit {
            margin-right: 10px;
        }
    }
}
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}
.el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-right: 40px;
}
.menu-item {
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    // border-right: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    position: relative;
    z-index: 10;
    &:hover {
        color: goldenrod;
        i {
            border-right: 1px solid goldenrod;
            border-top: 1px solid goldenrod;
        }
    }
    i {
        float: right;
        width: 14px;
        height: 14px;
        border-right: 1px solid #999;
        border-top: 1px solid #999;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-top: 13px;
    }
}
.br {
    border-right: 1px solid #ddd;
}
.topindex {
    position: relative;
    z-index: 10;
    background-color: #fff;
}
.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
.aside-nav {
    height: 165px;
    width: 260px;
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
    box-shadow: 0 0 1px #f5f5f5;
    z-index: 2;
}

.aside-title {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
}
.aside-recommend-item img {
    width: 100%;
    height: 173px;
}
.aside-recommend {
    margin-top: 20px;
    text-align: left;
}
.menu-active {
    position: absolute;
    width: 400px;
    top: 81px;
    left: 519px;
    background: #fff;
    border: 1px solid #ddd;
    padding-bottom: 20px;
    z-index: 9;
    .menu-option {
        height: 40px;
        line-height: 40px;
        text-align: left;
        padding: 0 20px;
        font-size: 14px;
        position: relative;
        z-index: 1;
        span {
            font-size: 24px;
            color: greenyellow;
            font-style: italic;
        }
        a {
            color: rgb(163, 147, 147);
            font-size: 16px;
            &:nth-child(2) {
                color: greenyellow;
                padding: 0 10px;
                &:hover {
                    color: greenyellow;
                }
            }
            &:hover {
                text-decoration: underline;
                color: rgb(163, 147, 147);
            }
        }
    }
}
</style>