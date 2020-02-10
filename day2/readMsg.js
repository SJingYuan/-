const fs = require('fs')

// let rs=fs.readFileSync('./message.json','utf8');
// console.log(rs);

const path = require('path');

const DATA_FILE = 'message.json';

let filePath = path.join(__dirname, DATA_FILE);

const getMsg = () => {
  let rs = fs.readFileSync(filePath, "utf8");

  let arr = JSON.parse(rs);

  return arr
};
let rs = getMsg();
console.log(rs);