const fs=require('fs')
//覆盖写入


var arr=[{a:1,b:2}];

// fs.writeFile(
//   './01.js',
//   '噢',
//   err=>{
//   if (err) {
//     console.log(err);
//   }else{
//     console.log("成功");
//   }
// })



fs.writeFile(
  './01.js',
  JSON.stringify(arr),
  err=>{
  if (err) {
    console.log(err);
  }else{
    console.log("成功");
  }
})