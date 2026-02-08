/* ============================================
   iProyals Website - Main JavaScript
   ============================================ */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('span');
            icon.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('span');
                if (icon) {
                    icon.textContent = '☰';
                }
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animations for Cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animations on load
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.feature-card, .pricing-card, .use-case-card, .stat-card');
        cards.forEach(function(card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    });

    // Active Navigation Highlighting on Scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const allNavLinks = document.querySelectorAll('.nav-menu a');
                allNavLinks.forEach(function(link) {
                    link.style.color = '';
                });
                navLink.style.color = 'var(--primary-light)';
            }
        });
    });

})();

// Pricing Tab Switching Function (Global scope for onclick)
function showPricing(type) {
    // Hide all pricing grids
    const pricingGrids = document.querySelectorAll('.pricing-grid');
    pricingGrids.forEach(function(grid) {
        grid.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    // Show selected pricing grid
    const selectedGrid = document.getElementById(type + '-pricing');
    if (selectedGrid) {
        selectedGrid.classList.add('active');
    }
    
    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
