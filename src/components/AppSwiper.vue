<template>
  <main>
    <div class="bander" @:mouseover="removeintsr" @:mouseleave="removeindex">
        <img class="bg" :src="slides[currentIndex].image">
    <div class="my-swiper">
      <img :src="item.image" 
      :class="index==currentIndex?'intev':''" 
      v-for="(item,index) in slides" alt="Slide" 
      class="slide-image"  :key="index" />
      <div class="swiper-button-prev" @:click="next"></div>
    <div class="swiper-button-next" @:click="next"></div>
    </div>
    
  <div class="download"><img src="@/assets/img/download.png"></div>
  </div>
  </main>
  
</template>

<script setup>
import img1 from '@/assets/img/1.jpg';
import img2 from '@/assets/img/2.jpg';
import img3 from '@/assets/img/3.jpg';
import img4 from '@/assets/img/4.jpg';
import {ref} from 'vue';
const currentIndex=ref(0);
let timer;
const slides = [
  { id: 1, image: img1},
  { id: 2, image: img2 },
  { id: 3, image: img3},
  { id: 4, image:img4 }
];
const next=()=>{
  if (currentIndex.value >=slides.length-1) {
        currentIndex.value = 0
    } else {
        currentIndex.value++;
    }
}
const removeindex=()=>{
  timer= setInterval(() => {
       next();
    }, 2000)
}
const removeintsr=()=>{
  clearInterval(timer)
}
removeindex()
</script>

<style scoped lang="less">
main{
  width: 100%;
  height: 284px;
  overflow: hidden;
}
.bander{
  width: 100%;
  height: 284px;
  position: relative;
  .bg{
    width: 100%;
  height: 284px;
  position: absolute;
  transition: opacity  .5s;
  left: 0;
  top: 0;
  filter: blur(80px);
  }
}
.my-swiper {
  height: 284px;
  width: 730px;
  position: absolute;
  top: 0;
  left: 0;
  left:calc(50% - 492px);
}
.download{
  width: 254px;
  height: 284px;
  position: absolute;
  top: 0;
  left: calc(50% + 238px);
}
.slide-image {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity  1.5s;
  object-fit: cover;
  top: 0;
  left: 0;
}
.intev{
  opacity: 1;
}
.swiper-button-prev{
  position: absolute;
  background: url(@/assets/banner.png)no-repeat 0 -358px;
  width: 40px;
  height: 70px;
  top:calc(50% - 35px);
  left: -60px;
  &:hover{
    background: url(@/assets/banner.png)no-repeat 0 -428px;
  width: 40px;
  height: 70px;
  }
}
.swiper-button-next{
  position: absolute;
  background: url(@/assets/banner.png)no-repeat 0 -505px;
  width: 40px;
  height: 70px;
  top:calc(50% - 35px);
  right: -314px;
  &:hover{
    background: url(@/assets/banner.png)no-repeat 0 -575px;
  width: 40px;
  height: 70px;
  }
}
</style>