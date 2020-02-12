const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/index') {
    let strHtml = fs.readFileSync('index.html', 'utf8');
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end(strHtml)
  } else if (req.url === '/index.css') {
    let strCss = fs.readFileSync('./index.css', 'utf8');
    res.setHeader('content-type', 'text/css;charset=utf-8')
    res.end(strCss)
  } else if (req.url === '/IMG_2922.JPG') {
    let strImg = fs.readFileSync('./IMG_2922.JPG');
    res.setHeader('content-type', 'image/png')
    res.end(strImg)
  }

});
server.listen(8084, () => {
  console.log('启动成功')
});