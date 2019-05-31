// Load the lodash module
const _ = require('lodash');
const util = require('./storage/utility');
const path = require('path');

let colors = ['red','green','blue','black','purple'];

_.forEach(colors,function(color) {
    console.log(color);
});

let array = [10,20,'john','wilson',true,'rajan','laura'];

let countValues = (array) => {
    let numberCount = 0;
    let stringCount = 0;
    _.forEach(array,function(value) {
        _.isNumber(value) ? numberCount++ : numberCount;
        _.isString(value) ? stringCount++ : stringCount;
    });
    return {
        stringCount : stringCount,
        numberCount : numberCount
    };
};
console.log(countValues(array));

// Filter
let customers = [
    {
        name : 'John',
        age : 40,
        desg:'Manager',
        isRegular : true
    },
    {
        name : 'Wilson',
        age : 34,
        desg:'Tech Lead',
        isRegular : false
    },
    {
        name : 'Rajan',
        age : 25,
        desg:'Software Engineer',
        isRegular : true
    },
    {
        name : 'Modi',
        age : 45,
        desg:'Sr.Manager',
        isRegular : false
    }
];

// Filter Function of An Array
let seniorCustomers = _.filter(customers, customer => customer.age >= 35);
console.log(seniorCustomers);

// Junior Customers
let juniorCustomers = _.filter(customers, customer => customer.age < 35);
let fileName = path.join(__dirname,'storage','customer.json');
util.storeCustomer(fileName,juniorCustomers);