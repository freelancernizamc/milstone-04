// 1. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে

for( var i = 0;  i<= 100;i++){
    console.log(i);
}
// 2. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।
for(var i=50;i<=80;i++){

    if((i%2)!=0){
    console.log(i);
    }
}
// Even number
for(var n=50;n<=80;n++){

    if(n%2==0){
    console.log(n);
    }
}

// 3. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো

// function sum_three(nums){

//   return nums[0] + nums[1] + nums[2];
// }

// console.log(sum_three([10, 32, 20]));

// function sum3(numbers){

//   sum = numbers[0] + numbers[1] + numbers[2];
//   return sum;
// }

// console.log(sum3([20, 30, 40]));

// (এডভান্সড) একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও।
var Nizam ={
  age: 40,
  height:5.5,
  qualification: "MBA"};
  console.log(Nizam);
  // to add property
  Nizam.batch = 7;
  console.log(Nizam);
  Nizam.Institution = ['programming hero'];
  console.log(Nizam);
  delete Nizam['age'];
  console.log(Nizam);
  console.log(Nizam.Institution);

  // কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান বের করা যেতে পারে?



  // ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

  function celciousToFahrenhait(celcious){
    const fahrenhait = celcious * 1.8 + 32;
    return fahrenhait;
}
const myCelcious = 40;
const myFahrenhait = celciousToFahrenhait(myCelcious);
console.log(myFahrenhait);
// Fahrenhait to Celcious
function fahrenhaitToCelcious(fahrenhait){
  var celcious = (fahrenhait-32)*0.556;
  return celcious;
}
var myFahrenhait2 = 104;
var myCelcious2 = fahrenhaitToCelcious(myFahrenhait2)
console.log(parseInt(myCelcious2));
// inchi to feet

function inchToFeet(inches){
  const feet = inches / 12;
  return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);
  
// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

var marks = 87;
if(marks<= 100 && marks>=80){
  console.log("You got A+");
}
else if(marks<=79 && marks>=70){
  console.log('You got B Grade');
}  
else if(marks<=69 && marks>=60){
  console.log('You got C Grade');
  }
  else if(marks<=59 && marks>39){
    console.log('You got D Grade');
  }
  else{
    console.log('You Fail in Exam');
  }

  // Problem : Write a function that will take hour as the input parameter and will
  // convert it into minutes and will return the result in minutes.
  // Solution:
  function hoursToMinutes(hours){
    const minutes = hours*60;
    return minutes;
  }
  const myHours = 1;
  const myMinutes = hoursToMinutes(myHours);
  console.log(myMinutes);

// Problem: Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.


// function isLeapYear(year){
//   const remainder = year % 4;
//   if(remainder === 0){
//       console.log('Your year is leap year', year);
//       return true;

//   }
//   else{
//        console.log('Your year is not a leap year', year);
//       return false;
//   }
// }
// // isLeapYear(1933);
// // isLeapYear(1952);
// const isMyYearLeapYear = isLeapYear(2025);

function leap_year_range(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++)
  {
       year_range.push(i);
  }
  var new_array = [];

year_range.forEach(
function(year)
{ 
 if (test_LeapYear(year)) 
 new_array.push(year);
});

return new_array;
}

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
          return year;
  } else {
          return false;
  }
}

console.log(leap_year_range(2023,2030));

// Ans: 
let yearList = [2023,2024,2025,2028,2030];
var isLeapYear = year => (year % 4 == 0 && year % 4 != 100) || (year % 400 == 0);

var result = yearList.reduce((acc, year) => 
            {
               isLeapYear(year) ? acc["LeapYear"].push(year) 
                                : acc["NotLeapYear"].push(year);
               return acc;
            }, {LeapYear: [], NotLeapYear: []});
            
console.log("LeapYears: " + result.LeapYear.join(','));
console.log("NotLeapYears: " + result.NotLeapYear.join(','));

// Problem: Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.
// Solution:

// const numbers = [5, 7, 8, 10, 45, 30];
// const odds = [];
// for (const num of numbers) {
//   if (num % 2 === 1) {
//     odds.push(num);
//   }
// }
// console.log(odds);
function EvenOddSum(number, n){

 
    
    var even = 0;
    var odd = 0;
    for (var i = 0; i < n; i++)
    {
     
        // Loop to find even, odd sum
        if (i % 2 == 0){
            even += number[i];
        }
        else{
            odd += number[i];
        }
    }
  
    console.log("Even numbers sum " + even);
    console.log(" " + "Odd numbers sum " + odd);
}

    var number = [ 5, 7, 8, 10, 45, 30 ];
    var n = number.length;
    EvenOddSum(number, n);

// Grade finding
    function findGrade (marks) {

      // Edge cases
      if (marks < 0 || marks > 100) return 'INVALID SCORE';
      if (marks <= 100 || marks >= 80) return 'A+';
    
      // Important values
      var decimal = marks % 10;
      marks = Math.floor(score / 10); // <- here we reduce the range to 0-9
    
                  // 0    1    2    3    4    5    6    7    8    9
      var marks = ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'];
      var grade = marks[marks];
    
      if (grade != 'F') {
        if (decimal <= 2) grade += '-';
        else if (decimal >= 8) grade += '+';
      }
    
      return grade;
    }
    var result = findGrade(95);
    console.log(result);

    // Fibo seris

    const fibo = [0, 1];

    for(let i =2; i <=10; i++){

    fibo[i] = fibo[i-1] + fibo[i-2];

  }
  

  console.log(fibo);

  const number৫ = -78; 
const answer = Math.abs(number৫); 
console.log(answer);

function add(a, b){
  return a + b;
}
console.log(add("adam" + "eve"))