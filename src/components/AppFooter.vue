<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4838987_xt3j7elo7yk.css">
    <main>
        <div class="logobox">
            <div class="logo" v-for="(item, index) in arr" :key="index">
                <a href="#" :class="'img' + index"></a>
                <span>{{ item }}</span>
            </div>
        </div>
        <div class="booder">
            <div class="alin">
                <span v-for="(item,index) in alin" :key="index">
                    <a href="x" :class="item.classname">{{ item.teax }}</a>
                </span>
            </div>
            <div class="alin">
                <div class="jubao1">廉政举报</div>
                <div class="jubao1">不良信息举报邮箱: 51jubao@service.netease.com</div>
                <div class="jubao3">客服热线：95163298</div>
            </div>
            <div class="alin">
                <div class="jubao3">互联网宗教信息服务许可证：浙（2022）0000120</div>
                <div class="jubao3">增值电信业务经营许可证：浙B2-20150198</div>
                <div class="jubao3">粤B2-20090191-18  工业和信息化部备案管理系统网站</div>
            </div>
            <div class="alin">
                <div class="jubao1">网易公司版权所有©1997-2025</div>
                <div class="jubao3">杭州乐读科技有限公司运营：</div>
                <div class="jubao1">浙网文[2024] 0900-042号</div>
                <div class="police-logo"><img src="@/assets/police.png" class="police"></div>
                <div class="jubao3">浙公网安备 33010802013307号</div>
                <div class="jubao3">算法服务公示信息</div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { reactive } from 'vue';
const arr = reactive(['音乐开放平台', '云村交易所', 'X studioAi歌手', '用户认证', 'Ai免费写歌', '云推歌', '赞赏']);
let alin = [{
    teax: '服务条款',
    classname: 'teax'
},
{
    teax:'|',
    classname:'fengge'
},
{
    teax:'隐私政策',
    classname:'teax'
},
{
    teax:'|',
    classname:'fengge'
},
{
    teax:'儿童隐私政策',
    classname:'teax'
},
{
    teax:'|',
    classname:'fengge'
},
{
    teax:'版权投诉',
    classname:'teax'
},
{
    teax:'|',
    classname:'fengge'
},
{
    teax:'投资者关系',
    classname:'teax'
},
{
    teax:'|',
    classname:'fengge'
},
{
    teax:'广告合作',
    classname:'teax'
},
{
    teax:'|',
    classname:'fengge'
},
{
    teax:'联系我们',
    classname:'teax'
}
]
</script>
<style scoped lang="less">
@import url('@/style.less');

main {
    width: 100%;
    height: 325px;
    border-top: 1px solid #d3d3d3;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logobox {
    width: 980px;
    height: 70px;
    margin-top: 33px;
    display: flex;
    justify-content: space-evenly;
}

.logo {
    width: 45px;
    height: 70px;

    .img0 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/foot_enter_new2.png) no-repeat -170px -5px;
        background-size: 220px 220px;
        display: flex;

        &:hover {
            background: url(@/assets/img/foot_enter_new2.png) no-repeat -5px -115px;
            background-size: 220px 220px;
        }
    }

    .img1 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/foot_enter_new2.png) no-repeat -5px -170px;
        background-size: 220px 220px;
        display: flex;

        &:hover {
            background: url(@/assets/img/foot_enter_new2.png) no-repeat -60px -170px;
            background-size: 220px 220px;
        }
    }

    .img3 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/foot_enter_new2.png) no-repeat -60px -60px;
        background-size: 220px 220px;
        display: flex;

        &:hover {
            background: url(@/assets/img/foot_enter_new2.png) no-repeat -115px -5px;
            background-size: 220px 220px;
        }
    }

    .img2 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/xStudio.png);
        background-size: 45px 45px;
        display: flex;

        &:hover {
            background: url(@/assets/img/xStudio1.png);
            background-size: 45px 45px;
            background-color: #ED4954;
            border-radius: 50%;
        }
    }

    .img4 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/aiLogo.png);
        background-size: 45px 45px;
        display: flex;

        &:hover {
            background: url(@/assets/img/aiLogo1.png);
            background-size: 45px 45px;
            background-color: #ED4954;
            border-radius: 50%;
        }
    }

    .img5 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/cloudSong.png);
        background-size: 45px 45px;
        display: flex;

        &:hover {
            background: url(@/assets/img/cloudSong1.png);
            background-size: 45px 45px;
            background-color: #ED4954;
            border-radius: 50%;
        }
    }

    .img6 {
        width: 45px;
        height: 45px;
        background: url(@/assets/img/foot_enter_new2.png) no-repeat -170px -115px;
        background-size: 220px 220px;
        display: flex;

        &:hover {
            background: url(@/assets/img/foot_enter_new2.png) no-repeat -60px -115px;
            background-size: 220px 220px;
        }
    }

    span {
        width: 100px;
        text-align: center;
        margin-left: -27.5px;
        margin-top: 10px;
        display: inline-block;
        font-size: 12px;
        color: rgba(0, 0, 0, .5);
    }
}

.booder {
    width: 980px;
    height: 100px;
    margin-top: 60px;
    .alin {
        width: 980px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .fengge{
            font-size: 12px;
            margin: 0 8px; 
            color: #d9d9d9; 
        }
        .teax {
            font-size: 12px;
            height: 13px;
            color: #666;
            text-decoration: none;
            cursor: pointer;

            &:hover {
                border-bottom: 1px solid #666;
            }
        }
        .jubao1{
            font-size: 12px;
            height: 13px;
            color: #666;
            line-height: 13px;
            cursor: pointer;
            margin-right: 14px;
        }
        .jubao3{
            font-size: 12px;
            height: 13px;
            color: #666;
            line-height: 13px;
            cursor: pointer;
        }
        .police-logo{
            width: 14px;
            height: 20px;
            margin-right: 2px;
            .police{
            width: 14px;
            height: 14px;
            }
        }
    }
}
</style>
