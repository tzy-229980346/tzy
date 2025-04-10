<template>
    <div class="album-grid">
        <div class="li" v-for="(item, index) in albumList" :key="index" @mouseover="bofan = index" @mouseleave="bofan = -1">
            <div class="list">
                <img :src="item.discImg" alt="专辑封面">
                <div class="bofan" :class="bofan === index ? 'show' : ''"></div>
            </div>
            <span>{{ item.discContent }}</span>
            <p>{{ item.discAuthor }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    albumList: {
        type: Array,
        required: true,
        default: () => []
    }
});

const bofan = ref(-1);
</script>

<style scoped lang="less">
.album-grid {
    width: 940px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    margin-left: -33px;

    .li {
        width: 153px;
        padding: 0 0 30px 27px;
        position: relative;
        margin-bottom: 20px;
        .list {
            margin-bottom: 7px;
            width: 153px;
            height: 130px;
            background: url(@/assets/coverall_02.jpg) no-repeat;
            background-size: 153px 130px;
            position: relative;
            
            img {
                width: 130px;
                height: 130px;
                margin: 0;
                position: absolute;
                left: 43%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .bofan {
                position: absolute;
                right: 30px;
                bottom: 8px;
                width: 24px;
                height: 24px;
                background: url(@/assets/iconall.png) no-repeat 0 -83px;
                display: none;
                z-index: 2;
                cursor: pointer;
            }
        }

        span {
            display: block;
            width: 90%;
            font-size: 12px;
            margin-top: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        p {
            font-size: 12px;
            color: #666;
            margin-top: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .show {
        display: block !important;
    }
}
</style>