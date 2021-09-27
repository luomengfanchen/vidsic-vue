<template>
    <div class="vidsic-page-container">
        <div class="user-card">
            <div class="user-title-container">
                <h2 class="user-title">用户信息</h2>
            </div>

            <div class="user-descript-container">
                <div>
                    <p class="user-descript-content">
                        昵称:
                        <input
                            type="text"
                            readonly
                            class="user-descript-input"
                            :value="user.nickname"
                        />
                    </p>
                    <p class="user-descript-content">
                        邮箱:
                        <input
                            type="text"
                            readonly
                            class="user-descript-input"
                            :value="user.email"
                        />
                    </p>
                    <p class="user-descript-content">
                        生日:
                        <input
                            type="text"
                            readonly
                            class="user-descript-input"
                            :value="user.birthday"
                        />
                    </p>
                </div>
                <img :src="user.avator" class="user-avator" />
            </div>

            <textarea
                readonly
                class="user-intro"
                :value="user.intro"
            ></textarea>
        </div>
    </div>
</template>

<script>
import { authAxios } from '../../plugins/authAxios.js'

export default {
    name: 'UserIndex',
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        authAxios
            .get('/info')
            .then((response) => {
                this.user = response.data.data
                this.$message.success('数据获取成功')
            })
            .catch(() => {
                this.$message.error('数据获取失败')
            })
    }
}
</script>

<style scoped>
.user-card {
    border: #dcdfe6 solid 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 1200px;
}

.user-title-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 50px 0px;
}
.user-title {
    color: #f56c6c;
    font-size: 50px;
}

.user-descript-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 100px 10px 100px;
    width: 1000px;
}

.user-descript-content {
    color: #303133;
    font-size: 30px;
    padding: 20px;
}

.user-descript-input {
    border: #dcdfe6 solid 2px;
    border-radius: 5px;
    color: #303133;
    font-size: 20px;
    outline: none;
    padding: 5px;
}
.user-descript-input:focus {
    border: #f56c6c solid 2px;
}

.user-avator {
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #909399;
    height: 210px;
    width: 210px;
}

.user-intro {
    border: #dcdfe6 solid 2px;
    border-radius: 5px;
    font-size: 30px;
    height: 300px;
    margin: 10px 100px 50px 100px;
    outline: none;
    padding: 10px;
    resize: none;
    width: 1000px;
}
.user-intro:focus {
    border: #f56c6c solid 2px;
}
</style>
