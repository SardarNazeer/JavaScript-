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

// reverse > apky array ko reverse kara deta hai 

let nArr = [1,2,3,4,5]
console.log(nArr);

nArr.reverse();
console.log(nArr);


// sort > assecending ya descending order me set karta hai 
// sort > hamesha ek function accept karta hai 

let sortArr = [45,67,21,7,1,0]
console.log(sortArr);

let asr = sortArr.sort(function (a,b) {
    return a-b; // asending order me sort karega
})

console.log(asr);

let dsr = sortArr.sort(function(a,b){
    return b-a;  // descending order me sort karta hai
})

console.log(dsr);

// sort, map, filter, reduce, foreach > ye ek function accept karte hai 

// forEach > foreach loop ka use JavaScript me array ke har element par iterate 
// (loop chalane) ke liye hota hai.
//  Ye simple aur readable hota hai jab hame sirf array ke items par kaam karna ho. 

let myNewArr = [1,4,6,73,67,12];

let frArr = myNewArr.forEach(function(val) {
    console.log(val);
})


// Map > srf tab use karna hai jab apko naya array banana hai pichle array ke data basis pe.
// map dikhte sath hi man me ek naya blank array bana lia karu 

// map() ek array method hai jo:

// har element par function apply karta hai
// new array return karta hai (original array change nahi hota)

let mArray = [1,4,6,73,67,12];


// let mapArr = mArray.map(function(val){
//     return 16;
// })

let mapArr = mArray.map(function(val){
    if(val > 10) return val;
})

console.log(mapArr);

// map kab use kiya jaye ?

// jab bhi apko aisa case dikhe jisme ek array se naya array banega 
// and woh naya array purane array ke basis pe kuch values return karega tab lagega map.

// filter > ek naya array banata hai map ki tarah
// purane member se kuch member lata hai or kuch chor deta hai
// filter me return karayenge only true and false

let fArr = [1,3,45,6,7,8,9,9];

let filterArray = fArr.filter(function(val){
    if(val > 5) return true;
})

console.log(filterArray);


// reduce > Array ke sab elements ko mila kar ek hi value banata hai

// acc = accumulator (result store karta hai)
// val = current value

let reArr = [1,4,5,7,9,54];

let reduceArray = reArr.reduce(function(acc,val){
    return acc + val;
},0);

console.log(reduceArray);

// find > array ki koi value talash karni ho 

let findArr = [0,2,31,2,1,4,1];
 
let finArray = findArr.find(function(val){
    return val === 2;
})

console.log(finArray);

// some > agar array me koi aisi condition ho jo satisfied hu
//  rahi ho toh uske liye some batata hai true and false 

let sArr = [70,54,67,32,56,98,92];

let someArray = sArr.some(function(val){
    return val > 90;
})

console.log(someArray);

// every > array ke sare value  true hune chaiye

let EvArr = [70,54,67,32,56,98,92];

let everyArr = EvArr.every(function(val){
    return val > 30;
})

console.log(everyArr);


// Destructing
// JavaScript me array destructuring ka matlab hai array ke values ko 
// directly variables me nikaal lena — bina index use kiye (arr[0], arr[1]).

let desArr = [1,2,3,4,5,6];
let [a,b,c,,e] = desArr;

console.log(a,b,c,e);


// spread operators
// JavaScript me spread operator (...) array ke elements ko expand (phaila deta hai)
//  — yani array ke andar ki values ko alag alag nikaal deta hai.

let spOpArr = [1,2,3,4,5,6,7,8,9];
let arr2 = [...spOpArr];

console.log(arr2);