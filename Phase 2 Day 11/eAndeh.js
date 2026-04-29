// Events And Event Handling 

// browser me page pe koi bhi harkat karo event raise hujaega 
// kuch screen par ho or apko reaction dena ho to us wqt apko event handle karna ate ho 
// event > means kuch action huwa 

// event listener > mean apne koi action ka reaction dea 
// addeventlistener

// syntax 

// Element.addEventListener("event name", function(){}); 

let h1 = document.querySelector("h1");

// click > Action on single click

h1.addEventListener("click", function(){
    h1.style.color = "red";
})

// dblclick > action on double click 

let p1 = document.querySelector("p");

 function dblclick(){
    p1.style.backgroundColor = "black";
    p1.style.color = "white";
}

p1.addEventListener("dblclick",dblclick);

// removeEventListener

p1.removeEventListener("dblclick", dblclick);

// Common events: click,input,change,submit,mouseover,keyup 

// input 

let inp = document.querySelector("input");

inp.addEventListener("input", function(dets){
    if(dets.data !== null){
        console.log(e.data);
    };
})


// change 
// ye event tab chalta hai jab apka input select ya textarea mein koi change ajaye 

let select = document.querySelector("select");
let device = document.querySelector(".device");

select.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} device selected`;
})