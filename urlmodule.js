const { URL } = require('url');
const myURL = new URL('https://example.org/foo#bar:8000');
myURL.password ="FDSFKSDFN";
myURL.pathname ='a/b/c';
myURL.hostname ='820';
myURL.search ='42';
console.log(myURL.href);