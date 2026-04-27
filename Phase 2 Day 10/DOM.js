// DOM: DOCUMENT OBJECT MODEL

// DOM ek system hai jo browser banata hai jab koi webpage load hota hai. Ye HTML ko ek 
// tree (structure) ki form me convert karta hai jahan har element ek object (node) hota hai,
//  jise JavaScript control kar sakti hai.

// agar html ye ho 

{/* <html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html> */}

// to dom ise samjhta hai 

// Document
//  └── html
//       └── body
//            ├── h1 ("Hello")
//            └── p ("World")

// dom manipulation: changes krna apne browser me 
// 1. html se elment select karna 
// 2. text badlna
// 3. Css badalna
// 4. event listener ADD karna 
// 5. Html change karna 
// 6. attribute badalna 

// Selecting Element se by html: getelementbyid, getelementbyclasssname, queryselector, and all 

// getelemntbyid
// selecting element in html by their id 

// let head2 = document.getElementById("head2");
// console.log(head2);

// getElementsByClassName
// ye humein console sare same class wale array ke 
// form me deta hai qk classname ek se zyada element ka same hu skta hai 

// let head1 = document.getElementsByClassName("head1");
// console.log(head1);

// ye dono selector old way hai
// ab hum new way ka use krty hai querySelector and querySelectorAll 

// querySelector 
// ye hamesha first wale element ko select karta hai 

// let head1 = document.querySelector("h1");
// console.log(head1);

// querySelectorAll: tamam element ko select karta hai ye ek array jesa sturcture deta hai 

// let head = document.querySelectorAll("h1");
// console.log(head);

// Text/Content Access 

// TextContent, innerText: works same

// let h1 = document.querySelector("h1");
// h1.textContent = "Sardar Nazeer";

// innerHtml: ye html b change karta hai tag ke ander

// h1.innerHTML = "<i>hey</>";
// console.dir(h1);

// Attribute Manipulation: getAttribute, setAttribute, removeAttribute

// Attribute> tags ke ilawa jo huta hai jese Href
//  means attribute provides extra information about tags 

// setAttribute> ap attribute ki value change kar sakte hai 

// let a = document.querySelector("a");
// a.setAttribute("href", "https://www.google.com");

// getAttribute > Attribute ki value nikaalna 

// console.log(a.getAttribute("href"));

// removeAttribute > remove kar deta hai attribute

// a.removeAttribute("href");


// Dynamic DOM Manipulation: createelement, appendchild, removechild, prepend

// createelemnt > agar html me koi element nahi hai use bana lena 

// pehla create element karo 
// phr append/prepend karo jaha bhi element chaiye 

// let para = document.createElement("p");
// para.textContent = "This is parapraph";
// document.body.append(para);

// appendchild > ek element pe ek extra element add karna  

// let headMy = document.createElement("h2");
// headMy.textContent = "me h2 ho"
// document.querySelector("div").appendChild(headMy);

// removechild > ek element se ek element hata lena 

// document.body.remove(para);

// prepend > kisi element ke start me kuch add karna 

// let para2 = document.createElement("p");
// para.textContent = "This is parapraph 2";
// document.body.prepend(para);


// Style updates via .style and classList (add,remove,toggle)
// JS se CSS change karna

// .style 

let h1 = document.querySelector("h1");
h1.style.color = "red";

// ClassList: add method class add karta hai

h1.classList.add("head");

// classList: remove method class hatata hai 

h1.classList.remove("head");

// classList: toggle method agar classs huti hai remove kar deta hai nahi huti to add 

h1.classList.toggle("head");

