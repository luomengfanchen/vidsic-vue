<template>
    <header class="sidebar-container">
        <nav class="sidebar-nav-group">
            <router-link to="/" class="sidebar-nav-a">vidsic</router-link>
            <router-link to="/video" class="sidebar-nav-a">视频</router-link>
            <router-link to="/music" class="sidebar-nav-a">音乐</router-link>
            <router-link to="/article" class="sidebar-nav-a">专栏</router-link>
        </nav>

        <div v-if="isLogin == false" class="sidebar-nav-group">
            <router-link to="/login" class="sidebar-nav-a">登录</router-link>
            <router-link to="/register" class="sidebar-nav-a">注册</router-link>
        </div>
        <div v-else class="sidebar-nav-group">
            <router-link to="/user" class="sidebar-nav-a sidebar-img-container">
            <img src="../assets/logo.png" class="sidebar-img">
        </router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'vidsicSidebar',
    data() {
        return {
            isLogin: false
        }
    }
}
</script>

<style scoped>
.sidebar-container {
    align-content: center;
    background-color: #fff;
    border-right: #dcdfe6 solid 1px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    position: fixed;
}

.sidebar-nav-group {
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.sidebar-nav-group:first-child {
    margin-top: 10px;
}
.sidebar-nav-group:last-child {
    margin-bottom: 50px;
}

.sidebar-nav-a {
    border: #dcdfe6 solid 2px;
    color: #000;
    border-radius: 50%;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    width: 50px;
}
.sidebar-nav-a:hover {
    border: #f56c6c solid 2px;
    color: #f56c6c;
    transition: all 0.2s ease-out;
}
.sidebar-nav-a:focus {
    background-color: #f56c6c;
    border: #f56c6c solid 2px;
    color: #fff;
    transition: all 0.2s ease-out;
}

.sidebar-img-container {
    align-items: center;
    display: flex;
    justify-content: center;
}

.sidebar-img {
    border-radius: 50%;
    height: 49px;
    margin: 0px;
    padding: 0px;
    width: 49px;
}
</style>
