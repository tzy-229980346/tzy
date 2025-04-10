<template>
    <div class="line">
        <div class="title">{{ props.name }}</div>
        <div class="morelogo"></div>
        <div class="more">更多</div>
    
    </div>
</template>

<script setup>
const props = defineProps(
    {
        name: {
            type: String,
            defaule: '默认值'
        }
    }
)
</script>

<style scoped lang="less">
.line {
    width: 100%;
    height: 42px;
    border-bottom: 2px solid #C20C0C;
    .title {
        color: #333;
        line-height: 42px;
        font-size: 20px;
        float: left;
    }
    .more{
        width: 30px;
        height: 16px;
        margin-top: 15px;
        font-size: 12px;
        font-weight: 100px;
        float: right;
    }
    .morelogo{
        width: 12px;
        height: 12px;
        margin-top: 19px;
        background: url(@/assets/index.png) no-repeat -0px -240px;
        float: right;
    }
}
</style>