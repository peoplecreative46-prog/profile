document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll animations (Fade in elements as they scroll into view)
    const fadeElements = document.querySelectorAll('.section-title, .timeline-item, .skill-card, .project-card, .about-content');
    
    fadeElements.forEach(el => {
        el.classList.add('fade-in-section');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Hanya animate satu kali
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 2. Responsive navigation and scroll state
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('is-scrolled', window.scrollY > 24);
        }, { passive: true });
    }

    if (navToggle && navLinks) {
        const closeNavigation = () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Buka navigasi');
            navLinks.classList.remove('is-open');
            navToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        };

        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            navToggle.setAttribute('aria-label', isOpen ? 'Buka navigasi' : 'Tutup navigasi');
            navLinks.classList.toggle('is-open', !isOpen);
            navToggle.innerHTML = `<i class="fa-solid fa-${isOpen ? 'bars' : 'xmark'}" aria-hidden="true"></i>`;
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeNavigation);
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeNavigation();
        });

        document.addEventListener('click', event => {
            if (!navbar.contains(event.target)) closeNavigation();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 780) closeNavigation();
        });
    }

    // 3. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Form Validation and Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name && email && message) {
                // Simulate form submission process
                const btn = contactForm.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = 'Mengirim...';
                btn.disabled = true;

                // Fake API call timeout
                setTimeout(() => {
                    formStatus.textContent = 'Terima kasih, pesan Anda telah terkirim!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    
                    // Reset button
                    btn.textContent = originalText;
                    btn.disabled = false;

                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = '';
                        formStatus.className = 'form-status';
                    }, 5000);
                }, 1500);
            } else {
                formStatus.textContent = 'Harap isi semua bidang formulir.';
                formStatus.className = 'form-status error';
            }
        });
    }
});
