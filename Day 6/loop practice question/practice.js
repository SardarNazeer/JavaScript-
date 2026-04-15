// 1) print number 1 to 10 using for loop

for(let i = 1; i<=10; i++){
    console.log(i);
}

// 2) print number 10 to 1 using for loop

for (let i = 10; i >= 1; i--) {
    console.log(i);
    
}

// 3) print even number 1 to 20 using for loop

for(let i = 1; i<=20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4) print odd number from 1 to 15

for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    
}

// 5) print the multiplication table of 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i}`);
}

// 6) find the sum of numbers from 1 to 100

let sum = 1;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
    console.log(sum); 


// 7) print all number 1 to 50 which is divisible by 3

for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
    
}

// 8) ask number from user and print whether number is even or odd from that num

let num = prompt("Enter  any number");
num = Number(num);

for (let i = 0; i <= num; i++) {
    if (i%2===0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
    
}


// 9) count number 1 to 100 which is divisble by 4 & 5

for (let i = 0; i <= 100; i++) {
    if(i%4===0){
        console.log(i)
    } else if(i%5===0){
        console.log(i)
    }
    
}