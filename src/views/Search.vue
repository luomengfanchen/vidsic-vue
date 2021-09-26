<template>
    <div class="vidsic-page-container">
        <div class="title-container">
            <h2 class="search-title">
                搜索视频结果
            </h2>
        </div>
        <div class="card-container">
            <VideoCard :videoInfo="videoList"></VideoCard>
        </div>

        <div class="title-container">
            <h2 class="search-title">
                搜索音乐结果
            </h2>
        </div>
        <div class="card-container">
            <MusicCard :musicInfo="musicList"></MusicCard>
        </div>
    </div>
</template>

<script>
import VideoCard from '../components/video-card.vue'
import MusicCard from '../components/music-card.vue'
import { normalAxios } from '../plugins/axios.js'

export default {
    name: 'Search',
    data() {
        return {
            videoList: [],
            musicList: []
        }
    },
    components: {
        VideoCard,
        MusicCard
    },
    mounted() {
        // 搜索视频信息
        normalAxios
            .get('/search?type=video&q=' + this.$route.params.value)
            .then((response) => {
                this.videoList = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
        // 搜索音乐信息
        normalAxios
            .get('/search?type=music&q=' + this.$route.params.value)
            .then((response) => {
                this.musicList = response.data.data
            })
            .catch(() => {
                this.$message.error('数据获取失败')
            })
    }
}
</script>

<style scoped>
.title-container {
    border-bottom: #409eff solid 3px;
    margin-top: 100px;
    width: 1200px;
}
.search-title {
    color: #303133;
    font-size: 30px;
    letter-spacing: 10px;
    text-align: left;
}

.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
}
</style>
