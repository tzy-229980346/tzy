<template>
    <div class="main">
        <div class="life">
            <div class="text">云音乐特色榜</div>
            <div class="bang1">
                <Bang v-for="(item,index) in 4" :key="index"></Bang>
            </div>
            <div class="text2">全球媒体榜</div>
            <div class="bang2">
                <Bang v-for="(item,index) in 50" :key="index"></Bang>
            </div>
        </div>
        <div class="rigth">
            <div class="bigbang">
                <BigBang/>
            </div>
            <div class="auot">
                <div class="title">歌曲列表</div>
                <div class="ww">
                    <div class="wb0"></div>
                    <div class="wb1">标题</div>
                    <div class="wb2">时长</div>
                    <div class="wb3">歌手</div>
                </div>
                <div class="t1">
                    <Songw
                    v-for="(item,index) in toplist" :key="index"
                    :data=index
                    :list=item
                    ></Songw>
                </div>
                <div class="title">评论</div>
                <CommentSection></CommentSection>
                <div class="t1"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Bang from '@/components/Bang.vue';
import BigBang from '@/components/BigBang.vue';
import Songw from '@/components/Songw.vue';
import request from '@/utils/request.js';
import CommentSection from '../../../components/CommentSection.vue';
import {ref} from 'vue';
const toplist=ref([])
const gettoplist=async()=>{
    let res=await request.get('discover/toplist');
    console.log(res.data.data);
    toplist.value=res.data.data.songList
}
gettoplist()
</script>

<style scoped lang="less">
.main{
    width:980px;
    margin:0 auto;
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
    display:flex;
    .life{
        width: 240px;
        margin-top: 40px;
        .text{
            width: 215px;
            height: 16px;
            padding: 0 10px 12px 15px;
            font-size: 15px;
            font-weight: 600;
        }
        .bang1{
            width: 100%;
            height: 248px;
        }
        .text2{
            margin-top: 20px;
            width: 215px;
            height: 16px;
            padding: 0 10px 12px 15px;
            font-size: 15px;
            font-weight: 600;
        }
        .bang2{
            width: 100%;
        }
    }
    .rigth{
        width: 740px;
        border-left:1px solid #ccc;
        .bigbang{
            width: 660px;
            height: 158px;
            padding: 40px;
        }
        .auot{
            width: 670px;
            padding-left: 40px;
            padding-right: 30px;
            .t1{
                width: 100%;
               
            }
            .title{
                width: 670px;
                height: 33px;
                font-size: 20px;
                border-bottom: 2px solid #C20C0C;
            }
        }
    }
}
.ww{
    width: 670px;
    height: 34px;
    display: flex;
    .wb0{
        flex: 1;
        height: 18px;
        padding: 7px 9px;
        border: 1px solid #c2c2c2;
    }
    .wb1{
        font-size: 12px;
        color: #666;
        width: 306px;
        height: 18px;
        padding: 7px 9px;
        border: 1px solid #c2c2c2;
    }
    .wb2{
        font-size: 12px;
        color: #666;
        width: 71px;
        height: 18px;
        padding: 7px 9px;
        border: 1px solid #c2c2c2;
    }
    .wb3{
        font-size: 12px;
        color: #666;
        height: 18px;
        padding: 7px 9px;
        border: 1px solid #c2c2c2;
        width: 153px;
    }
}
</style>