// q1) what's the difference b/w function declarartion and expression in terms of hoisting

//function statement hoist hoty hai or function expression hoist nahi huty
// example

// function statement

abc();

function abc() {
    console.log("hello");
}

// function expression

// abcd();

// let abcd = function() {
//     console.log("hey");
// }

// Q2) What does the ... operator mean in parameter 
// ... mean rest operator 

function valFunc(...val) {
    console.log(val);
}

valFunc(12,3,4,6,7,8,9);

// Q3) Use rest parameter to accept any number of scores and return the total 

function getScores(...val) {
    let total = 0;
    val.forEach(function (value) {
        total = total + value;
    });
    return total;
}

console.log(getScores(10,23,4,56,76));


// Q4) Create a fnction to check age > 18 "Allowed" & "Not Allowed"

function checkAge(age) {
    if(age>18) return "Allowed";
    return "Not Allowed";
}

console.log(checkAge(19));


// Q5) Aisa function jo kuch bhi returm nahi karta wo kya output dega 

function f() {
    return;
}

console.log(f());  // undefined

// Q6) What does it mean when we say "function are first class citizens"?

// iska matlab huta hai function value ki tarah treat kar sakte ho
// ap function ko variable me save kr skte hai
// arguments me fynction pass kr sakte hai

// Q7) Pass a function into another function and execute it inside. 

function abcde(val) {
    val();
}

abcde(function() {
    console.log("hey");
})

// Q8) What is higher order function 

// ek aisa function jo return kare ek or function ya parameter me accept kre function

// Q9) Can you assign a function to a variable and then call it 

let varFun = function() {
    console.log("hello")
}

varFun();

// Q10) What is a closure? when it is created

// closure > ek aisa function jo return kare ek or function 
// or ander wala function bahir wale function ki value ko use kre

function hello() {
    let a = 6;
    return function() {
        console.log(a);
    };
}

console.log(hello());


// Q11) Convert this normal function into an IIFE 

function init() {
    console.log("initialized");
}

(function() {
    console.log("initialized");
})();

// Q12) Create a function that prints hello world 

function helloWorld(){
    console.log("Hello World");
}

helloWorld();

// Q13) Write a function that takes a name as a parameter and prints it.

function myFunc(name){
    console.log(name);
}

myFunc("Sardar Nazeer");

// Q14) Create a function to add two numbers.

function sum(num1,num2){
    return num1 + num2;
}

console.log(sum(22,32));

// Q15) Write a function that returns the square of a number.

function Square(sqr){
    return sqr*sqr;
}

console.log(Square(11));

// Q16) Create a function to check if a number is even or odd.

function evenOdd(num){
    if(num%2===0) return "Even";
    return "Odd";
}

console.log(evenOdd(11));


// Q17) Write a function to check if a number is positive, negative, or zero

function checkNum(num){
    if (num>0) {
        console.log(`${num} is positive`);
    } else if (num<0) {
        console.log(`${num} is negative`);
    } else if (num === 0) {
        console.log(`${num} is zero`);
    }
}

checkNum(-22);

// Q18) Create a function to print numbers from 1 to 10.


function printNum() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        
    }
};

printNum();


// Q19) Write a function that returns the cube of a number.

function cube(num){
    return num*num*num;
}

console.log(cube(3));

// Q20) Create a function that returns the larger of two numbers.

function largerNum(a,b){
    if(a>b) return `${a} is greater than ${b}`;
    return `${b} is greater than ${a}`;
}

console.log(largerNum(34,89));

// Q21) Write a function to calculate simple interest.

function calculateSI(P,R,T){
    let SI = (P*R*T)/100;
    return SI;
}

let simpleIntrest = calculateSI(1200,5,2);

console.log(`Simple Intrest Is ${simpleIntrest}`);

// Q22) Create a function to calculate the factorial of a number.

function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result = result * i;
    };
    return result;
}

console.log(factorial(6));

// Q23) Write a function to print the multiplication table of a number.

function multiplication(n){
    for(let i = 1; i<=10; i++){
        result = n * i;
        console.log(`${n} x ${i} = ${result}`);
    }
}

multiplication(6);

// Q24) Create a function to manually count the length of a string (using a loop).

function stringLen(str){
    count = 0;
    for(let i = 0; str[i]; i++){
        count++;
    }
    return count;
}

console.log(stringLen("hello"))

// Q25) Create a reusable discount calculator (HOF)

function discountCalculator(discount) {
    return function(price){
        return price - price * (discount/100)
    }
}

let discounter = discountCalculator(20);
console.log(discounter(900));


// Q26) Build a counter using closure 

function counter() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}



let c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

let d = counter();

console.log(d());
console.log(d());
console.log(d());

console.log(c());

// Q27) Create a pure function to transform a value 

function transformVal(val){
    return val * 2;
}

console.log(transformVal(30));


// Q28) Use IIFE to isolate variables 

// iife > is function ke ander jo variable huty wo function ke bahir access nahi kar skty

(function(){
    let password = "my_password";
    console.log(password)
})();

