/**
 * 读取excel中的数据
 */

const xlsx = require('node-xlsx');
const fs = require('fs');
const obj = xlsx.parse("./1");
const ejs = require("ejs")
const html = fs.readFileSync("./template.html","utf-8")

let arr = [];
let user = []
for(let i = 1;i<obj[0].data.length;i++){
    var item = obj[0].data[i]
    if(item[0]){
        arr.push(user)
        user = []
    }
    user.push(item.slice(1))
}

arr.push(user)

for(let i = 0;i<arr.length ; i++){
    let code = ejs.render(html,{
        users:arr[i]
    })
    fs.writeFileSync(`./${i}.html`,code,"utf-8")
}




