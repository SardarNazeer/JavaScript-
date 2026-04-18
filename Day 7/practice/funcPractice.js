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