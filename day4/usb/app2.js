const http = require('http');

// const fs = require('fs');

// const path = require('path');

const msg = require('./msg');

const url = require('url');



const server = http.createServer((req, res) => {
  let obj = url.parse(req.url, true);

  if (obj.pathname === '/getmsg' && req.method === 'GET') {
    let data = msg.get();

    let dt = obj.query.dt;
    if (dt) {
     let result= data.filter(function () {
        return item.dt > dt
      });

      res.setHeader('content-type', 'application/json;charset=utf-8');

      res.end(JSON.stringify(result))
    }
    else {
      res.setHeader('content-type', 'application/json;charset=utf-8');

      res.end(JSON.stringify(data));
    }


  } else {
    res.end('404')
  }

});
server.listen(8084, () => {
  console.log("服务器启动成功......")
});