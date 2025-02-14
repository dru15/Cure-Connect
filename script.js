document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cta-btn").addEventListener("click", () => {
        alert("Getting started soon!");
    });

    document.querySelector(".login-btn").addEventListener("click", () => {
        alert("Redirecting to login...");
    });

    document.querySelector(".signup-btn").addEventListener("click", () => {
        alert("Redirecting to sign-up...");
    });
});
document.getElementById("getStarted").addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default jump-to behavior
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const dotsContainer = document.querySelector(".dots");
    
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle("active", i === index);
        });

        document.querySelectorAll(".dot").forEach((d, i) => {
            d.classList.toggle("active", i === index);
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    testimonials.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });

    showTestimonial(currentIndex);
    setInterval(nextTestimonial, 4000); // Auto-slide every 4s
});
