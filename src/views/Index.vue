<template>
    <vidsic-header />

    <div class="index-container">
        <div class="index-top"></div>

        <div class="title-container">
            <h2 class="index-title">最新视频</h2>
        </div>
        <div class="card-container">
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

        <div class="title-container">
            <h2 class="index-title">最新单曲</h2>
        </div>

        <div class="card-container">
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

        <div class="title-container">
            <h2 class="index-title">最新文章</h2>
        </div>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>

        <VidsicFooter />
    </div>
</template>

<script>
import VidsicHeader from '../components/vidsic-header.vue'
import VidsicFooter from '../components/vidsic-footer.vue'
import VideoCard from '../components/video-card.vue'
import MusicCard from "../components/music-card.vue"
import ArticleCard from '../components/article-card.vue'

export default {
    name: 'Index',
    components: { VidsicHeader, VidsicFooter, VideoCard, MusicCard,ArticleCard }
}
</script>

<style scoped>
.index-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
}
.index-top {
    background-color: #409eff;
    border-radius: 5px;
    height: 800px;
    margin-top: 100px;
    width: 1200px;
}

.title-container {
    border-bottom: #409EFF solid 3px;
    margin-top: 100px;
    width: 1200px;
}
.index-title {
    color: #303133;
    font-size: 30px;
    letter-spacing: 20px;
    text-align: left;
}

.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
}

.video-card {
    margin: 49px;
}

.music-card {
    margin: 49px;
}
</style>
