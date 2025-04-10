<template>
<div>
    <div class="main">
        <div class="minbox" :style="{ transform: `translateX(${-currentPage * slideDistance}px)` }">
            <div class="li" v-for="(item,index) in displayItems" @mouseover='bofan=index' @mouseleave="bofan=-1" :key="index">
                <div class="bofan" :class="bofan==index?'show':''"></div>
                <div class="list">
                    <img :src="item.discImg">
                </div>
                <span>{{ item.discContent }}</span>
                <p>{{ item.discAuthor }}</p>
            </div>
        </div>
    </div>
    <div class="pre" @click="prevPage"></div>
    <div class="next" @click="nextPage"></div>
</div>
</template>
<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    img: {
        type: Array,
        default: () => []
    }
});

// 轮播相关变量
const bofan = ref(-1);
const currentPage = ref(0);
const itemsPerPage = 5; // 每页显示的专辑数量
const slideDistance = 520; // 每次滑动的距离

// 计算当前应该显示的项目
const displayItems = computed(() => {
    // 创建一个循环数组，使轮播可以无限循环
    const totalItems = props.img.length;
    if (totalItems === 0) return [];
    
    // 复制数组以实现循环效果
    const duplicatedItems = [...props.img, ...props.img];
    return duplicatedItems;
});

// 上一页
const prevPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--;
    } else {
        // 如果已经是第一页，跳转到最后一组
        const totalPages = Math.ceil(props.img.length / itemsPerPage);
        currentPage.value = totalPages - 1;
    }
};

// 下一页
const nextPage = () => {
    const totalPages = Math.ceil(props.img.length / itemsPerPage);
    if (currentPage.value < totalPages - 1) {
        currentPage.value++;
    } else {
        // 如果已经是最后一页，跳转到第一组
        currentPage.value = 0;
    }
};
</script>
<style scoped lang="less">
div{
    width: 689px;
    height: 180px;
    background-color: #f5f5f5;
    margin-top: 20px;
    margin-bottom: 37px;
    position: relative;
    .pre{
        width: 10px;
        height: 20px;
        position: absolute;
        top: calc(50% - 20px);
        left: 10px;
        margin: 0;
        background: url(@/assets/index.png) no-repeat -265px -74px;
        &:hover{
            background: url(@/assets/index.png) no-repeat -285px -74px; 
        }
    }
    .next{
        width: 10px;
        height: 20px;
        position: absolute;
        top: calc(50% - 20px);
        right: 15px;
        margin: 0;
        background-color: aqua;
        background: url(@/assets/index.png) no-repeat -303px -74px;
        &:hover{
            background: url(@/assets/index.png) no-repeat -323px -74px; 
        }
    }
}
.main{
        width: calc(100% - 40px);
        height: 150px;
        margin:0 0 0 25px;

        position: absolute;
        top: 28px;
        overflow: hidden;
       
        .minbox{
            width: 200%;
            height: 100%;
            margin: 0;
            padding: 0;
            position: absolute;
            
        }
    }
    .li{
            margin: 0;
            width: 118px;
            height: 100%;
            float: left;
            margin-right: 12px;
            position: relative;
            transition: opacity  1s;
           .bofan{
            position: absolute;
            top: 72px;
            left: 72px;
            margin: 0;
            z-index: 999;
            width: 24px;
            height: 24px;
            background: url(@/assets/iconall.png) no-repeat 0 -83px;
            display: none;
           }
           .list{
            margin: 0; 
            margin-bottom: 7px; 
            width: 118px;
            height: 100px;
            background: url(@/assets/coverall.png) no-repeat 0px -570px;
            img{
                width:100px;
                height: 100px;
            }
           }
           span{
            display:block;
            width: 88px;
            height: 18px;
            font-size: 12px;
            overflow: hidden; /* 隐藏超出部分 */
            text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
            white-space: nowrap;
           }
           p{
            font-size: 12px;
            color: #666;
            display:block;
            width: 88px;
            height: 18px;
            overflow: hidden; /* 隐藏超出部分 */
            text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
            white-space: nowrap;
           }
        }
        .show{
            display: block !important;
        }
        .minbox {
            transition: transform 0.5s ease;
            position: absolute;
            display: flex;
            flex-wrap: nowrap;
        }
</style>
