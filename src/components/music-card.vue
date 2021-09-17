<template>
    <div class="music-card" v-for="item in musicInfo" :key="item.id">
        <img :src="$store.getters.getbaseURL + item.cover" class="music-img" />
        <router-link :to="'/music/' + item.id" class="video-title">
            {{ item.name }}
        </router-link>
        <div class="video-data-container">
            <span class="video-data">上传时间: {{ item.date }}</span>
            <span class="video-data">播放量: {{ item.views }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusicCard',
    props: ['musicInfo']
}
</script>

<style scoped>
.music-card {
    align-items: center;
    border: #dcdfe6 solid 1px;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
    margin: 49px;
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
    background-color: #67c23a;
    border-radius: 5px;
    color: #fff;
    font-size: 10px;
    padding: 5px 10px;
}
</style>
