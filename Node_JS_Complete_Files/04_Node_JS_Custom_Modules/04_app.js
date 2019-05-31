// Load
const util = require('./util/utility');

let msg = "Good Morning";


let revStr = util.reverseString(msg);
util.addToFile('data.txt',revStr);


// Create a student
let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering'
};
util.storeObject('student.json',student);

// Fetch Student
util.fetchStudent('student.json');