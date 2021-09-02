<template>
    <div class="music-container">
        <div class="music-title-container">
            <h2 class="music-title">最新单曲</h2>
        </div>

        <div class="music-card-container">
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
            <MusicCard></MusicCard>
        </div>
    </div>
</template>

<script>
import MusicCard from "../components/music-card.vue"

export default {
    name: 'Music',
    components: { MusicCard }
}
</script>

<style scoped>
.music-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
}

.music-title-container {
    border-bottom: #67C23A solid 3px;
    margin-top: 100px;
    width: 1200px;
}
.music-title {
    color: #303133;
    font-size: 30px;
    letter-spacing: 20px;
    text-align: left;
}

.music-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
}

.music-card {
    margin: 49px;
}
</style>