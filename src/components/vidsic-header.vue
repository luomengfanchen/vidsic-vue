<template>
    <header class="header-container">
        <input type="text" class="header-search" placeholder="请搜索你感兴趣的内容( •̀ ω •́ )">
    </header>
</template>

<script>
export default {
    name: 'VidsicHeader',
}
</script>

<style>
.header-container {
    align-items: center;
    background-color: #fff;
    border-bottom: #dcdfe6 solid 1px;
    display: flex;
    justify-content: center;
    margin-left: 75px;
    position: fixed;
    width: 100%;
}
.header-search {
    border: #dcdfe6 solid 2px;
    border-radius: 5px;
    font-size: 15px;
    margin: 10px 0px;
    outline: none;
    padding: 10px 0px;
    text-align: center;
    width: 500px;
}
.header-search:focus {
    border: #f56c6c solid 2px;
    transition: all 0.2s ease-out;
}
</style>