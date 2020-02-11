const fs = require('fs')
const path = require('path');

const DATA_FILE = 'message.json';
let filePath = path.join(__dirname, DATA_FILE);  
const get = () => {
  let rs = fs.readFileSync(filePath, "utf8");

  let arr = JSON.parse(rs);

  return arr
}
const add = (name, content) => {
  let arr = get()

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
const del = id => {
  let arr = get();
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
module.exports = {
  'get': get,
  'add': add,
  'del': del
}