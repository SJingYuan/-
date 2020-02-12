const http = require('http');

const fs = require('fs');

const path = require('path');

const msg = require('./msg');

const server = http.createServer((req, res) => {
  if (req.url === '/getmsg' && req.method === 'GET') {
    let data =  msg.get()
    res.setHeader('content-type', 'application/json;charset=utf-8');

    res.end(JSON.stringify(data));

  } else {
    res.end('404')
  }

});
server.listen(8081, () => {
  console.log("服务器启动成功......")
});