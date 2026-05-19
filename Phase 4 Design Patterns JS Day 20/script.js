// Design Patterns in JS 

// ap maintainable, scaleable or moduler code likho 

// Module Pattern (IIFE)

// ek design pattern hai, jisme hum apna code ek self executing 
// function ke ander likhte hai taky variables aur function private hai 

// iske ander se hum sirf wahi cheezein return karte hai jo bahir use krni hai 

// is pattern ka main fayeda hai data hiding (encapsulation) aur clean structure, 
// taky code secure, reusable aur managable ban sake.

// iife > immedieatly invoked function expression 

let bank = (function(){
    let balance = 12000;

    function checkBalanace(){
        console.log(balance);
    }

    function deposit(val){
        balance = val;
    }

    function withDraw(val){
        if (val<=balance) {
            balance -= val;
            console.log(balance)
        };
    }
    return{
        checkBalanace,
        deposit,
        withDraw,
    }
})();

bank.checkBalanace();
bank.deposit(4000);
bank.withDraw(6000);

// module pattern > me jo banate hai IIFE ke ander banate hai, 
// wo private hujaega aur IIFE ke ander se ek object return karwa denge 
// jisko hum phr bahir access kr skte hai 

// Revealing Module Pattern 

// Factory function pattern 

// Observer Pattern 

