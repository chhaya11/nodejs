//common js syntax
const fs = require('fs');


// const a= fs.readFileSync('file.txt', 'utf8',(err,data )=>{
//     console.log(a.toString)
// });

// fs.writeFile('file2.txt' ,"this is new data of second file of writting things" ,()=>{
//  console.log('wrriten to the file')

// })
 b =fs.writeFileSync('file2.txt' ,'this is second file of txt');
console.log('finished reading file' ,b)