<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4838987_xt3j7elo7yk.css">

    <main>
        <div class="header">
            <div class="logo"></div>
            <div class="ttt">
                <span :class="path==item.path?'title1':'title'" 
                @click="go(item.path)" 
                v-for="(item, index) in titlelist">{{ item.name }}
                </span>
            </div>
            <div class="scarch">
                <div class="icon"></div>
                <input type="text">
            </div>
            <div class="aouter">
                创作者中心
            </div>
            <a href="x">登录</a>
        </div>
    </main>
    <div class="red"></div>
</template>
<script setup>
import { reactive,watch,computed } from 'vue';
import { useRouter ,useRoute} from 'vue-router';
const router=useRouter();
const route=useRoute();

const titlelist = reactive([
    {
        name: '发现音乐',
        path: '/find'
    },
    {
        name: '我的音乐',
        path: '/my'
    },
    {
        name: '关注',
        path: '/friend'
    },
    {
        name: '商城',
        path: ''
    },
    {
        name: '音乐人',
        path: ''
    },
    {
        name: '云推歌',
        path: ''
    },
    {
        name: '下载客户端',
        path: '/download'
    }
])
// 当前激活的路径
const path = computed(() => {
    const currentPath = route.path;
    // 如果是 /find 开头或者是特定的路径，返回 /find
    if (currentPath.startsWith('/find') || 
        ['/recommend', '/toplist', '/playlist', '/djradio', '/artist', '/album'].includes(currentPath)) {
        return '/find';
    }
    // 否则返回当前路径
    return currentPath;
});
const go=(path)=>{
    router.push(path)
}
</script>
<style scoped lang="less">
@import url('@/style.less');
.red{
    width: 100%;
    height: 4px;
    background-color: #C20C0C;
}
main {
    width: 100%;
    height: 70px;
    background: @blackColor;
    display: flex;
    justify-content: center;
}

.header {
    width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
}

.logo {
    width: 177px;
    height: 70px;
    background: url(@/assets/topbar.png) no-repeat 0 0;
    margin-right: 20px;
    cursor: pointer;
}

.ttt {
    width: 588px;
    height: 70px;
    display: flex;
}

.title {
    width: 94px;
    height: 70px !important;
    font-size: @normalSize;
    line-height: 70px;
    text-align: center;
    color: #ccc;
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: #000;
    }
}

.title1 {
    width: 94px;
    height: 70px !important;
    font-size: @normalSize;
    line-height: 70px;
    text-align: center;
    color: #ccc;
    cursor: pointer;
    color: #fff;
    background: url(@/assets/topbar_02.jpg) no-repeat 35px 64px;
    background-color: #000;
}

.scarch {
    width: 158px;
    height: 32px;
    background-color: #fff;
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    margin-left: 15px;

    .icon {
        width: 32px;
        height: 32px;
        background: url(@/assets/topbar.png) no-repeat 0 -100px;
    }

    input {
        width: 115px;
        border: none;
        outline: none;
    }
}

.aouter {
    width: 70px;
    height: 32px;
    border-radius: 25px;
    border: 1px solid #ccc;
    color: #ccc;
    text-align: center;
    line-height: 32px;
    margin-left: 20px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
}

a {
    margin-left: 15px;
    color: #ccc;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
    }
}
</style>
