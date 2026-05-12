// Add user through form dynamically

// approach
// 1) first ek blank object banau ga
// 2) usme ek array huga jisme sare user ayenge
// 3) addUser ek method huga, submit ke ander hum user array ko select krenge or usme push
// krenge name role bio or picture, or phr uske bad form reset karke data hata denge
// 4) removeuser ek method huga
// 5)init ek method huga
// form ko select kr lenge or uspe addeventlistner laga denge
// 6)submit form ek method huga, uske ander this ki value add user kar denge
// 7) render ui method create karenge or uske ander user ke sare element create krenge
// or uski value tadduser me dal denge this k zariye

let form = document.querySelector("form");

let username = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");
let photo = document.querySelector("#photo");

const userManager = {
  user: [],
  init: function () {
    // this object hai, obj ka submitform method chalega, or bind kr diya object me
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.user.push({
      username: username.value,
      bio: bio.value,
      role: role.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
      document.querySelector(".cards").innerHTML="";
    this.user.forEach((users, index) =>{
      // Main card
      let card = document.createElement("div");
      card.className = "card";

      // Image
      let img = document.createElement("img");
      img.src = users.photo;

      // Card content
      let cardContent = document.createElement("div");
      cardContent.className = "card-content";

      // Name
      let name = document.createElement("h3");
      name.innerText = users.username;

      // Role
      let role = document.createElement("p");
      role.className = "role";
      role.innerText = users.role;

      // Bio
      let bio = document.createElement("p");
      bio.className = "bio";
      bio.innerText = users.bio;

      // Button
      let btn = document.createElement("button");
      btn.className = "btn";
      btn.innerText = "Remove";

          // remove user
    btn.addEventListener("click", () => {
      this.removeUser(index);
    });

      // Append elements
      cardContent.append(name, role, bio, btn);
      card.append(img, cardContent);

      // Show on page
      document.querySelector(".cards").append(card);

    });
  },
  removeUser: function (index) {
  this.user.splice(index, 1);
  this.renderUi();
  },
};

userManager.init();
