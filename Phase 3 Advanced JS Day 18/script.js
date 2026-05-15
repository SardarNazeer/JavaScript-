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


// async/await syntax, error handling with try-catch 


// Chaining async operations 
