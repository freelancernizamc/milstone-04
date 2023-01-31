// Video 21-0 What are functions
var n = 2;
function square(num){
    var ans = num * num;
    console.log(ans);
}
square(n)
square(4)

// Video 21-1 : JS Concepts recap, var, let, and const
// 1. variable
var myName = 'Nizam';
// math operation +,-, *,/
// shorthand: +=, --, *=, /=, ++, --
//  2. Array
var friends = ['abul', 'babul', 'cabul', 'dabul'];
var thirdFriend = friends[2];
friends[3] = 'dambool';
// 3. conditionals
// >, <, >=,==, ===, !=, !===

if(friends.length <2){
    console.log('fokor tor kono friend nai');
}
else{
    console.log('You have friend');
}
// 4. loop
var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}
for(var i = 0; i <= 10; i++){
    console.log(i);
}

// 5. function
// function isMoonUp(time){
//     if(time > 7){
//         return true;
//     }
// }
// console.log(isMoonUp);

// Object
// var jantus = {
//     height: 60,
//     romanticism: 'havvy',
//     baerTaka: 'borolok',
// }
let age =11;
age = 12;
const countryName = 'Bangladesh';
console.log(age, countryName);

// Video 21-2 Unit Convert Inch to Feet, miles to kilometer

// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dada feet', dadaFeet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('nana feet', nanaFeet);

function milsToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}
const myMiles = 200;
const myKilometer = milsToKilometer(myMiles);
console.log('my kilometer', myKilometer);

// Video 21-3 Check even and odd number using function

// console.log(10/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1288/2);

// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// // console.log(1287/2);
// console.log(4%2);
// console.log(98%2);
// console.log(145/2);
// console.log(1287/2);

// function isEven(number){
//     const remainder = number % 2;
//     // 
//     if(remainder === 0){
//         // console.log('Number is even');
//         return true;
//     }
//     else{
//         // console.log('Number is odd');
//         return false;
//     }
// }
// const myNumberIsEven = isEven(303);
// console.log(myNumberIsEven);
// const herNumberIsEven = isEven(1280);
// console.log(herNumberIsEven);

// Video 21-4 Check whether a year is a Leap Year or not (simplified way)
// Leap Year
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('Your year is leap year', year);
        return true;

    }
    else{
        // console.log('Your year is not a leap year', year);
        return false;
    }
}
// isLeapYear(1933);
// isLeapYear(1952);
const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);
const isyourYearLeapYear = isLeapYear(1952);
console.log('your year', isyourYearLeapYear);

// Video 21-5 Calculate Sum of all numbers of an array
// function getSumOFAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//     // console.log(numbers);
//     var index = i;
//     var element = numbers[index];
//     sum = sum + element;
//     console.log(index, element, sum);
   
// }
// return sum;
// }
// var myNumbers =[12, 65, 45, 78, 32, 45, 91];
// getSumOFAnArray(myNumbers);

// Video 21-6 Get Odd Numbers of an array and get odd Sum of an array

// function getOddNumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         const index = 1;
//         const element = numbers[index];
//         if(element % 2!==0){
//             console.log(index, element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
// const oddNumberSum = getSumOFAnArray(oddNumbers);
// console.log('odd number sum', oddNumberSum)
// //  getSumOfAnArray(myNumbers);

// Video 21-7 Calculate Factorial of a number using for loop

// 1 + 2 + 3 + 4 + 5 + 6 + 7
// function sumOfNumbers(number){
// let sum = 0;
// for(let i = 1; i <= number; i ++){
//     sum = sum + i;
//     console.log(i, sum);
// }
// return sum;

// }
// 1 * 2 * 3 * 4 * 5 * 6 * 7
// function factorial(number){
//     let result = 1;
//     for(let i = 1; i <=number; i++){
//         result = result * i;
//     }
//     return result;
// }
// const result = factorial(9);
// console.log(result);

// Video 21-8 Factorial using a while loop or a decrementing loop

// function factorial(number){
//     let result = 1;
//     for(let i = number; i>=1 ; i--){
//         result = result * i;
//         console.log(i);
//     }
//     return result1;
// }
// const number = 6;
// const fact = factorial(number);
// console.log('factorial of:', number, fact)
// // factorial(9);
// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num <= 7){
//         result = result * num;
//         num++;
//     }
//     return result;
// }

// function factorial(number){
//     let i = number;
//     let result = 1;
//     while( i >= 1){
//         result = result * i;
//         i--;
//     }
//     return result;
// }
// const output = factorial(7);
// console.log('factorial of', number);

// Video 21-9 Module Summary and Simple JavaScript debug
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i ++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}
const factorial = getFactorial(12);
console.log('factorial of 12 is:', factorial);
