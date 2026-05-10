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

// method ke andeer agar function ko arrow function bana dia toh
// us surat me this ki value object nahi hugi wo apni value lose krke
// window ban jayega

let obj1 = {
    name: "Sardar",
    pukaro: ()=>{
        console.log(this);
    },
};

obj1.pukaro();

// agar method ke ander ek or function banaya to this apni value lose  kar dega
// or dobara window ban jayega

let obj2 = {
    name: "Sardar",
    callMe: function(){
        function defg(){
        console.log(this);
        };
        defg();
    },
};

obj1.callMe();

// agar ap chaho ke method ke ander wala function 
// window na bane to ap us func ko arrow bana do
// to this ki value object hugi 

let obj2 = {
    name: "Sardar",
    bulao: function(){
        let defg=()=>{
        console.log(this);
        };
        defg();
    },
};

obj2.bulao();

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


// this ki value 

// global me this ki value > window
// function me this ki value > window
// method with es5 function me this ki value > obj
// method with es6 func me this ki value > window
// es5 func inside es5 method > window 
// arrow func inside es5 method > object 
// event handler > element
// class > blank object 

// Manual binding: bind, call, apply

// function ko call karte wqt ap set kr skte ho ke this ki value kya hugi

let bindObj = {
    name: "Hello World",
    age: 22,
};

function bindFunc(){
    console.log(this)
}

bindFunc.call(bindObj);  // output: object
// this ki value object ban gayi call ki waja se

function bindFunc2(){
    console.log(this.age)
}

bindFunc.call(bindObj); // output: 22

// call ki waja se this object ban gaya or object ki age key ki value print hugai

// bind, call, apply > same he work krty hai thora sa difference hai 

let bindObj2 = {
    name: "Hello World",
    age: 22,
};


function applyFunc(a,b,c){
    console.log(this,a,b,c)
}

applyFunc.call(bindObj,1,3,6); // output: object, 1,3,6
applyFunc.apply(bindObj2, [1,2,3]); // same but just parameter arrays ki from me denge
let bindfnc = applyFunc.bind(bindObj2, 1,2,3); // same like call but ye output nahi dega

bindFunc();

// bind function ko chalata nahi func ki ek new copy banata hai 

