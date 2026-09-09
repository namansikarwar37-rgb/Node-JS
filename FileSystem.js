const fs = require('fs') //module file system
// console.log(fs)

// fs.readFile(__dirname+ "/hello.txt","utf8", (err,data) =>{  //utf8 file format
//   if(err) throw err;
//   console.log(data);
// });

// console.log("hello gwalior")

let data = fs.readFileSync(__dirname+"/hello.txt","utf8")
console.log(data)
console.log("hello gwalior")
