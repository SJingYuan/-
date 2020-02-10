const fs=require('fs')

// let rs=fs.readFileSync("./01.js","utf8")
// console.log(rs);


let rs=fs.readFileSync(__dirname+"/01.js","utf8")
console.log(rs);
