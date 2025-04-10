<template>
<AppHeader/>
<router-view></router-view>
<AppFooter/>
<div class="music" v-show="music.playmusic">
   正在播放：{{ music.playmusic }}
</div>
</template>
<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import {usecounterstore} from '@/stores/music.js';
const music=usecounterstore();
</script>
<style>
.music{
   width: 100%;
   height: 70px;
   position: fixed;
   bottom: 0;
   background-color: #333;
   text-align: center;
   line-height: 70px;
   font-size: 30px;
}
</style>
