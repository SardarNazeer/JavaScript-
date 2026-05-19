// a user card data fetching



function getUsers(){
    fetch("https:randomuser.me/api/?results=3")
  .then((raw) => raw.json())
  .then((data) => {

    document.querySelector(".cards").innerHTML = "";

    data.results.forEach(function (user) {
      // Main Card
      const card = document.createElement("div");
      card.className =
        "bg-white w-80 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300";

      // Cover
      const cover = document.createElement("div");
      cover.className = "h-28 bg-blue-500";

      // Profile Wrapper
      const profileWrapper = document.createElement("div");
      profileWrapper.className = "flex justify-center -mt-14";

      // Profile Image
      const profileImg = document.createElement("img");
      profileImg.className =
        "w-28 h-28 rounded-full border-4 border-white object-cover";

      profileImg.src = user.picture.large;
      profileImg.alt = "User Image";

      // Content
      const content = document.createElement("div");
      content.className = "text-center p-5";

      // User Name
      const userName = document.createElement("h2");
      userName.className = "text-2xl font-bold text-gray-800";
      userName.innerText = user.name.first + " " + user.name.last;

      // Role
      const role = document.createElement("p");
      role.className = "text-blue-500 font-medium";
      role.innerText = "Frontend Developer";

      // Bio
      const bio = document.createElement("p");
      bio.className = "text-gray-600 text-sm mt-3";

      bio.innerText =
        "Passionate frontend developer who loves creating modern and responsive UI designs.";

      // Button Wrapper
      const buttonWrapper = document.createElement("div");
      buttonWrapper.className = "flex justify-center gap-3 mt-5";

      // Follow Button
      const followBtn = document.createElement("button");
      followBtn.className =
        "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition";

      followBtn.innerText = "Follow";

      // Message Button
      const messageBtn = document.createElement("button");
      messageBtn.className =
        "border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition";

      messageBtn.innerText = "Message";

      // Append Elements
      profileWrapper.append(profileImg);

      buttonWrapper.append(followBtn, messageBtn);

      content.append(userName, role, bio, buttonWrapper);

      card.append(cover, profileWrapper, content);

      // Add Card into Body
      document.body.append(card);
    });
  });
}

getUsers();

document.querySelector("button").addEventListener("click", function(){
    getUsers();
})