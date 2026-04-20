// ARRAYS

// JavaScript me array ek special data structure hota hai jisme aap multiple values ek hi variable me store kar sakte ho.
// Array = ek list of items (values), jo index (position) ke through access hoti hain.

// create array 

let marks = [10,30,89,56,49];
// array starts from zero index 

// access array 
console.log(marks[2]); // 89

// modify array 

marks[3] = 120;

// Arrays Method 

// JavaScript me array methods wo built-in functions hote hain jo arrays ko manipulate (change),
//  search ya process karne ke liye use hote hain.

let arr = [1,2,3,4,5]
// push > value add karna array ke last me
arr.push(70);
console.log(arr);
// pop > value remove karna last se 
arr.pop();
console.log(arr);
// shift > remove value from the start 
arr.shift();
console.log(arr);
// Unshift > add from starting 
arr.unshift(30);
console.log(arr);
// splice > remove value from the center
arr.splice(2,1);  // 2 means kaha se value hatani hai, 1 mean kitni val hatani hai
console.log(arr);
// slice > array ko change nahi karta wo new array return karta hai 
let newArr= arr.slice(0,3);
console.log(newArr);