// Video 00
// For Loop
let a;
for (a=1; a<5; a++){
    console.log(a);
}
// While loop
let m = 1;
while(m<10){
    console.log(m)
    m+=2 //i=i+2
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
    // return 15;
    console.log(sum);
    return sum;
    console.log('i need more code');
    return 15;
    return 'hello done';
}
// add(45, 15);
var total = add(80, 20);
// console.log('total', total);

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingara(200);
console.log('Eating singaras: ', singaras);

// Video 05
function functionname(parameters){
    // function body
    // return
}
// var returnedValue = functionname(parameters value)
function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 57;
const assignment3Marks = 55;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far: ', myAverage);

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log(finalResult);

// Video 06
var student = { id: 115, 
    name: 'Solaiman khan', 
    class: 9,
     marks: 98
    }
    var mobile ={
        brand: 'sumsung',
        price: 19000,
        storage: '64gb',
        camera: '7mp'
    }

    var myComputer = {
        brand: 'lanov0',
        price: 39000,
        color: 'silver',
        processor: '17'
    }
    console.log(myComputer);
    console.log(myComputer.price);
    console.log(mobile.brand);
    myComputer.processor = '179';
    console.log(myComputer);

    // Video 07
    var shoppingCart = {
        books: 3,
        sunglass: 1,
        keyboard: 5,
        mouse: 1,
        pen: 25
    }
// when you know the property name, use dot notation
    var penCount = shoppingCart.pen;
    // alternative system
    // when you know..use this type
    var penCount2 = shoppingCart['pen'];

    // var properties = object.keys(shoppingCart);
    // var propertyValues = object.values(shoppingCart);
    console.log(shoppingCart);
    var propertyName = 'mouse';
    var propertyValue = shoppingCart[propertyName];

    // Set property values
    shoppingCart.mouse = 15;
    console.log(shoppingCart);

    shoppingCart['mouse'] =29;
    console.log(shoppingCart);

    shoppingCart[propertyName] = 89;
    console.log(shoppingCart);

    // Video 08
    var shoppingCart = {
        books: 3,
        sunglass: 1,
        keyboard: 5,
        mouse: 1,
        pen: 25
    }
    // array
    var shoppingItems = ['books', 'shoes', 'shirt'];
    var friendsAge = [12, 45, 78, 12, 32, 14];
    // object
    var friendsAge = {
        rahim: 12,
        karim: 45,
        jamal: 78,
        robi: 12,
        kamal: 32,
        mahmud: 14
    }
    var keys = ['books', 'sunglass', 'mouse', 'pen', 'shoes']
    // const keys = object.keys(shoppingCart);
    console.log(keys);

    // const values = object.vaiues(shoppingCart);
    // console.log(values);
    // for(var i = 0; keys.length; i++){
    //     console.log(keys.length[i]);
    //     console.log(keys[i]);
    //     console.log(propertyName, propertyValue);
    // }

    // for in loop
    for(var propertyName in shoppingCart){
        const value = shoppingCart[propertyName];
        console.log(propertyName);
        console.log(propertyValue);
    }

    // Video 09

    const color ='red';
    if(color === 'green'){
        console.log('You are a green friend');
    }
    else if(color === 'blue'){
        console.log('You are a blue friend');
    }
    else if (color === 'red'){
        console.log('You are a red friend')
    }
    else if(color === 'white'){
        console.log('You are a white friend');
    }
    else{
        console.log('You are a black black friend');
    }

    // Switch
    switch(color){
        case 'green':
            console.log('You are a green friend');
            break;
        case 'blue':
            console.log('You are a blue friend');
            break;
        case 'red':
            console.log('You are a red friend');
            break;
        case 'white':
            console.log('You are a white friend');
            break;
            default:
                console.log('You are a kala kala friend');
    }
    // // Factorial
    //     function factorial(number){

    //         let i = 7;
            
    //         let result = 1;
            
    //         while( i >= 1 ){
    //             result = result * i;
            
    //             i--;
    //         }
    //         return result;
            
    //         }
    //         const output = factorial(7);
    //         console.log(i);
    function print(a, b, c){
        return a+2;
        return a*b;
        return b*c+a;
      }
      console.log(print(1,2,3));
        