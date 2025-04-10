<template>
  <div class="program-ranking">
    <div v-for="(item, index) in rankingList" :key="index" class="ranking-item">
      <div class="ranking-number">
        <span :class="{ 'top-three': index < 3 }">{{ String(index + 1).padStart(2, '0') }}</span>
        <div class="trend-icon">
          <span v-if="item.trend > 0" class="trend-up">
            ↑{{ item.trend }}
          </span>
          <span v-else-if="item.trend < 0" class="trend-down">
            ↓{{ Math.abs(item.trend) }}
          </span>
        </div>
      </div>
      <div class="program-img">
        <img :src="item.imgUrl" alt="节目图片">
      </div>
      <div class="program-info">
        <div class="program-title">{{ item.title }}</div>
        <div class="program-author">{{ item.author }}</div>
      </div>
      <div class="program-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: item.popularity + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 导入所有需要的图片资源
import li1Image from '@/assets/img/li1.jpg';
import li2Image from '@/assets/img/li2.jpg';
import li3Image from '@/assets/img/li3.jpg';
import li4Image from '@/assets/img/li4.jpg';
import li5Image from '@/assets/img/li5.jpg';
import li6Image from '@/assets/img/li6.jpg';
import li7Image from '@/assets/img/li7.jpg';
import li8Image from '@/assets/img/li8.jpg';
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';

// 模拟数据，实际项目中可能需要从API获取
const rankingList = ref([
  {
    imgUrl: li1Image,
    title: '【轻音乐】舒缓心灵的纯音乐合集',
    author: '音乐电台',
    trend: 0,
    popularity: 98
  },
  {
    imgUrl: li2Image,
    title: '周杰伦歌曲专辑解析',
    author: '流行音乐台',
    trend: 2,
    popularity: 92
  },
  {
    imgUrl: li3Image,
    title: '古典音乐赏析：贝多芬专辑',
    author: '古典音乐电台',
    trend: -1,
    popularity: 87
  },
  {
    imgUrl: li4Image,
    title: '爵士乐发展史及经典作品',
    author: '爵士音乐台',
    trend: 1,
    popularity: 85
  },
  {
    imgUrl: li5Image,
    title: '民谣歌手访谈实录',
    author: '民谣之声',
    trend: -2,
    popularity: 82
  },
  {
    imgUrl: li6Image,
    title: '电影原声带精选',
    author: '影视音乐台',
    trend: 3,
    popularity: 78
  },
  {
    imgUrl: li7Image,
    title: '说唱音乐发展与文化',
    author: '嘻哈电台',
    trend: 0,
    popularity: 75
  },
  {
    imgUrl: li8Image,
    title: '音乐人生活日记',
    author: '音乐人故事',
    trend: -1,
    popularity: 72
  },
  {
    imgUrl: img1,
    title: '乐器学习指南：钢琴篇',
    author: '乐器学习台',
    trend: 1,
    popularity: 68
  },
  {
    imgUrl: img2,
    title: '音乐制作技巧分享',
    author: '音乐制作人',
    trend: 2,
    popularity: 65
  }
]);
</script>

<style scoped lang="less">
.program-ranking {
  width: 100%;
  height: 100%;

  .ranking-item {
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

    .ranking-number {
      width: 30px;
      text-align: center;
      margin-right: 5px;
      position: relative;
      
      span {
        font-size: 14px;
        color: #999999;
        font-weight: normal;
      }

      .top-three {
        color: #dc4545;
      }
      
      .trend-icon {
        font-size: 6px;
        position: absolute;
        left: 0;
        bottom: -16px;
        width: 100%;
        text-align: center;
        
        .trend-up {
          color: #ba2226;
        }
        
        .trend-down {
          color: #4abbeb;
        }
      }
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

    .program-progress {
      width: 92px;
      margin-left: 10px;
      margin-right: 10px;
      
      .progress-bar {
        width: 100%;
        height: 8px;
        background-color: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
        
        .progress-fill {
          height: 100%;
          background-color: #c7c7c7;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>