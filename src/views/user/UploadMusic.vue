<template>
    <div class="vidsic-page-container">
        <div class="music-card">
            <h2 class="video-title">音乐投稿</h2>

            <div class="video-input-container">
                <label for="">音乐：</label>
                <input
                    type="text"
                    class="video-input"
                    readonly
                    v-model.trim="musicName"
                />
                <div class="video-button">
                    上传音乐
                    <input
                        type="file"
                        class="video-input-file"
                        accept="audio/*"
                        @change="uploadMusic"
                    />
                </div>
            </div>
            <div class="video-input-container">
                <label for="">进度：</label>
                <progress
                    :value="musicProgress"
                    max="100"
                    class="video-progress"
                ></progress>
                <span>{{ musicProgress }} %</span>
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
                        @change="uploadImage"
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
                    <option value="纯音">纯音</option>
                    <option value="ACG">ACG</option>
                    <option value="国风">国风</option>
                    <option value="英语">英语</option>
                    <option value="电音">电音</option>
                </select>
            </div>

            <div class="video-input-container">
                <label for="">歌手：</label>
                <input type="text" class="video-input" v-model.trim="singer" />
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
import { authAxios, authUploadAxios } from '../../plugins/axios.js'

export default {
    name: 'UploadMusic',
    data() {
        return {
            musicName: '',
            musicProgress: 0,
            imageName: '',
            imageProgress: 0,
            // 输入信息
            name: '',
            singer: '',
            descript: '',
            type: '',
            // 接收后端效果变量
            musicId: '',
            imageId: ''
        }
    },
    methods: {
        // 上传音乐文件
        uploadMusic(e) {
            this.musicName = String(e.target.files[0].name)

            let formData = new FormData()
            formData.append('file', e.target.files[0])

            authUploadAxios
                .post('/commit?type=music', formData, {
                    // 进度条监听
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.lengthComputable) {
                            this.musicProgress =
                                ((progressEvent.loaded / progressEvent.total) *
                                    100) |
                                0
                        }
                    }
                })
                .then((response) => {
                    this.musicId = response.data.data.id
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        // 上传封面文件
        uploadImage(e) {
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
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        // 上传文件信息
        uploadSubmit() {
            authAxios
                .post('/upload?type=music', {
                    name: this.name,
                    singer: this.singer,
                    descript: this.descript,
                    type: this.type,
                    media: this.musicId,
                    cover: this.imageId
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>
.music-card {
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
    background-color: #67c23a;
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
    background-color: #67c23a;
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
    background-color: #67c23a;
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
