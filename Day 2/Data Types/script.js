//DATA TYPES
// DATA KE TYPES

// PRIMITIVE DATA TYPES (STRING,NUMBER,BBOOLEAN,NULL,UNDEFINED,SYMBOL,BIGINT)
// aisi sari values jinko copy krne pe real copy mil jaye 

let a = 12; // a k pass khud ka 12 hai
let b = a;   // b ke pass khud ka 12 hai

// string > single quotes, double qoutes, backticks me jo data wrapped huwa huta hai
// number > koi bhi mathematic number 
// boolean > true and false values 
// null > apne jan bojh ke koi value nahi di 

let z = null;
// undefined > apne ek var banaya or use value nahi di jo value by default mili wo undefined hai
let v;

// symbol > unique immutable (change nahi hune wala) value 
// a me ya b me change krne se srf usi me change huga 2sre me nhi 

// future me hum koi library use krenge kahi bar kuch field huti hai 
// usme jinse similar hum bhi bana dete hai, pr galti se hamari banai huwi 
// field us library ki original field change kr deta hai

// bigInt > number data type me ek limit tak hum number add kr skte hai
// jisko dekhne ke liye hum Number.MAX_SAFE_INTEGER ka use krty hai 
// agar isse bada number chaiye ho to hum bigint ka use krte hai 

let f = 89665687879989889n;  // bs last me n laga do bigInt ban jaega


// REFERENCE DATA TYPES (arrays, objects, functions)
// aisi sari values jinko copy krne pe real copy nahi miligi
// but apko refernce milega parent ka


let c = [1,2,3];
let d = c;
d.pop();

// d or c ki value same hugai kisi ek m b change krne se dono me hugi change 