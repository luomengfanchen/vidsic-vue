<template>
    <div class="video-container">
        <div class="player-container">
            <h2 class="video-title">我是一个视频的标题( ´･･)ﾉ(._.`)</h2>
            <div class="video-descript">
                <span class="video-descript-text">发布日期: 2021-11-11</span>
                <span class="video-descript-text">播放量: 1124142</span>
            </div>
            <video controls src="" class="video-player"></video>

            <div class="video-operator">
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'VideoPlayer',
}
</script>

<style scoped>
.video-container {
    display: flex;
    justify-content: center;
    margin-left: 75px;
}

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