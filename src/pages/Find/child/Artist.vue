<template>
    <div class="artist-container">
        <div class="artist-content">
            <div class="artist-sidebar">
                <!-- 一级导航 -->
                <div class="nav-section">
                    <h3 class="primary-title">推荐</h3>
                    <ul class="sub-nav">
                        <li :class="{ active: activeItem === '推荐歌手' }" @click="setActive('推荐歌手')">
                            <div class="square-marker"></div>推荐歌手
                        </li>
                        <li :class="{ active: activeItem === '入驻歌手' }" @click="setActive('入驻歌手')">
                            <div class="square-marker"></div>入驻歌手
                        </li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h3 class="primary-title">华语</h3>
                    <ul class="sub-nav">
                        <li :class="{ active: activeItem === '华语男歌手' }" @click="setActive('华语男歌手')">
                            <div class="square-marker"></div>华语男歌手
                        </li>
                        <li :class="{ active: activeItem === '华语女歌手' }" @click="setActive('华语女歌手')">
                            <div class="square-marker"></div>华语女歌手
                        </li>
                        <li :class="{ active: activeItem === '华语组合/乐队' }" @click="setActive('华语组合/乐队')">
                            <div class="square-marker"></div>华语组合/乐队
                        </li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h3 class="primary-title">欧美</h3>
                    <ul class="sub-nav">
                        <li :class="{ active: activeItem === '欧美男歌手' }" @click="setActive('欧美男歌手')">
                            <div class="square-marker"></div>欧美男歌手
                        </li>
                        <li :class="{ active: activeItem === '欧美女歌手' }" @click="setActive('欧美女歌手')">
                            <div class="square-marker"></div>欧美女歌手
                        </li>
                        <li :class="{ active: activeItem === '欧美组合/乐队' }" @click="setActive('欧美组合/乐队')">
                            <div class="square-marker"></div>欧美组合/乐队
                        </li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h3 class="primary-title">日本</h3>
                    <ul class="sub-nav">
                        <li :class="{ active: activeItem === '日本男歌手' }" @click="setActive('日本男歌手')">
                            <div class="square-marker"></div>日本男歌手
                        </li>
                        <li :class="{ active: activeItem === '日本女歌手' }" @click="setActive('日本女歌手')">
                            <div class="square-marker"></div>日本女歌手
                        </li>
                        <li :class="{ active: activeItem === '日本组合/乐队' }" @click="setActive('日本组合/乐队')">
                            <div class="square-marker"></div>日本组合/乐队
                        </li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h3 class="primary-title">韩国</h3>
                    <ul class="sub-nav">
                        <li :class="{ active: activeItem === '韩国男歌手' }" @click="setActive('韩国男歌手')">
                            <div class="square-marker"></div>韩国男歌手
                        </li>
                        <li :class="{ active: activeItem === '韩国女歌手' }" @click="setActive('韩国女歌手')">
                            <div class="square-marker"></div>韩国女歌手
                        </li>
                        <li :class="{ active: activeItem === '韩国组合/乐队' }" @click="setActive('韩国组合/乐队')">
                            <div class="square-marker"></div>韩国组合/乐队
                        </li>
                    </ul>
                </div>
                <div class="nav-section">
                    <h3 class="primary-title">其他</h3>
                    <ul class="sub-nav">
                        <li :class="{ active: activeItem === '其他男歌手' }" @click="setActive('其他男歌手')">
                            <div class="square-marker"></div>其他男歌手
                        </li>
                        <li :class="{ active: activeItem === '其他女歌手' }" @click="setActive('其他女歌手')">
                            <div class="square-marker"></div>其他女歌手
                        </li>
                        <li :class="{ active: activeItem === '其他组合/乐队' }" @click="setActive('其他组合/乐队')">
                            <div class="square-marker"></div>其他组合/乐队
                        </li>
                    </ul>
                </div>
            </div>
            <div class="artist-main">
                <!-- 根据选中的导航项显示不同内容 -->
                <ArtistGrid 
                    v-if="activeItem === '入驻歌手'" 
                    title="入驻歌手" 
                    :artists="artistList"
                ></ArtistGrid>
                <div v-else>
                    <h2 class="section-title">{{ activeItem }}</h2>
                    <p>该分类内容正在开发中...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ArtistGrid from '@/components/ArtistGrid.vue';

// 当前选中的导航项
const activeItem = ref('入驻歌手');

// 设置当前选中项
const setActive = (item) => {
    activeItem.value = item;
};

// 模拟歌手数据
const artistList = [
    { 
        name: '周杰伦', 
        img: '/src/assets/img/singer.jpg' 
    },
    { 
        name: '林俊杰', 
        img: '/src/assets/img/singer1.jpg' 
    },
    { 
        name: '陈奕迅', 
        img: '/src/assets/img/singer.jpg' 
    },
    { 
        name: '薛之谦', 
        img: '/src/assets/img/singer1.jpg' 
    },
    { 
        name: '李荣浩', 
        img: '/src/assets/img/singer.jpg' 
    },
    { 
        name: '张学友', 
        img: '/src/assets/img/singer.jpg' 
    },
    { 
        name: '王力宏', 
        img: '/src/assets/img/singer1.jpg' 
    },
    { 
        name: '华晨宇', 
        img: '/src/assets/img/singer.jpg' 
    },
    { 
        name: '邓紫棋', 
        img: '/src/assets/img/singer1.jpg' 
    },
    { 
        name: '五月天', 
        img: '/src/assets/img/singer.jpg' 
    }
];
</script>

<style scoped lang="less">
.artist-container {
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    box-sizing: border-box;
}

.artist-content {
    width: 980px;
    background-color: #ffffff;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 30px;

        .artist-sidebar {
            width: 180px;
            flex-shrink: 0;

            .nav-section {
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid #d3d3d3;

                &:last-child {
                    border-bottom: none;
                }

                .primary-title {
                    font-size: 16px;
                    color: #000;
                    font-weight: bold;
                    margin-bottom: 12px;
                    padding-left: 10px;
                }

            .sub-nav {
                list-style: none;
                padding: 0;
                margin: 0;

                    li {
                        font-size: 14px;
                        color: #666;
                        padding: 8px 10px;
                        cursor: pointer;
                        transition: all 0.3s;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        margin-bottom: 4px;
                        position: relative;
                        display: flex;
                        align-items: center;

                        .square-marker {
                            width: 3px;
                            height: 3px;
                            background-color: #c9c9c9;
                            margin-right: 8px;
                            flex-shrink: 0;
                            transition: background-color 0.3s;
                        }

                        &:hover {
                            color: #c20c0c;
                            
                            .square-marker {
                                background-color: #c20c0c;
                            }
                        }

                        &.active {
                            color: #c20c0c;
                            border: 1px solid #d3d3d3;
                            .square-marker {
                                background-color: #c20c0c;
                            }
                        }
                    }
            }
        }
    }

    .artist-main {
        flex: 1;
        min-width: 0; // 防止内容溢出

        .section-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
            border-bottom: 2px solid #c20c0c;
            padding-bottom: 10px;
        }
    }
}
</style>