document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dynamic Sticky Navbar & Header ---
    const navbar = document.querySelector('.navbar');
    const topHeader = document.querySelector('.top-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
            if(window.innerWidth > 992 && topHeader) {
                // topHeader.style.transform = 'translateY(-100%)'; // Optional completely hide via code if needed
                // Currently purely visual via CSS
            }
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Scroll-Reveal Animations (Intersection Observer) ---
    // Make sure we apply classes to all major sections dynamically if not hardcoded
    const sectionsToAnimate = document.querySelectorAll('section, .value-card, .profile-container, .cta-banner-content');
    
    sectionsToAnimate.forEach((el, index) => {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
            // Add staggering for grid items
            if(el.classList.contains('value-card')) {
                el.classList.add(`reveal-stagger-${index % 3 + 1}`);
            }
        }
    });

    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once for premium feel
            }
        });
    }, revealObserverOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // --- 3. Micro-Interactions & Magnetic Effects ---
    const magneticElements = document.querySelectorAll('.cta-btn-gold, .cta-btn-outline, .slider-arrow');

    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            elem.style.transform = `translate(${x / 8}px, ${y / 8}px) scale(1.05)`;
        });

        elem.addEventListener('mouseleave', () => {
            elem.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });

    // --- 3.5 Premium 3D Tilt Effect on Cards ---
    const tiltCards = document.querySelectorAll('.value-card, .product-card, .keunggulan-card, .vmm-card');
    
    // Check if device supports hover (not a touch device) to ensure performance
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (!isTouchDevice) {
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate subtle rotation values based on mouse position
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg tilt
                const rotateY = ((x - centerX) / centerX) * 5;
                
                // Add soft dynamic gradient on hover point (Glow Effect)
                const glowX = (x / rect.width) * 100;
                const glowY = (y / rect.height) * 100;
                
                card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.9) 0%, var(--bg-white) 60%)`;
                card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-10px)`;
                card.style.boxShadow = `0 25px 50px rgba(14, 102, 18, 0.1), ${-rotateY}px ${rotateX}px 25px rgba(212, 175, 55, 0.15)`;
            });

            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none'; // Snap instantly to mouse for smooth tracking
            });

            card.addEventListener('mouseleave', () => {
                card.style.background = 'var(--bg-white)';
                card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)`;
                card.style.boxShadow = 'var(--shadow-card)';
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'; // Spring back to default
            });
        });
    }

    // --- 4. Mobile Menu Logic (Maintained & Polished) ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            // Re-implement basic toggling
            const isFlex = window.getComputedStyle(navLinks).display !== 'none';
            if (isFlex && navLinks.style.display !== '') {
                navLinks.style.display = '';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--glass-bg)';
                navLinks.style.backdropFilter = 'blur(20px)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '1px solid var(--glass-border)';
                navLinks.style.boxShadow = 'var(--shadow-card)';
            }
        });
    }

    // --- 5. Hero Slideshow Logic ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideCount = slides.length;
        let slideInterval;
        const intervalTime = 7000; 

        // Clear existing dots in HTML if we dynamically recreate to avoid duplicates
        if(dotsContainer) dotsContainer.innerHTML = '';

        slides.forEach((_, index) => {
            if(dotsContainer) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            }
        });

        const dots = document.querySelectorAll('.dot');

        function updateSlider() {
            slides.forEach(slide => slide.classList.remove('active'));
            if(dots.length > 0) dots.forEach(dot => dot.classList.remove('active'));

            slides[currentSlide].classList.add('active');
            if(dots.length > 0) dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            resetInterval();
        }

        if(nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });
        }

        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        startInterval(); 
    }
});