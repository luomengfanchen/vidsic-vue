<template>
    <div class="vidsic-page-container">
        <div class="upload-card">
            <div class="upload-button">
                <h3 class="upload-title">视频投稿</h3>
                <router-link
                    to="/user/upload/video"
                    class="upload-link"
                    >投稿</router-link
                >
            </div>
            <div class="upload-button">
                <h3 class="upload-title">音乐投稿</h3>
                <router-link
                    to="/user/upload/music"
                    class="upload-link"
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
    box-shadow: 0px 0px 10px 0px #909399;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-around;
    width: 400px;
}

.upload-title {
    color: #409eff;
    font-size: 30px;
}

.upload-link {
    border: #DCDFE6 solid 2px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    padding: 10px 40px;
    text-decoration: none;
}
.upload-link:hover {
    border: #f56c6c solid 2px;
    color: #f56c6c;
    transition: all 0.6s ease-out;
}
</style>
