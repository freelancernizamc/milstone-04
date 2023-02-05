var onionPrice = 30;
var eggPrice = 20;
// console.log(onionPrice);


var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice);

var totalPrice = onionPrice/eggPrice;
console.log(totalPrice);

// variable Declaration
var tomatoPrice = 25;
// variable update

tomatoPrice = 30;
var price1 = 31;
var price2 = 20;
// set a new value

// price1= 35;
// add some value to the existing value
price1 = price1 + 10;
console.log(price1);
var price1 = price1*20;
price1 +=20;

// console.log(price1);
// addition to the same variable shorthand
// += means adding some value to the existing value
var firstName = 'Jannie';
var lastName = 'Kim';
var fullName = firstName + ' ' + lastName;
console.log(fullName);
var price1 = '51';
var price2 = '20';
console.log(price1 + price2);
var price1 = parseInt(price1);
console.log(price1);
var price5 = 39.61;
var price5 = parseFloat(price5);
// console.log(price5);

var price = 200;
console.log(typeof price);
var price ='10';
console.log(typeof price);
var isHappy = true;
// console.log(typeof isHappy);

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
console.log(sum);
var mangos = 11;
var person = 2;
// console.log(mangos % person);

// Practice Problem 1
var momGave = 1000;
var cost = 700;
var shopkeperReturn = momGave-cost;
console.log(shopkeperReturn);
// Practice Problem 2
var mathMarks = 75.25;
var bioMarks = 65;
var chemMarks = 80;
var phyMarks = 35.45;
var banMarks = 99.50;
var totalMarks = mathMarks +bioMarks + chemMarks + phyMarks + banMarks;
var totalSubject = 5;
var avarageMarks= totalMarks/totalSubject;


avarageMarks = avarageMarks.toFixed(2);
console.log(avarageMarks);
// Practice 03
var one = "I am going to be";
var two = "an awesome web developer";
var oneLine = one + two;
console.log(oneLine);

// Practice 04
var motherGave = 119;
var divide = 5;
var remainder = motherGave % divide;
console.log(remainder);

// Loop
for(var i= 0;  i<20; i++){
    console.log(i);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i =0;i< numbers.length; i++){
    var element = numbers[i];
    console.log(element);
}
// number.sort();
function movie(){

  return "Din-The day";

  return "Poran";

  return "Hawa";

}

console.log(movie());
// To see length of array

var arr= [20, 10, 70];
console.log(arr.length);

// To include elements in array
arr[3] = 50;
arr[4] = 70;
arr[5] = 90;
console.log(arr);


// Problem: You will have a function which takes the length and width of a rectangle as parameters. Find out the area of that rectangle and return the result.



// [

// Note:

// Input format: two integer numbers as input

// Output format: a single integer number

// ]
function getRectangleArea(length, width) {
  return length * width;
}
let length = 10;
let width = 20;
let area = getRectangleArea(length, width);
console.log(area); // Output: 200

// Problem: You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

function getSecondLargest(numbers10) {
  numbers10.sort((a, b) => b - a);
  return numbers10[1];
}
let numbers10 = [10, 20, 30, 40, 50];
let secondLargest = getSecondLargest(numbers10);
console.log(secondLargest); // Output: 40

// Problem: Write a function solution that takes an alphabet as a function parameter and return whether it is VOWEL or CONSONANT.



// Vowels and consonants

// Words are built from vowels (a, e, i, o, u) and consonants (the rest of the alphabet).



// The letter 'y' is a bit different because sometimes it acts as a consonant and sometimes it acts as a vowel.



// Knowing how vowels and consonants work together to make words and sounds will help you with your spelling.

function getVowelOrConsonant(letter) {
  letter = letter.toLowerCase();
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return 'VOWEL';
  } else {
    return 'CONSONANT';
  }
}
let letter = 'd';
let result = getVowelOrConsonant(letter);
console.log(result); // Output: VOWEL

letter = 'e';
result = getVowelOrConsonant(letter);
console.log(result); // Output: CONSONANT

