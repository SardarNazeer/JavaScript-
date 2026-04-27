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

// Q9) Use for-in loop to log all keys in this object 

const course = {
    title: "JavaScript",
    duration: "4 Weeks",
};

for(let key in course){
    console.log(key);
}


// Q10) Use Object.entries to print all key-values pair as:

Object.entries(course).forEach(function(val){
    console.log(val[0] + " : " + val[1]);
});

// Q11) Copy this object using spread opertor 

const original = {
    a: 1,
    b: 2,
    c: 3,
};

let spreadOp = {...original};

console.log(spreadOp);

// Q12) What is problem with this 

const obj1 = {
    info: {score: 80}
}

const clone = {...obj1};

clone.info.score = 100;
console.log(obj1.info.score);

// nested object spread operator se copy krne me asal object me bhi changes ati hai
// isse bachne ke lie hum deep clone ka use krty hai

// Q13) Deep clone the above object safely

let cloneObj1 = JSON.parse(JSON.stringify(obj1));

// Q14) Rewrite this safely using optional chaining 

const person ={
    name: "Hasnain",
    age: 17,
    education : {
        matric: 2019,
        intermediate: 2021,
        graduation: 2025,
    }
};

console.log(person.education.graduation); // wrong method

console.log(person?.education?.graduation); // correct method 

// Q15) Use a variable to dynamically assign a property

const keyy = "role";

const myObj = {
    name: "Sardar",
    [keyy]: "admin",
};

console.log(myObj);

// Q16) Create an object `car` with brand, model, price. Print the brand.

let car = {
    brand: "Audii",
    model: 2026,
    price: "4 crore",
};

console.log(car.brand);