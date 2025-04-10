<template>
  <div class="podcast-showcase">
    <div v-for="(podcast, index) in podcasts" :key="index" class="podcast-item">
      <img :src="podcast.imageUrl" :alt="podcast.title" class="podcast-image">
      <div class="podcast-info">
        <h3 class="podcast-title">{{ podcast.title }}</h3>
        <p class="podcast-description">{{ podcast.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const podcasts = ref([
  {
    imageUrl: '/src/assets/img/li1.jpg',
    title: '音乐历史探索',
    description: '深入探讨各个时代的音乐发展，带您领略音乐的魅力与变迁。'
  },
  {
    imageUrl: '/src/assets/img/li2.jpg',
    title: '当代音乐人访谈',
    description: '独家对话当红音乐人，了解他们的创作灵感和音乐理念。'
  },
  {
    imageUrl: '/src/assets/img/li3.jpg',
    title: '世界民族音乐之旅',
    description: '带您环游世界，聆听各国独特的民族音乐，感受文化的多样性。'
  },
  {
    imageUrl: '/src/assets/img/li4.jpg',
    title: '音乐制作技巧分享',
    description: '专业音乐人分享制作技巧，从作曲到混音，全方位提升您的音乐技能。'
  }
]);
</script>

<style scoped lang="less">
.podcast-showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  .podcast-item {
    width: 435px;
    height: 120px;
    padding: 20px 0;
    margin-left: 30px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
    &:nth-child(2n + 1) {
      margin-left: 0;
    }

    .podcast-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 4px;
    }

    .podcast-info {
      margin-left: 20px;
      flex: 1;
      overflow: hidden;

      .podcast-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .podcast-description {
        font-size: 14px;
        color: #666;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>