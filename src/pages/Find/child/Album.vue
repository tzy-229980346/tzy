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

// 导入所有需要的图片资源
import cd1Image from '@/assets/img/cd1.jpg';
import li1Image from '@/assets/img/li1.jpg';
import li2Image from '@/assets/img/li2.jpg';
import li3Image from '@/assets/img/li3.jpg';
import li4Image from '@/assets/img/li4.jpg';
import li5Image from '@/assets/img/li5.jpg';
import li6Image from '@/assets/img/li6.jpg';
import li7Image from '@/assets/img/li7.jpg';
import li8Image from '@/assets/img/li8.jpg';

// 模拟数据，实际使用时请替换为真实数据
const albumList = ref([
    {
        discImg: cd1Image,
        discContent: '新世界 NEW WORLD',
        discAuthor: '华晨宇'
    },
    {
        discImg: li1Image,
        discContent: '我的音乐你听吗',
        discAuthor: '周杰伦'
    },
    {
        discImg: li2Image,
        discContent: '如常 Just Like This',
        discAuthor: '陈奕迅'
    },
    {
        discImg: li3Image,
        discContent: '晴天 Fine Day',
        discAuthor: '薛之谦'
    },
    {
        discImg: li4Image,
        discContent: '最美的期待',
        discAuthor: '周笔畅'
    },
    {
        discImg: li5Image,
        discContent: '起风了 The Wind Rises',
        discAuthor: '买辣椒也用券'
    },
    {
        discImg: li6Image,
        discContent: '无条件 Unconditional',
        discAuthor: '林俊杰'
    },
    {
        discImg: li7Image,
        discContent: '我们的歌 Our Song',
        discAuthor: '王力宏'
    },
    {
        discImg: li8Image,
        discContent: '夜的第七章',
        discAuthor: '邓紫棋'
    },
    {
        discImg: cd1Image,
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