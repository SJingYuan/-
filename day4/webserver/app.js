const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const msg = require('./msg');
const FILE_Paths = "public";

const TYPE_MAP = {
  ".js": "application/javascript",
  ".png": "image/png",
  ".html": "text/html;charset=utf-8",
  ".jpg": 'image/jpg',
  ".css": "text/css;charset=utf-8"
};

const server = http.createServer((req, res) => {
  console.log(req.url)

  let obj = url.parse(req.url);
  if (obj.pathname === '/getmsg' && req.method === 'GET') {
    var result = {
      code: 200,
      data: msg.get()
    };
    res.setHeader('content-type', 'application/json,charset=utf-8')
    res.end(JSON.stringify(result));
  } else {
    //1，获取用户访问资源，res.url；
    //2，拼接服务器对应的文件地址；
    //3，读出文件并返回；
    let filePath = path.join(__dirname, FILE_Paths, req.url);

    try {
      let rs = fs.readFileSync(filePath);

      let extName = path.extname(req.url);

      if (TYPE_MAP[extName]) {
        res.setHeader("content-type", TYPE_MAP[extName]);
      }

      // TYPE_MAP[extName] && res.setHeader("content-type", TYPE_MAP[extName]);
      res.end(rs);
    } catch (err) {
      res.setHeader('content-type', 'text/html;charset=utf-8');

      res.statusCode = 404;

      res.end(`${req.url}没有找到`);
    }
  }
});
server.listen(8084, () => {
  console.log("启动成功.....");
});