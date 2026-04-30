// Task: Live Character Count 

let input = document.querySelector("input");
let span = document.querySelector("span");

// console.log(span);

input.addEventListener("input", function() {
    // console.log(input.value.length);
    span.innerHTML = input.value.length;
})