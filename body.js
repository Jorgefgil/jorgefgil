// Navbar Burger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const targetElement = document.getElementById(target);

                el.classList.toggle('is-active');
                targetElement.classList.toggle('is-active');
            });
        });
    }
});

// Testimonials Carousel
const carouselRadios = document.querySelectorAll('input[name="carousel"]');
const carouselSlides = document.querySelector('.carousel-slides');
let currentSlide = 0;

function showSlide(index) {
    carouselSlides.style.transform = `translateX(-${index * 100}%)`;
}

carouselRadios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-slide for carousel
setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselRadios.length;
    carouselRadios[currentSlide].checked = true;
    showSlide(currentSlide);
}, 5000);
