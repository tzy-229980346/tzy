<template>
<AppSwiper/>
<div class="main">
    <div class="outo">
        <div class="left">
            <AppTitle name="热门推荐">
                
            </AppTitle>
            <Hot 
            @pla="music"
            ></Hot>
            <AppTitle name="新碟上架"></AppTitle>
            <AlbumItem :img="imglist"></AlbumItem>
            <AppTitle name="榜单"></AppTitle>
            <div class="top">
                <TopList v-for="(item,index) in arr" 
                :name="item"
                :key="index"
                :songs="songs.slice(index*10,(index+1)*10)"
                ></TopList>
            </div>
        </div>
        <div class="reight">
            <div class="dl">
                <div class="vip"><img src="@/assets/img/dis_vip_card.png"></div>
                <div class="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
                <div class="dllogo">用户登录</div>
            </div>
            <div class="singer">
                <div class="more">
                    <div class="more-l">入驻歌手</div>
                    <div class="more-r">查看全部></div>
                </div>
                <div class="singer-list">
                    <ResidentSinger v-for="(item,index) in 5" :key="index"></ResidentSinger>
                </div>
                <div class="add-singer">申请成为网易音乐人</div>
            </div>
            <div class="hot-singer">
                <div class="title">热门主播</div>
                <div class="hot-list">
                    <PopularStreamers v-for="(item,index) in 5" :key="index"></PopularStreamers>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script setup>
import AppSwiper from '@/components/AppSwiper.vue';
import AppTitle from '@/components/AppTitle.vue';
import Hot from '@/components/Hot.vue';
import TopList from '@/components/TopList.vue';
import AlbumItem from '@/components/AlbumItem.vue';
import ResidentSinger from '@/components/ResidentSinger.vue';
import PopularStreamers from '@/components/PopularStreamers.vue';
import request from '@/utils/request.js';
import {ref} from 'vue';
const imglist=ref([])
const songs=ref([])
let arr=['飙升榜','新歌榜','创新榜'];
const getData =async ()=>{
   let res = await request.get('discover/home');
   imglist.value=res.data.data.disc
   res.data.data.rank.map((item)=>{
    songs.value.push(item.songName)
   })
}
getData();
const music=(data)=>{
    console.log(data);
}




</script>

<style scoped lang="less">
.main{
    width: 100%;
    height: 1400px;
    background-color: #f3f3f3;
    .outo{
        width: 984px;
        height: 100%;
        margin: 0 auto;
        background-color: #fff;
        display: flex;
        .left{
            width: 690px;
            height: calc(100% - 60px);
            padding: 20px;
            padding-bottom: 40px;
        }
    }
}
.reight{
    flex: 1;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    .dl{
        width: 100%;
        height: 218px;
        background-color: #efefef;
    }
    .singer{
        margin-top: 15px;
        width: 100%;
        height: 455px;
        position: relative;
        .more{
            width: 210px;
            height: 24px;
            margin: 0 auto;
            border-bottom: 1px solid #c7c6c6;
        }
        .singer-list{
            width: 230px;
            height: 380px;
            margin: 6px 0 14px 20px;
        }
        .add-singer{
            position: absolute;
            width: 210px;
            height: 31px;
            margin-left: 20px;
            top: 420px;
            border-radius: 4px;
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 31px;
            font-size: 12px;
            font-weight:600;
        }
    }
    .hot-singer{
        width: 250px;
        height: 294px;
        margin-top: 30px;
        .title{
            width: 210px;
            height: 23px;
            border-bottom: 1px solid #ccc;
            margin: 0 auto;
            font-size: 12px;
            font-weight: 600;
        }
        .hot-list{
            width: 230px;
            height: 250px;
            margin-top: 20px;
            margin-left: 20px;
        }
    }
}
.more{
    .more-l{
        font-size: 12px;
        font-weight: 600;
        float: left;
    }
    .more-r{
        color: #666;
        font-size: 12px;
        float: right;
    }
}
.dl{
    .vip{
        width: 100%;
        height: 90px;
        img{
            width: 250px;
            height: 90px;
        }
    }
    .text{
        width: 205px;
        height: 44px;
        margin: 0 22px;
        padding: 16px 0;
        color: #666;
        font-size: 12px;
    }
    .dllogo{
        width: 100px;
        height: 31px;
        margin: 0 auto;
        text-align: center;
        line-height: 31px;
        color: #fff;
        font-size: 13px;
        background: url(@/assets/index.png)no-repeat 0px -194px;
        &:hover{
            background: url(@/assets/index.png)no-repeat -110px -194px;   
        }
    }
}
.left{
    .top{
        width: 100%;
        height: 472px;
        margin-top: 20px;
        display: flex;
    }
}
</style>