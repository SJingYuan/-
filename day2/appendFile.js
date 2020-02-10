const fs=require("fs");

var arr=[{a:3,b:4}]

fs.appendFile(
  './01.js',
  JSON.stringify(arr),
  err=>{
  if (err) {
    console.log(err);
  }else{
    console.log("成功");
  }
})