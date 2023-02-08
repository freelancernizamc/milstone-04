// Assignment 04

// Problem 01
// Solutions:

function mindGame(number){
    result = (number * 3 + 10)/2 - 5;
    return result;

}
function validateAndPrint(number) {
  if (typeof number != number) {
    console.log("Invalid input. Please enter a string.");
  } else {
    
    console.log(mindGame(number));
  }
}

  const game = mindGame("nizam");
  console.log(game);

// Descriptions: The function mindGame takes a positive number num as input and returns the result of the calculation described in this problem. The calculation is performed using a single expression and the function returns the result.



// Problem 02
// Solution:




    // function evenOdd(str) {
    //     return str.length % 2 === 0 ? 'even' : 'odd';
          
    //     }
    function evenOdd(str) {
      return str.length % 2 === 0 ? 'even' : 'odd';
    }
    
    function validateAndPrint(str) {
      if (typeof str === "string") {
        console.log(evenOdd(str));
      } else {
        console.log("Invalid input. Please enter a string.");
      }
    }
    
    //  validateAndPrint(122); // outputs "odd"
    // validateAndPrint(123); // outputs "Invalid input. Please enter a string."
    
    
    
//   Description:
//   The function evenOdd takes a string str as input and returns 'even' if the number of characters in the string is even, and 'Odd' if it's odd. The length of the string is calculated using the .length property, and the modulo operator % is used to determine if it's even or odd. The ternary operator ? is used to return 'even' if the length is even and 'odd' otherwise.



//   Problem 03
// Solution:


function isLGSeven(number){
    let i = number - 7;
    if(i < 7){
        return i;
    }
    else{
        return number*2;
    }
}

//  const getValue = isLGSeven(15);
//  console.log(getValue);


// Descriptions: The function isLGSeven takes a number as input and returns the result of the calculation described in the problem. The variable i is used to store the absolute value of the difference between number and 7. The ternary operator ? is used to return i if it is less than 7, and return number * 2 otherwise. 


// Problem 04
// Solution:


function findingBadData(arr) {
    let noOfBadData = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        noOfBadData++;
      }
    }
    return noOfBadData;
  }


  // const getData = findingBadData([ -4, -9, -5, -33, -55 ]);
  // console.log(getData);

// Descriptions: The function findingBadData takes an array arr as input and returns the number of negative elements in the array. A variable count is used to keep track of the number of negative elements. The for loop iterates over the elements of the array, and the if statement checks if each element is negative. If an element is negative, the count variable is incremented by 1. Finally, the function returns the value of noOfBadData.

//  Problem 05
// Solution:


function gemsToDiamond(friend1gem, friend2gem, friend3gem){
    let  total= friend1gem*21 + friend2gem*32 +friend3gem*43;
      if(total < 1000*2){
          return total;
      }
      else if(total >= 1000*2){
          return (total-2000);
      }
  }


    // const getDiamond = gemsToDiamond(100, 5, 1);
    // console.log(getDiamond);

//   Descriptions: The function gemsToDiamond takes three numbers f1gem, f2gem, and f3gem as input and returns the total number of diamonds you will get by combining the gems of all your friends. The variable total is used to store the i number of diamonds, which is calculated by multiplying the number of gems for each friend by the power of gems per friend and summing the results. The ternary operator ? is used to return i - 2000 if total is greater than 1000*2, and return total otherwise.


/* Submitted By 
   Md Nizam Uddin  
   Batch 07 */
   