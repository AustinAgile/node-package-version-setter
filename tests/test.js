var npvs = require('../version.js');
 
console.log(npvs.version('./test.json'));

npvs.setFileVersion('./test.json', '0.0.312');
console.log(npvs.version('./test.json')); 

npvs.setFileVersion('./test.json', '0.0.0');
console.log(npvs.version('./test.json')); 
