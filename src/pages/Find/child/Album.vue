<template>
    <div class="album-container">
        <div class="album-content">
            <Line name="新碟上架"></Line>
            <AlbumGrid :album-list="albumList" />
            <Line name="全部新碟"></Line>
            <AlbumGrid :album-list="albumList" />
        </div>
    </div>
</template>

<script setup>
import Line from '@/components/Line.vue';
import AlbumGrid from '@/components/AlbumGrid.vue';
import { ref } from 'vue';

// 模拟数据，实际使用时请替换为真实数据
const albumList = ref([
    {
        discImg: '/src/assets/img/cd1.jpg',
        discContent: '新世界 NEW WORLD',
        discAuthor: '华晨宇'
    },
    {
        discImg: '/src/assets/img/li1.jpg',
        discContent: '我的音乐你听吗',
        discAuthor: '周杰伦'
    },
    {
        discImg: '/src/assets/img/li2.jpg',
        discContent: '如常 Just Like This',
        discAuthor: '陈奕迅'
    },
    {
        discImg: '/src/assets/img/li3.jpg',
        discContent: '晴天 Fine Day',
        discAuthor: '薛之谦'
    },
    {
        discImg: '/src/assets/img/li4.jpg',
        discContent: '最美的期待',
        discAuthor: '周笔畅'
    },
    {
        discImg: '/src/assets/img/li5.jpg',
        discContent: '起风了 The Wind Rises',
        discAuthor: '买辣椒也用券'
    },
    {
        discImg: '/src/assets/img/li6.jpg',
        discContent: '无条件 Unconditional',
        discAuthor: '林俊杰'
    },
    {
        discImg: '/src/assets/img/li7.jpg',
        discContent: '我们的歌 Our Song',
        discAuthor: '王力宏'
    },
    {
        discImg: '/src/assets/img/li8.jpg',
        discContent: '夜的第七章',
        discAuthor: '邓紫棋'
    },
    {
        discImg: '/src/assets/img/cd1.jpg',
        discContent: '光年之外',
        discAuthor: '邓紫棋'
    }
]);
</script>

<style scoped lang="less">
.album-container {
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    box-sizing: border-box;
}

.album-content {
    width: 933px;
    background-color: #ffffff;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>