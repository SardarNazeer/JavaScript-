// Objects > jab hum ek bande ki bat kar rahe ho 
// or uski different chezo ke bare me to object banate hai.

// JavaScript me Objects ek bohat important concept hai. Simple words me:
// Object = key + value ka collection
// Yani ek cheez ke multiple properties aur unki values ko ek jagah store karna.

// Creation of object

let students = {
    name: "Sardar Nazeer",
    age: 23,
    Qualification: "Graduation"
}

// Access of object

console.log(students.age);

// 2nd method 
console.log(students['name']);

// Nesting and deep access

const user = {
    name: "Ali",
    address: {
        city: "Karachi",
        pin: 367890,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};

console.log(user.address.location.lng);

// 2nd method 

let {lng,lat} = user.address.location;

console.log(lat,lng);


// Looping in objects
// for-in, object.keys, object.entries

// for-in

let names = {
    name: "Shayan",
    class: "1st",
    age: 20
};

for(let key in names){  // key is variable and names is object
    console.log(key);  // it wll print the keys of object not the value
}

// agar key ki value chaiye tab 

for(let key in names){
    console.log(names[key]); // only key values
    console.log(key, names[key]); // key and their values
    
}


// object keys 
// ye apke Object ke sare keys ko array me dal deta hai 

Object.keys(names);


// object entreis 
// ye object ko array bana deta hai or un arrays me dobara array bana deta hai 

Object.entries(names);

// Copying objects: spread, Object.assign, deep clone

// spread: ye new object me purane object ki entities le leta hai

let newObj = {...names};

// object.assign: bhi object ko copy karne ke kam ata hai

// with new blank object 

let myNewObj = Object.assign({}, names);

// without blank object 

let myNewObj2 = Object.assign({price: 1230}, names);

// deep clone: jab ek nested object huta hai or ap use spread operator 
// ya object.assign ke zariye copy krte hai toh jo nested ke ilawa object huta hai 
// sirf wo real copy huti hai baki nested object ke element dono me change hunge 

let cloneObj = {
    name: "Sardar",
    age: 23,
    address: {
        city: "Karachi",
        area: "MPR",
    },
};

// let cloneObj2 = {...cloneObj};

// console.log(cloneObj);
// console.log(cloneObj2);

// cloneObj2.address.city = "Lahore";

// console.log(cloneObj);
// console.log(cloneObj2);


// ye tareeqa galat hai islye hum nested obj me deep clone krty hai 

let cloneObj2 = JSON.parse(JSON.stringify(cloneObj));

// stringfy > convert kar deta hai object ko string me 
// parse > convert kar deta hai object ko apne real obj me 

cloneObj2.address.city = "Lahore";

console.log(cloneObj);
console.log(cloneObj2);

// Optional Chaining

let OptionalObj = {
    name: "Sardar",
    age: 23,
    address: {
        city: "Karachi",
        area: "MPR",
    },
};

// abhi to ye sahi hai but in future agar address ki spelling change hugai
//  to apka code galat hujayega

console.log(OptionalObj.addresses.city);  // error ayega

// isse bachne k liye hum optional chaining ka use krty hai 

console.log(OptionalObj?.address?.city); // ab error nahi ayega undefined ayega
// ? mark ka mtlab he yahe hua ke optional hai huwa thek hai na huwa to error mat dena 

// Computed Properties

let role = "admin";

let ComputedObj = {
    name: "Sardar",
    age: 23,
    address: {
        city: "Karachi",
        area: "MPR",
    },
    [role]: "Sardar", // ye role ki value yaha put kar dega
};

