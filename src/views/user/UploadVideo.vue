<template>
    <div class="vidsic-page-container">
        <div class="video-card">
            <h2 class="video-title">视频投稿</h2>

            <div class="video-input-container">
                <label for="">视频：</label>
                <input
                    type="text"
                    class="video-input"
                    readonly
                    v-model.trim="videoName"
                />
                <div class="video-button">
                    上传视频
                    <input
                        type="file"
                        class="video-input-file"
                        accept="video/*"
                        @change="uploadvideo"
                    />
                </div>
            </div>
            <div class="video-input-container">
                <label for="">进度：</label>
                <progress
                    :value="videoProgress"
                    max="100"
                    class="video-progress"
                ></progress>
                <span>{{ videoProgress }} %</span>
            </div>

            <div class="video-input-container">
                <label for="">封面：</label>
                <input
                    type="text"
                    class="video-input"
                    readonly
                    v-model.trim="imageName"
                />
                <div class="video-button">
                    上传封面
                    <input
                        type="file"
                        class="video-input-file"
                        accept="image/*"
                        @change="uploadimage"
                    />
                </div>
            </div>
            <div class="video-input-container">
                <label for="">进度：</label>
                <progress
                    :value="imageProgress"
                    max="100"
                    class="video-progress"
                ></progress>
                <span>{{ imageProgress }} %</span>
            </div>

            <div class="video-input-container">
                <label for="">标题：</label>
                <input type="text" class="video-input" v-model.trim="name" />
                <select class="video-type" v-model.trim="type">
                    <option value="科技区">科技区</option>
                    <option value="游戏区">游戏区</option>
                    <option value="数码区">数码区</option>
                    <option value="番剧">番剧</option>
                    <option value="电影">电影</option>
                    <option value="纪录片">纪录片</option>
                </select>
            </div>

            <div class="video-input-container">
                <label for="">描述：</label>
                <textarea
                    type="text"
                    class="video-textarea"
                    v-model.trim="descript"
                />
            </div>

            <div>
                <input
                    type="button"
                    value="提交"
                    class="video-submit"
                    @click="uploadSubmit"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { authAxios, authUploadAxios } from '../../plugins/authAxios.js'

export default {
    name: 'UploadVideo',
    data() {
        return {
            // 前端效果变量
            videoName: '',
            videoProgress: 0,
            imageName: '',
            imageProgress: 0,
            // 输入信息
            name: '',
            descript: '',
            type: '',
            // 接收后端效果变量
            videoId: '',
            imageId: ''
        }
    },
    methods: {
        // 上传视频文件
        uploadvideo(e) {
            this.videoName = String(e.target.files[0].name)

            let formData = new FormData()
            formData.append('file', e.target.files[0])

            authUploadAxios
                .post('/commit?type=video', formData, {
                    // 进度条监听
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.lengthComputable) {
                            this.videoProgress =
                                ((progressEvent.loaded / progressEvent.total) *
                                    100) |
                                0
                        }
                    }
                })
                .then((response) => {
                    this.videoId = response.data.data.id
                    this.$message.success('文件上传成功')
                })
                .catch(() => {
                    this.$message.error('文件上传失败')
                })
        },

        // 上传封面文件
        uploadimage(e) {
            this.imageName = String(e.target.files[0].name)

            let formData = new FormData()
            formData.append('file', e.target.files[0])

            authUploadAxios
                .post('/commit?type=image', formData, {
                    // 进度条监听
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.lengthComputable) {
                            this.imageProgress =
                                ((progressEvent.loaded / progressEvent.total) *
                                    100) |
                                0
                        }
                    }
                })
                .then((response) => {
                    this.imageId = response.data.data.id
                    this.$message.success('封面上传成功')
                })
                .catch(() => {
                    this.$message.error('封面上传失败')
                })
        },

        // 上传文件信息
        uploadSubmit() {
            authAxios
                .post('/upload?type=video', {
                    name: this.name,
                    descript: this.descript,
                    type: this.type,
                    media: this.videoId,
                    cover: this.imageId
                })
                .then(() => {
                    this.$message.success('信息上传成功')
                    // 转到首页
                    this.$router.push('/')
                })
                .catch(() => {
                    this.$message.error('信息上传失败')
                })
        }
    }
}
</script>

<style scoped>
.video-card {
    /* align-items: center; */
    /* border: #000 solid 1px; */
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 100px;
    width: 1000px;
}

.video-title {
    font-size: 50px;
    margin-bottom: 50px;
    text-align: center;
    width: 1000px;
}

.video-input-container {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

.video-input {
    border: #dcdfe6 solid 1px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    outline: none;
    padding: 10px;
    width: 500px;
}

.video-type {
    border: #dcdfe6 solid 1px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    outline: none;
    padding: 10px;
}

.video-progress {
    background-color: #fff;
    height: 20px;
    width: 521px;
}
.video-progress::-webkit-progress-bar {
    background-color: #dcdfe6;
}
.video-progress::-webkit-progress-value {
    background-color: #409eff;
}

.video-textarea {
    border: #dcdfe6 solid 1px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    height: 200px;
    outline: none;
    padding: 10px;
    resize: none;
    width: 710px;
}

.video-button {
    background-color: #409eff;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
    outline: none;
    overflow: hidden;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 180px;
}

.video-input-file {
    cursor: pointer;
    font-size: 50px;
    opacity: 0;
    position: absolute;
    right: 0px;
    top: 0px;
}

.video-submit {
    background-color: #409eff;
    border: none;
    border-radius: 5px;
    color: #fff;
    float: right;
    font-size: 20px;
    margin-top: 100px;
    outline: none;
    padding: 10px;
    width: 200px;
}
</style>
