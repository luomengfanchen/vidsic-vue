<template>
    <vidsic-header />

    <div class="index-container">
        <div class="index-top"></div>

        <div class="title-container">
            <h2 class="index-title">最新视频</h2>
        </div>
        <div class="card-container">
            <VideoCard :videoInfo="videoList"></VideoCard>
        </div>

        <div class="title-container">
            <h2 class="index-title">最新单曲</h2>
        </div>

        <div class="card-container">
            <MusicCard :musicInfo="musicList"></MusicCard>
        </div>

        <div class="title-container">
            <h2 class="index-title">最新文章</h2>
        </div>
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
import MusicCard from '../components/music-card.vue'
import ArticleCard from '../components/article-card.vue'
import {normalAxios} from '../plugins/axios.js'

export default {
    name: 'Index',
    data() {
        return {
            videoList: [],
            musicList: []
        }
    },
    components: {
        VidsicHeader,
        VidsicFooter,
        VideoCard,
        MusicCard,
        ArticleCard
    },
    mounted() {
        // 获取最新视频信息
        normalAxios
            .get('/video?num=3')
            .then((response) => {
                this.videoList = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
        // 获取最新音乐信息
        normalAxios
            .get('/music?num=3')
            .then((response) => {
                this.musicList = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
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
    height: 600px;
    margin-top: 100px;
    width: 1200px;
}

.title-container {
    border-bottom: #409eff solid 3px;
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
