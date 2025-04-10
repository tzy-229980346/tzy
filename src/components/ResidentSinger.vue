<template>
    <div class="li">
        <div class="header">
            <img src="@/assets/img/singer1.jpg">
        </div>
        <div class="info">
            <div class="singer">
                张惠妹aMEI
            </div>
            <div class="list">
                台湾歌手张惠妹
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.li{
    width: 210px;
    height: 62px;
    margin-top: 14px;
    display: flex;
    .hrader{
        width: 62px;
        height: 62px;
    }
    .info{
        width: 133px;
        height: 60px;
        padding-left:14px;
        border: 1px solid #e9e9e9;
        border-left:none;
        background-color: #f4f4f4;
        .singer{
            margin-top: 8px;
            font-size: 14px;
            font-weight: 600;
        }
        .list{
            margin-top: 8px;
            color: #666;
            font-size: 12px;
        }
    }
}
</style>