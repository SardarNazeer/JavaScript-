// JavaScript "this" Keyword Practice Questions

// Practice these questions to strengthen your understanding of the 'this' keyword in JavaScript.

// 1. Create an object with a name property and a method that prints the name using this.

let obj = {
    name: "Sardar",
    sayName: function(){
        console.log(this.name);
    },
};

obj.sayName();


// 2. Make an object for a car with properties: brand and model. 
// Create a method that prints: 'This car is Toyota Corolla'.

let car = {
    brand: "Toyota",
    model: 2026,
    carName: function(){
        console.log(`this car is toyota corolla`);
    },
}

car.carName()

// 3. Create a student object with name and age. Add a method that prints 
// both values using this.

let student = {
    name: "sardar",
    age: 23,
    prints: function(){
        console.log(this.name, this.age);
    },
};

student.prints();



// 4. Create an object with a method that returns this.

let obj2 = {
    method: function(){
        console.log(this);
    },
};

obj2.method();

// 5. Inside an object method, print: this and this.name.

let obj3 = {
    name: "Ali",
    pukaro: function(){
        console.log(this, this.name);
    },
};

obj3.pukaro()

// 6. Create two different objects using the same method and observe how this changes.

let std1 = {
    name: "Qadeer",
    age: "18",
    sayName: function(){
        console.log(this);
    },
}

let std2 = {
    name: "Hassan",
    age: "18",
    sayName: function(){
        console.log(this);
    },
}

std1.sayName();
std2.sayName();

// both returns object 


// 7. Create an object with a method introduce() that prints: 'Hi, I am Ali'.

let obj4 = {
    introduce: function(){
        console.log("Hi, i am ali");
    },
};

obj4.introduce();


// 8. Create a calculator object with num1 and num2. 
// Add methods for addition and subtraction using this.

let calculator = {
    num1: 18,
    num2: 12,
    calculate: function(add,sub){
        console.log(this.num1+this.num2, this.num1-this.num2);
    },
};

calculator.calculate();




// 9. Create an object method using a normal function and another using an arrow function.
// Compare the value of this.

let obj5 ={
    name: "danial",
    sayName: ()=> {
        console.log(this)
    },
};

let obj6 ={
    name: "ehsaan",
    sayName: function(){
        console.log(this)
    },
};

obj5.sayName(); //output: window
obj6.sayName(); // output: object


// 10. Store an object method in a variable and call it separately.
//  Observe what happens to this.

let obj7 = {
    name: "Sardar",
    greet: function(){
        console.log(this.name);
    },
};

obj7.greet(); // output: Sardar
let varObj = obj7.greet;
varObj(); // output: undefined or window

// yaha obj7 function ko call kar raha hai
// obj7.greet(); 
// this === obj7

// lekin ye varObj() > simple function call
// this !== obj7


// 11. Create a button click event and print this inside the event handler.

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this);
})


// 12. Create a method inside an object that uses setTimeout().
// Check what this refers to inside timeout.

let obj8 = {
    name: "Sardar",
    greet: function(){
        setTimeout(() => {
        console.log(this.name)
        }, 3000);
    }
}

obj8.greet(); // output: sardar

// 13. Solve the previous question using arrow function and bind().

let obj9 = {
    name: "Nazeer",

    greet: function () {

        // Using bind()
        setTimeout(function () {
            console.log(this.name);
        }.bind(this), 3000);

    }
};

obj9.greet();


// 14. Create a person object with a greet method and call the method
// in different ways to observe this.

const person = {
    name: "Sardar Nazeer",
    age: 23,
    role: "Full Stack Web Development",
    welcome: function(){
        console.log(this.name + " " + this.age + " " + this.role);
    },
};

person.welcome(); // Sardar Nazeer 23 Full Stack Web Development

let p = person.welcome;
p(); // undefined

const person1 = {
    name: "Sardar Nazeer",
    age: 23,
    role: "Full Stack Web Development",
};

function greetBind(){
    console.log(this);
};

greetBind.bind(person1);


// 15. Use call() to change the value of this.

let person3 = {
    name: "ali",
};

function callPerson(){
    console.log(this.name);
};

callPerson.call(person3); // ali


// 16. Use apply() to borrow a method from another object.

let person4 = {
    name: "Hassan",
};

function applyPerson(a,b){
    console.log(this.name, a,b)
};

applyPerson.apply(person4, [3,4])

// 17. Use bind() to permanently bind this to an object.




// 18. Create a function and manually set this using call, apply, and bind.
// 19. Create a constructor function and use this to assign values.
// 20. Create multiple objects using the constructor function.
// 21. Create a class with constructor and methods. Use this inside methods.
// 22. Create a counter object where methods increase and decrease count using this.
// 23. Create nested objects and check what this refers to inside nested methods.
// 24. Use this inside a callback function and fix its context.
// 25. Create an object method that returns another function. Check how this behaves.
// 26. Create an object with an arrow function method and compare it with a normal method.
// 27. Create a function that prints console.log(this); Run it normally, inside object, with call(), and with bind().
// 28. Create a class method and pass it as a callback. Fix the lost this problem.
// 29. Build a small shopping cart object where methods update total price using this.
// 30. Create a mini user profile system with name, email, login method, and logout method using this.
// 31. Why does this behave differently in arrow functions?
// 32. What is the difference between obj.method() and storing method in a variable then calling it?
// 33. Explain the value of this in global scope, object method, arrow function, event listener, class, and constructor function.
// 34. How does bind() work internally?
// 35. Why is this sometimes undefined in strict mode?
// 36. What problem does arrow function solve regarding this?
// 37. What happens if we use new with a function?
// 38. Explain explicit binding vs implicit binding.
// 39. What is method borrowing in JavaScript?
// 40. Explain lexical this in arrow functions.
