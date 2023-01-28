// Video 01
// number type variable
var sunglassPrice = 120;
// string type variable
var specialOneName = "Ariana Grande";
// boolean type variable
var isSingle = true;
// convert: parseInt, parseFloat

// Video-2:
// array declaration
var friendsAge = [11, 21, 45, 17, 14];
var picnicFee = [5000, 2000, 4000];
var nayikas =['mahi', "opu", 'shabnur'];
console.log(nayikas);

// Video 03
var numbers = [54, 68, 78, 89, 98];
// index= 1, 2 3 4
// get elements by index
// console.log(nayikas[0]);
// array element set
numbers[1] = 77;
// console.log(numbers);
// 3. find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);

// Video 04
var numbers = [78, 45, 98, 99];
// use push to add element
numbers.push(66);
console.log(numbers);
var friends = ['balam','kalam', 'salam'];
friends.push('gelam');
console.log(friends);
// use pop to remove last element
numbers.pop();
console.log(numbers);
var element = numbers.pop();
console.log(element);
var remove = friends.pop();
console.log(remove);
friends.unshift('nizam');
console.log(friends);
numbers.shift();
console.log(numbers);

// Video 05
// console.log(5 > 6);
// console.log(6 == 6);
// console.log(5 !== 6);
console.log(15 !== 15);
console.log(5 <= 6);
console.log(15 <= 6);
// greater thsn or equal
console.log(5>=2);
var num1 = 56;
var num2 = 80;
console.log(num1 == num2);
// multiple conditions
// money1 > money2 && result > result2 && height1 > height2
// money1 > money2 || result1 > result2 || height1 > height2;

// Video 06
var iphonePrice = 79000;
var myBudget = 65000;
// if iphone price is less than my budget. I will buy the iphone
if (iphonePrice < myBudget){
    console.log('I will buy iphone');
}
else{
    console.log('return home');
}

if(myBudget<iphonePrice){
    console.log('i can buy iphone');
};

// Video 07
var isGraduated = true;
var salary = 41000;
var cars = 0;
// if(isGraduated == true && salary > 50000 && cars >=1){
//     console.log('asho biya kore feli');
// }
// else{
//     console.log('tur kopale biya nai');
// }

// 
if(isGraduated === true && salary > 50000 || cars >=1){
    console.log('Eso prem kori');
}
else{
    console.log('tomar friend er number dao');
}

// Video 08
var money = 30;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;
if(danishPrice < money) {
    console.log('Danish khabo');
}
else if (butterBread < money) {
    console.log('Butter bon khabo');
}
else if(toastBiscuit<money){
    console.log('toastBiscuit khabo')
}
else{
    console.log("Shodu tea khabo");
}

// Video 09
var destination = ['sajek', 'coxbazar', 'nepal', 'bali', 'sp'];
console.log(destination[3]);
var index = destination.indexOf('bali');
console.log(index);

if(destination[1]=='sajek'){
    console.log('go to sajek');
}
else if (destination[2] === 'bali'){

}
else if(destination.length !==3){

}
else{

}
// Practice Problem 01
var fruits = ['Apple', 'Banana', 'Orange']
var positionIndex = fruits.indexOf('Banana');
console.log(positionIndex);
fruits.push('Mango');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// Practice Problem 02
var myResult = 89;
var tomResult = 66;
var janeResult = 95;
var peterResult = 56;
var jonResult = 40;

// For My Grade

if(myResult>=80){
    console.log('I got A Grade');
}
else if (myResult>=60){
    console.log('I got B Grade');
}
else if (myResult >=50) {
    console.log('I got C Grade');
}
else if (myResult>= 40) {
    console.log('I got D');
}
else if (myResult>=39) {
    console.log('I got F Grade')
}
else{
    console.log('Not Satisfactory');
}
// For Tom Grade

if(tomResult>=80){
    console.log('Tom got A Grade');
}
else if (tomResult>=60){
    console.log('Tom got B Grade');
}
else if (tomResult >=50) {
    console.log('Tom got C Grade');
}
else if (tomResult>= 40) {
    console.log('Tom got D');
}
else if (tomResult>=39) {
    console.log('Tom got F Grade')
}
else{
    console.log('Not Satisfactory');
}

// For Jane Grade
if(janeResult >=80) {
    console.log('Jane got A Grade');
}
else if(janeResult>=60) {
    console.log('Jane got B Grade');
}
else if(janeResult>=50) {
    console.log('Jane got C Grade');
}
else if(janeResult>=40) {
    console.log('Jane got D Grade');
}
else if(janeResult<=39){
    console.log('Jane Faild');
}
else{
    console.log('Un Satified');
}

// For Peter Grade
if(peterResult>=80) {
    console.log('Peter got A grade')
}
else if(peterResult>=50) {
    console.log('Peter got C Grade');
}
// Jon Grade
if(janeResult>=40) {
    console.log('Jon got D Grade')
}
else{
    console.log('jon fail');
}

// Practice Problem 03
var num1 = 13;
var num2 = 79;
var num3 = 45;
// if(num1 < num2 && num2>num3) {
//     console.log('79 is Big');
// }

if(num1 > num2){
    if(num1>num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2>num3){
        console.log(num2);
    }
}
// Problem 04
var side1 =9;
var side2 = 8;
var side3 = 9;
if(side1==side2 || side1==side3 || side2 || side3){
    console.log('issosceless');
}
