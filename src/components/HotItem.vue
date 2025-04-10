<template>
<div class="li" >
    <img :src=props.data.hotImg>
    <p>{{ props.data.hotContext }}</p>
    <div class="icon">
        <div class="erji"></div>
        <span>{{ props.data.hotNum}}</span>
        <div class="bofan" @click="play"></div>
    </div>
</div>
</template>
<script setup>
import li1 from '@/assets/img/li1.jpg';
import {usecounterstore} from '@/stores/music.js';
const  cons=usecounterstore()
const emit=defineEmits(['playmusic']);
const props=defineProps({
    data:{
        type:Object,
        default:{
            url:li1,
            text:'这是默认图片',
            num:0
        }
    }
})
const play=()=>{
    emit('playmusic',props.data.hotContext);
    cons.change(props.data.hotContext)
}
</script>
<style scoped lang="less">
.li{
    width: 140px;
    height: 204px;
    padding-left: 42px;
    padding-bottom: 30px;
    position: relative;
    img{
        width: 140px;
        height: 140px;
    }
    p{
        width: 140px;
        font-size: 14px;
    }
    
}
.icon{
        width: 140px;
        height: 27px;
        top: 113px;
        position: absolute;
        background:url(@/assets/coverall.png)no-repeat 0px -536px;
        .erji{
        position: absolute;
            top: 7px;
            width:27px;
            height: 27px;
            left: 5px;
            background: url(@/assets/iconall.png) no-repeat 0px -20px;
        }
        .bofan{
            right: 0px;
            position: absolute;
            background: url(@/assets/iconall.png) no-repeat 0px 7px;
            width:27px;
            height: 27px;
        }
        span{
            position: absolute;
            color: #ccc;
            font-size: 12px;
            left: 30px;
            top: 9.5px;
        }
    }
</style>