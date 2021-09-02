<template>
    <div class="upload-container">
        <div class="upload-card">
            <div class="upload-button">
                <h3 class="upload-title">视频投稿</h3>
                <router-link
                    to="/user/upload/video"
                    class="upload-link"
                    style="background-color: #409EFF"
                    >投稿</router-link
                >
            </div>
            <div class="upload-button">
                <h3 class="upload-title">音乐投稿</h3>
                <router-link
                    to="/user/upload/music"
                    class="upload-link"
                    style="background-color: #67C23A"
                    >投稿</router-link
                >
            </div>
            <div class="upload-button">
                <h3 class="upload-title">文章投稿</h3>
                <router-link
                    to="/user/upload/article"
                    class="upload-link"
                    style="background-color: #E6A23C"
                    >投稿</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Upload'
}
</script>

<style scoped>
.upload-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 75px;
}

.upload-card {
    align-items: center;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    height: 500px;
    justify-content: space-between;
    margin-top: 100px;
    padding: 100px;
    width: 1000px;
}

.upload-button {
    align-items: center;
    border: #dcdfe6 solid 2px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-around;
    width: 300px;
}
.upload-button:hover {
    box-shadow: 0px 3px 5px 0px #909399;
}

.upload-title {
    color: #f56c6c;
    font-size: 30px;
}

.upload-link {
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    padding: 10px 40px;
    text-decoration: none;
}
.upload-link:hover {
    box-shadow: 0px 3px 3px 0px #909399;
}
</style>
