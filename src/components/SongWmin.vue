<template>
    <div class="ma" :class="props.data%2==0?'color':''">
        <div class="hd">
            <div class="num">{{props.data + 4}}</div>
            <div class="logo"></div>
        </div>
        <div class="name">
            <div class="lo"></div>
            <span>于是</span>
        </div>
        <div class="time">04:02</div>
        <div class="singer">李雪</div>
    </div>
</template>

<script setup>
const props=defineProps({
    data:{
        type:Number,
        default:0
    }
})
</script>

<style scoped lang="less">
.ma{
    width: 669px;
    height: 30px;
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
    .name{
        width: 330px;
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