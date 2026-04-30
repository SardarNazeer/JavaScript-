// Email/Password Validation 

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        document.querySelector("#emailError").textContent = "";
        document.querySelector("#passwordError").textContent = "";


    let emailian = emailPattern.test(email.value);
    let passwordian = passwordPattern.test(email.value);

    isValid = true;

    if (!emailian) {
        document.querySelector("#emailError").textContent = "email is incorrect";
        isValid = false;
    } if (!passwordian) {
        document.querySelector("#passwordError").textContent = "password is incorrect";
        isValid = false;
    }


    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is ok";
    }
})