// Video 23-1 Module Introduction and isArray, includes, concat
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, batch:7, name: 'Nizam'};
const friends = [13, 14, 16, 21, 16, 20];
function add(num1, num2){
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

// --------
console.log(friends.includes(20));
console.log(friends.includes(16));
console.log(friends);
if (friends.indexOf(252) != -1){
    
}
// concat
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);

// Video 23-2 Get part of an array and insert elements using slice, splice
const friends2 = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends2.slice(2, 5);
// console.log(partial);
console.log(friends2);

// splice: Removes elements from an array, and if necessary, inserts
// new elements in their place, returning the deleted elements.
// will change the original array

// const partial2 = friends2.splice(2, 5);
const partial2 = friends2.splice(2, 5, 99, 55, 777);
console.log(partial2);
console.log(friends2);

// Video 23-3 Remove duplicate items from an array
const names =['abul', 'babul', 'kabul', 'dabul', 'ebul', 'babul', 'abul', 'gabul', 'kabul','abul', 'kabul'];
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
        // console.log(name);
    }
    return unique;
}   

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

// Video 23-4 Write foo, bar, foobar if divisible by 3 or 5 or both
/* show output from: 1-50
2. if the number is divisible by 3 then instead of the number show 'foo'
3. if the number is divisible by the 5 then instead of the number show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar
*/
for(let i=1; i <=50; i++){
    if( i % 3 ===0 && i % 5 ===0){
        console.log('foobar');
    }
    else if(i % 3 === 0){
    console.log('foo');
    }
    else if (i % 5 === 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }

}


// Video 23-5 Use add and multiplication to calculate wood requirements
/* 
fixed per item wood requirements
1. chair --> 3cft
2. table --> 10cft
3. bed --> 50 cft
vary: quantity
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood= 10;
    const perBedWood = 50;

    const ChairWood = chairQuantity * perBedWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood= bedQuantity * perBedWood;
    // console.log(chairQuantity, tableQuantity, bedQuantity);
    const totalWood = ChairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(2, 2, 5);
console.log('total wood required: ', totalWood);


// Video 23-6 Find the cheapest phone from an array of phone objects
const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver'},
    {name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 18000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        //  console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
       
    }
    return cheapest;
}

const mySelection =cheapestPhone(phones);
console.log(mySelection);

// Video 23-7 Calculate the total cost of the products in a shopping cart
// [45, 65,45, 98]
const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600}
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total product expense today', expense);

// Quantity card:
// const shoppingCart2 = [
//     {name: 'shoe', price: 1200, quantity: 2},
//     {name: 'shirt', price: 2200, quantity: 5},
//     {name: 'pant', price: 3700, quantity: 4},
//     {name: 'belt', price: 600, quantity: 3}
// ];

// function totalCost(products){
//     let sum = 0;
//     for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         const productTotal = product.price * product.quantity;
//         sum = sum + productTotal;
//         // console.log(product);
//     }
//     return sum;
// }

// const expense2 = totalCost(shoppingCart2);
// console.log('Total expense today', expense2);

// Video 23-8 (advanced) Multi-layer discount price calculation

/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket number is more than 100, but less than 200, Forst 100 tickets will be 100/tickets
rest tickets will be 90 taka per piece
first 
3. if you purchase more than 200 tickets
first 100---> 100tk
101-200 ---> 90tk
200+ ====>70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(120);
console.log('price:', price);

// Video 23-9 Handle unexpected function input parameter error
function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Enter a number';
    }
    return num1 + num2;
}

const result = add(12, 45);
// console.log(result);
function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}
const output = multiply(12,45);
console.log(output);

// slice
number = [20, 30, 40, 50, 60, 70, 80];
const partial3 = number.slice(2, 6);
console.log(partial3);
console.log(number);

// splice
const cut = number.splice(2, 3);
console.log(cut);
const partial4 = number.splice(2, 4, 99, 555, 8888);
console.log(partial4);
console.log(number);

// foo and bar
for(let i = 1; i<= 50; i++){
if(i % 3 ===0 && i % 5 === 0){
        console.log('foobar');
       }
    else if(i% 3===0){
    console.log('foo');
   }
   else if(i % 5 === 0){
    console.log('bar');
        }
   
   else{
    console.log(i);
   }
} 



















// conceptual section
// 3 ar namta likho

// for(let i = 1; i <10; i++){
//     console.log(i + "*" +3+"="+i*3);
// }

// // find big number than 5
// let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
// for(let i =0; i< numbers.length; i++){
//     const element = numbers[i];
//     // console.log(element);
    
// }

// radian to degree
// 1red = 180 pai
// 10rad * 180/pI
// 55rad * 180/pI
// function radianToDegree(radian){
//  const pI = 3.14159265359;
//  const degree = (radian * (180/pI)).toFixed(2);
//  console.log(degree);
//     return degree
// }
// let result = radianToDegree(199);
// console.log(result);

// // Best Friend
// function isBestFriend(objectOne, objectTwo){
//     if(objectOne.name ==objectTwo.friend && objectTwo.name ==objectOne.friend){
        
//     }
// }