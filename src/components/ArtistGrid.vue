<template>
    <div>
        <h2 class="section-title">{{ title }}</h2>
        <div class="artist-grid">
            <div class="artist-item" v-for="(artist, index) in artists" :key="index">
                <div class="artist-img">
                    <img :src="artist.img" :alt="artist.name">
                </div>
                <p class="artist-name">{{ artist.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '歌手列表'
    },
    artists: {
        type: Array,
        required: true
    }
});
</script>

<style scoped lang="less">
.section-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 2px solid #c20c0c;
    padding-bottom: 10px;
}

.artist-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}

.artist-item {
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }

    .artist-img {
        width: 120px;
        height: 120px;
        margin-bottom: 8px;
        overflow: hidden;
        border-radius: 4px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        &:hover img {
            transform: scale(1.05);
        }
    }

    .artist-name {
        font-size: 12px;
        color: #000000;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>