<template>
<div>
    <div class="yuan"></div>
    
    <div class="more">更多</div>
    <div class="title">{{ props.name }}</div>
    <div class="morelogo"></div>
</div>
</template>
<script setup>
const props =defineProps(
    {
        name:{
            type:String,
            defaule:'默认值'
        }
    }
)
</script>
<style scoped lang="less">
div{
    width: 100%;
    height: 35px;
    border-bottom: 2px solid #c20c0c;
    position: relative;
    .yuan{
        position: absolute;
        border: none;
        width: 35px;
        height: 35px;
        left: 0;
        background: url(@/assets/index.png) no-repeat -220px -155px;
    }
    .more{
        width: 40px;
        height: 16px;
        margin-top: 9px;
        position: absolute;
        font-size: 12px;
        font-weight: 100px;
        right: 15px;
        border: none;
    }
    .morelogo{
        width: 12px;
        height: 12px;
        position: absolute;
        margin-top: 13px;
        right: 15px;
        background: url(@/assets/index.png) no-repeat -0px -240px;
    }
    .title{
        width: 200px;
        font-size: 20px;
        color: #333;
        line-height: 35px;
        position: absolute;
        left: 50px;
    }
}
</style>
