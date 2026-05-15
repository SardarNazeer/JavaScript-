// Basic Level (1–10)

// Create a function that prints 'Hello World'.

function helo() {
  console.log("hello world");
}

helo();

// Write a function that takes a name as a parameter and prints it.

function greet(name) {
  console.log("Hello" + " " + name);
}

greet("Sardar");

// Create a function to add two numbers.

function add(a, b) {
  return a + b;
}

let result = add(6, 8);
console.log(result);

// Write a function that returns the square of a number.

function square(sqr) {
  return sqr * sqr;
}

let sqrResult = square(4) + square(9);
console.log(sqrResult);

// Create a function to check if a number is even or odd.

function checkNum(num) {
  if (num % 2 !== 0) {
    console.log(`${num} is odd`);
  } else {
    console.log(`${num} is even`);
  }
}

checkNum(18);
checkNum(19);

// Write a function to check if a number is positive, negative, or zero.

function checkNum2(num) {
  if (num > 0) {
    return `${num} is positive`;
  } else if (num < 0) {
    return `${num} is negative`;
  } else {
    return `${num} is zero`;
  }
}

let res = checkNum2(5);
console.log(res);
res = checkNum2(-2);
console.log(res);
res = checkNum2(0);
console.log(res);

// Create a function to print numbers from 1 to 10.

function printNumber1_10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

printNumber1_10();

// Write a function that returns the cube of a number.

function cube(num) {
  return num * num * num;
}

let cubeRes = cube(3);
console.log(cubeRes);

// Create a function that returns the larger of two numbers.

function largestNum(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} num1 is greater than ${num2}`);
  } else {
    console.log(`${num2} num 2 is greater than ${num1}`);
  }
}

largestNum(16, 19);

// Write a function to calculate simple interest.

let interest = 5;

function calInterest(amount) {
  interest = (interest / 100) * amount;
}

calInterest(5000);
console.log(interest);

// Intermediate Level (11–20)

// Create a function to calculate the factorial of a number.

function factorial(num) {
  let factorial = 0;

  for (let i = 1; i <= num; i++) {
    i = i * num;
  }

  console.log(factorial);
}

factorial(4);

// Write a function to print the multiplication table of a number.

function table(num) {
  for (let i = 1; i <= 10; i++) {
    let result = i * num;
    console.log(result);
  }
}

table(3);

// Create a function to manually count the length of a string (using a loop).

function strLeng(str) {
  return str.length;
}

let stringLength = strLeng("Hello World");
console.log(stringLength);

// Write a function to reverse a string.

function reverse(OriginalString) {
  let reversedString = "";

  for (let i = OriginalString.length - 1; i >= 0; i--) {
    reversedString = reversedString + OriginalString[i];
  }
  return reversedString;
}

console.log(reverse("Sardar Nazeer"));

// with built in function

let reversed = (text) => {
  // split > text jo paramtere me le rhe ho usko array me convert kr dega
  // like text = ["A","l","i"];
  // reverse > is array pe reverse chalega last index se or array me jor dega
  // like text = ["i","l","A"];
  // join > array ko dobara string me convert kar dega
  // like text = "ilA";

  let reversedString = text.split("").reverse().join("");
  return reversedString;
};

console.log(reversed("Ali"));

// Create a function to check if a string is a palindrome.

function isPallindrome(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
  }

  if (reversed === text) {
    console.log("text isPallindrome");
  } else {
    console.log("text is not pallindrome");
  }

  return reversed;
}

isPallindrome("madam");
isPallindrome("keys");

// with built in function

function pallindrome(text) {
  let reversed = text.split("").reverse().join("");

  return reversed === text;
}

console.log(pallindrome("Sardar"));

// Write a function to count vowels in a string.

function vowelCount(text) {
  let count = 0;

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("Sardar Nazeer"));

// Write a function to find the sum of digits of a number.

function digitCount(number) {
  let sum = 0;

  while (number > 0) {
    let digit = number % 10;

    sum = sum + digit;

    number = Math.floor(number / 10);
  }
  return sum;
}

console.log(digitCount(1234));
console.log(digitCount(9989));
console.log(digitCount(2345));

// Create a function to find the largest of three numbers.

function threeLarNum(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`num1 ${num1} is greatest number`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`num2 ${num2} is greatest number`);
  } else {
    console.log(`num3 ${num3} is greatest number`);
  }
}

threeLarNum(34, 342, 65);

// Write a function to print Fibonacci series using a loop.

function fibonacci(n) {
  let first = 0;
  let second = 1;

  for (let i = 1; i <= n; i++) {
    console.log(first);
    let next = first + second;

    first = second;
    second = next;
  }
}

fibonacci(10);

// Advanced Level (21–30)

// Create a function that takes another function as a parameter (callback).

// Write a function that returns another function (closure).

function outer() {
  let name = "Sardar Nazeer";

  function inner() {
    console.log(name);
  }
  return inner();
}

let resClosure = outer();

// Create a recursive function to calculate factorial.
// Write a recursive function to generate Fibonacci numbers.
// Create a function using currying (e.g., add(2)(3)).
// Write a function that calls another function multiple times using a loop.
// Create a function that runs after a delay using setTimeout.
// Write a function that limits how many times another function can be called.
// Create a function to check if a number is prime.
// Write a function to check if a number is an Armstrong number.

// JavaScript Functions — 60 Logic Building Questions + 6 Real World Projects

// LEVEL 1 — Beginner Functions (1–20)

// Create a function that converts minutes into seconds.

function convertMinInSec(min) {
  let sec = min * 60;
  return sec;
}

console.log(convertMinInSec(10));

// 13.	Create a function that converts hours into minutes.

function convertHrInMin(hours) {
  let min = hours * 60;
  return min;
}

console.log(convertHrInMin(4));

// 14.	Create a function that converts Celsius into Fahrenheit.

function convertCelInFah(cel) {
  let Fahrenheit = (cel * 9) / 5 + 32;

  return Fahrenheit;
}

console.log(convertCelInFah(30));

// 15.	Create a function that calculates area of rectangle.

function calAreaOfRec(l, w) {
  let area = l * w;

  return area;
}

console.log(calAreaOfRec(23, 45));

// 16.	Create a function that calculates perimeter of rectangle.

function calPerOfRec(l, w) {
  let p = 2 * (l + w);

  return p;
}

console.log(calPerOfRec(3, 5));

// 17.	Create a function that checks whether a user can vote or not.

function userEligibility(age) {
  if (age >= 18) {
    console.log("Eligible");
  } else {
    console.log(" Not Eligible");
  }
}

userEligibility(18);

// 18.	Create a function that returns full name using first name and last name.

function fullName(firstName, lastName) {
  let fulName = firstName + lastName;
  return fulName;
}

console.log(fullName("Sardar", "Nazeer"));

// 19.	Create a function that checks whether a letter is vowel or consonant.

function letterCheck(c) {
  c = c.toLowerCase();

  if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
    console.log("letter is vowel");
  } else {
    console.log("letter is consonant");
  }
}

letterCheck("e");

// LEVEL 2 — Intermediate Logic (21–40)

// 22.	Create a function that checks pass or fail.

function checkPassOrFail(marks) {
  if (marks >= 33) {
    console.log("You are passed");
  } else {
    console.log("You are failed");
  }
}

checkPassOrFail(59);
checkPassOrFail(32);

// 23.	Create a function that returns grade according to marks.

function grade(math, eng, urdu) {
  let totalMarks = 300;
  let obtainedMarks = math + eng + urdu;
  let percantage = (obtainedMarks / totalMarks) * 100;
  percantage = Math.floor(percantage);
  console.log(percantage);

  if (percantage >= 90 && percantage <= 100) {
    console.log("A1 Grade");
  } else if (percantage >= 80 && percantage <= 90) {
    console.log("A Grade");
  } else if (percantage >= 70 && percantage <= 80) {
    console.log("B Grade");
  } else if (percantage >= 60 && percantage <= 70) {
    console.log("C Grade");
  } else if (percantage >= 50 && percantage <= 60) {
    console.log("D Grade");
  } else {
    console.log("fail");
  }
}

grade(80, 78, 12);


// 25.	Create a function that checks whether a number is divisible by 5.

function checkNumDiv(num){
  if (num % 5 === 0) {
    console.log("Number is divisible by 5")
  } else {
    console.log("Number is not divisible by 5")

  }
}

checkNumDiv(20);

// 26.	Create a function that checks whether a number is divisible by both 3 and 5.

function checkNumber(num){
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("number is divisible by both")
  } else{
    console.log("not divisible");
  };
};

checkNumber(15);

// 32.	Create a function that returns sum of all numbers from 1 to n.

function sumFunc(n){
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  };
  return sum;
}

console.log(sumFunc(12));

// 33.	Create a function that finds largest number in an array.


function larNumArr(array){
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i]>largest) {
      largest = array[i];
    }
    
  };
  return largest;
};

console.log(larNumArr([10,20,30,40,50]));

// 34.	Create a function that finds smallest number in an array.

function smallestNumArr(arr){
  let smallest = arr[0];

  for(let i = 0; i <arr.length; i++){
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  };
  return smallest;
}

console.log(smallestNumArr([10,20,30,40,50]))

// 35.	Create a function that returns sum of array elements.

function sumOfArr(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArr([12,3,4,5,6]));

// 36.	Create a function that returns average of array elements.

function averageArr(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  };
  return sum/arr.length;
};

console.log(averageArr([2,4,6,8,9]));



// 37.	Create a function that counts even numbers in an array.

function evenArr(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sum++;
    }
  };
  return sum;
};

console.log(evenArr([2,3,4,6,7,8,10]));

// 38.	Create a function that counts odd numbers in an array.

function oddArr(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum++;
    };
  };
  return sum;
};

console.log(oddArr([2,3,4,6,7,8,10]));


// 39.	Create a function that searches a number inside array.

function searchesArr(arr,num){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === num) {
      return `${arr[i]} search found`;
    }
  };
    return `not found`;

}

console.log(searchesArr([2,6,7,8,10,12,45],45));
console.log(searchesArr([2,6,7,8,10,12,45],60));





// 40.	Create a function that removes duplicate values from array.

function duplicateArrVal(arr){

  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i])
    };
    return unique;    
  }
}

console.log(duplicateArrVal([2,6,7,6,7,12,45]));


// LEVEL 3 — Advanced Programmer Thinking (41–60)

// 41.	Create a function that checks login credentials.

function loginCredentials(status){
  if (status === "yes") {
    console.log("user login");
  } else {
    console.log("user login failed")
  };
};

loginCredentials("yes");
loginCredentials("no");


// 42.	Create a function that validates password.

function validatePassword(id,password){
  if (id === "sardar" && password === 12345) {
    console.log(`${id} login`);
  } else {
    console.log(`${id} login failed`);
  }
}


validatePassword("sardar",12345);
validatePassword("sardar",123);


// 43.	Create a function that validates email.

function validateEmail(email){
  if (email.includes("@") && email.includes(".com")) {
    console.log("email is correct");
  } else {
    console.log("email is not correct");
  }
}

validateEmail("sardarnazeer@gmail.com");
validateEmail("sardarnazeer.com");



// 44.	Create a function that calculates discount price.

function calDiscount(price){
  let discount = 0;
  if (price > 5000 && price < 10000) {
     discount = (10/100) * price;
     return `${discount} on this ${price} 10 percent discount`;
  } else if (price > 3000 && price < 5000) {
     discount = (10/100) * price;
     return `${discount} on this ${price} 5 percent discount`;
  } else{
    return console.log(`${price} no discount on this price`);
  };
};

console.log(calDiscount(6600));
console.log(calDiscount(3320));
calDiscount(100);


// 45.	Create a function that calculates tax on product price.

function calTax(tax){
  let shoes = 5000;
  let jewellery = 7000;
  let shirt = 3000;

  let proTax = 0;

  if (tax >= 10) {
   proTax = (tax/100) * shoes;
    
  } else if (tax === 5) {
  proTax = (tax/100) * jewellery;
    
  } else if (tax === 2) {
  proTax = (tax/100) * shirt;
  } else {
    console.log(`${tax} not defined`);
  }
  return proTax;
}

console.log(calTax(5));
console.log(calTax(10));
console.log(calTax(2));
calTax(1);

// reusable function 

// ye function tax calculate karne ke lie 

function calculateTax(price,tax){
  return (price * tax) / 100;
};
// ye product pe tax cal karne ke lie 

function taxOnProduct(price, product){
  let productRule = {
    shoes: 10,
    jewellery: 5,
    shirt: 2,
  };

  if (!productRule[product]) {
    return `${product} not found`;
  };

  let tax = calculateTax(price, productRule[product]);
  let finalPrice = price + tax;

return {
  price: price,
  taxRate: productRule[product],
  taxAmount: tax,
  finalPrice: finalPrice
};

}

console.log(taxOnProduct(5900, "shoes"));
console.log(taxOnProduct(6790, "shirt"));
console.log(taxOnProduct(4400, "jewellery"));
console.log(taxOnProduct(5900, "pencil"));



// 46.	Create a function that checks ATM withdrawal.

function ATMwithdrawal(amount){
  let balance = 6000;

  if (amount <= balance) {
    balance -= amount;
    return `${amount} is withdraw successfully`;
  } else {
    return " insuficcient balance";

  }
};

console.log(ATMwithdrawal(3800));
console.log(ATMwithdrawal(6500));


// 47.	Create a function that deposits money into account.

  let balance = 8000;

function depositMoney(deposit){

  balance += deposit;

  return {
    message: `${deposit} money is deposit to your account`,
    checkBalance: balance,
  }
};

console.log(depositMoney(7000));
console.log(depositMoney(5000));


// 48.	Create a function that transfers money between accounts.

let account1Bal = 90090;
let account2Bal = 80090;

function transferMoney(from, to ,money){
  if (from === "sardar" && to === "ali") {
    account1Bal -= money;
    account2Bal += money;

      return {
    message: `${money} transfer from your account to ali`,
    sardarBalance: account1Bal,
    aliBalance: account2Bal,
  }
  } else if (from === "ali" && to === "sardar") {
    account2Bal -= money;
    account1Bal += money;
      return {
    message: `${money} transfer from your account to sardar`,
    sardarBalance: account1Bal,
    aliBalance: account2Bal,
  }
  } else {
    return `${from} user not found`
  }

}

console.log(transferMoney("sardar", "ali",78900));
console.log(transferMoney("sardar", "ali",67890));

console.log(transferMoney("ali","sardar",78900));
console.log(transferMoney("ali","sardar",7890));

console.log(transferMoney("ok","sardar",78900));


// 49.	Create a function that generates random OTP.

function OTPgenerate(){
  // math.floor > decimal remove karta hai 
  // math.random > 0.0000 to 0.9999 random number deta hai 
  let otp = Math.floor(1000 + Math.random() * 8999);
  return otp;
}

console.log(OTPgenerate());
console.log(OTPgenerate());
console.log(OTPgenerate());


// 50.	Create a function that masks bank account number.

// bank account number ko hide (mask) karna, sirf last digits show karna.

function maskAccNum(AccountNumber){
  // tostring > account no ko string me convert kar dega qk slice no pe kam nai krta 
  let str = AccountNumber.toString();
  // slice > humein akhir ke 4 number dega 
  let lastDigits = str.slice(-4);
  // str me jo acc no huga usme se 4 digit chor ke baki digit hide kar dega 
  let mask = "*".repeat(str.length - 4) + lastDigits;

  return mask;
};

console.log(maskAccNum(102026889012));

// 51.	Create a function that converts first letter of every word into capital.
// 52.	Create a function that counts vowels in a string.
// 53.	Create a function that reverses a string.
// 54.	Create a function that checks whether a string is palindrome.
// 55.	Create a function that counts words in a sentence.
// 56.	Create a function that removes spaces from string.
// 57.	Create a function that returns current date and time.
// 58.	Create a function that calculates age from birth year.
// 59.	Create a function that creates username automatically from full name.
// 60.	Create a function that creates bill receipt.

// 6 REAL WORLD FUNCTION PROJECTS

// Project 1 — Student Result Management System
// Features:
// •	calculate total
// •	percentage
// •	grade
// •	pass/fail

// Project 2 — ATM Banking System

// Features:
// •	deposit
// •	withdraw
// •	balance check
// •	transfer money

// Project 3 — E-commerce Shopping Cart

// Features:
// •	add products
// •	remove products
// •	quantity
// •	discount
// •	total bill

// Project 4 — Quiz Application

// Features:
// •	next question
// •	score calculation
// •	final result

// Project 5 — Employee Salary System

// Features:
// •	calculate salary
// •	overtime
// •	tax deduction
// •	bonus

// Project 6 — Notes App Logic

// Features:
// •	add note
// •	delete note
// •	search note
// •	update note
