<template>
    <div class="notFound-container">
        <p class="notFound-text">404</p>
        <p class="notFound-text2">Not Found</p>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style scoped>
.notFound-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 75px;
}

.notFound-text {
    color: #f56c6c;
    font-size: 200px;
    font-weight: bold;
    letter-spacing: 50px;
    margin-top: 300px;
}

.notFound-text2 {
    color: #f56c6c;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 25px;
    margin-top: 20px;
}
</style>