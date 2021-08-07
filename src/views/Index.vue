<template>
    <div class="index-container">
        <div class="index-top"></div>

        <div class="index-btn-group">
            <div class="index-btn"></div>
            <div class="index-btn"></div>
            <div class="index-btn"></div>
            <div class="index-btn"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
}
</script>

<style scoped>
.index-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 71px;
}
.index-top {
    background-color: #eee;
    border-radius: 5px;
    height: 506px;
    margin-top: 50px;
    width: 900px;
}


.index-btn-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 900px;
}
.index-btn {
    background-color: #eee;
    border-radius: 5px;
    height: 150px;
    margin-top: 20px;
    width: 440px;
}
</style>
