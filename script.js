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
    initializeQuoteAnimations();
    initializeContactAnimations();
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
    const heroElements = gsap.utils.toArray('.animate-title, .animate-subtitle, .animate-subtitle-delay, .animate-button');
    
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
                delay: 0.5 + (index * 0.3),
                ease: 'power3.out',
                transformOrigin: 'center bottom'
            }
        );
    });

    // Quote animations
    const quoteElements = gsap.utils.toArray('.animate-quote, .animate-quote-author');
    
    quoteElements.forEach((element, index) => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 30,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                delay: 2.5 + (index * 0.3),
                ease: 'power2.out'
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

// Modern Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const modernNav = document.getElementById('modern-nav');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Animate mobile menu items
        if (mobileMenu.classList.contains('active')) {
            gsap.fromTo(mobileNavLinks, 
                { opacity: 0, y: 30, scale: 0.9 },
                { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    duration: 0.6, 
                    stagger: 0.1,
                    ease: 'power3.out'
                }
            );
        }
    });

    // Smooth scrolling for desktop navigation links
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
                        offsetY: 100
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Smooth scrolling for mobile navigation links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu
            mobileMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 100
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Navbar scroll effect with enhanced animations
    ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: '.modern-nav'},
        onEnter: () => {
            gsap.to('.modern-nav', {
                duration: 0.4,
                ease: 'power2.out'
            });
        },
        onLeave: () => {
            gsap.to('.modern-nav', {
                duration: 0.4,
                ease: 'power2.out'
            });
        }
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    ScrollTrigger.batch(sections, {
        onEnter: (elements) => {
            elements.forEach(element => {
                const id = element.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    // Remove active class from all links
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    // Add active class to current link
                    activeLink.classList.add('active');
                }
            });
        },
        onLeave: (elements) => {
            elements.forEach(element => {
                const id = element.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.remove('active');
                }
            });
        }
    });

    // Enhanced hover effects for navigation items
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Enhanced Quote and Mission Animations
function initializeQuoteAnimations() {
    const quoteSection = document.querySelector('.quote-section');
    const missionStatement = document.querySelector('.mission-statement');
    
    // Quote section animation
    if (quoteSection) {
        gsap.fromTo(quoteSection, 
            {
                opacity: 0,
                y: 100,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: quoteSection,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Animate quote number with sophisticated entrance
        const quoteNumber = quoteSection.querySelector('.quote-number');
        if (quoteNumber) {
            gsap.fromTo(quoteNumber, 
                {
                    opacity: 0,
                    scale: 0.3,
                    rotation: -15,
                    y: 50
                },
                {
                    opacity: 0.15,
                    scale: 1,
                    rotation: 0,
                    y: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: quoteNumber,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
            
            // Add continuous subtle animation
            gsap.to(quoteNumber, {
                y: -8,
                duration: 3,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: -1
            });
        }
        
        // Animate quote text with sophisticated word-by-word reveal
        const quoteText = quoteSection.querySelector('.quote-text');
        if (quoteText) {
            const words = quoteText.textContent.split(' ');
            quoteText.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
            
            // Set initial state
            gsap.set(quoteText.querySelectorAll('.word'), {
                opacity: 0,
                y: 30,
                rotationX: 90,
                transformOrigin: '50% 50% -50px'
            });
            
            // Animate words in with sophisticated timing
            gsap.to(quoteText.querySelectorAll('.word'), {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                stagger: {
                    amount: 1.2,
                    from: 'start'
                },
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: quoteText,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
        
        // Animate quote author with elegant entrance
        const quoteAuthor = quoteSection.querySelector('.quote-author');
        if (quoteAuthor) {
            gsap.fromTo(quoteAuthor, 
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.8
                },
                {
                    opacity: 0.8,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: quoteAuthor,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    }
    
    // Mission statement animation
    if (missionStatement) {
        gsap.fromTo(missionStatement, 
            {
                opacity: 0,
                y: 80,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: missionStatement,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Animate mission title with typewriter effect
        const missionTitle = missionStatement.querySelector('.mission-title');
        if (missionTitle) {
            const text = missionTitle.textContent;
            missionTitle.textContent = '';
            
            gsap.to(missionTitle, {
                duration: 2,
                ease: 'power2.out',
                onUpdate: function() {
                    const progress = this.progress();
                    const currentLength = Math.floor(text.length * progress);
                    missionTitle.textContent = text.substring(0, currentLength);
                },
                scrollTrigger: {
                    trigger: missionTitle,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }
}

// Enhanced Contact Section Animations
function initializeContactAnimations() {
    const contactCards = document.querySelectorAll('.contact-card');
    const contactIcons = document.querySelectorAll('.icon-circle');
    
    // Staggered animation for contact cards
    gsap.fromTo(contactCards, 
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
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-info-section',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Enhanced icon animations
    contactIcons.forEach((icon, index) => {
        gsap.fromTo(icon, 
            {
                scale: 0,
                rotation: -180
            },
            {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: 0.3 + (index * 0.2),
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Contact card hover effects
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.icon-circle'), {
                scale: 1.1,
                rotation: 5,
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
            
            gsap.to(card.querySelector('.icon-circle'), {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
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