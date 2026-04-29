// Event Object > jab bhi koi event trigger hota hai 
// (click, mouseover, keypress, etc.), browser 
// automatically ek object create karta hai jisme us event ki saari details hoti hain.

// Jab event hota hai, to function ke andar ek parameter milta hai 
// (usually event ya e naam se), usko hi Event Object kehte hain.

let btn = document.querySelector("button");

// btn.addEventListener("click", function(e){
//     console.log(e);
// })

// Jab button click hoga → console me pura event object print hoga

// event.target > Kis element pe event hua

btn.addEventListener("click", function(e){
    console.log(e.target);
})

// event.type > kis type ka event tha jese uper click event hua

// event.preventDefault > Default browser behavior ko rokta hai

// Event Bubbling & Capturing 
// jispe event ayega agar us par listener nahi hua toh hamara event uske parent pe
// listener dhundege aur aisa karte karte uske uper move karega 

let nav = document.querySelector(".nav");

nav.addEventListener("click", function(){
    alert();
})


let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets){
    // dets.target.style.textDecoration = "line-through";

    // 2nd method 

    dets.target.classList.toggle("li")
});

