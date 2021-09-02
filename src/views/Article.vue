<template>
    <div class="article-container">
        <!-- 最新文章 -->
        <div class="article-title-container">
            <h2 class="article-title">最新文章</h2>
        </div>

        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
        <ArticleCard></ArticleCard>
    </div>
</template>

<script>
import ArticleCard from '../components/article-card.vue'

export default {
    name: 'Article',
    components: { ArticleCard }
}
</script>

<style scoped>
.article-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
}

.article-title-container {
    border-bottom: #E6A23C solid 3px;
    margin-top: 100px;
    width: 1200px;
}
.article-title {
    color: #303133;
    font-size: 30px;
    letter-spacing: 20px;
    text-align: left;
}
</style>
