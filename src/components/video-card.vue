<template>
    <div class="video-card" v-for="item in videoInfo" :key="item.id">
        <img :src="$store.getters.getbaseURL + item.cover" alt="" class="video-img">
        <router-link :to="'/video/' + item.id" class="video-title">{{ item.name }}</router-link>
        <div class="video-data-container">
            <span class="video-data">上传时间: {{ item.date }}</span>
            <span class="video-data">UP: {{ item.author }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['videoInfo']
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
    margin: 49px;
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