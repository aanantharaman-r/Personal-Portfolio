// ================= TYPING EFFECT =================

const textArray = [
    "FullStack Developer",
    "React Developer",
    "MCA Student"
];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.querySelector(".typing-text");

function typeText(){

    if(charIndex < textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);
    }

    else{

        setTimeout(deleteText,1500);
    }
}

function deleteText(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteText,50);
    }

    else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeText,500);
    }
}

typeText();


// ================= MOBILE MENU TOGGLE =================

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("#navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuBtn.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            icon.classList.toggle("fa-ellipsis-vertical");

            icon.classList.toggle("fa-xmark");

        }

    });

}

// ================= ACTIVE NAVBAR & AUTO CLOSE =================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar && navbar.classList.contains("active")) {

            navbar.classList.remove("active");

            if (menuBtn) menuBtn.classList.remove("active");

            const icon = menuBtn ? menuBtn.querySelector("i") : null;

            if (icon) {

                icon.classList.add("fa-ellipsis-vertical");

                icon.classList.remove("fa-xmark");

            }

        }

    });

});

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
        link.getAttribute("href")
        === `#${current}`
        ){

            link.classList.add("active");
        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements =
document.querySelectorAll(
".skill-card, .project-card, .card, .contact-left, .contact-right"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("show");
        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// ================= SCROLL PROGRESS BAR =================

const progressBar =
document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const scrollPercent =
    (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
    scrollPercent + "%";

});


// ================= BACK TO TOP BUTTON SHOW =================

const backToTop =
document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backToTop.classList.add("show-top");
    }

    else{

        backToTop.classList.remove("show-top");
    }

});


// ================= CUSTOM CURSOR GLOW =================

const cursor =
document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});


// ================= HEADER SHADOW ON SCROLL =================

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("sticky");
    }

    else{

        header.classList.remove("sticky");
    }

});