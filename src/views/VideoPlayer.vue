<template>
    <div class="vidsic-page-container">
        <div class="player-container">
            <h2 class="video-title">{{ videoInfo.name }}</h2>
            <div class="video-descript">
                <span class="video-descript-text">发布日期: {{ videoInfo.date }}</span>
                <span class="video-descript-text">播放量: {{ videoInfo.views }}</span>
            </div>
            <video controls :src="$store.getters.getbaseURL + videoInfo.path" class="video-player"></video>

            <div class="video-operator">
                
            </div>
        </div>
        
    </div>
</template>

<script>
import {normalAxios} from '../plugins/axios.js'

export default {
    name: 'VideoPlayer',
    data() {
        return {
            videoInfo: ''
        }
    },
    mounted() {
        normalAxios
            .get('/video/' + this.$route.params.id)
            .then((response) => {
                this.videoInfo = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
.player-container {
    height: 720px;
    margin-top: 100px;
    width: 1280px;
}

.video-title {
    font-size: 20px;
    letter-spacing: 10px;
    margin-left: 10px;
}

.video-descript {
    margin-left: 10px;
    margin-top: 20px;
}
.video-descript-text {
    color: #606266;
    margin-right: 30px;
}

.video-player {
    height: 720px;
    margin-top: 30px;
    width: 1280px;
}
</style>