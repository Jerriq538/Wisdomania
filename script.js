// Wisdomania v1.0

window.addEventListener("load", () => {

    document.body.style.overflow = "hidden";

    const counter = document.getElementById("loader-count");

    let value = 0;

    if (counter) {

        const interval = setInterval(() => {

            value++;

            counter.textContent = value + "%";

            if (value >= 100) {

                clearInterval(interval);

                setTimeout(() => {

                    document.body.style.overflow = "auto";

                }, 300);

            }

        }, 30);

    } else {

        document.body.style.overflow = "auto";

    }

});

// Smooth reveal animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".section, .card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});

// Button hover animation

document.querySelectorAll(".buttons a").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow = "0 0 25px rgba(193,18,31,.45)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});

// Navbar shadow

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 20) {

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        nav.style.boxShadow = "none";

    }

});

// Intro logo mouse movement

const logo = document.querySelector(".intro-logo");

document.addEventListener("mousemove", (e) => {

    if (!logo) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    logo.style.transform = `translate(${x}px, ${y}px)`;

});

// Navbar resize on scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 80) {

        nav.style.padding = "16px 8%";

    } else {

        nav.style.padding = "24px 8%";

    }

});