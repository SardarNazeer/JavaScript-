// function in js

// In JavaScript, a function is a block of code designed
// to perform a specific task. It runs when it is called (invoked).
// function statemnet

function greet() {
    console.log("Hello");
}
// Ye function sirf define hua hai (banaya hai), abhi run nahi hua.

greet();
// ab ye function run huga or output show huga 

// 2nd method of creating function 
// jo variable ka naam huga wahi function ka naam huga 
// function expression

let fnc = function () {
    
}


// fat arrow function

let fncc =  () => {
    
};

// parameter
// Parameters wo variables hote hain jo function define karte waqt likhe jate hain. eg Name

// Arguments
// Arguments wo actual values hoti hain jo function call karte waqt pass ki jati hain.

function hello(name){
    console.log(`${name} hello brother`)
}

hello("Sardar Nazeer");
hello("Sameer");
hello("Ali");


// Default rest, and spread parameters

// default paramters
//  jab user values pass nahi karte or ap khud koi value dedo use default kehte hai

function ad(v1 = 0,v2 = 0) {
    console.log(v1+v2);
}

ad();
ad(2,4);  // or agar apne koi value pass krdi wahi store hujayegi usme


function add(v1,v2) {
    console.log(v1+v2);
}

add(); // output NaN (DO NON NUMBERS KO ADD KIA JA RAHA HAI)

function addd(v1,v2) {
    console.log(v1, v2);
}

addd(); // output Undefined (qk v1,v2 var hai or usme koi value nahi di)


// rest parameters

// jab argument bht sare ho to humein utne he paramters banane parenge
// isse bachne ke liye humein rest paramaters ya spread parameters banate hai ...
// agar ... function ky paramters space me lage to wo rest operator hai
// agar wo arrays and object me lage wo spread opeartors hai

function rst(...val) {
    console.log(val);
}

rst(1,4,6,7,8,8,9,8);


// Return value and early return
// return matlab jaha se aye ho wahi daal denge
// Return value wo value hoti hai jo function apna kaam karke wapas deta hai.
// Jab function return use karta hai, to wo result bahar bhej deta hai

function abcd(){
    return 12;
}

let val = abcd();
console.log(val);

// return ke baad function turant stop ho jata hai

function test() {
  console.log("Hello");
  return;
  console.log("World"); // ye kabhi run nahi hoga
}

test();

// Early Return
// Early return ka matlab hai function ko jaldi exit kar dena jab koi condition meet ho jaye.
// use case validation me huta hai

// example

function checkAge(age) {
  if (age < 18) {
    return "Not allowed"; // early return
  }
  return "Allowed";
}

console.log(checkAge(16)); // Not allowed


// first class function
// functions ko values ki tarah treat kar sakty hai
// kisi function ke arguments me function bhejna lekin us func ko naam nahi de skte

function xyz(val) {
    val();
}

xyz(function() {
    console.log("hello world");
})


// higher order function
// jo ke return kare ek function ya fir accept kare ek function apne parameter me

function userGreet(name){
    return "Hello" + name;
}

function userInput(callBack){
    let name = "Sardar";
    console.log(callBack(name));
}

userInput(userGreet);

// processUserInput = Higher Order Function
// greet = callback function

// Function as Return Value
// Jab function dusra function return kare:

function multiply(factor) {
    return function(num) {
        return num * factor;
    }
}

let double = multiply(3);
console.log(double(3));

// Pure Vs Impure Function

// pure > aisa function jo function ke bahir ki value ko na badle


let a = 3;

function pure() {
    console.log("Hello")
}

// impure > aisa function jo function ke bahir ki value badal dy

function impure() {
    a++;
}


// Closure and lexical scoping

// Closures > ek function jo return kare ek or function 
// or return hune wala function hamesha use karega parent function ka koi variable

function cloFnc() {
    let a = 13;
    return function(){
        console.log(a);
    }
}

// lexical scoping > var ki physical position

function lexSco(){
    let a = 3;
    function abcd(){
        let b = 4;
        function efg(){
            let c = 14;
        }
    }
}


// IIFE (IMMEDIETLY INVOKED FUNCTION EXPRESSION)

// Normally function ko pehle define karte hain, phir call karte hain

function sayHello() {
  console.log("Hello");
}
sayHello();

// Lekin IIFE me function banate hi turant execute ho jata hai.

(function(){
    
})();

// (function(){}) → function expression
// () → turant call

// Hoisting diffrences b/w declartion and expression
// hoisting > kisi func ya var banane se pehla declare kar dena

abcdee();

function abcdee() {
    console.log("hello")
}

// ye run karega qk ye function statemnet hai 

abcds();

let abcds = function(){
    console.log("hey");
}

// ye run nahi karega qk hoisting function expression me kam nahi karta

