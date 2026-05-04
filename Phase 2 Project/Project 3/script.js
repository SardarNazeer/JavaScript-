let students = [
  {
    name: "Ali Raza",
    pic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 20,
    course: "Web Development",
  },
  {
    name: "Ahmed Khan",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 22,
    course: "Data Science",
  },
  {
    name: "Sara Ali",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 21,
    course: "Graphic Design",
  },
  {
    name: "Usman Tariq",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 23,
    course: "Cyber Security",
  },
  {
    name: "Ayesha Malik",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 20,
    course: "App Development",
  },
  {
    name: "Bilal Hussain",
    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 24,
    course: "AI & Machine Learning",
  },
  {
    name: "Fatima Noor",
    pic: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 22,
    course: "UI/UX Design",
  },
  {
    name: "Hassan Ali",
    pic: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    age: 21,
    course: "Full Stack Development",
  },
];


function showUsers(arr) {
    arr.forEach( (user)=>{
        // create outer div 
        let card = document.createElement("div");
        card.classList.add("card");

        // create img tag 
        let img = document.createElement("img");
        img.src = user.pic;

        // create content div 
        let content = document.createElement("div");
        content.classList.add("content");

        // headings and para 
        let h2 = document.createElement("h2");
        h2.textContent = user.name;
        let h3 = document.createElement("h3");
        h3.textContent = user.age;
        let para = document.createElement("p");
        para.textContent = user.course;

        // heading and para in content 
        content.appendChild(h2);
        content.appendChild(h3);
        content.appendChild(para);

        // append in card 
        card.appendChild(img);
        card.appendChild(content);

        // append card into cards 
        document.querySelector(".cards").appendChild(card);
    });
};

showUsers(students);

let inp = document.querySelector("input");

inp.addEventListener("input", function(){
    return user.name.containsWith(user.value);
})