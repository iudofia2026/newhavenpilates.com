// Modern JavaScript with GSAP Animations
// Inspired by Concrete Club Studio animation techniques

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeParallax();
    initializeImageLoading();
});

// Hero Section Animations
function initializeAnimations() {
    // Hero background parallax effect
    gsap.to('.hero-image', {
        scale: 1.2,
        duration: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Hero text animations with stagger
    const heroElements = gsap.utils.toArray('.animate-text, .animate-text-delay, .animate-title, .animate-subtitle, .animate-subtitle-delay, .animate-button');
    
    heroElements.forEach((element, index) => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 50,
                rotationX: 15
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                delay: 0.5 + (index * 0.2),
                ease: 'power3.out',
                transformOrigin: 'center bottom'
            }
        );
    });

    // Button hover animation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        // Ripple effect
        ctaButton.addEventListener('click', function(e) {
            const ripple = this.querySelector('.button-ripple');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            gsap.set(ripple, {
                x: x,
                y: y,
                width: 0,
                height: 0
            });

            gsap.to(ripple, {
                width: size,
                height: size,
                duration: 0.6,
                ease: 'power2.out'
            });
        });
    }
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate menu items
        if (navMenu.classList.contains('active')) {
            gsap.fromTo(navLinks, 
                { opacity: 0, y: 20 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.5, 
                    stagger: 0.1,
                    ease: 'power2.out'
                }
            );
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Navbar scroll effect
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: '.nav'}
    });
}

// Scroll-triggered animations
function initializeScrollEffects() {
    // Section headers animation
    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 50,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Class cards animation with stagger
    gsap.utils.toArray('.animate-card').forEach((card, index) => {
        gsap.fromTo(card, 
            {
                opacity: 0,
                y: 100,
                rotationY: 15
            },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Card hover effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Instructor section animations
    const instructorImage = document.querySelector('.animate-image');
    const instructorContent = document.querySelector('.animate-content');

    if (instructorImage) {
        gsap.fromTo(instructorImage, 
            {
                opacity: 0,
                x: -100,
                rotationY: 15
            },
            {
                opacity: 1,
                x: 0,
                rotationY: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: instructorImage,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    if (instructorContent) {
        gsap.fromTo(instructorContent, 
            {
                opacity: 0,
                x: 100,
                rotationY: -15
            },
            {
                opacity: 1,
                x: 0,
                rotationY: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: instructorContent,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }

    // Contact items animation
    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.fromTo(item, 
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Contact item hover effect
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -5,
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Parallax effects
function initializeParallax() {
    // Create parallax effect for background images
    gsap.utils.toArray('.class-image img').forEach(img => {
        gsap.to(img, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Instructor image parallax
    const instructorImg = document.querySelector('.instructor-image img');
    if (instructorImg) {
        gsap.to(instructorImg, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: instructorImg,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }
}

// Image loading and lazy loading
function initializeImageLoading() {
    // Intersection Observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src || img.src;
                
                if (src) {
                    img.src = src;
                    img.classList.add('loaded');
                    
                    // Animate image on load
                    gsap.fromTo(img, 
                        { opacity: 0, scale: 1.1 },
                        { 
                            opacity: 1, 
                            scale: 1, 
                            duration: 1, 
                            ease: 'power2.out' 
                        }
                    );
                }
                
                observer.unobserve(img);
            }
        });
    });

    // Observe all images
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });

    // Set background images
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && heroImage.dataset.bg) {
        heroImage.style.backgroundImage = `url(${heroImage.dataset.bg})`;
    }
}

// Text reveal animations
function createTextReveal() {
    gsap.utils.toArray('.section-title').forEach(title => {
        const words = title.textContent.split(' ');
        title.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
        
        gsap.fromTo(title.querySelectorAll('.word'), 
            {
                opacity: 0,
                y: 50,
                rotationX: 90
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Cursor effects (optional enhancement)
function initializeCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out'
        });
    });

    // Cursor hover effects
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
}

// Performance optimizations
function optimizePerformance() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0.01);
    }

    // Pause animations when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            gsap.globalTimeline.pause();
        } else {
            gsap.globalTimeline.resume();
        }
    });
}

// Initialize additional features
setTimeout(() => {
    createTextReveal();
    optimizePerformance();
}, 1000);

// Smooth page transitions
window.addEventListener('beforeunload', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Animation error:', e);
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        initializeNavigation,
        initializeScrollEffects
    };
}