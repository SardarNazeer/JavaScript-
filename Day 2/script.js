// TEMPORAL DEAD ZONE
// cannat access a before initialization
// utna area jis me js ko pata hai ke var exist karta hai lekin acceess nahi kar sakta 
// wo area jo kisi var tak khali para ho use tdz kehta hai 

console.log(a);
let a = 12;


// Hoisting impact per type 
// hoisting > ek var ko jab js me banate hai to wo do parts me tot jata hai
// uska declare part uper chala jata hai or initialize part niche reh jata hai

var b = 13;

var b = undefined;  //declare part
b = 13;   // initialize part

// var > hoist > undefined 
// let > hoist > X (value set nahi huti )
// const > hoist > X (value set nahi huti )


// Why var leak outside block but let does'nt? 

console.log(ab);
var ab = "Sardar";

console.log(age);
let age = 18;

var x = 1; // global scope
{
    var x = 3;
}

console.log(x);


if (true) {
    var c = 3;
    let d = 5;
}

console.log(c); // 3
console.log(d); // reference error

// WHY CONST ALLOW CHANGING OBJECT PROPERTIES? 

const person = { name: "sardar"};
person.name = "nazeer";  //allowed
person = {};  //not allowed

// ap const ki value reassign ya redeclare nahi kar skty
//  lekin object ki property change kar skte hai const me 

