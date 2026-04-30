// Forms and Forms Validation 

// Reading values from input, textarea, select 

// prevent default submission 

// inline and js based validation 

// inline validation > html se validation lagana 
// js validation > js se validation lagana 

let form = document.querySelector("form");
let nm = document.querySelector("#name");

// form.addEventListener("submit", function(dets){
//     dets.preventDefault();

//     if(nm.value.length <= 2){
//         document.querySelector(".hide").style.display = "initial";
//     } else {
//         document.querySelector(".hide").style.display = "none";
//     }
// })


// rejex
// Regex (Regular Expression) ek pattern hota hai jo text ko match/check karta hai.
// Regex validation in JavaScript ka matlab hota hai kisi input 
// (jaise email, password, phone number) ko ek specific pattern ke according check karna.

form.addEventListener("submit", function(dets){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailPattern.test("test@gmail.com")); // true
})