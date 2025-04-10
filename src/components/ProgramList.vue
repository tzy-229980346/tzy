<template>
  <div class="program-list">
    <div v-for="(item, index) in programList" :key="index" class="program-item">
      <div class="program-img">
        <img :src="item.imgUrl" alt="节目图片">
      </div>
      <div class="program-info">
        <div class="program-title">{{ item.title }}</div>
        <div class="program-author">{{ item.author }}</div>
      </div>
      <div class="program-badge">
        <span>音乐播客</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟数据，实际项目中可能需要从API获取
const programList = ref([
  {
    imgUrl: '/src/assets/img/1.jpg',
    title: '【轻音乐】舒缓心灵的纯音乐合集',
    author: '音乐电台'
  },
  {
    imgUrl: '/src/assets/img/2.jpg',
    title: '周杰伦歌曲专辑解析',
    author: '流行音乐台'
  },
  {
    imgUrl: '/src/assets/img/3.jpg',
    title: '古典音乐赏析：贝多芬专辑',
    author: '古典音乐电台'
  },
  {
    imgUrl: '/src/assets/img/4.jpg',
    title: '爵士乐发展史及经典作品',
    author: '爵士音乐台'
  },
  {
    imgUrl: '/src/assets/img/li1.jpg',
    title: '民谣歌手访谈实录',
    author: '民谣之声'
  },
  {
    imgUrl: '/src/assets/img/li2.jpg',
    title: '电影原声带精选',
    author: '影视音乐台'
  },
  {
    imgUrl: '/src/assets/img/li3.jpg',
    title: '说唱音乐发展与文化',
    author: '嘻哈电台'
  },
  {
    imgUrl: '/src/assets/img/li4.jpg',
    title: '音乐人生活日记',
    author: '音乐人故事'
  },
  {
    imgUrl: '/src/assets/img/li5.jpg',
    title: '乐器学习指南：钢琴篇',
    author: '乐器学习台'
  },
  {
    imgUrl: '/src/assets/img/li6.jpg',
    title: '音乐制作技巧分享',
    author: '音乐制作人'
  }
]);
</script>

<style scoped lang="less">
.program-list {
  width: 100%;
  height: 100%;

  .program-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f2f2f2;
    
    &:nth-child(odd) {
      background-color: #f7f7f7;
    }
    
    &:nth-child(even) {
      background-color: #ffffff;
    }
    
    &:hover {
      background-color: #f5f5f5;
    }

    .program-img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }

    .program-info {
      flex: 1;
      overflow: hidden;
      
      .program-title {
        font-size: 14px;
        color: #333;
        margin-bottom: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      
      .program-author {
        font-size: 12px;
        color: #999;
      }
    }

    .program-badge {
      width: 60px;
      height: 17px;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      margin-right: 10px;
      
      span {
        color: #999999;
        font-size: 12px;
      }
    }
  }
}
</style>