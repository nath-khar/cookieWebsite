const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu); 

// Underline Title in Menu
document.querySelector(".menuTitle").addEventListener("mouseover",function() {
    this.classList.add("transitioned");
});

// Underline Title in Service
document.querySelector(".serviceTitle").addEventListener("mouseover",function() {
    this.classList.add("transitioned");
});

