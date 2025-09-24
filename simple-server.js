const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置静态文件目录为当前目录
app.use(express.static(__dirname));

// 确保所有HTML文件都能正确访问
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*.html', (req, res) => {
    const filePath = path.join(__dirname, req.path);
    res.sendFile(filePath);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});