// 分离打包时的入口配置文件

const fs = require("fs");
const path = require("path");
//__dirname 是Node.js中的一个全局变量，表示当前执行脚本所在的目录。
//生成一个绝对路径，指向当前脚本目录下的components目录。
//fs.readdirSync(...) 同步地读取指定目录的内容，并返回一个包含目录中文件和子目录名称的数组。
let files = fs.readdirSync(path.resolve(__dirname, "./components/"));
//!~file.indexOf('.') 是一个JavaScript技巧，用于检查file字符串中是否包含点（.）。
// file.indexOf('.') 查找点（.）在字符串中的位置。如果没有找到，返回-1。
// ~ 是位非运算符，它将其操作数的位全部取反。在JavaScript中，~n 等价于 -(n+1)。因此，如果indexOf返回-1（表示未找到），~将其转换为0，这在布尔上下文中等价于false。对于indexOf返回的任何其他值（找到匹配时的索引），~都会产生一个非零值，在布尔上下文中等价于true。
// ! 将表达式的结果取反。所以，如果点（.）未被找到，整个表达式的结果是true；如果找到了点，结果是false。
// console.log(files.filter((file) => !~file.indexOf(".")));
module.exports = files.filter((file) => !~file.indexOf("."));
