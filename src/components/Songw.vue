<template>
    <div class="ma" :class="props.data%2==1?'color':''">
        <div class="hd">
            <div class="num">{{ props.data + 1 }}</div>
            <div class="logo"></div>
        </div>
        <img :src="list.songImg">
        <div class="name">
            <div class="lo"></div>
            <span>{{ list.songName }}</span>
        </div>
        <div class="time">{{list.songTime}}</div>
        <div class="singer">{{ list.songAuthor }}</div>
    </div>
</template>

<script setup>
const props=defineProps({
    data:{
        type:Number,
        default:0
    },
    list:{
        type:Object,
        default:{}
    }
})
</script>

<style scoped lang="less">
.ma{
    width: 669px;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .hd{
        width: 57px;
        height: 18px;
        .num{
            width: 25px;
            height: 18px;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            float: left;
            color: #d3d3d3;
        }
        .logo{
            width: 32px;
            height: 18px;
            float: right;
            background: url(@/assets/icon.png) no-repeat -64px -283px;
        }
    }
    img{
        width: 50px;
        height: 50px;
        padding-right: 14px;
    }
    .name{
        width: 265px;
        height: 20px;
        margin-right: 18px;
        display: flex;
        .lo{
            width: 20px;
            height: 20px;
            background: url(@/assets/iconall.png) no-repeat;
        }
        span{
            font-size: 12px;
            color: #333;
        }
    }
    .time{
        width: 30px;
        height: 14px;
        font-size: 12px;
        color: #666;
        margin-left: 8px;
    }
    .singer{
        margin-left: 65px;
        font-size: 12px;
        color: #333;
    }
}
.color{
    background-color: #f7f7f7 !important;
}
</style>