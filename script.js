/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.querySelector(".loader");

        loader.classList.add("hide");

    }, 1800);

});


/* =====================================
   TYPING EFFECT
===================================== */

const typingElement =
    document.getElementById("typing");

const words = [
    "IT Enthusiast",
    "Web Developer",
    "Student",
    "Tech Explorer",
    "Creative Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed =
        deleting ? 50 : 100;

    setTimeout(
        typeEffect,
        speed
    );

}

typeEffect();


/* =====================================
   MOBILE MENU
===================================== */

const menuButton =
    document.getElementById("menu-btn");

const navMenu =
    document.getElementById("nav-menu");

menuButton.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("open");

    }
);


/* =====================================
   NAVIGATION ACTIVE
===================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href")
                ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);


/* =====================================
   CLOSE MOBILE MENU
===================================== */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navMenu.classList.remove(
                "open"
            );

        }
    );

});


/* =====================================
   CUSTOM CURSOR
===================================== */

const cursor =
    document.querySelector(".cursor");

const cursorOutline =
    document.querySelector(
        ".cursor-outline"
    );

document.addEventListener(
    "mousemove",
    e => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";

        cursorOutline.style.left =
            e.clientX + "px";

        cursorOutline.style.top =
            e.clientY + "px";

    }
);


const clickable =
    document.querySelectorAll(
        "a, button"
    );

clickable.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorOutline.style.width =
                "55px";

            cursorOutline.style.height =
                "55px";

            cursorOutline.style.background =
                "rgba(124,92,255,.1)";

        }
    );

    element.addEventListener(
        "mouseleave",
        () => {

            cursorOutline.style.width =
                "35px";

            cursorOutline.style.height =
                "35px";

            cursorOutline.style.background =
                "transparent";

        }
    );

});


/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(
        ".stat-number"
    );

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const about =
        document.getElementById(
            "about"
        );

    const position =
        about.getBoundingClientRect();

    if (
        position.top <
        window.innerHeight * .8
    ) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(
                    counter.dataset.target
                );

            let current = 0;

            const increment =
                target / 50;

            const updateCounter =
                () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.ceil(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                };

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    startCounters
);


/* =====================================
   SKILL BAR ANIMATION
===================================== */

const skillBars =
    document.querySelectorAll(
        ".skill-bar span"
    );

let skillStarted = false;

function animateSkills() {

    if (skillStarted) return;

    const skills =
        document.getElementById(
            "skills"
        );

    const position =
        skills.getBoundingClientRect();

    if (
        position.top <
        window.innerHeight * .8
    ) {

        skillStarted = true;

        skillBars.forEach(bar => {

            bar.style.width =
                bar.dataset.width;

        });

    }

}

window.addEventListener(
    "scroll",
    animateSkills
);


/* =====================================
   BACK TO TOP
===================================== */

const backTop =
    document.getElementById(
        "backTop"
    );

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);

backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================
   REVEAL ANIMATION
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section-title, .skill-card, .project-card, .timeline-item, .stat-card"
    );

revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

    }
);


function revealOnScroll() {

    revealElements.forEach(
        element => {

            const position =
                element.getBoundingClientRect();

            if (
                position.top <
                window.innerHeight - 80
            ) {

                element.style.opacity =
                    "1";

                element.style.transform =
                    "translateY(0)";

            }

        }
    );

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================
   3D CARD EFFECT
===================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 25;

            const rotateY =
                (centerX - x) / 25;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =====================================
   PARALLAX HERO
===================================== */

window.addEventListener(
    "scroll",
    () => {

        const visual =
            document.querySelector(
                ".hero-visual"
            );

        if (!visual) return;

        const scroll =
            window.scrollY;

        if (scroll < 800) {

            visual.style.transform =
                `translateY(${scroll * .08}px)`;

        }

    }
);


/* =====================================
   RANDOM PARTICLES
===================================== */

const particles =
    document.querySelector(
        ".particles"
    );

for (let i = 0; i < 20; i++) {

    const particle =
        document.createElement(
            "span"
        );

    particle.style.position =
        "fixed";

    particle.style.width =
        Math.random() * 3 + "px";

    particle.style.height =
        particle.style.width;

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        "rgba(124,92,255,.5)";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.pointerEvents =
        "none";

    particle.style.animation =
        `particleFloat ${
            Math.random() * 5 + 5
        }s infinite ease-in-out`;

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particles.appendChild(
        particle
    );

}


/* =====================================
   DYNAMIC PARTICLE STYLE
===================================== */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes particleFloat {

    0%,100% {

        transform:
            translateY(0)
            translateX(0);

        opacity: .2;

    }

    50% {

        transform:
            translateY(-40px)
            translateX(20px);

        opacity: .8;

    }

}

`;

document.head.appendChild(style);