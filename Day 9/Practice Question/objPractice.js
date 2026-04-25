// Q1) Create an object for a student with name, age and isEnrolled 

let student = {
    name: "Ali",
    age: 18,
    isEnrolled: "Yes",
}

console.log(student);

// Q2) Can object key be a number or boolean? Try This 

const obj = {
    true: "yes",
    43: "answer", 
};

console.log(obj[43]); // blkul hu skti hai

// Q3) Access the value of firstName from this object 

const user = {
    firstName: "Sardar",
};

console.log(user.firstName);

// Q4) Given a dynamic key let key = "age", how will you access user[key]

let key = "age";

const userr = {
    age: 26,
}

console.log(userr[key]);

// Q5) From the object below print the lattitude vale 

const locations = {
    city: "Karachi",
    coordinates: {
        lattitude: 77.3,
        longitude: 32.2,
    },
};

console.log(locations.coordinates.lattitude);

// Q6) What will happens if coordinates is missing? How can you prevent error 

const addresses = {
    city: "Karachi",
    coordinates: {
        lattitude: 77.3,
        longitude: 32.2,
    },
};

console.log(addresses?.coordinate?.lattitude);


// Q7) Destructure the city and lat from the location above 

let {city} = addresses;
let {lat} = addresses.coordinates;

// Q8) Destructure the key "first_Name" as a variable called firstName 

const users = {
    "first-name": "Sardar",
};

let {"first-name": firstName} = users;

console.log(firstName);