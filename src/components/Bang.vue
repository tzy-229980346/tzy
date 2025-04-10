<template>
    <div class="mai" :class="i==1?'color':''" @click="i=1">
        <img src="@/assets/img/mask.jpg">
        <div class="text">
            <div class="p1">飙升榜</div>
            <div class="p2">每天更新</div>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue';
const i=ref(0);
</script>

<style scoped lang="less">
.mai{
    width: 220px;
    height: 42px;
    padding: 10px 0 10px 20px;
    display: flex;
    img{
        width: 40px;
        height: 40px;
    }
    .text{
        width: 170px;
        height: 40px;
        padding-left: 10px;
        .p1{
            width: 100%;
            height: 16px;
            margin: 0px 0 8px 0;
            font-size: 12px;
        }
        .p2{
            width: 100%;
            display: block;
            height: 16px;
            font-size: 12px;
        }
        
    }
}
.color{
    width: 220px;
    height: 42px;
    background-color: #e6e6e6;
}

</style>