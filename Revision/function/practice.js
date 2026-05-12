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

function digitCount(number){
    let sum = 0;

    while (number > 0) {
        let digit = number % 10;

        sum = sum + digit;

        number = Math.floor(number/10);
    };
    return sum;
}

console.log(digitCount(1234));
console.log(digitCount(9989));
console.log(digitCount(2345));


// Create a function to find the largest of three numbers.

function threeLarNum(num1,num2,num3){
    if (num1>num2 && num1>num3) {
        console.log(`num1 ${num1} is greatest number`);
    } else if(num2>num1&&num2>num3){
        console.log(`num2 ${num2} is greatest number`);
    } else{
        console.log(`num3 ${num3} is greatest number`);
    }
}

threeLarNum(34,342,65)

// Write a function to print Fibonacci series using a loop.

function fibonacci(n){
    let first = 0;
    let second = 1;

    for(let i = 1; i <= n; i++){
        
        console.log(first);
        let next = first + second;

        first = second;
        second = next;
    };
};

fibonacci(10);

// Advanced Level (21–30)

// Create a function that takes another function as a parameter (callback).
// Write a function that returns another function (closure).
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

// 1.	Create a function that prints Hello World.
// 2.	Create a function that prints your name.
// 3.	Create a function that adds two numbers.
// 4.	Create a function that subtracts two numbers.
// 5.	Create a function that multiplies two numbers.
// 6.	Create a function that divides two numbers.
// 7.	Create a function that returns remainder.
// 8.	Create a function that checks whether a number is even or odd.
// 9.	Create a function that checks whether a number is positive or negative.
// 10.	Create a function that returns square of a number.
// 11.	Create a function that returns cube of a number.
// 12.	Create a function that converts minutes into seconds.
// 13.	Create a function that converts hours into minutes.
// 14.	Create a function that converts Celsius into Fahrenheit.
// 15.	Create a function that calculates area of rectangle.
// 16.	Create a function that calculates perimeter of rectangle.
// 17.	Create a function that checks whether a user can vote or not.
// 18.	Create a function that returns full name using first name and last name.
// 19.	Create a function that checks whether a letter is vowel or consonant.
// 20.	Create a function that returns largest number between two numbers.

// LEVEL 2 — Intermediate Logic (21–40)

// 21.	Create a function that returns largest number among three numbers.
// 22.	Create a function that checks pass or fail.
// 23.	Create a function that returns grade according to marks.
// 24.	Create a function that calculates percentage of three subjects.
// 25.	Create a function that checks whether a number is divisible by 5.
// 26.	Create a function that checks whether a number is divisible by both 3 and 5.
// 27.	Create a function that returns factorial of a number.
// 28.	Create a function that prints table of a number.
// 29.	Create a function that counts total digits in a number.
// 30.	Create a function that reverses a number.
// 31.	Create a function that checks whether a number is palindrome or not.
// 32.	Create a function that returns sum of all numbers from 1 to n.
// 33.	Create a function that finds largest number in an array.
// 34.	Create a function that finds smallest number in an array.
// 35.	Create a function that returns sum of array elements.
// 36.	Create a function that returns average of array elements.
// 37.	Create a function that counts even numbers in an array.
// 38.	Create a function that counts odd numbers in an array.
// 39.	Create a function that searches a number inside array.
// 40.	Create a function that removes duplicate values from array.

// LEVEL 3 — Advanced Programmer Thinking (41–60)

// 41.	Create a function that checks login credentials.
// 42.	Create a function that validates password.
// 43.	Create a function that validates email.
// 44.	Create a function that calculates discount price.
// 45.	Create a function that calculates tax on product price.
// 46.	Create a function that checks ATM withdrawal.
// 47.	Create a function that deposits money into account.
// 48.	Create a function that transfers money between accounts.
// 49.	Create a function that generates random OTP.
// 50.	Create a function that masks bank account number.
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
