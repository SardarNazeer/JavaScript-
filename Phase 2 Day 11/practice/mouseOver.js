// mouseOver > jab cursor kisi elementbpe leke jau 

let main = document.querySelector(".main");

main.addEventListener("mouseover", function(){
    main.style.backgroundColor = "yellow";
});

// mouseout > jab cursor Element se wapsi leke au 

main.addEventListener("mouseout", function(){
    main.style.backgroundColor = "aqua";
})


// mousemove > jab ap cursor move kare 

// window > puri screen pe 

window.addEventListener("mousemove", function(dets){
    main.style.top = dets.clientY + "px";
    main.style.left = dets.clientY + "px";
})