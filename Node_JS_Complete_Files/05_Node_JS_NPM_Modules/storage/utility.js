const fs = require('fs');

let storeCustomer = (fileName,obj) => {
    fs.writeFile(fileName,JSON.stringify(obj),'utf8',(err) => {
        if(err) throw err;
        console.log('data is added');
    });
};

module.exports = {
    storeCustomer
};