<template>
    <div class="login-container">
        <div class="login-card">
            <h2 class="login-title">欢迎登陆</h2>

            <form id="form">
                <div class="login-input">
                    <label for="account" class="login-label">邮箱</label>
                    <input type="text" class="login-input-text"/>
                </div>

                <div class="login-input">
                    <label for="password" class="login-label">密码</label>
                    <input type="password" class="login-input-text"/>
                </div>

                <input type="button" value="登陆" class="login-button"/>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style scoped>
/* 登陆容器 */
.login-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 74px;
}

/* 登陆卡片 */
.login-card {
    align-items: center;
    background-color: #fff;
    border: #dcdfe6 solid 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    margin-top: 200px;
}

/* 登陆标题 */
.login-title {
    color: #f56c6c;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 登陆输入容器 */
.login-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
}
.login-label {
    color: #f56c6c;
    font-size: 20px;
}
.login-input-text {
    border: #dcdfe6 solid 2px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    outline: none;
    padding: 10px;
}
.login-input-text:focus {
    border: #f56c6c solid 2px;
    transition: all 0.2s ease 0s;
}

/* 登陆按钮 */
.login-button {
    background-color: #f56c6c;
    border: #dcdfe6 solid 1px;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    margin-top: 50px;
    padding: 10px;
    width: 100%;
}
.login-button:hover {
    background-color: #ff9696;
    transition: all 0.2s ease 0s;
}
</style>