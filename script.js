/* =========================
   THE NINTH CHAPTER
   JAVASCRIPT
========================= */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .classList.add("hide");

    }, 2200);

});


/* =========================
   OPEN CHAPTER BUTTON
========================= */

function openChapter() {

    document.getElementById("chapter1")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (8 + Math.random() * 12) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1800);


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.position = "absolute";
        navLinks.style.top = "65px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";

        navLinks.style.padding = "25px";

        navLinks.style.flexDirection = "column";

        navLinks.style.background =
            "rgba(10,10,10,0.97)";

    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 700) {

                navLinks.style.display = "none";

            }

        });

    });

/* =========================
   MUSIC BUTTON - SPOTIFY
========================= */

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    window.open(
        "https://open.spotify.com/album/3IeLAtjruojjZFpYNCLTZM",
        "_blank"
    );
});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "The Ninth Chapter — made with love for Steve."
);
