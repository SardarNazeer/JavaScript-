// Timers & Intervals 
// JavaScript me timers ka use hota hai code ko delay se chalane ya repeat karne ke liye.
// Iske 2 main methods hote hain:
// 1. setTimeout (Delay ke baad run hota hai)
// Ek dafa execute hota hai after specific time

// setTimeout ek function hai jo andeer ek function accept karta hai or time (ms) me

// syntax 
// setTimeout(function(){}, 1000)

setTimeout(function(){
    console.log("hello world");
}, 5000);


// 2. setInterval (Bar bar run hota hai)
// Repeat hota rehta hai given time ke baad

setInterval(function(){
    console.log("hello world");
}, 3000)

// clearTimeout > agar timout laga hua hai use hata deta hai

let sto = setTimeout(function(){
    console.log("hello")
}, 4000)

clearTimeout(sto);

// clearInterval > ye bhi same he work karta hai

