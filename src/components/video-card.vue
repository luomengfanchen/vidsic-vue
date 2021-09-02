<template>
    <div class="video-card">
        <img src="" alt="" class="video-img">
        <a href="" class="video-title">this is title</a>
        <div class="video-data-container">
            <span class="video-data">上传时间: 2020-20-20</span>
            <span class="video-data">UP: beta</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoCard'
}
</script>

<style scoped>
.video-card {
    align-items: center;
    border: #DCDFE6 solid 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-between;
    width: 300px;
}

.video-img {
    border-radius: 10px;
    height: 200px;
    width: 300px;
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
    background-color: #409EFF;
    border-radius: 5px;
    color: #fff;
    font-size: 10px;
    padding: 5px 10px;
}
</style>