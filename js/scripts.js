// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Adding an 'active' class to navbar items when clicked
const navbarItems = document.querySelectorAll('.navbar-nav .nav-item a');

navbarItems.forEach(item => {
    item.addEventListener('click', () => {
        navbarItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Optional: Hide navbar on scroll (for mobile view)
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-80px';  // Hide navbar when scrolling down
    } else {
        navbar.style.top = '0';  // Show navbar when scrolling up
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure it doesn't go negative
});
