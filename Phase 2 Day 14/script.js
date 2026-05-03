// LocalStorage, sessionStorage, cookies

// Teeno browser storage methods hain — matlab browser me data save karne ke tareeqe.
//  Lekin inka use aur behavior different hota hai.

// localStorage,sessionStorage > isme 5mb tak data save kar skte ho 
// cookies > isme 5kb tak 

// localStorage> browser ka database, browser ke ander
//  data store karta hai or browser off hune k bad bhi data delete nahi huta  

// localStorage.setItem()
// store data 

// localStorage.getItem()
// data nikalna, fetch data 

// localStorage.removeItem();
// remove data 

// localStorage.setItem()
// setitem update bhi karta hai data 

// localStorage > sirf strings save karta hai 
// agar ap array ya object save karna chaho uske liye 

// JSON.stringify() : METHOD KA USE KARNA HUGA 

// ap localStorage me string k ilawa array object save nahi kar sakte
// agar karna chaho toh usko JSON.stringfy() method ke zariye string me convert karna
// or jab usse data dobara bahir array ya object ke form me chaiye ho
//  to json.parse() method ka use karna

// eg 

let eg = localStorage.setItem("friends", JSON.stringify(["Sardar","Ali","Hassan"]));

console.log(eg);

let fr = localStorage.getItem(JSON.parse("friends"));


// Use case:
// Login info, theme (dark/light mode), user preferences

// sessionStorage> ye apka data temporaray browser me save karta hai tab band toh data ghyb

// sessionStorage me bhi same localStorage ki properties use huti hai 

// Use case:
// Temporary login session, form data, current page state

// cookies> ye bhi data store karne ke liye use huta hai, 
// and apka data browser ke cokies naam ki properties me save karta hai,
//  cookies use kiya jata hai kam data ya light data k liye 

// cookies me jo bhi data store karuge 
// wo data browser reload karne pe automatically server pe jayega

// Use case:
// Authentication, tracking, user session (especially backend me)