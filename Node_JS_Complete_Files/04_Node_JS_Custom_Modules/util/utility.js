const fs = require('fs');

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// add to file
let addToFile = (fileName,data) => {
    fs.writeFile(fileName,data,'utf8',(err) => {
        if(err) throw err;
        console.log('data is added');
    });
};

// storeStudentObject
let storeObject = (fileName,obj) => {
    fs.writeFile(fileName,JSON.stringify(obj),'utf8',(err) => {
        if(err) throw err;
        console.log('data is added');
    });
};

// Read Student Object
let fetchStudent = (fileName) => {
    fs.readFile(fileName,'utf8',(err,data) => {
        console.log(JSON.parse(data));
    });
};

// Export the functions to other files
module.exports = {
    reverseString,
    addToFile,
    storeObject,
    fetchStudent
};