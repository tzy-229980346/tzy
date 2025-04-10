<template>
    <div class="list">
        <div class="top">
            <img src="@/assets/img/mask.jpg" alt="" class="mask">
            <div class="tit">
                <div class="title">{{props.name}}</div>
                <div class="bofan"></div>
                <div class="shouchan"></div>
            </div>
        </div>
        <div 
        class="li" 
        :class="index%2==0?'color':''" 
        v-for="(item, index) in props.songs" 
        :key="index"
        @mouseover="i=index"
        @mouseleave="i=-1"
        >
            <div class="num" :class="index<3?'color2':''">{{ index+1 }}</div>
            <div class="tt">{{ item }}</div>
            <div class="text" :class="i==index?'show':''" >
                <div class="bf2"></div>
                <div class="add"></div>
                <div class="sc2"></div>
            </div>
            
        </div>
        <div class="moer"><span>查看更多></span></div>
    </div>
</template>
<script setup>
const props =defineProps(
    {
        songs:{
            type:Array,
            defaule:()=>['你','于是','偏爱','夜车','同桌的你','春雪','错爱','唯一','有些','纸短情长']
        },
        name:{
            type:String,
            defaule:'飙升榜'
        }
    }
)
import {ref} from 'vue';
const i=ref(-1);
</script>
<style scoped lang="less">
.list {
    width: 230px;
    height: 100%;
    border: 1px solid #c2c2c2;

    .top {
        width: 210px;
        height: 100px;
        padding-left: 20px;
        padding-top: 20px;
        display: flex;
        background-color: #f4f4f4;
        .mask {
            width: 80px;
            height: 80px;

        }
    }

    .li {
        width: 100%;
        height: 32px;
        display: flex;
        .tt{
            width: 60px;
            height: 100%;
            line-height: 32px;
            font-size: 13px;
            overflow: hidden; /* 隐藏超出部分 */
            text-overflow: ellipsis; /* 使用省略号表示被截断的文本 */
            white-space: nowrap;
        }
        .num {
            width: 32px;
            height: 32px;
            text-align: center;
            line-height: 32px;
            margin-left: 20px;
        }
    }
    .moer{
        width: 100%;
        height: 32px;
        background-color: #e8e8e8;
        position: relative;
    }
}
span {
    position: absolute;
    bottom: 8px;
    right: 15px;
    font-size: 13px;
    &:hover{
        border-bottom: 1px solid #000;
    }
}

.text {
    width: 100px;
    height: 100%;
    margin-right: 10px;
    position: relative;
    display: none;
    .bf2{
        width: 20px;
        height: 20px;
        position: absolute;
        background: url(@/assets/index.png)no-repeat -267px -265px;
        top: calc(50% - 10px);
        left: 15px;
        &:hover{
            background: url(@/assets/index.png)no-repeat -267px -285px;
        }
    }
    .add{
        width: 20px;
        height: 20px;
        position: absolute;
        background:url(@/assets/icon.png)no-repeat 0px -696px;
        top: calc(50% - 10px);
        left: 40px;
        &:hover{
            background:url(@/assets/icon.png)no-repeat -22px -696px;
        }
    }
    .sc2{
        width: 20px;
        height: 20px;
        position: absolute;
        background: url(@/assets/index.png)no-repeat -296px -265px;
        top: calc(50% - 10px);
        left: 65px;
        &:hover{
            background: url(@/assets/index.png)no-repeat -296px -285px;
        }
    }
}

.tit {
    width: 116px;
    height: 50px;
    margin: 6px 0 0 10px;
    position: relative;

    .title {
        width: 100%;
        height: 18px;
        font-weight: 600;
    }

    .bofan {
        width: 23px;
        height: 23px;
        position: absolute;
        background: url('@/assets/index.png') no-repeat -267px -204px;
        bottom: 0;

        &:hover {
            background: url('@/assets/index.png') no-repeat -267px -234px;
        }
    }

    .shouchan {
        width: 23px;
        height: 23px;
        position: absolute;
        background: url('@/assets/index.png') no-repeat -299px -204px;
        bottom: 0;
        left: 28px;

        &:hover {
            background: url('@/assets/index.png') no-repeat -299px -234px;
        }
    }
}
.show{
    display: block  !important;
}
.color{
    background-color: #e8e8e8 !important;
}
.color2{
    color: #c10d0c !important;
}
</style>
