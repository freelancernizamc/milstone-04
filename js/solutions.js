// Problem: Write a function to do addition of following array: [5, 6, 7], [8, 9, 4] and [3, 5 2];
    var arr1 = [5, 6, 7];
    var arr2 = [8, 9, 4];
    var arr3 = [3, 5,2];
function sumOfArray(arr){
    var sum = 0;
    for ( var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    console.log(sum);
}
    sumOfArray(arr1);
    sumOfArray(arr2);
    sumOfArray(arr3);

    // Problem: Find the cheapest phone from an array
    // Ans:
    const phones = [
        {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'}, 
        {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'gray'}, 
        {name: 'iphone', camera: 10, storage: '32gb', price: 82000, color: 'silver'}, 
        {name: 'Xomi', camera: 10, stora0e: '32gb', price: 52000, color: 'blue'}, 
        {name: 'Oppo', camera: 10, storage: '32gb', price: 20000, color: 'silver'}, 
        {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'}, 
        {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'},
        ];

        function cheapestPhone(phones){
            let cheapest = phones[0];
        for(let i =0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
        cheapest = phone;
                }
            }
        return cheapest;
        }
        const mySelection = cheapestPhone(phones);
        console.log(mySelection);


        // Problem: Calculate the total cost of the products in a shopping cart
        const shoppingCart = [
            {name: 'shoe', price: 1200},
            {name: 'shirt', price: 2200},
            {name: 'pant', price: 3700},
            {name: 'balt', price: 600}
            ];
            function totalCost(products){
            let sum = 0;
            for(let i =0; i< products.length; i++){
            const product = products[i];
            sum = sum + product.price;
            console.log(products);
                }
            return sum;
            }
            
            const expense = totalCost(shoppingCart);
            console.log('Total expense today:', expense);


            let sum=0; 
            for( let i = 0; i<=3;i++){ 
            sum = sum + i; 
            }
            console.log(sum);

            // Find small value of an array
     
            let numbers = [20, 30, 40, 50,60, 70];
            var min = Math.min.apply(null, numbers);
            console.log(min);

             // Find big value of an array
             var numbers2 = [20, 30, 40, 50,60, 70];
             var max = Math.max.apply(null, numbers);
             console.log(max);

            //  Find small value in three numbers
            var num1 = 50;
            var num2 = 60;
            var num3 = 90;
            var minNumber = Math.min(num1, num2, num3);
            console.log(minNumber);

            // For maximum number
            var maxNumber = Math.max(num1, num2, num3);
            console.log(maxNumber);

 //একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে।
            let arr= [20, 30, 40, 50]
            // function sumOfArray(arr){
            //     var sum = 0;
            //     for ( var i = 0; i < arr.length; i++){
            //         sum += arr[i];
            //     }
                
            //     console.log(sum);
            // }
            //     sumOfArray(arr);

            function aveOfArray(arr){
                var ave = 0;
                for ( var i = 0; i < arr.length; i++){
                    ave += arr[i]/4;
                    
                }
                return ave;
               
            }
                const average = aveOfArray(arr);
                console.log(average);

                // একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।            
                var width = 20;
                var height = 30;
                
                function areaRec(width, height){
                    var area = width*height;
                    for ( var i =0; i< area.length; i++){
                        
                        area += width*height;
                    }
                    return area;
                   
                }
                const area = areaRec(width, height);
                console.log(area);

                // কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। 

                function findSecondLargest(a){
                    let secondLargest = 0;
                for (let i = n - 2; i >= 0; i--) {
                    if (a[i] != a[n - 1]) {
                      secondLargest = a[i];
                      break;
                    }
                  }
                
                  return secondLargest;
                }
                
                const a = [12, 60, 1, 10, 40, 1];
                let n = a.length;
                let secondLargest = findSecondLargest(a, n);
                console.log("The second largest element in the array is: " + secondLargest);

                //একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো।

                var myName = 'nizam';    // string variable
                var isHappy = true;     // boolean variable
                var batch = 7;           //number variable
                console.log(myName);
                console.log(isHappy);
                console.log(batch);
                // write two variable and change one.


                    let myBatch = 6;
                    const myId = 012;

                    function changeBatch(){
                    myBatch = 07;
                    }
                    changeBatch();
                    console.log("myBatch is " + myBatch);


                    var num1 = 50;
                    var num2 = 30;
                    var addition = num1 + num2;
                    var subtraction = num1 - num2;
                    var multiplication = num1 * num2;
                    var division = num1/num2;
                    console.log(addition);
                    console.log(subtraction);
                    // console.log(parseInt(division));
                    console.log(parseFloat(division.toFixed(2)));
                    console.log(multiplication);

                    // var number1 =55; var number2 = 85;
                    // number1 > number2;
                    // if(number1 > number2){
                    // console.log('number1 is big'); 
                    // }else if(number1 % 2 ==0){
                    // console.log('number1 is even number');
                    // }else{
                    // console.log('number1 is odd number');
                    // }

    // Problem: তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।          
    let marks = 650;
    let assignment =50;    
    if(marks>=600 && assignment >= 50){
        console.log('You are elejible for SCIC');
    } else{
        console.log('You are not elejible');
    } 
    var marks2 = 500;
    var assignment2 = 45;
    if(marks2>=600 || assignment2>=50){
        console.log('You are elegible for SCIC');
    }else{
        console.log('You are not elegible');
    }

    let yourMarks = 700;
    let assignmentMarks = 60;

    if(yourMarks>=600){

    console.log('You will get chance SCIC')

        }else if(assignmentMarks>=50){

    console.log('You will get chance to get a job');

    }
    else{

    console.log('You are not eligible for SCIC')

    }


// Problem: তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে?
    
    let m = 7;
while(m<=19){
    console.log('odd Number' + m);
    m+=2 //i=i+2
}

// Problem: তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
// Ans:

var student = ['nizam', 'abir', 'arefa', 'raju'];
console.log(student.length);
student.splice(3, 1, 'nahian');
console.log(student);
student.push('naisa', 'naho');
console.log(student);
student.pop();
console.log(student);

// Problem: তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
// Ans:
let family = ['nahar', 'joynal', 'nizam','selina', 'arefa', 'akib', 'nahian'];
for(var i=0; i< family.length; i++){
    var element = family[i];
    console.log(element);
}

// Problem: তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো
// Ans:

var mnumbers = [40, 80, 90, 50, 85, 95, 23, 89];
console.log(mnumbers.sort());
for (var i = 0; i<mnumbers.length; i++){
    var element = mnumbers[i];
    if(element>80){
        console.log(element);
    }
    
}

// Problem: তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে।
// Ans: 
var num1 = 20;
var num2 = 30;
var num3 = 40;
//  var multiplication2 = element1*element2*element3;

function multiply(num1, num2, num3){
    console.log(num1, num2, num3);
    return num1 * num2 * num3;
}
const output = multiply(20,30,40);
console.log(output);

// Problem:একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

let student3 = {name: "nizam",
                id: 3473,
            batch  :07};

    student3.batch ='06';   
    
     console.log(student3);   
     var mobile ={
        brand: 'sumsung',
        price: 19000,
        storage: '64gb',
        camera: '7mp'
    } 
    console.log(mobile.brand);
    mobile.price = '40000';
    console.log(mobile);

// Problem: সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

    function feetToInch(feet){
        const inche = feet*12;
        return inche;
      }
      const givenFeet = 2;
      const getInches = feetToInch(givenFeet);
      console.log(getInches);

    //   Problem:  একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে

    function centimeterToMeter(centimeter){
        const meter = centimeter/100;
        return meter;
    }
    const givenCentimeter = 300;
    const getMeter = centimeterToMeter(givenCentimeter);
    console.log(getMeter);

    // Problem: আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।

    // এইবার ভালো করে খেয়াল করো।
    
    // প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
    
    // সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
    
    // তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা
    
    // এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।
    
    // উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

    // Ans:
    function paperRequirements(firstbookcopy,secondbookcopy,thirdbookcopy){
        fbPaperReq = 100*firstbookcopy;
        sebPaperReq = 200*secondbookcopy;
        thbPaperReq = 300*thirdbookcopy;
        const totalPaperReq = fbPaperReq + sebPaperReq + thbPaperReq;
        return totalPaperReq;
    }
    const totalPaperReq = paperRequirements(80, 50, 40);
    console.log(totalPaperReq);

    // Problem: একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
    // Ans:
    
    
    
    function bestFriend(array) {
        var longestWord = "";
      
        array.forEach(function(word) {
          if(word.length > longestWord.length) {
            longestWord = word;
          }
        });
      
        return longestWord;
      }
      var friends = bestFriend(['rana', 'santono', 'mim']);
      console.log(friends);
   

    //   Write a programme a reversed string
    // program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = ('I am Nizam: ');

const result = reverseString(string);
console.log(result);

// Problem: এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

  let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, -9, -10, 20];
function positiveNumbers(numbers5) {
    let result5 = [];
    for (let i = 0; i < numbers5.length; i++) {
      if (numbers5[i] < 0) {
        break;
      }
      result5.push(numbers5[i]);
    }
    return result5;
  }
  const result5 = positiveNumbers(numbers5)
  console.log(result5);
  


 
    