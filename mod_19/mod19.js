// Video 01
// string type variable
var bottle = 'water';
var penColor = 'blue';
var bottleColor = 'yellow';
// number type variable
var sunglassPrice = 120;
// boolean type variable
var isExpensive = true;
var tableItems =['bottle', 'pen', 'mouse', 'sunglass', 'paper'];
        // index=    0          1       2        3           4   
tableItems[4 ]= 'notebook';
var penIndex = tableItems.indexOf('pen');
console.log(tableItems);

// Video 02
 // roastGiven = roastGiven + 1;
    // roastGiven += 1;
var roastGiven = 0;
while(roastGiven < 7) {
    console.log('Roast Den, Please !!')
   console.log(roastGiven);
   roastGiven++;
}

// Video 03
// var number =0;
// while(number <= 20) {
//     console.log(number);
//     number++;
// }
// even number
var number = 0;
while(number <= 10){
    console.log(number);
number = number + 2;
}
// odd number
// var number = 1;
// while(number <= 10){
//     console.log(number);
// number = number + 2;
// }

// Video 04
// For Loop
for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log('Rost Den, Please !!');
}
// // simple version of for loop
// console.log('simple for loop');
// for(var i = 0; i < 7; i++){
//     console.log(i);
// }
// i=i+2 ==> i+=2
for(var i = 1; i <=20; i+=2){
    console.log(i);
}

// Video 05
// target: display every elements of an array
var numbers = [54, 87, 56, 74, 25, 32, 89, 100];
for (var i = 0; i < 7; i ++){
    var number = numbers[i];
    console.log(number);
   
}
for (var i = 0; i < numbers.length; i ++){
    var number = numbers[i];
    console.log(number);
   
}
var items = ['bottle', 'mouse', 'notebook', 'sunglass', 'pen'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
} 

// Video 06
// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i>5){
//         break;
//     }
// }
var roastGiven = 0;
while(roastGiven < 10){
    console.log('Rost Den');
    roastGiven++;
    if(roastGiven> 2){
        break;
    }
}
var items = ['bottle', 'mouse', 'notebook', 'sunglass', 'pen'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item=='sunglass'){
        break;
    }
    console.log(item);
} 
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        continue;
    }
    console.log(number);
}

// Video 07
// var num = 1;
// while(num<= 10) {
//     console.log(num);
//     num++;
// }
// Reverse way of while loop
var num = 10;
while(num > 1){
    console.log(num);
    num--;
}
for(var i =10; i<= 20; i++){
    console.log(i)
} 
for(var i = 30; i > 25; i--){
    console.log(i);
}

// Video 08
// Practice Problem 01
var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var getBack = moneyGiven - totalPrice;
console.log(getBack);

// Practice Problem 02
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;
var totalMarks = mathMarks + biologyMarks+chemistryMarks  + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
console.log(averageTwoDecimal);

// Practice Problem 04
var number = 119;
var reminder = number %5;
console.log(reminder);

// Video 09
// Practice Problem
var fruits = ['Apple', 'Banana', 'Orange'];
bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(bananaIndex);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// Practice Problem 05
var num1 = 13;
var num2 = 79;
var num3 = 145;
if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if (num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

// Practice Problem 06
var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('issosceles');
}
