// LOOPS
// Loop ek aisi structure hoti hai jo ek block of code ko multiple times execute karti hai
// jab tak koi condition true ho. “Same kaam bar bar karna ho → loop use karo”

// for, while, do-while, foreach

// kaha se jana hai > kaha tak jana hai > kaise jana hai
// for

// 1 - 50

// for(start; end; change){}

// for(let i = 1; i<=40; i++){
//     console.log(i);
// }

// kaha se jana hai > kab rukna hai > kaise jana hai
// while

// start;
// while(end){
    //    code 
//     change;
// }

// 1 - 50
let j = 1;
while (j<51) {
    console.log(j);
    j++;
}


// do while 
// atleast ek bar chalta hai agar condition galat b ho 

// start;
// do{code
//     change
// } while(end)

let i = 12;
do{
    console.log(i);
    i++;
}while(i<4)

// for-of, foreach in arrays
// for-in, object.entries for objects

// break & continue
// kisi bhi loop ko bech me rokne ke liye break use huta hai

for (let i = 0; i < 200; i++) {
    console.log(i);
    if (i === 30) {
        break;
    }   
}

// continue loop me kisi value ko chor ke next value pe chla jae

for (let i = 0; i < 200; i++) {
    console.log(i);
    if (i === 30) {
        continue;
    }
    console.log(i)
}