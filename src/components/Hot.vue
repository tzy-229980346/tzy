<template>
    <div class="hot">
                <HotItem 
                v-for="(item,index) in imglist" :key="index"
                :data="item"
                @playmusic="play"
                ></HotItem>
            </div>
</template>

<script setup>
import HotItem from './HotItem.vue';
import request from '@/utils/request.js';
import {ref} from 'vue';
const imglist=ref([])
const getData =async ()=>{
   let res = await request.get('/discover/home');
   imglist.value=res.data.data.hot
}
getData()

const emit=defineEmits(['pla']);
const play=(data)=>{
    emit('pla',data)
}

</script>

<style scoped lang="less">
  .hot{
        width: 750px;
        height: 468px;
        margin-top: 20px;   
        display: flex;
        flex-wrap: wrap;
        margin-left: -40px;
    }
</style>