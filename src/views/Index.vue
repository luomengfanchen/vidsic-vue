<template>
    <vidsic-header />

    <div class="index-container">
        <div class="index-top"></div>

        <div class="index-btn-group">
            <div class="index-btn"></div>
            <div class="index-btn"></div>
            <div class="index-btn"></div>
            <div class="index-btn"></div>
        </div>

        <table class="index-table">
            <tr class="index-table-tr">
                <th class="index-table-th" colspan="2">视频榜单</th>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
        </table>

        <table class="index-table">
            <tr class="index-table-tr">
                <th class="index-table-th" colspan="2">音乐榜单</th>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
            <tr class="index-table-tr">
                <td class="index-table-td index-table-td-rank">1</td>
                <td class="index-table-td">我的名字竟然能如此之长</td>
            </tr>
        </table>
    </div>
</template>

<script>
import VidsicHeader from '../components/vidsic-header.vue'

export default {
    name: 'Index',
    components: { VidsicHeader }
}
</script>

<style scoped>
.index-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 75px;
}
.index-top {
    background-color: #409eff;
    border-radius: 5px;
    height: 506px;
    margin-top: 100px;
    width: 900px;
}

.index-btn-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    width: 900px;
}
.index-btn {
    background-color: #e6a23c;
    border-radius: 5px;
    height: 150px;
    margin-top: 20px;
    width: 440px;
}

.index-table {
    border-collapse: collapse;
    border-radius: 5px;
    margin-bottom: 40px;
    margin-top: 40px;
    width: 900px;
}
.index-table-tr {
    border-radius: 5px;
}
.index-table-tr:hover {
    background-color: #ebeef5;
}
.index-table-th {
    background-color: #67c23a;
    color: #fff;
    font-size: 30px;
    padding: 10px 0px;
}
.index-table-td {
    color: #606266;
    font-size: 30px;
    min-width: 10px;
    padding: 10px 60px 10px 0px;
    text-align: right;
}
.index-table-td-rank {
    font-size: 30px;
    font-weight: bold;
}
</style>
