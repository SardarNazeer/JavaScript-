// var, let, const line by line comparision 

a = 12;   // ye tareeqa use nahi karenge
var a;
var a = 12;
let a = 12;
const a = 12;

// declaration & initialization 

var a;  // declare karna
var a = 13;  // declare & initialize the value

// var window me add karta hai value
// function scope hota hai
// phr se declare kiya ja sakta hai or koi errors nahi aega


// Scope (global, block, functional)

// scope mean var kaha tak use hu skta 
// apne function ke ander var banaya wo srf function me use huga or use hum kahenge functional scope 
// apne func ke bahir var banaya usko hum pure code me use kr skty hai global scope
// curly braces {} ke ander var banana block scoped hai 
//  block scope ke ander hum var nahi balke let lagate hai 



// reassigment & redeclaration 

// reasssigment dobara value dena 

var a = 16;
a = 32;

// redeclaration dobara se declare karna naam
// redeclaration is possible with var no with let 
