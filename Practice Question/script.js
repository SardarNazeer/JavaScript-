// 1) Write a program to check if a number is even or odd.


// let num = 13;

// if (num % 2 == 0) {
//     document.write("Number is even");
// } else if (num % 2 != 0) {
//     document.write("number is odd")
// } else {
//     document.write("invalid number")
// }

// 2) Write an if-else program to check if a number is positive, negative, or zero.

// let number = 0;

// if (number>0) {
//     console.log("Number is positive");
// } else if(number<0){
//     console.log("Number is negative");
// } else if(number===0){
//     console.log("number is zero")
// }

// 3) Write a program to check if a person is eligible to vote (age ≥ 18).

// let age = prompt("Enter Your Age");
// age = Number(age);

// if (age >= 18) {
//     console.log("You are eligible for vote")
// } else if (age<18) {
//     console.log("You are not eligible for vote")
// } else{
//     console.log("invalid")
// }


// 4) Convert this into ternary:
// if (marks >= 50) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// let mark = prompt("Enter Marks Of A Student");
// mark = Number(mark);

// (mark>=50) ? console.log("Pass") : console.log("Fail");

// 5) Take two numbers and print the greater number.

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// num1 = Number(num1);
// num2 = Number(num2);

// if (num1> num2) {
//     console.log("num1 is greater");
// } else if (num1 < num2) {
//     console.log("num2 is greater");
// } else if (num1 === num2) {
//     console.log("both num is same");
// } else {
//     console.log("invalid")
// }


// 6) Check if a number is divisible by 5 or not.

// let num5 = prompt("Enter any number");
// num5 = Number(num5);

// if (num5 % 5 == 0) {
//     console.log("this number is divisble by 5")
// } else if (num5 % 5 != 0) {
//     console.log("this number is not divisble by 5")
// } else {
//     console.log("invalid");
// }

// 7) Take username and password:

// If both are correct → "Login Successful"
// Otherwise → "Invalid Credentials"

// let username = prompt("Enter User Name");
// let password = prompt("Enter Password");

// let usernameGiven = "sardarnazeer";
// let userPassword = 12345;

// if (username === usernameGiven && password == userPassword) {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Credentials");
// }

// 8) Check if a number is even or odd using ternary operator.

let num = 3;

(num % 2 == 0) ? console.log("Even") : console.log("Odd");

// 9) Take a year as input and check whether it is a leap year.

let year = prompt("Enter Year");

(year % 4 === 0) ? console.log("Leap Year") : console.log("Normal");

// 10) Electricity bill calculation:

// Units ≤100 → Free
// 100–200 → Rs 5 per unit

// 200 → Rs 10 per unit

// (use if-else)

    let units = prompt("Enter Units Of Electricity Used");
    units = Number(units);

    if (units<=100) {
        console.log("Electricity is free")
    } else if (units>100 && units<200){
        console.log("RS 5 Per Unit - Total Bill:", units * 5);
    } else if (units>=200) {
        console.log("RS 10 Per Unit - Total Bill:", units * 10);
    } else{
        console.log("invalid");
    }

//     11) Check salary:

// ≥50000 → "High Salary"
// 20000–49999 → "Medium"
// <20000 → "Low"

let salary = prompt("Enter Your Sallery");
salary = Number(salary);

(salary >= 50000) ? console.log("High Sallery") : (salary>= 20000 && salary<50000) ?
 console.log("Medium salary") : (salary<20000) ? console.log("low") : console.log("error");