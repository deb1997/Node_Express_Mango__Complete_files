// load the os module
const os = require('os');
const fs = require('fs');
const path = require('path');

// total memory
let totalMemory = os.totalmem();
console.log(`Total Ram Size : ${totalMemory}`);

// Free Memory
let freeMemory = os.freemem();
console.log(`freeMemory : ${freeMemory}`);

// home Dir
let homeDir = os.homedir();
console.log(`Home Dir : ${homeDir}`);

// Computer name
let computerName = os.hostname;
console.log(`Computer Name : ${computerName}`);

// User Information
let userName = os.userInfo().username;
console.log(userName);

// Up time
let upTime = os.uptime();
console.log(`Uptime : ${upTime}`);

// File System Module

let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
let fileName = 'data.txt';
let message = 'On Linux, positional writes don\'t work when the file is opened in append mode. The kernel ignores the position argument and always appends the data to the end of the file.';

// Create a file / Write to a file
fs.writeFile(fileName,message,'utf8',(err) => {
    if(err) throw err;
    console.log('data is added');
});

// Read data from the file
fs.readFile(fileName,'utf8',(err,data) => {
    if(err) throw err;
    console.log(data);
});

// Create a folder
fs.mkdir('data/user',{ recursive: true },(err) => {
    if(err) throw err;
    fs.writeFile('data/user/user.txt',message,'utf8',(err) => {
        if(err) throw err;
        console.log('data is added');
    });
});

// path
let filePath = path.join(__dirname , 'data' , 'user' , 'user.txt');
console.log(filePath);