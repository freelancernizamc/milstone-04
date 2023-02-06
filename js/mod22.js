// Video : 22-0 foo() bar() Practise task explanation

function bar(){
    console.log("bar");
}
function foo(){
    console.log("foo");
    bar();
}
foo();

// Video 22-1 String comparison using toLowerCase toUpperCase
const myAddress = '81/A, Panslaish R/A, Chattogram';
// myAddress.length;
console.log(myAddress);

const userName = 'blackPink';
const userInput = 'blackPink';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase());
if( userName.toLowerCase === userInput.toLowerCase){
    console.log('valid user');
}
else{
    console.log('invalid user');
}

// 22-2 Apply Search includes, indexOf, startswith, endswith

const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomai bolte pari ni.';
 const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pokhi');
//  const lyricsLowerCase = lyrics.toLowerCase();
//  const searchStringLower = searchString.toLowerCase;
// const doesExist = lyricsLowerCase.includes(searchStringLower);
// const doesExistOneLine = lyrics.toLowerCase().includes(searchstring.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);
console.log(lyrics.indexOf('Tumi'));
console.log(lyrics.indexOf('jenno'));
if(lyrics.indexOf('jeno') !==-1){
    console.log('Exist inside the string');
}
else{
    console.log('cannot find it');
}

// startWith
console.log(lyrics.startsWith('Tumi'));
// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');
console.log(fileName.endsWith('pdf'));

// Video 22-3 How to split, slice, substr, substring, concat, join
const parts = lyrics.split(' ');
console.log(parts);
const sentences = lyrics.split('.');
// console.log(sentences);
const chars = lyrics.split('');
// console.log(chars);
const partial = lyrics.slice(5, 8);
// console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = ['Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomai bolte pari ni.'];
const newSong = lines.join('.');
console.log(newSong);

// Video 22-4 Math, abs, pow, round, ceil, floor, and random number

const result = Math.pow(3, 8);
console.log(result);

const num6 = 25;
const num7 = 45;
const gap = Math.abs(num6 - num7);
console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log("You guys stay apart")
}
// ----
// const number = 2.5598;
// const fullNumber = Math.round(number);
//  console.log(fullNumber);
//  const result2 = Math.ceil(2.0001);
// const result3 = Math.floor(456.259);
// console.log(result2);
// console.log(result3);
//  console.log(Math.random());
// const random = Math.round(Math.random()*100);
// console.log(random);
// for(let i = 0; i < 20; i++){
// const random = Math.round(Math.random()*6);
// console.log(random);
// }

// Video 22-5 Swap variable, swap without temp, destructing

let first = 5;
let second = 7;
console.log(first, second);
// This is wrong approach
// first = second;
// second = first;
// console.log(first, second);

// approach 1
// const temp = first;
// first = second;
// second = temp;
// approach 2: --Destructuring
[first, second] = [second, first];

console.log(first, second);

// Video 22-6 Can you find out who will get the delicious cake?

// const jim = 84;
// const dela = 75;
// if(jim > dela){
//     console.log('Jim will get the cake');
// }
// else{
//     console.log('Dela will get the cake');
// }
const jim = 69;
const dela = 97;
const chinku = 99;
if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if(dela> jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('Chinku will get the cake');
}

Math.max(69, 97, 99);
// Homework: 
// Write a function that will take 3 numbers will return the max number
function findMax(a, b, c) {
    return Math.max(a, b, c);
  }
  console.log(findMax(10, 20, 30)); // Output: 3
  
// Write a function that will take 3 parameters and will return the min number
function findMin(a, b, c) {
    return Math.min(a, b, c);
  }
  console.log(findMin(10, 20, 30)); // Output: 1
  
// first time do it using if-else
// second time do it using Math.min or Math.max

// Video 22-7 Who is the tallest? Find the max number in an array
function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0;i< numbers.length; i++){
        
        const index = i;
        const element = numbers[index];
       if(element > largest){
        largest = element;
       }
    }
    return largest;
}

const heights = [167, 190, 120,165, 265];
const tallest = maxInArray(heights);
console.log('tallest person is:', tallest);

// Homework:
// write a function to get the lowest number in an array
function findMinInArray(array) {
    return Math.min(...array);
  }
  console.log(findMinInArray([10, 20, 30, 40, 5])); // Output: 1
  
// Video 22-8 Reverse a string and Reverse words in a sentence
// function reverseString(text){
//     let reversed = '';
// for (let i = text.length-1; i >= 0; i--){
//     const element = text[i];
//     reversed = reversed + element;
//     console.log(element, reversed);
//     }
//     return reversed;
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log('reversed output: ', reversed);
// Word reversed

function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length -1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }
    console.log(result);
    const reversed = result.join(' ');
    return reversed;
}
const myString = "I am a nice boy";
reverseWords(myString);

// Video 22-9 (advanced) Create a Fibonacci Series using a for loop
// const fibo =[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// fibo[3]= fibo[2] + fibo[1];
// fibo[4]= fibo[3] + fibo[2];
// fibo[5]= fibo[4] + fibo[3];
// fibo[50] = fibo[49] + fibo[48];
// fibo[n]= fibo[n-1] + fibo[n-2];
const fibo = [0, 1];
for(let i = 2; i <= 15; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// Video22-10 Module Summary and where you need to focus

function myName(Name){
    let fullName = 'My Name'+' ' + 'Nizam';
    return fullName;
}

const name2 = myName('Nizam');
console.log(name2);
