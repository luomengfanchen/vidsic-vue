<template>
    <div class="music-container">
        <div class="player-container">
            <div class="music-img">
                <img
                    :src="$store.getters.getbaseURL + musicInfo.cover"
                    class="music-img"
                />
            </div>

            <div class="music-descript">
                <h2 class="music-title">{{ musicInfo.name }}</h2>
                <div class="music-lyrics">
                    <p>暂无歌词</p>
                </div>
            </div>
        </div>

        <audio
            :src="$store.getters.getbaseURL + musicInfo.path"
            controls
            class="music-player"
        ></audio>
    </div>
</template>

<script>
import { normalAxios } from '../plugins/axios.js'

export default {
    name: 'MusicPlayer',
    data() {
        return {
            musicInfo: ''
        }
    },
    mounted() {
        normalAxios
            .get('/music/' + this.$route.params.id)
            .then((response) => {
                this.musicInfo = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
.music-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 75px;
}

.player-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 720px;
    margin-top: 100px;
    width: 1280px;
}

.music-title {
    font-size: 20px;
    letter-spacing: 10px;
    text-align: center;
}

.music-card-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
}

.music-img {
    background-color: #409eff;
    border-radius: 50%;
    height: 500px;
    width: 500px;
}

.music-lyrics {
    height: 400px;
    line-height: 400px;
    text-align: center;
    width: 400px;
}
.music-player {
    width: 1280px;
}
</style>
