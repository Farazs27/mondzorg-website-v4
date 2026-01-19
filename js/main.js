/**
 * Mondzorg Sloterweg - Elite Edition
 * Museum-Quality Interactions
 * 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Lenis-like Smooth Scroll (Native simplified)
    document.documentElement.style.scrollBehavior = 'smooth';

    // 2. Navbar Scroll Effect - Glass Reveal
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Hero Parallax - Cinematic Feel
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                // Subtle parallax (0.2 speed)
                heroBg.style.transform = `scale(1.1) translateY(${scrolled * 0.2}px)`;
            }
        });
    }

    // 4. GSAP-Style Scroll Reveals (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add specific class for text reveal animation if needed
                if (entry.target.classList.contains('reveal-text')) {
                    entry.target.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
                }
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const revealElements = document.querySelectorAll('.fade-up, .hero-subtitle, .hero-title, .hero-actions, .bento-card');
    
    revealElements.forEach(el => {
        // Set initial state via JS to avoid layout shift before JS loads
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        
        revealObserver.observe(el);
    });

    // 5. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    // Note: In a real implementation, we'd toggle a full-screen menu overlay here.
    // For this deliverables, we'll keep it simple or expand as requested.
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle menu logic
            console.log('Menu toggled');
        });
    }

    // 6. Preloader - Elegant Fade Out
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.transition = 'opacity 0.8s ease';
                setTimeout(() => {
                    preloader.remove();
                }, 800);
            }, 500);
        });
    }
});
