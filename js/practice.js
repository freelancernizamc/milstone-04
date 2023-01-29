// Find the value of an element by index
var score = [20, 30, 40, 50, 60];
// var scoreIndex = score.indexOf[30];
// console.log(score);

var index = score.indexOf(40);
console.log(index);

// Change an element by index
var fruits = ['mango', 'apple', 'banana', 'orange'];
fruits[2] = 'pineApple';
var bannaIndex = fruits.indexOf('banana');
console.log(fruits);

// get the index of an element by the value
// var positionIndex = score.indexOf(50);
// console.log(positionIndex);
var positionIndex = fruits.indexOf('orange');
console.log(positionIndex);

// How can you add an element to an array at the last position
fruits.push('jackfruit');
console.log(fruits);
score.push(90);
console.log(score);

// How can you remove the last element of an array
fruits.pop();
console.log(fruits);
var friends = ['Hasan', 'Robel', 'Moni', 'other']
friends.pop();
console.log(friends);

// Add an element at the first position of an array
friends.unshift('Nizam');
console.log(friends);
fruits.shift();
console.log(fruits);

// Find index
var country =['Ban', 'India', 'Japan', 'Thailand'];
var index = country.indexOf('Japan');
console.log(index);

// Coditions
var myMoney = 40000;
var laptopPrice = 60000;
var lanovoYoga = 40000;
var oldLaptop = 20000;
if(myMoney > laptopPrice) {
    console.log('I will buy Laptop');
}
else if(myMoney > lanovoYoga && myMoney < laptopPrice){
    console.log('I will buy Lanovo Yoga');
}
else if(myMoney>=oldLaptop && myMoney < laptopPrice){
    console.log('I will buy old Laptop');
}

else{
    console.log('I will buy Mobile');
}

// // Display loop Ajke amar mon valo nai, 39 times
// var opinions = "ajke amar mon valo nai";

// //Loop:   for(var i = 0; i <= 39; i++){
// //        console.log(i);
// //           }
// console.log(opinions.repeat(39 + "<br />"));

// // Display numbers between 58 to 98
// for(var i = 58; i<=98; i++){
//     console.log(i);
// }

// // Show all even numbers 412 to 456
// for(var i = 412; i <=456; i+=2){
//     console.log(i);
// }

// // Show all odd numbers 581 to 623
// for(var i=581; i<=623; i+=2){
//     console.log(i);
// } 

// by while loop
// var i=455;
// while( i<=556){
//     console.log(i);
//     i+=2;
// }

// Display an array that all the topics you learned last few days
var myLearned = ['Html', 'Css', 'Bootstrap', 'Tailwind', 'Javascript'];
console.log(myLearned);

// Create an array for all the mobile phones which you use. Diplay all the elements of the array by using while loop
var myPhone = ['nokia', 'motorola', 'vsun', 'sumsung'];
for(var i =0; i< myPhone.length; i++){
    var element = myPhone[i];
    console.log(element);
}

// // break
// for(var i = 30; i<=86; i++){
//     if(i> 44){
//         break;
//     }
//     console.log(" "+i);
// }
// continue
// for(var b = 30; b<=88; b++){
//     if(b=40){
//         continue;
//     }
//     console.log(" "+b);
// }
// Write the price of the books you HashChangeEvent. display the price if the price is lower than 200
var  bookPrice = [150, 177, 200, 300];
if(bookPrice < 200){
    console.log(bookPrice);
}
else{
    console.log("try other");
}

// Coceptual Section
// var name ="rahim";
// console.log(typeof name);
// var num1 = 10;
// var num2 = '20.666665';
// console.log(typeof num1);
// var sum = num1 + num2;
// var convertNum2 = parseInt(num2);
// console.log(sum);
// var convertNum2 = parseFloat(num2);
//   sum = sum.toFixed(2);
// var num3 = "200.15678";
// // console.log(parseInt(num3));
// console.log(parseFloat(num3));
var naok= "mitun";
if(naok=="hero alam"){
    console.log('marbo bogurai lash porbo magurai');

}
else{
    console.log('maramari kora valo na');
}

var name = "hablu";
if(name=="hablu");{
    console.log('this is maklu');
}
if(name=='kaku'){
    console.log('yes this is kaku');
}
else{
    console.log('noooooo');
}

// var num5 = 20;
// var num6 = 30;
// if(num5 == 20 && num6 == 30){
//     console.log('this is 20');
// }else if(num5 ==100 && num6 == 100){
//     console.log('this is 100');
// }else{
//     console.log()
// }
var num7 = 100;
if(num7> 100){
    console.log('this is bigger than 100');

}
else if(num7<100){
    console.log('this is less then 100');
}
else{
    console.log('this is 100');
}

// var num1 = 400;
// var num2 = 500;
// var num3 = 300;
// if(num1>num2 && num1>num3){
//     console.log("num1 shob theke boro");
// }
// else if(num2>num3){
//     console.log("num2 shob theke boro");
// }
// else{
//     console.log("number3 shob theke boro");
// }
// Nested if else
// var number = "30";
// if(number==30){
//     if(typeof number=="string"){
//         console.log('ok all ok');
//     }
//     else{
//         console.log('number is 30 but not string');
//     }
// } else{
//     console.log("number not equal to 30");

// }
// check even or odd number
var num = 100;
// if(num%2==1){
    if(num%2!=0){
    console.log("this is odd number");
} else{
    console.log("this is even number");
}

// 0-32=F, 33-49=D, 50-59=C, 60-69=B, 70-79=A, 80-100=A+
var result = 58;
if(result>100){
    console.log("bhai result kmne 100 hoi?");
}
else if(result<=100 && result>=0){
    if(result >= 0 && result < 33){
        console.log("F");
    }
    else if(result >32 && result < 50){
        console.log("D Grade");
    }
    else if(result >49 && result < 60){
        console.log("C Grade");
    }
    else if(result >59 && result < 70){
        console.log("B Grade");
    }
    else{
        console.log("bhai result ki 0 thekeo kom");
    }
}
// Find length

var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.length);

// Find index
var friends = ['karim', 'rahim', 20, 30 ];
console.log(friends[1]);

// push, pop, shift, unshift, reverse
// friends.push("kamal");
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.unshift("japan");
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.reverse());

// Loop
// 3 things for loop: start; koto prjonto cholbe, koto porjonto barbe

for(var i=5; i<=10; i++){
    console.log(i);
}
// paithontutor.com visit for debag
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var temp = [];
var temp=[];

for(var i=0; i< numbers.length; i++){
    var element = numbers[i];
    // if(element==5){
    //     console.log('paice 5 ke');
    // }
    // if(element%2 == 0){
    //     temp.push(element)
    // }
// }
//     console.log(temp);

if(element%2!=0){
    temp.push(element)
}
}
console.log(temp)

var friends = ['mahi', 'robin', 'ratul', 'mim'];
for(var i =0; i< friends.length; i++){
    var element = friends[i];
    // console.log(element.length);
    console.log(element);
}
var num9 = [3, 1, 6, 2, 4, 7, 5];
console.log(num9.sort());
