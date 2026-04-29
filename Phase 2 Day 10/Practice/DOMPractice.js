// Q1) What is the DOM? How does it represent the HTML structure

// document ovject GPUShaderModule, tree structure of html element or jo banate ho html
//  me wo ek node huta hai or dom decide karta hai ke node kaha pe exist karenge

// Q2) Name the types of nodes in the DOM tree

// DOM (Document Object Model) me node ka matlab hota hai HTML document ka har chhota part.
//  Yani jo bhi cheez HTML me hoti hai, wo ek node hoti hai.

// Element Node
// Ye HTML tags hote hain
// Example: <div>, <p>, <h1>
// Text Node
// Tag ke andar jo text hota hai
// Attribute Node
// Tag ke attributes
// Comment Node
// HTML comments

// Q3) What is the difference b/w an element node and a text node

// element node jo hamare tags huty hai html ky.
// text node jo tags ke ander text huta hai.

// Q4) Inspect the following HTML in the browser and identify each node.

// div and span are element node and hello world is text node

// Q5) What is the difference b/w getelementbyid and queryselector

// getelementbyid > select element from their id in js
// queryselector > select element by tag name,id,classname etc in js

// Q6) what does getelementsbyclassname return ? it is an Array.

// array nahi huta lekin array jesa structure deta hai jise HTML collection kehty hai

// Q7) Use queryselectorall to select all the buttons with class .buy-now

let buyNow = document.querySelectorAll(".buy-now");
console.log(buyNow);

// Q8) What is the difference b/w innertext,innerhtml,textcontent

// innertext and innercontent > change the text in tags
// innerhtml > changes the html

// Q9) When should you use TextContent instead of innerText

// textContent> fast aur modern tareqa hai text change karne ka or
//  ye apka display none ya hidden text pe bhi work karta hai

// innerText > ye purana or slow tareqa hai or ye sirf visible text pe work karta hai

// Q10) What does setAttribute do

// it changes any attribute from any of the tags

let img1 = document.querySelector("img");
img1.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);

// Q11) What does createElement() do? what is returned?

// createElement ek element banata hai or element node return karta hai

// Q12) What is the difference b/w appendChild() and prepend()

// appendchild > add element in last
// prepend > add elemnt in start

// Q13) Can you remove an element using removeChild()

// yes you can remove an element using removeChild

// document.querySelector("div").removeChild(elementNode);

// Task1: Select the heading of a page by ID and change its text to "Hello World"

let heading = document.querySelector("#heading");
heading.textContent = "Hello World";

// Task2: Select all li element and print their text using a loop

let lis = document.querySelectorAll("li");

lis.forEach(function (val) {
  console.log(val.textContent);
});

// Task3: Select a paragraph and replace its content with:
{
  /* <b>updated by javascript</> */
}

let para = document.querySelector("p");
para.innerHTML = "<b>Updated by JavaScript</>";

// Task4: How do you get the src of an image using js?

let img = document.querySelector("img");
console.log(img.getAttribute("src"));

// Task5: Select a link and update its href to point to https://www.facebook.com

let link = document.querySelector("a");
link.setAttribute("href", "https://www.facebook.com");

// Task6: Add a title attribute to div dynamically

let div = document.querySelector(".div");
div.setAttribute("title", "hello");

// Task7: Remove the disabled property of button

let btn = document.querySelector(".dis");
btn.removeAttribute("disabled");

// Task8: create a new list item <li>New Task</li> and add it to the end of a <ul>

let task = document.querySelector(".task");
let li = document.createElement("li");
li.textContent = "New Task";
task.appendChild(li);

// Task9: Create a new image element with a
// placeholder source and add it at the top of a div.

let img2 = document.createElement("img");
img2.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1773332598451-8a0a59941912?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);
let divv = document.querySelector(".imgg");
divv.prepend(img2);


// Task10: Select a first item in the list and delete it from the dom 

let item = document.querySelector(".task");
let list = document.querySelector("li");

task.removeChild(list);

// Task11: Set the font size of all <p> elements to 18px using .style 

let p = document.querySelectorAll("p");
p.forEach(function(elem){
  elem.style.fontSize = "18px";
})