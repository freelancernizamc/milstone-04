// Object
const person = {
    firstName: 'Nizam',
    lastName: 'Uddin',
    age: 30,
    email: "nizamquan@gmail.com",
    address: {
        city: "Chittagong",
        zipCode: 4203},
    
    getBirthYear: function(year){
        return 2022-this.age;
        // return 1982;
    }
}

let value;
value = person;
// get specific value
value = person.firstName;
value = person['lastName'];
value = person.age;
value = person.address.city;
value = person.address.zipCode;
value = person.getBirthYear();

const people = [
    {name: "Arefa", age: 32},
    {name: "Nahian", age: 07},
    {name: "Nahar", age: 67},
];

for(let i = 0; i<people.length; i++){
    console.log(people[i].name)
}




console.log(value);

// Javascript math calculation
let value2;
let num1 = 20;
let num2= 5;
value2 = num1 + num2;
value2 = num1 - num2;
value2 = num1 * num2;
value2 = num1 / num2;
value2 = num1 % num2;
// math object
value2 = Math.PI;
value2 = Math.E;
// value2 = Math.round(7.3);
value2 = Math.ceil(7.6);
value2 = Math.floor(2.9);
value2 = Math.sqrt(16);
value2 = Math.pow(2, 3);
value2 = Math.abs(-5);
value2 = Math.min(7, 23, 47, 80);
value2 = Math.max(7, 23, 47, 80);

// value2 = Math.random();
// value2 = Math.random() * 100;
// value2 = Math.floor(value2) + 1;


console.log(value2);

// Array
const numbers = [10, 22, 34, 56, 41, 77];
const numbers2 = new Array(25, 36, 48, 59);              //Array method
const color = ["red", "yellow", "green", "orange"];
const mixed = [26, "hello", true, undefined, null, {a:2, b:4}, new Date()];

let value3;

 value3 = numbers.length;
// value3 = Array.isArray(numbers2);
// value3 = numbers[2];
// value3 = numbers2[0];
// muting array
// value3 =  numbers.push(100);
// value3 =  numbers2.unshift(300);
// value3 = numbers.length;
// numbers2.pop();
// numbers.shift();
// numbers.splice(1, 4);
// numbers2.reverse();
// value3 = numbers2.concat(numbers);
value = numbers2.sort(function(x, y){
    // return x-y;
    return y-x;
});

function over50(num){
    return num >50
}
value3 = numbers2.find(over50);

console.log(numbers);
console.log(numbers2);
console.log(value3);

// Functions
// function adder(a, b){
//     console.log(a + b);     // parameter==> a, b and argument ==> 10, 25
// }
// adder(10, 25);
// function greet(){
//     let userName = "Nizam";             //local variable
//     console.log("Hellow" + userName);
// }
// greet();

// global variable

// let userName = 'Jon';    //global variable
// function greet(){
//     console.log('hello' + userName);
// }
// greet();
// console.log(userName);

// parameter and its evaluation

// function test(a, b){
//     console.log('hellow' +' ' + a + b);
// }
// test('nizam', 'uddin');

function test(a='jon', b='doe'){
    // if(typeof a == 'undefined'){
    //     a = 'jon';
    // } if(typeof b == 'undefined'){
    //     b = 'Doe'
    // }
    console.log('hello' + a + b);
}
// test('Nizam', 'uddon');
test();

// Returning a value

function sqare(x){
    return (x*x);
}
let sqareFour = sqare(4);
console.log(sqareFour);

// Naming function
// getValue 
// setvalue
// calSquare
// immidiately invokable function expression

(function(name){
    console.log(name);
})('Nizam');

