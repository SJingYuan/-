
//向同级目录下的message.json添加新内容


const fs = require('fs');

const path = require('path');

const DATA_FILE = 'message.json';

let filePath = path.join(__dirname, DATA_FILE);

const getMsg = () => {
  let rs = fs.readFileSync(filePath, "utf8");

  let arr = JSON.parse(rs);

  return arr
};

const addMsg = (name, content) => {
  let arr = getMsg()

  // console.log(arr);

  let obj = {
    id: arr.length + 1,
    name,
    content,
    dt: Date.now()
  }
  arr.push(obj)


  fs.writeFileSync(filePath, JSON.stringify(arr))
  // console.log(arr);
  return arr
}
let rs = addMsg("你猜我猜不猜", "我不猜你");
let rs1 = addMsg("我猜不猜", "我不猜你");
// console.log(rs);