// Video 00
// For Loop
let a;
for (a=1; a<5; a++){
    console.log(a);
}
// While loop
let i = 1;
while(i<10){
    console.log(i)
    i+=2 //i=i+2
}

// Even of odd number
let n =1;
while(n<7){
    if(n % 2 ==0){
        console.log(n, "is even");
    }
    else{
        console.log(n, "is odd");
    }n+=1;
}

// Video 01
var fruits = ['mango', 'apple', 'guava', 'jackfruits', 'pineapple'];
var numbers = [1, 2, 3, 4, 5, 6, 7];
fruits.slice(1,3);
numbers.slice(1,3);
console.log(fruits);
console.log(numbers);
// array is immutable

// Video 02
function startFan(){
    console.log('stand up');
    console.log('walk towards the switch');
    console.log('press the switch');
}
// call the function
startFan();
console.log('walking in the morning');
startFan();
startFan();

function bringSingara(money){
    console.log('mama singara den');
    console.log(money);
}
bringSingara(100);

// Video 03
function bringSingara(money){
    console.log('ai nen singara');
    console.log('taka decen', money);
}
var taka = 300;
// bringSingara(200);
bringSingara(taka);

function add(num1, num2){
    console.log('going to add:', num1, num2);

}
add(125, 200);
function sum(a, b, c, d, e, f){
    console.log(a, b, c, d, e);
    var sum = a+b+c+d+e;
    console.log(sum)
}
sum(15, 98, 56, 9, 8);

// Video 04
function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    return 15;
}
add(45, 15);
