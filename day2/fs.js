const fs = require('fs');
// fs.readFile("./01.js", "utf8", function (err, data) {
//   if (err){
//     throw err;
//   } else{
//     console.log(data);
//     console.log(data.toString());
//   }

// });


//遇到错误用try{}catch{}来处理
// try {
//   let rs = fs.readFileSync("./01.js", "utf8");
//   console.log(rs);
// } catch (err) {
//   console.log("有错误");
//   console.log(err);
// }
// console.log(2);

// getdelFile = (fl) => {
//   fs.unlink(fl, function (err, data) {
//     if (err) {
//       // throw err
//       return err
//     } else {
//       return data
//       // console.log(data);
//     }
//   })
//   // return fl
// }
// getdelFile('./utf8')

// fs.copyFile("./01.js",'02.js', err => {
//   if (err) {
//     console.log(data);
//   }
// });

// fs.access('./01.js', (err) => {
//   if (err) {
//     console.log('文件不存在');
//     throw err
//   }else{
//     console.log('存在该文件');
//   }
// })
// fs. mkdir("./03",{recursive:true},(err)=>{
//   if (err) {
//     throw err
//   }
// })
// fs.readdir('./03','utf8',(err,files)=>{
// console.log(files);
// })
// fs.rename('./03','04',err =>{

// })
// fs.rmdir('./04/',err =>{

// })
// fs.stat('./01.js',(err,stats)=>{
//   console.log(err);
//  console.log(stats);
// })

// let ab=fs.watch('./01.js');
// console.log(ab);

// fs.watch('01.js', (eventType, filename) => {
//   console.log(`事件类型是: ${eventType}`);
//   if (filename) {
//     console.log(`提供的文件名: ${filename}`);
//   } else {
//     console.log('文件名未提供');
//   }
// });
var watch = '01.js';
var done = '../day2';

fs.watch(watch, (event, file) => {
  console.log(event);
  if (file) {
    console.log(file);
    fs.rename(watch, '123/' + file, (err) => {
      if (err) console.error(err);
    });
  }
});













