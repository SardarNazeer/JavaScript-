// Foreach > ye ek array method hai jo loop ki har value pe chalta hai
// matlab ye array ke har item ko ek ek karke access karne ke lie huta hai 


// Ye new array return nahi karta

// Kab use karein? 
// Jab sirf loop chalana ho
// Har item pe koi kaam karna ho (print, DOM update, etc.)

// 1) Take an array of numbers and use forEach() to print each number.

let numbers = [10,20,30,40,50];

numbers.forEach(function(val){
    console.log(val);
})

// 2) Take an array and print each element along with its index.

let name = ["sardar","ali","hassan","qadeer"];

// name.forEach(function(value,index){
//     console.log(index+ "-" +value);
// })

// 3) Take an array of names and print each name in uppercase

name.forEach(function(val){
    console.log(val.toUpperCase());
})

// 4) Take an array of numbers and print each number after adding 10 to it.

let number = [100,200,300,321];

number.forEach(function(val){
    console.log(val + 10);
})

// 5) Take an array of numbers and print only the even numbers.

number.forEach(function(value){
    if (value % 2 === 0) {
        console.log(value);
    };
})

// 6) Take an array of prices and print each price after adding 20% tax.

let prices = [100,230,400,549,630];

prices.forEach(function(value){
    let tax = value * (20/100);
    console.log(value+tax);
})

// 7) Take an array of strings and print only those words whose length is greater than 5.

let programmingLanguages = ["javaScript","phyton","c++","c#","java"];

programmingLanguages.forEach(function(str){
    if(str.length>5){
        console.log(str);
    }
});

// 8) Take an array of numbers and count how many numbers are greater than 50.

let numArray = [10,50,30,61,51,21,89];

numArray.forEach(function(val){
    if (val > 50) {
        console.log(val);
    }
});


// 9) Take an array of numbers and calculate the total sum using forEach()

let array = [1,2,3,4,5,6];

let sum = 0;

array.forEach(function(val){
    
    // += : assigment op hai jo value ko add karke dobara var me store karta hai 

    sum += val;

})

console.log(sum);


// 10) Take an array of objects (name, age) 
// and print names of users whose age is greater than 18.

let user = [{
    name: "Sardar",
    age: 19,
},
{
    name: "Ali",
    age: 20,
},
{
    name: "Mohsin",
    age: 16,
},
];

// user.forEach(function(val){
//     if (val.age>18) {
//         console.log(val.name);
//     }
// })

// 11) Take an array of users and display them in the DOM by creating <li> elements.

user.forEach(function(val){
    let ul = document.createElement("ul");

    let li = document.createElement("li");
    li.textContent = val.name;

    ul.appendChild(li);

    document.body.appendChild(ul);
})


// 12) Select all buttons on a page and attach a click event to each using forEach().

let btn = document.querySelectorAll("button");

btn.forEach(function(val){
    val.addEventListener("click",function(){
        console.log("pressed")
    })
})



// 13) Select all input fields in a form and highlight the empty ones with a red border.

let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", function(ele){
    ele.preventDefault();
    inp.forEach(function(val){
    if (val.value == "") {
        val.style.border = "solid red"
    } else {
        val.style.border = "solid green"
    }
})
});

// 14) Take an array of numbers and store the total sum in a separate variable
//  (declared outside the loop).

let arrNum = [1,2,3,4,8];

let Totalsum = 0;

arrNum.forEach(function(val){
    Totalsum = Totalsum + val;
})

console.log(Totalsum);


// 15) Take an array of products (name, price) and print only those products
//  whose price is less than 1000.

let products = [
    {
        name: "Cricket bat",
        price: 3000,
    },
    {
        name: "Helmet",
        price: 800,
    },{
        name: "Gloves",
        price: 1001,
    },{
        name: "Jersey",
        price: 999,
    },
]

products.forEach(function(value){
    if (value.price > 1000) {
        console.log(value.name);
    }
})


// 16) Take an array of strings and print each string in reverse (e.g., "Ali" → "ilA").

let stringArr = ["Ali","Sardar","Hassan"];
let reverse = []

stringArr.forEach(function(value){
    let result = value.split("").reverse().join("");
    reverse.push(result);
})

console.log(reverse);

// 17) Take an array of names and print them with numbering (e.g., 1. Ali, 2. Ahmed).

let nameArray = ["Ali","Sardar","Hassan"];



nameArray.forEach(function(value, index){

    console.log(index+1 + "-" + value)

})


// Basic Strengthening

// Take an array of numbers and print each number using forEach().

let numberArr = [0,1,2,4,5];

numberArr.forEach(function(val){
    console.log(val);
})

// Take an array of names and print each name in uppercase.

let tnameUpper = ["Ali","Sardar","Hassan"];

tnameUpper.forEach(function(value){
    console.log(value.toUpperCase());
})

// Take an array and print each element with its index.

let std = ["usman","anus","daniya"];

std.forEach(function(val,ind){
    console.log(ind + "-" + val);
})

// Take an array of numbers and print numbers multiplied by 2.

let mulNum = [1,4,7,8,9,0,12];

mulNum.forEach(function(val){
    console.log(val * 2);
})

// Take an array and print only numbers greater than 10.

let grNum = [1,5,8,9,11,15,21,13];

grNum.forEach(function(ele){
    if(ele > 10){
        console.log(ele);
    }
})

// ⚡ Intermediate Logic

// Take an array of numbers and count how many are even.

let evenNum = [1,6,8,12,10,2,3,5,6,7];
let evenSum = 0;

evenNum.forEach(function(element){

    if(element % 2 === 0){
        evenSum++;
    }
    
})

// console.log(evenSum)


// Take an array of strings and print only words with length > 4.

let series = ["GOT","TB","From","Stranger","Peaky"];

series.forEach(function(val){
    if (val.length > 4) {
        console.log(val);
    }
})


// Take an array of prices and add 15% tax to each price.

let priceArr = [1200,2345,5900,123400];

priceArr.forEach(function(value){
    let tax = value * (15/100);
    console.log(value + tax);
})

// Take an array of numbers and find how many are negative.

let negNum = [-12,0,1,-2,56,-17];
let negCount = 0;

negNum.forEach(function(value){
    if (value < 0) {
        negCount++;
    };
})

console.log(negCount);


// 🔥 Object + Real World

// Take an array of students and print their names with marks.

let studentsArr = [
    {
        name: "Daniya",
        marks: 90,
    },
    {
        name: "Wadiya Batool",
        marks: 40,
    },{
        name: "Usman",
        marks: 78,
    },{
        name: "Haroon",
        marks: 87,
    },
]

studentsArr.forEach(function(value){
    console.log(value.name + "-" + value.marks);
})

// Take an array of employees and print only those with salary > 50000.

let employees = [
    {
        name: "Sardar",
        salary: 80000,
    },
        {
        name: "Uzair",
        salary: 51000,
    },    {
        name: "Ali Sher",
        salary: 12000,
    },    {
        name: "Basit",
        salary: 40000,
    },    {
        name: "Muzammil",
        salary: 49000,
    },
]

employees.forEach(function(val){
    if(val.salary > 50000){
        console.log(val.name);
    }
})

// Take an array of objects and count how many users are active (active: true).

let userStatus = [
    {
        name: "Sardar",
        active: true,
    },
        {
        name: "Uzair",
        active: false,
    },    {
        name: "Ali Sher",
        active: true,
    },    {
        name: "Basit",
        active: false,
    },    {
        name: "Muzammil",
        active: true,
    },
]

userStatus.forEach(function(user){
    if (user.active === true) {
        console.log(user.name);
    }
})

// 🌐 DOM Practice (Very Important)

// Select all <li> elements and change their text color using forEach().

let lis = document.querySelectorAll("li");

lis.forEach(function(e){
    e.style.color = "green";
})


// Create <div> elements from an array and append them to the page.

let randomArr = ["JavaScript","CSS","C#","C++","JAVA"];

randomArr.forEach(function(val){
    let div = document.createElement("div");

    div.textContent = val;

    document.body.appendChild(div);
    
})


// Take an array of names and display them inside a <ul> using forEach().


let randomName = ["GOT","TB","From","Stranger","Peaky"];

randomName.forEach(function(e){
    let Newul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = e;

    Newul.appendChild(li);

    document.body.appendChild(Newul);
})

