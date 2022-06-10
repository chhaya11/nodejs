const path = require('path');
const a1 = path.basename('C:\\temp\\myfile.html');
const a2 = path.dirname('C:\\temp\\myfile.html');
const a3 = path.extname(__filename);
const a4 = path.join(__filename);
const a5 = path.parse(__filename);

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);