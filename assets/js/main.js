/* ==========================================
   SamLee Estates
   main.js
   Production MVP Version
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initHeroSlider();
    initSmoothScroll();
    initStickyHeader();
    initFadeAnimations();
    initFaqs();
    initCurrentYear();
    setActiveNavLink();
    createBackToTopButton();

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

    slides.forEach((slide, index) => {

        if (index === 0) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }

    });

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

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

/* ==========================================
   STICKY HEADER
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
   FADE ANIMATIONS
========================================== */

function initFadeAnimations() {

    const cards = document.querySelectorAll(
        ".quick-card, .feature-card, .category-card, .resource-card, .property-card, .testimonial-card, .faq-card, .stat-card"
    );

    if (!cards.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        observer.observe(card);

    });

}

/* ==========================================
   FAQ ACCORDION
========================================== */

function initFaqs() {

    const questions =
        document.querySelectorAll(".faq-question");

    if (!questions.length) return;

    questions.forEach(question => {

        question.addEventListener("click", () => {

            const card =
                question.closest(".faq-card");

            if (!card) return;

            card.classList.toggle("open");

        });

    });

}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function setActiveNavLink() {

    const currentPath =
        window.location.pathname;

    const links =
        document.querySelectorAll(".nav a");

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if (!href) return;

        if (
            currentPath.endsWith(href)
        ) {

            link.classList.add("active-link");

        }

    });

}

/* ==========================================
   CURRENT YEAR
========================================== */

function initCurrentYear() {

    const year =
        new Date().getFullYear();

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent = year;

    });

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

function createBackToTopButton() {

    const button =
        document.createElement("button");

    button.innerHTML = "↑";

    button.className =
        "back-to-top";

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

/* ==========================================
   CONSOLE BRANDING
========================================== */

console.log(`
╔══════════════════════════════════════╗
║          SAMLEE ESTATES              ║
║   Student Accommodation Near UFS     ║
║      https://samlee.co.za            ║
╚══════════════════════════════════════╝
`);
