<template>
    <div class="in">
        <div class="main">
            <div class="all">
                <span>全部</span>
                <div class="logo">选择分类V</div>
                <div class="hot">热门</div>
            </div>
            <div class="list">
                <HotItem v-for="(item,index) in imglist" :key="index"
                :data="item"
                ></HotItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import HotItem from '@/components/HotItem.vue';
import request from '@/utils/request.js';
import {ref} from 'vue';
const imglist=ref([])
const getData =async ()=>{
   let res = await request.get('discover/playlist');
   console.log(res.data.data)
   imglist.value=res.data.data.playList
}
getData()
</script>

<style scoped lang="less">
.in{
    width: 100%;
    background-color: #f5f5f5;
}
.main{
    width: 900px;
    height: 2000px;
    padding: 40px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    display: flex;
    flex-direction: column;
    position: relative;
    .all{
        width: 900px;
        height: 40px;
        border-bottom: 2px solid #C20C0C;
        span{
            font-size: 24px;
            float: left;
        }
        .logo{
            width: 91px;
            height: 31px;
            margin-left: 15px;
            border-radius: 4px;
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 31px;
            font-size: 12px;
            font-weight:400;
            color: rgb(87, 87, 240);
            float: left;
        }
        .logo:hover{
            background-color: #fff;
        }
        .hot{
            width: 46px;
            height: 29px;
            margin-left: 15px;
            border-radius: 4px;
            background-color: #C20C0C;
            text-align: center;
            line-height: 29px;
            font-size: 12px;
            font-weight:400;
            color: rgb(255,255,255);
            float: right;
        }
    }
    .list{
        position: absolute;
        top: 100px;
        left: -3px;
        width: 1000px;
        flex: 1;
        margin-top: 20px;   
        display: flex;
        flex-wrap: wrap;
    }
}
</style>