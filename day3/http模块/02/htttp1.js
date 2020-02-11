const http = require('http');
const fs = require('fs')
const server = http.createServer(function (req, res) {
  if (req.url === '/index') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) throw err
      res.end(data)
    })
  } else {
    res.end('404')
  }
});
server.listen('8081', function () {
  console.log('本次服务器启动成功');
})