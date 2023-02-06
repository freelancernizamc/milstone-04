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
// var friends = ['abul', 'babul', 'cabul', 'dabul'];
// var thirdFriend = friends[2];
// friends[3] = 'dambool';
// 3. conditionals
// >, <, >=,==, ===, !=, !==

// if(friends.length <2){
//     console.log('fokor tor kono friend nai');
// }
// else{
//     console.log('You have friend');
// }
// 4. loop
// var number = 0;
// while(number <= 6){
//     console.log(number);
//     number++;
// }
// // for(var i = 0; i <= 10; i++){
// //     console.log(i);
// }

// 5. function
// function isMoonUp(time){
//     if(time > 7){
//         return true;
//     }
// }
// console.log(isMoonUp);

// 6. Object
// var jantus = {
//     height: 60,
//     romanticism: 'havvy',
//     bapperTaka: 'borolok',
// }
// let age =11;
// age = 12;
// const countryName = 'Bangladesh';
// console.log(age, countryName);

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
// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i <= number; i ++){
//         factorial = factorial * i;
//         console.log(i, factorial);
//     }
//     return factorial;
// }
// const factorial = getFactorial(12);
// console.log('factorial of 12 is:', factorial);

// Conceptual section
// for loop
// for(var i = 0; i < 10; i++){
//      console.log("sorry");
// }
    // var friends = ["mim", "robin", "jobbar", "borkat"]
    // console.log(friends[2]);
    // console.log(friends[3]);

    // for (var i = 0; i < friends.length; i++){
    //     var element = friends[2];
    //     console.log(element);
    // }
    // Object
    var human = {
        name:"rahim",
        age: 25,
        friends:["hero", "alom", "manna"],
        country:"Bangladesh",
    };
    console.log(human.friends);
    console.log(human.age);
    for (var i=0; i < human.friends.length; i++){
        console.log(human.friends);
    }

    // Function
    // function sum(num1, num2){
    //     console.log(num1, num2);
    // }
    // sum(10, 20);
    function sum(number1, number2){
        var result = number1 + number2;
        // var result2 = number1 / number2;
        // var result3 = number1 * number2;
        // console.log(result);
        // console.log(result3);
        
        // console.log(result2);
        return result;
    }
    sum(800, 400);
    function minus(number1, number2){
        var result = number1 - number2;
        return result;
    }
    var totalMinus = minus(600, 400);
    var totalSum = sum(1000, 2005);
    const total = totalMinus + totalSum;
    // console.log(total);

function writoSorry(name){
for (var i = 0; i < 10; i++){
    console.log('sorry' + name);
}
}
writoSorry("mahim");

function kmToMiles(km){
    const result = km * 0.62;
    console.log(result);
}
kmToMiles(2);

// inches to feet
// const myInches = 12;
// const myFeet = myInches /12;
// console.log(myFeet);

// const givenInches = 12;
// const getFeet = givenInches /12;
// console.log('getFeet', getFeet);
function inchesToFeet(inches){
    const feet = inches /12;
    return feet;
}
const givenInches = 144;
const getFeet = inchesToFeet(givenInches);
console.log(getFeet);

// feet to inches
function feetToInches(feet){
    const inches = feet * 12;
    return inches;
}
const givenFeet = 5;
const getInches = feetToInches(givenFeet);
console.log(getInches);

// even or odd
console.log(4/2);
console.log(4%2);
console.log(98%2);
console.log(7%2);
function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}
// 
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);

// Leap year
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder ===0){
        return true;
    }
    else{
        return false;
    }
}
const isThisYearLeapYear= isLeapYear(1952);
console.log('My Year', isThisYearLeapYear);


// Find add sum of an array
function getSumOfAnArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        const index = i;
        // console.log(index);
        const element = array[index];
        sum = sum+ element;
        console.log(index, element, sum);
    }
    return sum;
}

const myArray = [12, 65, 45, 78,32, 45, 91];
getSumOfAnArray(myArray)

function getOddNumberOfAnArray(myNumbers){
    const oddNumbers = [];
    for(let i = 0; i<myNumbers.length; i++){
        const index = i;
        // console.log(i);
        const element = myNumbers[index];
        if(element % 2 === 1){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78,32, 45, 91];
const oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumberSum);


// Factorial
let sumf = 0;
for(let i = 1; i<= 7; i++){
    sumf = sumf + i;
    console.log(i, sumf);
}

// multiplication
function factorial(number){
    let result = 1;
    for(let i = 1; i<= number; i++){
        result = result *i;
    }
    return result;
}
const result = factorial(9);
console.log(result);


function factorial(number){
    let resultf = 1;
    for(let i = number; i >=1;i--){
        resultf = resultf *i;
        console.log(i);
    }
    return resultf;
}
const number = 6;
const fact = factorial(number);
console.log('factorial of:', number, fact);

// by while loop
function factorial(number){
    let num = 1;
    let result = 1;
   
    while(num <=number){
        result = result * num;
        num++;
    }
    return result;
}

const output2 = factorial(7);
console.log(output2);



function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
const output = factorial(11);
console.log(output);