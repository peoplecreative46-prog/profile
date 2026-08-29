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

    // 2. Navbar shrink effect on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

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
