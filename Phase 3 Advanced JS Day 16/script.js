// This keyword in JS

// it is an special keyword, qk jaise ky baki sare keywords ki values ya unka nature
// same rehta, this keyword ki value ya nature badaal jate hai, 
// is waja se ky ap use kaha use kar rhy ho

// This in global scope, function, method, event handler, class

// global scope me this ki value window huti hai
// window > supreme thing hai
console.log(this)  // this is global scope

// function ke ander bhi value window hugi
function abcd(){
    console.log(this)
}

abcd();

// method: object ke ander jab hum func banate hai function keyword se wo method hai
// method ke ander this ki value object huta hai

let obj = {
    name: "Sardar",
    sayName: function(){
        console.log(this);
    },
};

obj.sayName();

// this in event handler
// event handler ke ander this wahi huga jispe addEventListener laga huga

document.querySelector("h1").addEventListener("click", function(){
    console.log((this.style.color = 'red'));
})

// this in Class: class ke ander this ki value blank obj huti hai jab new keyword k sth cal kru

class ABcd{
    constructor(){
        console.log("hello world");
        this.a = 12;
    }
}

let val = new ABcd();
val();

// Arrow Function and lexical this 

// Manual binding: bind, call, apply

