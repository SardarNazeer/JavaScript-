// Operators 
// Arithematic, comparision, logical, assigment, unary, ternary 

// + - / * % **
// = == ===
/* < > <= >= ! != !== !!  */
//  && || 
// ?:


// 2 ** 3 = 8;  // its mean 2 power 3
let a = 12; // assigment operator
12 == 13;  // comparision operator

// == properly check nahi karta for example

12 == 13;  // false
12 == "12";  // true
12 === "12";  // false > it checks the data type
12 != 13;  // true


let b = 12;
b += 3; // 15
b -= 11 // 4
b *= 2;  // 8
b /= 4; // 2
b %= 2;  // 0

// Logical Operators
// && || 

// Unary Operator 
// + - ! typeof ++ --

// Ternary Operator 
// ?:

// condition ? true hune ka code : false hune ka code
12 > 13 ? console.log(true) : console.log(false);

// typeof> null & array ka type galat batata hai

typeof null; // object
typeof [];  // object

// instanceof > matlab ke ye isse nikla hua hai 
// instanceof > work on reference data types not on primitive data types 
a instanceof Array // true