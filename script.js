// Animasi Counter
const counters = document.querySelectorAll('.counter');
const speed = 100;

const startCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Scroll Reveal
ScrollReveal().reveal('.hero-image', { delay: 300, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.hero-text', { delay: 500, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.pub-card', { interval: 200, origin: 'bottom', distance: '50px' });

// Counter Trigger
let started = false;
window.addEventListener('scroll', () => {
    const stats = document.querySelector('.stats');
    if (window.scrollY > stats.offsetTop - 600 && !started) {
        startCounter();
        started = true;
    }
});
