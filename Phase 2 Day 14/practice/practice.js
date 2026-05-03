// Task: Toggle Dark mode 

// browser ke apne dark mode ke hisaab se 
// (window.matchMedia("(prefers-color-scheme: dark)")
// Browser ko bol rahe ho:
// “Mujhe batao system dark mode me hai ya nahi”
// Ye ek MediaQueryList object return karta hai
// .matches 
// true → Dark mode
// false → Light mode
// Is se tum initial state detect karte ho (page load pe)

function setDarkOrLight() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}

// Page Load pe check (localStorage vs OS)
// Agar user ne manually theme choose kiya hai:
// localStorage.getItem("theme")
// to usi ko apply karo
// Agar kuch save nahi hai:
// OS ka theme use karo (setDarkOrLight())

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else{
setDarkOrLight();
}

// OS Theme Change Listener
// ab user system ka theme change kare:
// Dark → Light
// Light → Dark

// Tab ye code run hota hai

// if (!localStorage.getItem("theme"))
// Agar user ne manual theme set nahi kiya
// tabhi OS follow karo
// Agar user ne manually choose kiya:
// OS change ignore karo

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
    if (!localStorage.getItem("theme")) {
    setDarkOrLight();
        
    }
})

// Button ko select kar liya toggle ke liye

let btn = document.querySelector("button");

// Case 1: Agar already dark hai
// Light me switch karo

// Save karo:

// localStorage.setItem("theme","light");
// Case 2: Agar light hai
// Dark me switch karo
// Save karo:
// localStorage.setItem("theme","dark");

btn.addEventListener("click", function(){
    if (document.body.classList.contains('dark')) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");

        localStorage.setItem("theme","light");
    } else{
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme","dark");
    }
})