<template>
    <div class="li">
        <div class="header">
            <img src="@/assets/img/singer.jpg">
        </div>
        <div class="info">
            <div class="singer">
                陈立
            </div>
            <div class="list">
                心理学家、美食家成立教授
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.li{
    width: 210px;
    height: 50px;
    display: flex;
    .hrader{
        width: 40px;
        height: 40px;
    }
    .info{
        width: 133px;
        height: 60px;
        padding-left:10px;
        
        .singer{
            font-size: 12px;
        }
        .list{
            color: #666;
            font-size: 11px;
        }
    }
}
</style>