// CallBacks, Promises and Async/Await 

// synchrounus vs asynchrounus js 

// koi bhi code js me line by line chalega, aur ye natural pattern bhi huta hai 
// ky code line by line chale, but kabhi kabhaar aise cases ate hai life me jaha
// par apka code wait karta hai and utni der me agla code chal jata hai

// e.g 

// console.log("hey 1");
// console.log("hey 2");
// setTimeout(() => {
// console.log("hey 3");    
// }, 3000);
// console.log("hey 4");


// sync > aisa code jo line by line chale 
// async > aisa code jo jab chalne ke liye ready hujae tab chale

// callBack function > ek function ko agar ap dosre function ke parametr
// me bhj rhe ho use hum callback function kehty hai

// function kuchDerBadChalunga(fnc){
//     setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
// };

// kuchDerBadChalunga(function(){
//     console.log("hey");
// });

// callback pattern and callback hell

function fetchProfile(username, fcb){
    console.log("fetching profile data")
    setTimeout(() => {
        fcb({_id: 12122 , username, age: 23, email: "sardarnazeer495@gmail.com"})
    }, 2000);
}

function fetchPost(id, cb){
    console.log("fetching posts....")
    setTimeout(() => {
        cb({_id: id, posts: ["hey","hello","good morning"]});
    }, 3000);
}

function savedPost(id,cb){
    console.log("fetching saved post");
    setTimeout(() => {
        cb({_id: id, saved: [1,3,4,6,8,9]})
    }, 4000);
}

fetchProfile("Sardar Nazeer", function(data){
    console.log(data);
    fetchPost(data._id, function(posts){
        console.log(posts);
        savedPost(data._id, function(saved){
            console.log(saved);
        })
    }) 
})

// Promises: resolve, reject, then, catch 

// promises > JavaScript me Promise ek object hota hai jo future me milne wale result 
// ko represent karta hai.Ye asynchronous kaam handle karta hai, jaise:

// API call
// Database fetch
// File loading
// Timer

// JavaScript me Asynchronous ka matlab hota hai:
// Kaam background me chalta rahe aur baaki code rukay bina execute hota rahe.

// jab bhi ap promise banate ho ya to wo resolve huga ya reject huga 

let pr = new Promise(function(res,rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if (rn>5) {
            res(rn);
        } else {rej(rn)};
    }, 3000);
})

// pr.then(function(val){
//     console.log("resolved with", val);
// }).catch(function(val){
//     console.log("reject with", val);
// })

// resolve huga to than chalega

// res.than();

// rejct huga to catch chalega 

// rej.catch();

// async/await syntax, error handling with try-catch 

// async/await JavaScript me asynchronous code ko easy aur readable banata hai.
// Ye promises ko handle karne ka modern tarika hai.

// async/await > .then .catch se bachata hai, agar kahi pe promise banaya hai 
// to function bnau uske sath async likh do aur ander await

// async/await kehta hai apne ander ke code ko try aur catch me rakho 
// resolved hua to try ka code chalega
// reject huga to catch ka code chalega

async function abcd(){
    try {
        let val = await pr;
        console.log(pr);
    } catch (error) {
        console.log(error);
    }
}

abcd();

// async Kya Hota Hai?

// Jis function ke aage async lagta hai:
// wo hamesha promise return karta hai
// uske andar await use kar sakte hain

// await Kya Hota Hai?

// await promise ka result aane tak wait karta hai.
// Lekin sirf async function ke andar use hota hai.
