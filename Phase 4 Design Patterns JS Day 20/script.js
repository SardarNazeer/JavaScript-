// Design Patterns in JS

// ap maintainable, scaleable or moduler code likho

// Module Pattern (IIFE)

// ek design pattern hai, jisme hum apna code ek self executing
// function ke ander likhte hai taky variables aur function private hai

// iske ander se hum sirf wahi cheezein return karte hai jo bahir use krni hai

// is pattern ka main fayeda hai data hiding (encapsulation) aur clean structure,
// taky code secure, reusable aur managable ban sake.

// iife > immedieatly invoked function expression

let bank = (function () {
  let balance = 12000;

  function checkBalanace() {
    console.log(balance);
  }

  function deposit(val) {
    balance = val;
  }

  function withDraw(val) {
    if (val <= balance) {
      balance -= val;
      console.log(balance);
    }
  }
  return {
    checkBalanace,
    deposit,
    withDraw,
  };
})();

bank.checkBalanace();
bank.deposit(4000);
bank.withDraw(6000);

// module pattern > me jo banate hai IIFE ke ander banate hai,
// wo private hujaega aur IIFE ke ander se ek object return karwa denge
// jisko hum phr bahir access kr skte hai

// Revealing Module Pattern > same module pattern ki tarha hai, bas return karte waqt
// hum jo bahir bhej rahe huty hai uska naam change kar dete hai

// module pattern me is tarha return karwate hai

// return {
//   checkBalanace,
//   deposit,
//   withDraw,
// };

// and revealing module pattern me is tarha

// return {
//   check: checkBalanace,
//   dep: deposit,
//   draw: withDraw,
// };

// Factory function pattern > ek function banate ho jo objects create karta hai
// factory = objects banane ki machine 

// factory Function Pattern ek aisa design pattern hai jisme hum ek simple function likhte
// hai jo naye objects bana kar return karta hai, bina class ya new keyword use kiye.

// is pattern ka main idea hai > object creation ko ek function ke through control karna 

// har bar jab tum factory function call karte ho, tumhe ek naya object milta hai jisme apne 
// methods aur (agar chaho to) private data hu sakta hai.

// ye pattern specially useful hai jab tumhe ek hi type ke bht se objects chaiye ho
// jaise users, products, tasks etc 

// eg

function createProduct(name,price){
    let stock = 15;

    return {
        name,
        price,
        checkStock(){
            console.log(stock)
        },
        buyProduct(qty){
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left`)
            } else{
                console.error(`we just have ${stock} pieces`);
            }
        },
        refilled(amount){
            stock += amount;
            console.log(`${stock} total pieces now`)
        }
    }
}

let product = createProduct("iphone",60000);
product.buyProduct(17);

// Observer Pattern basic (pub-sub)

class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`You have successfully subscribe this channel.`)
    }
    unSubscribe(user){
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`You have un-subscribed the channel`);
    }
    notify(message){
        this.subscribers.forEach(sub => sub.update(message))
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    update(data){
        console.log(data);
    }
}

let devwithnazeer = new YoutubeChannel();
let user1 = new User("Sardar");
let user2 = new User("Nazeer");


devwithnazeer.subscribe(user1);
devwithnazeer.subscribe(user2);

devwithnazeer.notify("new video uploaded")

devwithnazeer.unSubscribe(user2);