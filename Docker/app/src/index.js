// 导入Express框架
const express = require('express');
// 创建Express应用
const app = express();
// 导入数据库模块
const db = require('./persistence');
// 导入处理HTTP请求的路由模块
const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

// 配置Express应用以解析JSON格式的请求体
app.use(express.json());
// 配置Express应用以提供静态资源
app.use(express.static(__dirname + '/static'));

// 定义获取所有项目的路由
app.get('/items', getItems);
// 定义添加新项目的路由
app.post('/items', addItem);
// 定义更新项目的路由，其中:id表示项目ID
app.put('/items/:id', updateItem);
// 定义删除项目的路由，其中:id表示项目ID
app.delete('/items/:id', deleteItem);

// 初始化数据库连接，成功后启动服务器监听，失败则输出错误信息并退出进程
db.init().then(() => {
    app.listen(3000, () => console.log('Listening on port 3000'));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

// 定义优雅关闭服务器的方法，确保数据库连接被正确关闭
const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

// 监听进程的终止信号，确保在进程终止时进行优雅关闭
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon