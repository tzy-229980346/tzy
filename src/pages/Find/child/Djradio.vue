<template>
    <div class="bj">
        <Rditype/>
        <div class="mane">
          <div class="life">
            <Line name="推荐节目"></Line>
            <ProgramList />
          </div>  
          <div class="rigth">
            <Line name="节目排行榜"></Line>
            <ProgramRanking/>
          </div>
        </div>
        <Line name="音乐播客·电台"></Line>
        <PodcastShowcase/>
        <Line name="生活·电台"></Line>
        <PodcastShowcase/>
        <Line name="情感·电台"></Line>
        <PodcastShowcase/>
        <Line name="创作翻唱·电台"></Line>
        <PodcastShowcase/>
        <Line name="知识·电台"></Line>
        <PodcastShowcase/>
    </div>
    
</template>

<script setup>
import Rditype from '@/components/Rditype.vue';
import Line from '@/components/Line.vue';
import ProgramList from '@/components/ProgramList.vue';
import ProgramRanking from '@/components/ProgramRanking.vue';
import PodcastShowcase from '@/components/PodcastShowcase.vue';
</script>

<style scoped lang="less">
.bj{
    width: 980px;
    min-height:600px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    margin: 0 auto;
    padding: 40px;
    .mane{
        width: 100%;
        height: 642px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        .life{
            width: 424px;
            height: 600px;
        }
        .rigth{
            width: 424px;
            height: 600px;
        }
    }
}
</style>