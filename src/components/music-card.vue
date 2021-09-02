<template>
    <div class="music-card">
        <img src="" alt="" class="music-img">
        <a href="" class="video-title">this is title</a>
        <div class="video-data-container">
            <span class="video-data">上传时间: 2020-20-20</span>
            <span class="video-data">播放量: 2020</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.music-card {
    align-items: center;
    border: #DCDFE6 solid 1px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
    width: 300px;
}

.music-img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
}

.video-title {
    color: #303133;
    font-size: 20px;
    text-decoration: none;
}
.video-title:hover {
    text-decoration: underline;
}

.video-data-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
    width: 300px;
}
.video-data {
    background-color: #67C23A;
    border-radius: 5px;
    color: #fff;
    font-size: 10px;
    padding: 5px 10px;
}
</style>