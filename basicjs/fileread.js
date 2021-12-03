// import for library
const fs = require('fs');

// operations 
fs.readFile('./node.txt', (err, data)=>{
    if(err) throw err;

    console.log('Contents of file: ' + data)
})