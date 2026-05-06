// Real-Time Search Filter

let users = [
  {
    name: "Sardar Nazeer",
    pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "full stack software developer - build anything",
  },
  {
    name: "Ayesha",
    pic: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UI/UX Designer",
  },
  {
    name: "Hania",
    pic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Graphic Designer",
  },
  {
    name: "Faisal",
    pic: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Backend Developer",
  },
  {
    name: "Hunain Shah",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "HR",
  },
  {
    name: "Qadeer",
    pic: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Manager",
  },
  {
    name: "Saad Babar",
    pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Accountant",
  },
];


function showUsers(arr) {
    arr.forEach(function(user){

        // create outer div 
        let card = document.createElement("div");
        card.classList.add("card");

        // create image 
        let img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create blurred layer div 
        let blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // create content div 
        let content = document.createElement("div");
        content.classList.add("content");

        // h3 and p tag create 
        let heading = document.createElement("h3");
        heading.textContent = user.name;
        let para = document.createElement("p");
        para.textContent = user.bio;

        // append heading and para into content 
        content.appendChild(heading);
        content.appendChild(para);

        // append all to card 
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);
 

        // finally append card to the cards
        document.querySelector(".cards").appendChild(card);
    })
}

showUsers(users);


let inp = document.querySelector("input");

inp.addEventListener("input", function(){
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});


// sare user show karwana
// filter lagana har bar input pe
// show karna filtered user
