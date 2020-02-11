
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
  let id = 1;
  if (arr.length) {
    id = arr[arr.length - 1].id + 1
  }
  let obj = {
    id,
    name,
    content,
    dt: Date.now()
  }
  arr.push(obj)


  fs.writeFileSync(filePath, JSON.stringify(arr))
  // console.log(arr);
  return arr
}


const delMsg = id => {
  let arr = getMsg();
  // let idx = arr.findIndex(item => { if (item.id == id) return true })
  let idx = arr.findIndex(item =>
    item.id == id
  )
  if (idx == -1) {
    return console.log('没有该项数据');
  }

  // let idx=arr.findIndex(function(item){
  //   if (item.id==id) {
  //     return true;
  //   }
  // })
  //删除
  arr.splice(idx, 1);
  fs.writeFileSync(filePath, JSON.stringify(arr))
}
// let rs = addMsg("你猜我猜不猜", "我不猜你");
// let rs1 = addMsg("我猜不猜", "我不猜你");
// console.log(rs);
delMsg(5)