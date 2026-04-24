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

// Q9) Use .reduce() to find the some of the array 

let sumArray = [10,30,23,12,32];

let reduceArray = sumArray.reduce(function(acc,val){
    return acc + val;
},0)

console.log(reduceArray);


// Q10) Use .find() to get the first number less than 10

let lessNum = [2,3,5,78,64,12,11,10];

let findArray = lessNum.find(function(val){
    return val < 10;
})


console.log(findArray);

// Q11) Use .some() to check if any student has scored below 35 

let stdMarks = [45,78,23,32,43,34,100,99,0];

let someArray = stdMarks.some(function(val){
    return val < 35;
})

console.log(someArray);


// Q12) Use .every() to check if all numbers are even 

let evenNum = [1,4,3,6,8,12,14,15,18,21];

let everyNum = evenNum.every(function(val){
    return val % 2 === 0;
})

console.log(everyNum);


// Q13) Destructure this array to get firstName and lastName 

let fullName = ["Sardar","Nazeer"];

let [firstName, lastName] = fullName;

console.log(firstName);


// Q14) Merge two arrays using spread operator 

let a = [1,2];
let b = [3,4];

let c = [...a,...b];

console.log(c);

// Q15) Add Pakistan to the start of this array using spread 

let countries = ["Iran,UAE,USA,KSA"];

countries = ["Pakistan", ...countries];

console.log(countries);


// Q16) Clone this array properly (not by reference);

let arr1 = [1,2,3];
let arr2 = [...arr1];

arr2.push(4);

console.log(arr1,arr2);


// Q17) Sort [40, 1, 5, 200, 30] in ascending order.

let sArr = [40,1,5,200,30];

let sortArray = sArr.sort(function(a,b){
    return a - b;
})

console.log(sortArray);

// Q18) Sort [40, 1, 5, 200, 30] in descending order.

let descArr = [40, 1, 5, 200, 30];

let descendingArray = descArr.sort(function(a,b){
    return b - a;
});

console.log(descendingArray);

// Q19) Given [1, 2, 3, 4, 5], return a new array where every number is doubled.

let doubledNum = [1, 2, 3, 4, 5];

let mapDouble = doubledNum.map(function(){
    
})