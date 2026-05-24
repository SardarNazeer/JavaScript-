// Async JavaScript Practice Questions
// These questions will help improve your async JavaScript understanding, logic building, API handling, and interview preparation.
// Level 1 — Basics of setTimeout & Async
// •	Q1: Print "Hello World" after 2 seconds.
// •	Q2: Print 1 2 3 4 5 with a 1-second interval.
// •	Q3: Using setTimeout, create this sequence: Start -> Loading... -> Done
// •	Q4: Create a function that prints a name after a delay.
// •	Q5: Predict the output of async console.log examples.
// Level 2 — Callback Functions
// •	Q6: Create a callback function processUser(name, callback).
// •	Q7: Create 3 nested callbacks: Login -> Fetch Profile -> Fetch Posts.
// •	Q8: Create a real-world example of callback hell.
// Level 3 — Promises
// •	Q9: Create a promise that resolves for even numbers and rejects for odd numbers.
// •	Q10: Create a promise that returns "Data Loaded" after 2 seconds.
// •	Q11: Create promise chaining for Step 1 -> Step 2 -> Step 3.
// •	Q12: Create a fake login promise with password validation.
// Level 4 — Fetch API
// •	Q13: Fetch users from JSONPlaceholder API.
// •	Q14: Print only usernames from the API response.
// •	Q15: Fetch posts and display only titles.
// •	Q16: Handle loading, success, and error states during API fetching.
// Level 5 — Async Await
// •	Q17: Convert fetch() requests into async-await syntax.
// •	Q18: Handle errors using try-catch.
// •	Q19: Create an async function that fetches users, posts, and comments.
// •	Q20: Fetch 2 APIs in parallel using Promise.all().
// Level 6 — Real Logic Building
// •	Q21: Create a countdown timer from 10 to 0.
// •	Q22: Build a stopwatch with Start, Stop, and Reset functionality.
// •	Q23: Create a 10-second timer for quiz questions.
// •	Q24: Build a delayed notification system.
// •	Q25: Retry failed APIs automatically 3 times.
// Level 7 — Advanced Async Concepts
// •	Q26: Explain callback queue vs microtask queue.
// •	Q27: Predict output involving setTimeout and Promise.resolve().
// •	Q28: Understand the concept of a custom Promise class.
// •	Q29: Create a debounce function.
// •	Q30: Create a throttle function.
// Level 8 — Interview-Level Questions
// •	Q31: Difference between Promise and async-await.
// •	Q32: What is the event loop?
// •	Q33: Explain what happens behind await fetch().
// •	Q34: Difference between setTimeout() and setInterval().
// •	Q35: What is callback hell?
// Mini Projects
// •	Weather App
// •	GitHub Profile Finder
// •	Movie Search App
// •	Real-time Quiz App
// •	Chat Simulation App
// Best Way to Practice
// 1.	Think about the logic first
// 2.	Write the flow on paper
// 3.	Code it yourself
// 4.	Dry run the code
// 5.	Understand the console output


// Async JavaScript Practice Questions
// Section 1: Output Prediction Questions
// Q1: Predict the output of: console.log('A'); console.log('B'); console.log('C');
// Q2: setTimeout(() => console.log('Hello'), 1000); console.log('World');
// Q3: setTimeout(() => console.log('X'), 0); console.log('Y');
// Q4: Promise.resolve('Done').then(console.log); console.log('Start');
// Q5: console.log('1'); setTimeout(() => console.log('2'), 0); console.log('3');
// Q6: Promise.resolve().then(() => console.log('A')); console.log('B');
// Q7: setTimeout A 500ms, B 100ms order prediction
// Q8: console.log('Start'); console.log('End');
// Q9: Promise.resolve().then(() => console.log('Hi'));
// Q10: setTimeout(() => console.log('Done'), 0);
// Section 2: Event Loop Questions
// Q11: console.log(1); setTimeout(2); console.log(3); Promise.then(4)
// Q12: setTimeout A, Promise B, console.log C
// Q13: Promise.then X and Y order
// Q14: setTimeout with nested Promise
// Q15: Promise then + setTimeout combo
// Q16: Start T1 P1 T2 End order prediction
// Q17: Promise chaining 1 2 3
// Q18: Multiple setTimeout A B C
// Q19: Promise chaining Hello -> World
// Q20: Mixed console + Promise + setTimeout
// Section 3: Async/Await Questions
// Q21: async function test log A then B
// Q22: await null behavior
// Q23: async return Promise behavior
// Q24: await '2' sequence
// Q25: async function call order A B C D
// Q26: await Promise.resolve X
// Q27: multiple awaits 1 2 3
// Q28: async return 10 console log
// Q29: await 5 direct print
// Q30: await Promise.resolve Done
// Section 4: Real World Async Problems
// Q1: Create API simulation user fetch
// Q2: Login system with Promise
// Q3: Loading system with delay
// Q4: Fetch users API and print names
// Q5: Fetch user then posts
// Q6: Random success/failure API handler
// Q7: Sequential API chain user->posts->comments
// Q8: Parallel API calls using Promise.all
// Q9: Retry API 3 times logic
// Q10: Weather app logic flow
// Q11: E-commerce checkout flow
// Q12: Instagram feed loader
// Q13: Rate limiting 1 request per second
// Q14: Promise.race fastest response
// Q15: Dashboard aggregation system
