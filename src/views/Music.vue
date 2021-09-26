<template>
    <div class="vidsic-page-container">
        <div class="music-title-container">
            <h2 class="music-title">最新单曲</h2>
        </div>

        <div class="music-card-container">
            <MusicCard :musicInfo="musicList"></MusicCard>
        </div>
    </div>
</template>

<script>
import MusicCard from "../components/music-card.vue"
import {normalAxios} from '../plugins/axios.js'

export default {
    name: 'Music',
    data() {
        return {
            musicList: []
        }
    },
    components: { MusicCard },
    mounted() {
        // 获取最新音乐信息
        normalAxios
            .get('/music?num=12')
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