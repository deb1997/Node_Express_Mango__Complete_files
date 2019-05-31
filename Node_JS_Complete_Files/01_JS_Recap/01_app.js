// Objects
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Array
let colors = ['orange','blue','black','red','silver'];
colors.sort().reverse().shift();
console.log(colors);

// Normal Functions
function greet1() {
    console.log('Iam a normal Function');
}
greet1();

// function Expression
let greet2 = function() {
  console.log('Iam a function expression');
};
greet2();


// Arrow Function
let greet3 = () => {
    console.log('Iam from Arrow Function');
};
greet3();


// CallBack Functions
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
  return callback(a ,b);
};

console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a , b) => {
    return a - b;
}));







