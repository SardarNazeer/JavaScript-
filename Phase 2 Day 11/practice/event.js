// Task1: using key wehnever press any key from the keyboard its print

let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (dets) {
  if (dets.key === " ") {
    h1.textContent = "spc";
  } else {
    h1.textContent = dets.key;
  }
});

// Task2: Click on one button it display another

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  input.click();
});

input.addEventListener("change", function (dets) {
  if (dets.target.files) {
    btn.textContent = dets.target.files[0].name;
  }
});



// Task3: when submit form it stops the browser 