// OOP - Object Oriented Programming 

// OOP ek programming style hai jisme hum real world cheezon ko objects 
// ki form me represent karte hain.

// Example:
// Car, Student, User, Mobile

// Har object ke:

// Properties hoti hain → data
// Methods hote hain → functions/actions

// OOP ke 4 Main Pillars
// Object
// Class
// Inheritance
// Encapsulation
// Polymorphism
// Abstraction

// humein sekhna hai factory banana, matlab ke ap ek bar blueprint bana do
// ky har object kaisa dikhega and hum log naye naye objects with different
// values bana payeenge, yahi upar upar se pura kaam hai OOPS main 

// Constructor function and prototype

// constructor function > jisko ap new se ek blank object me dalo
// is function ka naam ka first letter hamesha capital good practice

function CreateTeam(teamName,captain,totalMatches,win,loss){
    this.teamName = teamName;
    this.captain = captain;
    this.totalMatches = totalMatches;
    this.win = win;
    this.loss = loss;
};

let team1 = new CreateTeam("The Warriors","Sardar",220,116,104);
let team2 = new CreateTeam("Wolverine XI","Saad",330,134,166);

console.log(team1);
console.log(team2);

// explanation 

// new keyword > kya karta hai ek blank object bana deta hai 
// this function ke ander object ko denote kar raha hai 
// wese function me this ki value window huti hai lekin new ki waja se object hai 

// prototype> agar tmhara constructor function koi field apne prototype par
// attach karle to us constructor se banne wale sabhi instances (objects)
// ke pas wo field automatically ajayegi

// prototype mean extra memory or shared memory 

function CreatePencil(name,price,color){
    this.name = name;
    this.price = price;
    this.color = color;
}

// CreatePencil.prototype.company = "SardarCompany";

CreatePencil.prototype.write = function(text){
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;

    document.body.append(h1);
}

let pencil1 = new CreatePencil("Silk Pen",13,"Red")
let pencil2 = new CreatePencil("Brown Pen",10,"Black");

console.log(pencil1);
console.log(pencil2);


// Classes In OOP , constructor, methods, extends, super

class CreateCar{
    constructor(name,model,price,color){
        this.name = name;
        this.model = model;
        this.price = price;
        this.color = color;
    };

    erase(){
        document.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        })
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;

        document.body.append(h1);
    }
}


let car1 = new CreateCar("Toyota",2024,1200000,"black");
let car2 = new CreateCar("Audii",2026,1500000,"blue");

// extends > extends ka matlab hai ke ap pichle class ke sare properties use karu
// or apne new properties b rakhein wo class

// super > super ka use parent class ko access karne ke liye hota hai.

class User{
    constructor(name,address,email){
        this.name = name;
        this.address = address;
        this.email = email;
        this.role = "user";
    };

    checkRole(){
        return `you are a user ${role}`;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;

        document.body.appendChild(h1);
    };
};

class Admin extends User{
    constructor(name,address,email){
    super(name,address,email);
    this.role = "admin"
    };

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        })
    }
}


let u1 = new User("Sardar","Karachi Pakistan","sardar45@gmail.com");
let u2 = new User("Nazeer","Lahore Pakistan","naz11@gmail.com");
let a1 = new Admin("Ali","Peshawar","a@.a1");


// Prototypical inheritance vs classical inheritance 