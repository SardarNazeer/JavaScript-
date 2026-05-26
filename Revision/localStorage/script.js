// localStorage

// localStorage JavaScript me browser ka ek feature hai
// jisme hum data save kar sakte hain taake page refresh
//  hone ke baad bhi data delete na ho.

// localStorage.setItem("key", "value");

// BASIC LEVEL (1–15)

// Save a username in LocalStorage.

// localStorage.setItem("username", "sardar");

// Retrieve and display saved username.

// let user = localStorage.getItem("username");
// console.log(user);

// Remove a specific key from LocalStorage.

// localStorage.setItem("age", "18");

// localStorage.removeItem("age");

// Clear all LocalStorage data.

// localStorage.clear();

// Check if a key exists in LocalStorage.

// let age = localStorage.getItem("age");
// console.log(age);

// Store a number and retrieve it.

// localStorage.setItem("marks", 89);

// let marks = Number(localStorage.getItem("marks"));
// console.log(marks);
// console.log(typeof marks);

// Store a boolean value (true/false).

// localStorage.setItem("isLoggedIn", true);

// let loggedIn = localStorage.getItem("isLoggedIn") === "true";

// console.log(loggedIn);
// console.log(typeof loggedIn);

// Update an existing LocalStorage value.

// localStorage.setItem("marks", 99);

// let num = localStorage.getItem("marks");

// console.log(num);

// Count total keys in LocalStorage.

// let totalkeys = localStorage.length;
// console.log(totalkeys);

// Loop through all LocalStorage keys and print them.

// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(key);
// }

// Save user input from an input field.
// Display saved input after page reload.

// Save user input from an input field.
// Display saved input after page reload.

let form = document.querySelector("form");
let input = document.querySelector("input");

let h2 = document.createElement("h2");

document.body.appendChild(h2);

// Reload par saved text show
window.addEventListener("load", function () {
  let loadData = localStorage.getItem("value");

  console.log(loadData);

  if (loadData) {
    h2.textContent = loadData;
  }
});

// Submit par save
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputVal = input.value;

  console.log(inputVal);

  localStorage.setItem("value", inputVal);

  h2.textContent = inputVal;

  input.value = "";
});

// Create a simple dark/light mode toggle and store preference.

let darkMode = document.querySelector(".dark");
let lightMode = document.querySelector(".light");
let body = document.querySelector("body");

window.addEventListener("load", function () {
  let savedPreference = localStorage.getItem("mode");

  if (savedPreference == "dark") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});

darkMode.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";

  localStorage.setItem("mode", "dark");
});

lightMode.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  localStorage.setItem("mode", "light");
});

// Store user's age and show message based on age.
// Save multiple values using different keys.

// 🔹 INTERMEDIATE LEVEL (16–30)

// Store an array in LocalStorage (use JSON).
// Retrieve array and display items in UI.
// Add new item to stored array.
// Remove specific item from array.
// Update an item in stored array.
// Create a simple To-Do list using LocalStorage.
// Mark task as completed and store status.
// Delete task from To-Do list.
// Count total tasks stored.
// Save login status (true/false).
// Auto-login user if already logged in.
// Logout and clear login status.
// Store form data (name, email).
// Auto-fill form using stored data.
// Create search history and store last 5 searches.

// 🔹 ADVANCED LEVEL (31–40)

// Create a notes app using LocalStorage.
// Edit and update saved notes.
// Delete specific note.
// Store objects inside array (user profiles).
// Filter stored users by name.
// Create cart system (add/remove products).
// Store total price of cart.
// Persist cart after page reload.
// Limit LocalStorage size (simulate max items).
// Store timestamps with data (created time).

// 🔹 PRO / INTERVIEW LEVEL (41–50)

// Implement "Remember Me" login system.
// Store and restore scroll position.
// Auto-save textarea content while typing.
// Create a multi-tab sync system (listen storage event).
// Implement expiry system (data expires after X time).
// Cache API response in LocalStorage.
// Build a theme system (multiple themes save & switch).
// Track user visits count.
// Build a mini e-commerce wishlist system.
// Create a reusable LocalStorage helper (get/set/remove wrapper functions).

// Use setTimeout to print 'Hello World' after 2 seconds.
// 2. Create a setTimeout and then cancel it using clearTimeout.
// 3. Use setInterval to print 'Running...' every 1 second.
// 4. Create an interval that runs 5 times and then stops using clearInterval.
// 5. Initialize count = 0 and increment it every second using setInterval.
// 6. Create a function that executes after 3 seconds and prints 'Function executed'.
// 7. Start a timer on button click and stop it using another button.
// 8. Create a countdown timer from 10 to 1 using setInterval.
// 9. Print even numbers (2, 4, 6...) every second using setInterval.
// 10. Start an interval and stop it automatically after 5 seconds using setTimeout.
// 11. Update a paragraph text every second (Time: 1, Time: 2...).
// 12. Create Start and Stop buttons to control an interval.
// 13. Implement input debouncing (print value after 1 second delay).
// 14. Change a div color every 2 seconds using setInterval.
// 15. Create a loading text animation (Loading., Loading.., Loading...).
// 16. Build a stopwatch with start, stop, and reset buttons.
// 17. Create a digital clock showing real-time.
// 18. Build a progress bar that fills up to 100% and stops.
// 19. Simulate API calls every 3 seconds and stop with a button.
// 20. Implement debounce logic to control multiple rapid function calls.

// 🔥 PRO TIP (Important)

// LocalStorage hamesha string store karta hai, isliye:

// Arrays / objects → JSON.stringify()
// Retrieve → JSON.parse()
