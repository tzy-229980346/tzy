<template>
<main>
    <div class="title">
        <div class="tit">
            <span 
            class="list"
            :class="{ color: currentPath === item.path }"
            @click="go(item.path)" 
            v-for="(item,index) in list"
            :key="item.path"
            >{{item.name}}</span>
        </div>
    </div>
</main>
</template>
<script setup>
import { ref, watch,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const currentPath = computed(() => route.path);

// 使用watch监听路由的变化
// 使用watch监听路由的变化，处理子路由的选中效果
// watch(
//     () => route.path,
//     (newPath) => {
//         // 设置当前路径，用于控制选中效果
//         currentPath.value = newPath;
//     },
//     { immediate: true }
// );
const list = [
    {
        name:'推荐',
        path:'/recommend'
    },
    {
        name:'排行榜',
        path:'/toplist'
    },
    {
        name:'歌单',
        path:'/playlist'
    },
    {
        name:'博客有声书',
        path:'/djradio'
    },
    {
        name:'歌手',
        path:'/artist'
    },
    {
        name:'新碟上架',
        path:'/album'
    }
];

// 路由跳转时不改变父路由的选中状态
const go = (path) => {
    router.push({
        path: path,
        replace: true // 使用 replace 避免在历史记录中创建新条目
    });
}
</script>
<style scoped lang="less">
@import url('@/style.less');
main{
    width: 100%;
    height: 35px;
    background: #C20C0C;

}
.title{
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    .tit{
        width: 756px;
        height: 100%;
        margin-left: 190px;
    }
}
.list{
    margin: 0 17px;
    padding: 0 13px;
    font-size: @normalSize;
    text-align: center;
    line-height: 35px;
    color: #ccc;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: rgba(0,0,0,.2);
        border-radius: 35px;
    }
}
.color{
    color: #fff;
    border-radius: 35px;
    background: rgba(0,0,0,.2) !important;
}
</style>
