<template>
    <div class="content-container">
        <div class="content-div">
            <h2 class="content-title">this is a title</h2>
            <div class="content-descript">
                <span>阅读量：1000000</span>
                <span>作者：beta_user_beta_user_beta_user</span>
                <span>发布时间：2021-11-11 11:11:11</span>
                <span>分类：Anime</span>
            </div>

            <div class="content-content">
                <h3 class="content-title-common content-title2">二级标题</h3>
                <h4 class="content-title-common content-title3">三级级标题</h4>
                <h5 class="content-title-common content-title4">四级级标题</h5>

                <ul class="content-list">
                    <li>无序列表-1</li>
                    <li>无序列表-2</li>
                    <li>无序列表-3</li>
                    <li>无序列表-4</li>
                </ul>

                <ol class="content-list">
                    <li>有序列表-1</li>
                    <li>有序列表-2</li>
                    <li>有序列表-3</li>
                    <li>有序列表-4</li>
                </ol>

                <img src="https://browser9.qhimg.com/bdm/1000_618_80/t010448c46c1ecf7cab.jpg" alt="bilibili-img" class="content-img">

                <p class="content-quote">
                    CSS 指层叠样式表 (Cascading Style Sheets)
                </p>

                <p class="content-paragraph">
                    <a href="https://www.bing.com" class="content-hyperlink" target="_blank">CSS 指层叠样式表</a>
                    (Cascading Style Sheets)
                    样式定义如何显示 HTML 元素
                    样式通常存储在样式表中
                    把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
                    外部样式表可以极大提高工作效率
                    外部样式表通常存储在 CSS 文件中
                    多个样式定义可层叠为一个
                </p>

                <code class="content-code">
                    package main<br />

                    import (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"fmt"<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"im/utils"<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"net/http"<br />
                    )<br />
                    
                    func init() {<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// 加载json配置<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;utils.LoadConfig("config.json")<br />
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;// 服务启动输出<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("im server syestem start.")<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("at: http://", utils.Config.Address)<br />
                    }<br />
                    
                    func main() {<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;// 创建多路复用器<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;mux := http.NewServeMux()<br />
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;// 静态文件服务<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;file := http.Dir(utils.Config.Static)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;mux.Handle("/", http.FileServer(file))<br />
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;// 配置http服务<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;server := &http.Server{<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Addr: utils.Config.Address,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Handler: mux,<br />
                    }<br />
                    
                    // 开启监听服务<br />
                    server.ListenAndServe()<br />
                    }
                </code>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleRender'
}
</script>

<style>
/* 内容容器 */
.content-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 75px;
}

/* 内容 */
.content-div {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 50px;
    width: 900px;
}

/* 内容标题 */
.content-title {
    border-bottom: #000 solid 2px;
    color: #303133;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 10px 20px;
}

/* 内容描述 */
.content-descript {
    align-self: center;
    color: #555;
    margin-bottom: 20px;
}

.content-descript > span {
    background-color: #f56c6c;
    border-radius: 5px;
    color: #fff;
    padding: 2px 5px;
    margin: 10px;
}

/* 内容->内容 */
.content-content {
    display: flex;
    flex-direction: column;
}

/* 标题共有样式 */
.content-title-common {
    font-weight: bold;
    margin-bottom: 20px;
    padding: 10px 20px;
}
/* 二级级标题 */
.content-title2 {
    border-left: #67c23a solid 20px;
    font-size: 35px;
}
/* 三级级级标题 */
.content-title3 {
    border-left: #67c23a solid 15px;
    font-size: 30px;
}
/* 四级级标题 */
.content-title4 {
    border-left: #67c23a solid 10px;
    font-size: 25px;
}

/* 列表项 */
.content-list {
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
}

/* 引用 */
.content-quote {
    background-color: #f2f6fc;
    /* border-left: #4169e1 solid 6px; */
    color: #909399;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 20px;
}

.content-img {
    border-radius: 5px;
    margin-bottom: 20px;
}

/* 内容->代码 */
.content-code {
    background-color: #263238;
    color: #b2ccd6;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    overflow: auto;
    padding: 20px;
    margin-bottom: 20px;
    white-space: nowrap;
}

/* 图片 */
.content-img {
    border-radius: 5px;
    margin-bottom: 20px;
    width: 900px;
}

/* 内容段落 */
.content-paragraph {
    font-size: 20px;
    text-indent: 2em;
    margin-bottom: 20px;
}

/* 超链接样式 */
.content-hyperlink {
    background-color: #f56c6c;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
}
.content-hyperlink:hover {
    background-color: #ff9696;
    transition: all 0.2s ease-out 0s;
}

/* 表格样式 */
.content-table {
    border: #ddd solid 2px;
    border-collapse: collapse;
    margin-bottom: 20px;
    width: 900px;
}

.content-table-tr {
    border-bottom: #aaa solid 1px;
    font-size: 20px;
}
.content-table-tr:hover {
    background-color: #eee;
}
.content-table-tr:first-child {
    border-bottom: #777 solid 2px;
    color: #4169e1;
}
.content-table-tr:first-child:hover {
    background-color: #fff;
}

.content-table-th {
    border: #aaa solid 1px;
    font-size: 25px;
    font-weight: bold;
    min-width: 150px;
    padding: 10px;
}

.content-table-td {
    border: #aaa solid 1px;
    font-size: 20px;
    min-width: 150px;
    text-align: center;
    padding: 10px;
}
</style>
