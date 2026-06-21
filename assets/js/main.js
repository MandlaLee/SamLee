```javascript
/* ==========================================
   SamLee Estates
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initHeroSlider();
    initSmoothScroll();
    initStickyHeader();

});

/* ==========================================
   MOBILE MENU
========================================== */

function initMobileMenu() {

    const button = document.getElementById("mobileMenuBtn");
    const nav = document.getElementById("nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {

        nav.classList.toggle("mobile-active");

    });

}

/* ==========================================
   HERO SLIDER
========================================== */

function initHeroSlider() {

    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length <= 1) return;

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");

    }, 6000);

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", e => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

/* ==========================================
   STICKY HEADER SHADOW
========================================== */

function initStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}

/* ==========================================
   FADE-IN ANIMATION
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

}, {
    threshold: 0.15
});

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".quick-card, .feature-card, .category-card, .resource-card, .property-card, .testimonial-card"
    );

    cards.forEach(card => {

        observer.observe(card);

    });

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

function animateCounter(element, target) {

    let current = 0;

    const increment = target / 100;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent =
            Math.floor(current);

    }, 20);

}

/* ==========================================
   ACTIVE NAV LINK
========================================== */

function setActiveNavLink() {

    const currentPage =
        window.location.pathname.split("/").pop();

    const links =
        document.querySelectorAll(".nav a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" && href === "index.html")
        ) {

            link.classList.add("active-link");

        }

    });

}

setActiveNavLink();

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

function createBackToTopButton() {

    const button =
        document.createElement("button");

    button.innerHTML = "↑";

    button.className = "back-to-top";

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

createBackToTopButton();

/* ==========================================
   PRELOAD HERO IMAGES
========================================== */

function preloadImages() {

    const images = [
        "assets/images/hero-1.jpg",
        "assets/images/hero-2.jpg",
        "assets/images/hero-3.jpg"
    ];

    images.forEach(src => {

        const img = new Image();

        img.src = src;

    });

}

preloadImages();

/* ==========================================
   YEAR AUTO UPDATE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const yearElements =
        document.querySelectorAll(".current-year");

    const year =
        new Date().getFullYear();

    yearElements.forEach(el => {

        el.textContent = year;

    });

});

/* ==========================================
   CONSOLE BRANDING
========================================== */

console.log(`
╔══════════════════════════════════════╗
║          SAMLEE ESTATES             ║
║   Student Accommodation Near UFS    ║
╚══════════════════════════════════════╝
`);
```
