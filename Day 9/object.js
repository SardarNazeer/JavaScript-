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