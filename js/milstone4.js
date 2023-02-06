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

// for loop

// for(let i = 0; i <=10; i++){
// for(let i = 0; i <10; i=i+1){
// for(let i = 0; i <10; i+=2){
for(let i = 9; i >0; i--){
    if(i===5) break;//continue;
    console.log(i);
}

let myArray = ['one', 'two', 'three', 'four', 'five'];
// for(let i = 0; i< myArray.length; i++){
//  for(let i= myArray.length-1; i >=0; i--){
//     console.log(myArray[i]);
// }
// while loop

// let i= 0;
// while(i<10){
//     console.log(i);
//     i++;
// }


let i=0;
while(i< myArray.length){
    console.log(myArray[i]);
    i++;
}

// Assignment
// Problem 01: তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে। 
// এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। Sample Input & Output
// Input: 5

// Output: 7.5



// Input: 50

// Output: 65



// Input: -33

// Output: -25.5

function mindGame(number){
    result = (number * 3 + 10)/2-5;
    return result;

}
const game = mindGame(50);
console.log(game);


// Problem 02: তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 

function evenOdd(str) {
    return str.length % 2 === 0 ? 'Even' : 'Odd';
  }
  const getEvenOrOdd = evenOdd('chatgpt');
  console.log(getEvenOrOdd); 
  


// এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।Sample Input & Output:-



// Input: ‘Phero’

// Output: Odd



// Input: ‘Batch7’

// Output: Even



// Input: ‘chatgpt’

// Output: Odd

// Problem 03 : তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  



// এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

// Input : 6

// Output: -1

// Input: -15

// Output: -22

// Input: 15

// Output: 30

function isLGSeven(num){
    let i = num - 7;
    if(i < 7){
        return i;
    }
    else{
        return num*2;
    }
}
const getValue = isLGSeven(15);
console.log(getValue);





// Problem 4: Finding Bad data


// তোমাকে একটা function দেওয়া হবে called findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
    return count;
  }
 const getData = findingBadData([ -4, -9, -5, -33, -55 ]);
 console.log(getData);

// Sample Input & Output:-



// Input: [ 1,2,5 ]

// Output: 0



// Input: [ 2, -5, -7, -13 ]

// Output: 3



// Input: [ -4, -9, -5, -33, -55 ]

// Output: 5





// Problem 5: Convert your gems into diamond


// তোমাকে একটা function দেওয়া হবে called gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 



// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43



// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছেএখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।Sample Input & Output:-

function gemsToDiamond(f1gem, f2gem, f3gem){
  let  i= f1gem*21 + f2gem*32 +f3gem*43;
    if(i<=1000*2){
        return i;
    }
    else if(i >1000*2){
        return (i-2000);
    }
}
const getDiamond = gemsToDiamond(100, 5, 1);
console.log(getDiamond);


// Input: 1, 1, 1

// Output: 96



// Input: 20, 200, 50

// Output: 6970



// Input: 100, 5, 1

// Output: 303

