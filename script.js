// 1. Typewriter Effect
const textArray = ["Peneliti Hukum Islam", "Akademisi Ilmu Falak", "Lulusan IAIN Parepare"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

const typewriterElement = document.getElementById("typewriter");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// 2. Animasi Counter menggunakan Intersection Observer
const counters = document.querySelectorAll('.counter');
const speed = 50;

const startCounter = (counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
};

const observerOptions = {
    root: null,
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target); // Hanya jalan sekali
        }
    });
}, observerOptions);

counters.forEach(counter => {
    observer.observe(counter);
});

// 3. Scroll Reveal Animations
ScrollReveal().reveal('.hero-text', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.img-box', { delay: 400, origin: 'right', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.section-title', { delay: 200, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.timeline-item', { interval: 200, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.pub-card', { interval: 150, origin: 'bottom', distance: '40px', scale: 0.9 });
ScrollReveal().reveal('.tag', { interval: 50, origin: 'bottom', distance: '20px' });