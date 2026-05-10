// Scope, Execution And Scope In JS 

// Scope: iska matlab hai ke ap apne banaye var or function kaha tak use kar skte ho
// Variable scope: functional scope, global scope, block scope 

// functional scope: function ke ander he access kar sakte hai usse bahir nahi 

function func(){
    var a = 12;   // var ek functional scope hai 
}



// global scope: pure code me kahi bhi use kar sakte hai 
// agar apka code kisi bhi braces me nahi hai to apka code global hai 

var a = 12;  // global scope

// block scope: {} curly braces me he use kar sakte hai usse bahir nahi 
// function ke ilawa kahi bhi curly braces ho to wo block scope huta hai 

if (condition) {
    var a = 12;
}

// Execution context: memory creation & execution phase 

// execution context
// js subse pehla jaise he apka function dekhta hai subse pehla js banata hai
// execution context, ye ek process hai jo ke 2 different phass me chalta hai,
// 1st memory phase and 2nd execution phase

// function dikhte he sath js function run krne ke liye space allocate kar deta hai,
// usme sare var ajate hai function ky, usme sara code ajata hai,
// aur code use me chalta hai, ye function ke sath huta hai js me, ye execution context hai

// lexical scope vs dynamic scope 

// js - lexical scoping 

// kaha per physically available ho ye puri tareeqa se depened karta hai
// ke ap kya access kar paoge 

// humne var a ko abcd function ke ander declare
// kia hai to hum usko is function ke ander kahi bhi access kar sakte hai

function abcd() {
    let a = 17;
    function defg() {
        console.log(a);
    }
    defg();
}

abcd();

// js me hum lexical scoping karte hai woh dynamic support nahi karti 

// dynamic scoping 

// kaha se call kar rahe ho uspe depend karega ke kya value milegi
// dynamic scoping js support nahi karta 


// Closure definition and how variables are preserved

// closure > closure huty hai functions jo ky kisi parent function ke ander ho 
// aur ander wala function return ho raha ho and returning function use kare 
// parent function ka koi variable to use closure kehty hai


function closureFunc(){
    let a = 13;
    return function(){
        console.log(a);
    };
}

let fnc = closureFunc();
fnc();

// ye sach hai fnc ke khatam hune pe apka fnc and uske variables khatam hujate hai, 
// par jab bhi closure banta hai to apka function or uske variable ka ek backlink banaya
// jata hai aur uska naam huta hai [[environment]]

// fayede nuqsan closure ky 

// i) variable ko private kar skte ho
// ii) global pollution rok skte ho means apne code me bht 
// sare var banaye hai global,block use cntrl krta hai

// Use cases: private counters, encapsulation

function counter(){
    let c = 0;
    return function(){
        c++;
        console.log(c);
    };
};

counter();  // isse koi output show nahi huga sirf ek function return huga

let fnc = counter();
fnc(); // ab humne counter function ko fnc ke ander rakh dia to wo value show karwaega

let fnc2 = counter();
fnc2();  // iski apni c ki value hugi toh wo barh ker ek hujayegi

// encapsulation > apna main inner logic hide kar dena, 
// srf un chezo ka acess dena jin chezo ki apko zarorat hai

// encapsulation closure se he huta jese he closure word ajaye func ke ander func 
// or woh bahir wale function ka var use kar raha hu 

function clickLimiter(){
    let click = 0;
    return function(){
        if (click<5) {
            click++;
            console.log(`Clicked: ${click} times`);
        }
    }
}


let clickFunc = clickLimiter();
clickFunc(); // output: clicked 1 times
clickFunc(); // output: clicked 2 times
clickFunc(); // output: clicked 3 times
clickFunc(); // output: clicked 4 times


// Confusion: Closure vs returning function 



// Scope chain vs call stack 