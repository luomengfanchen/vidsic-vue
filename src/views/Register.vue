<template>
    <div class="register-container">
        <div class="register-card">
            <h2 class="register-title">欢迎注册</h2>

            <form id="form">
                <div class="register-input">
                    <label for="account" class="register-label">昵称</label>
                    <input type="text" class="register-input-text"/>
                </div>

                <div class="register-input">
                    <label for="account" class="register-label">邮箱</label>
                    <input type="text" class="register-input-text"/>
                </div>

                <div class="register-input">
                    <label for="password" class="register-label">密码</label>
                    <input type="password" class="register-input-text"/>
                </div>

                <div class="register-input">
                    <label for="password" class="register-label">确认密码</label>
                    <input type="password" class="register-input-text"/>
                </div>

                <div class="register-input">
                    <label for="account" class="register-label">出生日期</label>
                    <input type="text" class="register-input-text"/>
                </div>

                <div class="register-input">
                    <label for="account" class="register-label">自我介绍</label>
                    <textarea class="register-input-text register-input-textarea"/>
                </div>

                <input type="button" value="注册" class="register-button"/>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>
/* 注册容器 */
.register-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 74px;
}

/* 注册卡片 */
.register-card {
    align-items: center;
    background-color: #fff;
    /* border: #dcdfe6 solid 1px; */
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding: 100px;
    width: 900px;
}

/* 注册标题 */
.register-title {
    color: #f56c6c;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 注册输入容器 */
.register-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
}
.register-label {
    color: #f56c6c;
    font-size: 20px;
}
.register-input-text {
    border: #dcdfe6 solid 2px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    outline: none;
    padding: 10px;
    width: 500px;
}
.register-input-text:focus {
    border: #f56c6c solid 2px;
    transition: all 0.2s ease 0s;
}
.register-input-textarea {
    height: 200px;
    resize: none;
}

/* 注册按钮 */
.register-button {
    background-color: #f56c6c;
    border: #dcdfe6 solid 1px;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    margin-top: 50px;
    padding: 10px;
    width: 100%;
}
.register-button:hover {
    background-color: #ff9696;
    transition: all 0.2s ease 0s;
}
</style>