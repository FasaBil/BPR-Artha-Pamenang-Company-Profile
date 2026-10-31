import { useEffect } from 'react';

/**
 * Efek interaktif global yang sebelumnya ada di script.js:
 * scroll-reveal, efek magnetik tombol, dan 3D tilt kartu.
 * Dijalankan ulang setiap pindah halaman karena elemennya berganti.
 */
export default function useSiteEffects(routeKey) {
    // --- Scroll-reveal (Intersection Observer) ---
    useEffect(() => {
        const targets = document.querySelectorAll('section, .value-card, .profile-container, .cta-banner-content');

        targets.forEach((el, index) => {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
                if (el.classList.contains('value-card')) {
                    el.classList.add(`reveal-stagger-${(index % 3) + 1}`);
                }
            }
        });

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        obs.unobserve(entry.target); // reveal sekali saja
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [routeKey]);

    // --- Efek magnetik pada tombol ---
    useEffect(() => {
        const elements = document.querySelectorAll('.cta-btn-gold, .cta-btn-outline, .slider-arrow');
        const cleanups = [];

        elements.forEach((elem) => {
            const onMove = (e) => {
                const rect = elem.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                elem.style.transform = `translate(${x / 8}px, ${y / 8}px) scale(1.05)`;
            };
            const onLeave = () => {
                elem.style.transform = 'translate(0px, 0px) scale(1)';
            };
            elem.addEventListener('mousemove', onMove);
            elem.addEventListener('mouseleave', onLeave);
            cleanups.push(() => {
                elem.removeEventListener('mousemove', onMove);
                elem.removeEventListener('mouseleave', onLeave);
            });
        });

        return () => cleanups.forEach((fn) => fn());
    }, [routeKey]);

    // --- 3D tilt pada kartu (hanya perangkat non-sentuh) ---
    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return undefined;

        const cards = document.querySelectorAll('.value-card, .product-card, .keunggulan-card, .vmm-card');
        const cleanups = [];

        cards.forEach((card) => {
            const onMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                const glowX = (x / rect.width) * 100;
                const glowY = (y / rect.height) * 100;

                card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.9) 0%, var(--bg-white) 60%)`;
                card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-10px)`;
                card.style.boxShadow = `0 25px 50px rgba(14, 102, 18, 0.1), ${-rotateY}px ${rotateX}px 25px rgba(212, 175, 55, 0.15)`;
            };
            const onEnter = () => {
                card.style.transition = 'none';
            };
            const onLeave = () => {
                card.style.background = 'var(--bg-white)';
                card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)';
                card.style.boxShadow = 'var(--shadow-card)';
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            };
            card.addEventListener('mousemove', onMove);
            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
            cleanups.push(() => {
                card.removeEventListener('mousemove', onMove);
                card.removeEventListener('mouseenter', onEnter);
                card.removeEventListener('mouseleave', onLeave);
            });
        });

        return () => cleanups.forEach((fn) => fn());
    }, [routeKey]);
}
