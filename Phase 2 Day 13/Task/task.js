let count = 10;

let interval = setInterval(function(){
    if (count >= 1) {
         count--;
    console.log(count);   
    } else clearInterval(interval);
},1000)


// Countdown Timer

let count = 0;
let progress = document.querySelector("#progressBar");
let percent = document.querySelector("#percentText")

let intv =setInterval(function(){
    if (count <=99) {
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    } else {
        document.querySelector("h2").textContent = "Downloaded."
        clearInterval(intv)
    }
},30)


// Auto hide alert banner after 3s

let count = 0;
let div = document.querySelector(".div");

let autoHide = setInterval(function(){
    if (count<=2) {
        div.style.display = "none";
    }
},3000)