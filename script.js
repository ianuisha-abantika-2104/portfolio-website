// ================================
// MOBILE MENU
// ================================

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu || !icon) return;

    const isOpen = menu.classList.toggle("open");
    icon.classList.toggle("open");

    icon.setAttribute("aria-expanded", isOpen ? "true" : "false");
    icon.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}


// Close mobile menu when a link is clicked
document.querySelectorAll(".menu-links a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");

        menu?.classList.remove("open");
        icon?.classList.remove("open");
        icon?.setAttribute("aria-expanded", "false");
        icon?.setAttribute("aria-label", "Open menu");
    });
});


// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
    const menu = document.querySelector(".menu-links");
    const hamburger = document.querySelector(".hamburger-menu");

    if (!menu || !hamburger) return;

    if (
        menu.classList.contains("open") &&
        !hamburger.contains(event.target)
    ) {
        menu.classList.remove("open");

        const icon = document.querySelector(".hamburger-icon");
        icon?.classList.remove("open");
        icon?.setAttribute("aria-expanded", "false");
        icon?.setAttribute("aria-label", "Open menu");
    }
});


// ================================
// PROJECT FILTER
// ================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            const categories = project.dataset.category || "";

            const categoryList = categories.split(" ");

            const match =
                filter === "all" ||
                categoryList.includes(filter);

            project.classList.remove("show", "hide");

            if (match) {
                project.classList.add("show");
            } else {
                project.classList.add("hide");
            }
        });
    });

});


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }
    });

});


// ================================
// INITIAL PROJECT STATE
// ================================

// Show all projects when the page loads
projects.forEach(project => {
    project.classList.add("show");
});