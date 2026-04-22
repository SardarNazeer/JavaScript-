// Q1(I)) Create an array with 3 fruits and print the second fruit 

let fruits = ["Apple","Banana","Mango"]
console.log(fruits[1]);

// Q1(2)) Add Orange to the end and pineapple to the beginning of this array 
fruits.push("Orange");
fruits.unshift("Pineapple");
console.log(fruits);

// Q1(3)) Replace banana with kiwi in the array above

fruits[2] = "Kiwi";
console.log(fruits);

// Q2) What is the difference b/w .push and .unshift 

// push > add value in the end of array
// unshift > add value in the starting of array

// Q3) Remove the last item from this array using a method 

let numbers = [1,2,3,4,5];
numbers.pop();
console.log(numbers);

// Q4) Insert red and blue at index 1 in this array 

let colors = ["white","green","yellow"];
colors.splice(1,0,"red","blue");
console.log(colors);

// Q5) Extract only the middle 3 elements from this array 

let items = [1,2,3,4,5,6,7,8];
let newArr = items.slice(2,5);
console.log(newArr);

// Q6) Sort this array alphabatically and reverse it

let names = ["zara","sardar","ahsan","hassan"];

names.sort().reverse();

console.log(names);

// Q7) Use .map() to square each number 

let sqrNum = [1,2,3,4,5,6];

let squareNum = sqrNum.map(function(val){
    return val * val;
})

console.log(squareNum);

// Q8) Use .filter to keep numbers greater than 10

let testMarks = [9,5,7,10,12,16,78,34];

let filterMarks = testMarks.filter(function(val){
    if(val > 10) return val;
})

console.log(filterMarks);