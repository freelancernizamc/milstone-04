// Find the value of an element by index
var score = [20, 30, 40, 50, 60];
var scoreIndex = score.indexOf[30];
console.log(score);

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
