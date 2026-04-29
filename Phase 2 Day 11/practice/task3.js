// Task3 

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main");

// preventDefault > browser ko browse ya reload hune se rokta hai 

form.addEventListener("submit", function(evt){
    evt.preventDefault();


    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h1 = document.createElement("h1");
    h1.textContent = inputs[1].value;
    let h3 = document.createElement("h3");
    h3.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);

    main.appendChild(card);
    
    form.reset();   // reset form ke ander ka text hata deta hai submit hune k bd
})