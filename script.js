// Function to toggle the responsive class for the navbar
function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

// Function to set the active link in the navbar
function setActiveLink() {
    var currentLocation = window.location.pathname;
    var navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to add smooth scrolling to anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Run these functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setActiveLink();
    addSmoothScrolling();
});

// Add event listener for window resize
window.addEventListener('resize', function() {
    var navbar = document.getElementById("myNavbar");
    if (window.innerWidth > 600) {
        navbar.className = "navbar";
    }
});
