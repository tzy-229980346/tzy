<template>
    <div class="top">
        <div class="li" v-for=" in 18">
            <div class="icon">
                <div class="en"></div>
                <p>情感</p>
            </div>
        </div>
        <div class="button-next"></div>
    <div class="button-prev"></div>
    </div>
    <div class="fengye">
        <div class="yuan">
            <div class="hong"></div>
            <div class="bai"></div>
        </div>
    </div>
    
</template>

<script setup>
</script>

<style scoped lang="less">
.top {
    width: 100%;
    height: 194px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    .li {
        width: 72px;
        height: 70px;
        margin: 0 0 25px 33px;

        .icon {
            width: 70px;
            height: 70px;
        }
    }
}
.fengye{
    margin-top: -25px;
    width: 980px;
    height: 20px;
    .yuan{
       width: 70px;
       height: 20px;
       margin: 0 auto;
       display: flex;
       justify-content: space-evenly;
       align-items:center;
       .hong{
        width: 7px;
        height: 7px;
        background-color: #C20C0C;
        border-radius: 50%;
       }
       .bai{
        width: 7px;
        height: 7px;
        background-color: #aaa;
        border-radius: 50%;
       }
    }
}
.en{
    width: 48px;
    height: 48px;
    background: url(@/assets/109951165406422565.jpg);
}
p{
    color: #aaa;
    font-size: 14px;
    margin-left: 9px;
}
.button-prev{
  background: url(@/assets/index.png)no-repeat -282px -68px;
  width: 20px;
  height: 30px;
  position: absolute;
  top: 209px;
  left: 290px;
}
.button-next{
  background: url(@/assets/index.png)no-repeat -318px -63px;
  width: 20px;
  height: 30px;
  position: absolute;
  top: 200px;
  left: 1220px;
}
</style>