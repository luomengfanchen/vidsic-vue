<template>
    <div class="article-card">
        <div class="article-desctipt">
            <a href="" class="article-desctipt-title">我是一个奇怪的标题1</a>
            <div class="article-data-container">
                <span class="article-data">发布时间: 2020-20-20</span>
                <span class="article-data">播放量: 2020</span>
                <span class="article-data">作者: beta</span>
            </div>
        </div>
        <img src="" class="article-img" />
    </div>
</template>

<script>
export default {
    name: 'ArticleCard'
}
</script>

<style scoped>
.article-card {
    align-items: center;
    border: #DCDFE6 solid 1px;
    border-radius: 10px;
    display: flex;
    height: 180px;
    justify-content: space-around;
    margin-top: 20px;
    width: 1200px;
}

.article-img {
    border: none;
    border-radius: 10px;
    height: 160px;
    width: 240px;
}

.article-desctipt {
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: space-around;
    width: 900px;
}

.article-desctipt-title {
    color: #303133;
    font-size: 30px;
    text-decoration: none;
}
.article-desctipt-title:hover {
    text-decoration: underline #303133;
}

.article-data {
    background-color: #E6A23C;
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
    margin-right: 20px;
    padding: 5px 10px;
}
</style>
