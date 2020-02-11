const http = require('http');
const fs = require('fs')

const server = http.createServer(function (req, res) {
  // console.log(req.connection.remoteAddress);

  if (req.url === '/index') {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if (err) throw err
      res.end(data)
    })
  } else if (req.url === '/home') {
    fs.writeFile('./home.html', '这是home文件的内容12312431', (err) => {
      if (err) throw err
      fs.readFile('./home.html', 'utf-8', (err, data) => {
        if (err) throw err
        console.log(data);
        // 这里需要设置响应头，否则前台显示会显示乱码
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end(data)
      })
    })

  } else {
    res.end('<h1>404</h1>')
  }
});
server.listen(8082, function () {
  console.log('本次服务器已启用');
})