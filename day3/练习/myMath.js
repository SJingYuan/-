const myPI = 3.14;
function add(a, b) {
  return a * b
};
let obj = {
  'pi': myPI,
  'add': add
}
//导出模块
module.exports = obj;

