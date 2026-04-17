// q1) what's the difference b/w function declarartion and expression in terms of hoisting

//function statement hoist hoty hai or function expression hoist nahi huty
// example

// function statement

abc();

function abc() {
    console.log("hello");
}

// function expression

// abcd();

// let abcd = function() {
//     console.log("hey");
// }

// Q2) What does the ... operator mean in parameter 
// ... mean rest operator 

function valFunc(...val) {
    console.log(val);
}

valFunc(12,3,4,6,7,8,9);

// Q3) Use rest parameter to accept any number of scores and return the total 

function getScores(...val) {
    let total = 0;
    val.forEach(function (value) {
        total = total + value;
    });
    return total;
}

console.log(getScores(10,23,4,56,76));