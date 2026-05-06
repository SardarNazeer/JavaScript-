let users = [
  { name: "Sardar Nazeer", age: 20, bio: "Full stack developer" },
  { name: "Ali Khan", age: 22, bio: "Frontend developer" },
  { name: "Ahmed Raza", age: 21, bio: "Backend developer" },
  { name: "Usman Tariq", age: 23, bio: "MERN stack developer" },
  { name: "Hassan Ali", age: 19, bio: "Student & learner" },
  { name: "Bilal Ahmed", age: 24, bio: "Software engineer" },
  { name: "Zain Malik", age: 22, bio: "UI/UX designer" },
  { name: "Faizan Sheikh", age: 25, bio: "DevOps engineer" },
  { name: "Saad Khan", age: 21, bio: "Mobile app developer" },
  { name: "Hamza Javed", age: 23, bio: "AI enthusiast" },
];

let inp = document.querySelector("#searchInput");
let container = document.querySelector(".search");

// function to show users
function showUser(arr) {
  container.innerHTML = "";

  arr.forEach(function (user) {
    let content = document.createElement("div");
    content.classList.add("content");

    let h2 = document.createElement("h2");
    h2.textContent = user.name;

    let h3 = document.createElement("h3");
    h3.textContent = user.age;

    let p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h2);
    content.appendChild(h3);
    content.appendChild(p);

    container.appendChild(content);
  });
}

// initial render
showUser(users);

// search filter
inp.addEventListener("input", function () {
  let searchText = inp.value.toLowerCase();

  let filtered = users.filter(function (user) {
    return user.name.toLowerCase().includes(searchText);
  });

  container.innerHTML = "";

  if (filtered.length === 0) {
    let msg = document.createElement("h3");
    msg.textContent = "No result found";
    msg.style.color = "red";

    container.appendChild(msg);
  } else {
    showUser(filtered);
    let success = document.createElement("h3");
    success.textContent = "result matched";
    success.style.color = "green";

    container.appendChild(success)
  }
});
