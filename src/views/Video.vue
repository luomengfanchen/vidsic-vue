<template>
    <div class="video-container">
        <div class="video-title-container">
            <h2 class="video-title">最新视频</h2>
        </div>
        <div class="video-card-container">
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
            <VideoCard></VideoCard>
        </div>
    </div>
</template>

<script>
import VideoCard from '../components/video-card.vue'

export default {
    name: 'Video',
    components: { VideoCard }
}
</script>

<style scoped>
.video-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
}

.video-title-container {
    border-bottom: #409EFF solid 3px;
    margin-top: 100px;
    width: 1200px;
}
.video-title {
    color: #303133;
    font-size: 30px;
    letter-spacing: 20px;
    text-align: left;
}

.video-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
}

.video-card {
    margin: 49px;
}
</style>