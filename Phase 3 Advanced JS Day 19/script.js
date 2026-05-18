// FETCH API + HTTP Basics 

// API ek url huta hai jispe jane pe humein kuch data milta hai JSON format me 
// JSON > JavaScript object notation 

// fetch api > js me fetch api server se: date lene or bhejne k lie huti hai 
// mostly api ky sath use huti hai 

// fetch url pe jake data lata hai 
// fetch promise based hai to hum than or catch ka use karenge  

fetch("http://randomuser.me/api/").then((rawdata)=>{
    rawdata.json();
}).then((data)=>{
    console.log(data.result[0].name.first);
}).catch((error)=>{
    console.log(error);
})

// pehla wala than raw data ko json me convert krega qk uske bghr read nahi kar skte 
// dosra wala than data ko readable banata hai 

// jo rawdata milega usko read nahi kar skte 
// readeable stream > usko ap parh nahi skte lekin agar ap usko json bana lo phr acces kr pauge 


// HTTP > browser aur server ke drmiyan communication protocol huta hai 
// jab browser server ko request bhejta hai to HTTP use huta hai 

// Fetch API: Get,Post,Basics 

// header, status code, JSON praising 



// Form submission via fetch 

// Error handling with response.ok and try catch 

// Basic REST principles 