<template>
    <main>
        <div class="mas">
            <img src="@/assets/img/mask.jpg">
        </div>
    </main>
    <div class="text">
        <div class="p1">飙升榜</div>
        <div class="p2">
            <div class="icn"></div>
            <div class="sep">最近更新：04月05日</div>
            <div class="sp2">（每天更新）</div>
        </div>
        <div class="btns">
            <div class="btn1"><span class="bofan"></span>播放</div>
            <div class="btn2">+</div>
            <div class="btn3"><span class="shoucan"></span>(327)</div>
            <div class="btn4"><span class="zf"></span>(32894)</div>
            <div class="btn5"><span class="xz"></span>下载</div>
            <div class="btn6"><span class="pl"></span>(48757)</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="less">
main{
    width: 152px;
    height: 152px;
    border: 1px solid #ccc;
    float: left;
    img{
        width: 146px;
        height: 146px;
    }

}
.mas{
    width: 150px;
    height: 150px;
    margin: 3px;
    background: url(@/assets/coverall.png) no-repeat 5px 5px;
}
.text{
    width: 473px;
    height: 114px;
    float: left;
    margin-top: 20px;
    margin-left: 30px;
    .p1{
        width: 100%;
        height: 24px;
        font-size: 18px;
        line-height: 24px;
        color: #333;
    }
    .p2{
        width: 100%;
        height: 35px;
        margin-bottom: 20px;
        display: flex;
        .icn{
            width: 13px;
            height: 13px;
            margin: 9px 0 0 3px;
            background: url(@/assets/icon.png) no-repeat -70px -140px;
        }
        .sep{
            margin-left: 5px;
            font-size: 12px;
            color: #666;
            line-height: 35px;
        }
        .sp2{
            font-size: 12px;
            color: #999;
            line-height: 35px;
        }
    }
    .btns{
        width: 100%;
        height: 31px;
        margin-bottom: 35px;
        display: flex;
    }
}
.btn1{
    width: 61px;
    height: 31px;
    border-radius: 3px;
    background-color: #2c7dca;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 31px;
    font-size: 12px;
    font-weight:600;
    color: #fff;
}
.btn2{
    width: 31px;
    height: 31px;
    border-radius: 3px;
    background-color: #2c7dca;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 31px;
    font-size: 12px;
    font-weight:600;
    color: #fff;
}
.bofan{
    display: flex;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 7.5px;
    margin-right: -8px;
    margin-left: 8px;
    background: url(@/assets/iconall.png) no-repeat ;
}
.btn3{
    width: 84px;
    height: 31px;
    border-radius: 3px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 31px;
    font-size: 11px;
    font-weight:500;
    color: #333;
}
.shoucan{
    display: flex;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 7.5px;
    margin-right: -8px;
    margin-left: 8px;
    background: url(@/assets/icon.png) no-repeat -41px -86px;
}
.btn4{
    width: 72px;
    height: 31px;
    border-radius: 3px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 31px;
    font-size: 11px;
    font-weight:500;
    color: #333;
}
.zf{
    display: flex;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 7.5px;
    margin-right: -8px;
    margin-left: 8px;
    background: url(@/assets/icon.png) no-repeat -46px -135px;
}
.btn5{
    width: 54px;
    height: 31px;
    border-radius: 3px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 31px;
    font-size: 12px;
    font-weight:500;
    color: #333;
}
.xz{
    display: flex;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 7.5px;
    margin-right: -8px;
    margin-left: 8px;
    background: url(@/assets/icon.png) no-repeat 0px -699px;
}
.btn6{
    width: 78px;
    height: 31px;
    border-radius: 3px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 31px;
    font-size: 12px;
    font-weight:500;
    color: #333;
}
.pl{
    display: flex;
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 7.5px;
    margin-right: -8px;
    margin-left: 8px;
    background: url(@/assets/icon.png) no-repeat -67px -679px;
}
</style>