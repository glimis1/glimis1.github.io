var qr = require('qr-image')
var fs = require('fs')


let len = 34
for(let i =0;i<34;i++){
    var code = qr.image(`https://glimis1.github.io/${i+1}.html`,{type:'png'})
    code.pipe(fs.createWriteStream(`${i+1}.png`));
}

