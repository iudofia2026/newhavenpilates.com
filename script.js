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
    initializeScrollProgression();
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

// Scroll-Triggered Progressive Number Reveal
function initializeScrollProgression() {
    const progressionItems = document.querySelectorAll('.progression-item');
    const connectors = document.querySelectorAll('.progression-connector');
    const attribution = document.querySelector('.progression-attribution');
    
    // Create scroll triggers for each progression item
    progressionItems.forEach((item, index) => {
        const words = item.querySelectorAll('.progression-word');
        
        // Set initial state
        gsap.set(item, {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotation: -10
        });
        
        gsap.set(words, {
            opacity: 0,
            y: 20,
            scale: 0.9
        });
        
        // Create scroll trigger for this item
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            onEnter: () => {
                // Animate the main item
                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotation: 0,
                    duration: 1,
                    ease: 'power3.out',
                    onComplete: () => {
                        item.classList.add('animate');
                        
                        // Animate words for this item
                        gsap.to(words, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: 'power2.out',
                            delay: 0.3
                        });
                        
                        // Animate connector after item (except for last item)
                        if (index < connectors.length) {
                            setTimeout(() => {
                                connectors[index].classList.add('animate');
                            }, 500);
                        }
                    }
                });
            },
            onLeave: () => {
                // Optional: hide when scrolling past
                // gsap.to(item, { opacity: 0.3, duration: 0.5 });
            }
        });
    });
    
    // Create scroll trigger for attribution
    ScrollTrigger.create({
        trigger: attribution,
        start: 'top 85%',
        onEnter: () => {
            gsap.to(attribution, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            });
            attribution.classList.add('animate');
        }
    });
}

// Enhanced Quote and Floating Mission Text Animations
function initializeQuoteAnimations() {
    const quoteSection = document.querySelector('.quote-section');
    const floatingMissionText = document.querySelector('.floating-mission-text');
    
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
    
    // Floating Mission Text Animation - Inspired by Concrete Club Studio
    if (floatingMissionText) {
        const floatingElements = floatingMissionText.querySelectorAll('.floating-text-element');
        const allWords = floatingMissionText.querySelectorAll('.floating-word');
        
        // Set initial state for all words
        gsap.set(allWords, {
            opacity: 0,
            y: 100,
            rotationX: 90,
            scale: 0.5,
            transformOrigin: '50% 50% -100px'
        });
        
        // Animate floating elements with sophisticated timing
        floatingElements.forEach((element, elementIndex) => {
            const words = element.querySelectorAll('.floating-word');
            
            // Show the element
            gsap.fromTo(element, 
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: floatingMissionText,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    onComplete: () => {
                        // Animate words in this element
                        gsap.to(words, {
                            opacity: 1,
                            y: 0,
                            rotationX: 0,
                            scale: 1,
                            duration: 1.2,
                            stagger: {
                                amount: 1.5,
                                from: 'random'
                            },
                            ease: 'power3.out',
                            delay: elementIndex * 0.5
                        });
                        
                        // Add continuous floating animation after initial reveal
                        setTimeout(() => {
                            words.forEach((word, wordIndex) => {
                                gsap.to(word, {
                                    y: `random(-20, 20)`,
                                    rotation: `random(-5, 5)`,
                                    scale: `random(0.95, 1.05)`,
                                    duration: `random(3, 6)`,
                                    ease: 'power2.inOut',
                                    yoyo: true,
                                    repeat: -1,
                                    delay: wordIndex * 0.1
                                });
                            });
                        }, 2000);
                    }
                }
            );
        });
        
        // Add interactive hover effects
        allWords.forEach(word => {
            word.addEventListener('mouseenter', () => {
                gsap.to(word, {
                    scale: 1.2,
                    rotation: 5,
                    y: -15,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            word.addEventListener('mouseleave', () => {
                gsap.to(word, {
                    scale: 1,
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
        
        // Add scroll-triggered parallax effect
        gsap.to(floatingMissionText, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: floatingMissionText,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
        
        // Add subtle background animation
        gsap.to(floatingMissionText, {
            background: 'linear-gradient(135deg, rgba(248, 248, 248, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
            duration: 4,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });
    }
}

// Enhanced Contact Section Animations - Professional Design
function initializeContactAnimations() {
    const contactCardsEnhanced = document.querySelectorAll('.contact-card-enhanced');
    const contactIconsEnhanced = document.querySelectorAll('.icon-circle-enhanced');
    const floatingContactElements = document.querySelectorAll('.floating-contact-item');
    
    // Enhanced Contact Cards Animation with Sophisticated Entrance
    gsap.fromTo(contactCardsEnhanced, 
        {
            opacity: 0,
            y: 80,
            scale: 0.8,
            rotationY: 15,
            rotationX: 10
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 1.2,
            stagger: {
                amount: 0.8,
                from: 'start'
            },
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-content-enhanced',
                start: 'top 75%',
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    contactCardsEnhanced.forEach(card => {
                        card.classList.add('animate');
                    });
                }
            }
        }
    );
    
    // Sophisticated Icon Animations with Staggered Entrance
    contactIconsEnhanced.forEach((icon, index) => {
        const iconInner = icon.querySelector('.icon-inner-enhanced');
        const iconRing = icon.querySelector('.icon-ring');
        const iconPulse = icon.querySelector('.icon-pulse');
        
        // Main icon entrance
        gsap.fromTo(icon, 
            {
                scale: 0,
                rotation: -180,
                y: 30
            },
            {
                scale: 1,
                rotation: 0,
                y: 0,
                duration: 0.8,
                delay: 0.5 + (index * 0.3),
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Icon inner animation
        gsap.fromTo(iconInner, 
            {
                scale: 0,
                rotation: 90,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.7 + (index * 0.3),
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Icon ring animation
        gsap.fromTo(iconRing, 
            {
                scale: 0,
                opacity: 0,
                rotation: 0
            },
            {
                scale: 1,
                opacity: 0.6,
                rotation: 360,
                duration: 1.5,
                delay: 0.9 + (index * 0.3),
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
        
        // Icon pulse animation
        gsap.fromTo(iconPulse, 
            {
                scale: 0,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 0.4,
                duration: 0.8,
                delay: 1.1 + (index * 0.3),
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: icon,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Enhanced Contact Card Hover Effects
    contactCardsEnhanced.forEach(card => {
        const icon = card.querySelector('.icon-circle-enhanced');
        const iconInner = card.querySelector('.icon-inner-enhanced');
        const iconRing = card.querySelector('.icon-ring');
        const iconPulse = card.querySelector('.icon-pulse');
        const cardBackground = card.querySelector('.card-gradient-overlay');
        const hoverEffect = card.querySelector('.contact-card-hover-effect');
        
        card.addEventListener('mouseenter', () => {
            // Card lift and scale
            gsap.to(card, {
                y: -15,
                scale: 1.03,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Icon animations
            gsap.to(icon, {
                scale: 1.15,
                rotation: 8,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(iconInner, {
                scale: 1.1,
                rotation: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(iconRing, {
                scale: 1.3,
                opacity: 0.8,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(iconPulse, {
                scale: 1.8,
                opacity: 0.6,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Background overlay
            gsap.to(cardBackground, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Hover effect sweep
            gsap.fromTo(hoverEffect, 
                { left: '-100%' },
                { left: '100%', duration: 0.8, ease: 'power2.out' }
            );
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset card position
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Reset icon animations
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(iconInner, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(iconRing, {
                scale: 1,
                opacity: 0.6,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(iconPulse, {
                scale: 1,
                opacity: 0.4,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            // Reset background overlay
            gsap.to(cardBackground, {
                opacity: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
    
    // Floating Contact Elements Animation
    gsap.fromTo(floatingContactElements, 
        {
            opacity: 0,
            scale: 0.5,
            rotation: -15,
            y: 50
        },
        {
            opacity: 0.05,
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 1.5,
            stagger: {
                amount: 1.2,
                from: 'random'
            },
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.floating-contact-elements',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Continuous floating animation for contact elements
    floatingContactElements.forEach((element, index) => {
        gsap.to(element, {
            y: `random(-25, 25)`,
            rotation: `random(-8, 8)`,
            scale: `random(0.9, 1.1)`,
            duration: `random(4, 8)`,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1,
            delay: index * 0.5
        });
    });
    
    // Enhanced Contact Link Animations
    const contactLinks = document.querySelectorAll('.contact-link-enhanced');
    contactLinks.forEach(link => {
        const underline = link.querySelector('.link-underline');
        const arrow = link.querySelector('.link-arrow');
        const text = link.querySelector('.contact-text');
        
        link.addEventListener('mouseenter', () => {
            gsap.to(underline, {
                width: '100%',
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(arrow, {
                opacity: 1,
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(text, {
                x: 8,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(underline, {
                width: '0%',
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(arrow, {
                opacity: 0,
                x: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            gsap.to(text, {
                x: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Parallax effect for contact section
    gsap.to('.contact-content-enhanced', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Background pattern animation
    gsap.to('.card-pattern-overlay', {
        backgroundPosition: '30px 30px',
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true
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