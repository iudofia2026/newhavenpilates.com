/**
 * New Haven Pilates - App JavaScript
 * IntersectionObserver-based animations, smooth scrolling, and accessibility features
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Configuration
    const config = {
        animationDuration: prefersReducedMotion ? 0 : 600,
        staggerDelay: prefersReducedMotion ? 0 : 100,
        scrollOffset: 80,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Utility functions
    const utils = {
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Check if element is in viewport
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    };

    // Animation classes
    const animationClasses = {
        hidden: 'animate-hidden',
        visible: 'animate-visible',
        stagger: 'animate-stagger'
    };

    // Intersection Observer for reveal animations
    class RevealAnimations {
        constructor() {
            this.observer = null;
            this.init();
        }

        init() {
            if (prefersReducedMotion) {
                this.showAllElements();
                return;
            }

            this.createObserver();
            this.observeElements();
        }

        createObserver() {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateElement(entry.target);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: config.threshold,
                rootMargin: config.rootMargin
            });
        }

        observeElements() {
            // Find all section wrappers and elements with fade-in classes
            const elementsToAnimate = document.querySelectorAll(
                'section .fade-in, section .fade-in-delay, .animate-on-scroll'
            );

            elementsToAnimate.forEach(element => {
                this.prepareElement(element);
                this.observer.observe(element);
            });

            // Also observe section containers for stagger effects
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                this.observeSectionChildren(section);
            });
        }

        prepareElement(element) {
            // Add hidden state classes
            element.classList.add(animationClasses.hidden);
            
            // Set initial styles
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = `opacity ${config.animationDuration}ms ease-out, transform ${config.animationDuration}ms ease-out`;
        }

        animateElement(element) {
            // Add visible class
            element.classList.add(animationClasses.visible);
            
            // Animate to visible state
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';

            // Handle stagger for child elements
            this.animateChildren(element);
        }

        animateChildren(parentElement) {
            const children = parentElement.querySelectorAll('.fade-in, .animate-on-scroll');
            
            if (children.length <= 1) return;

            children.forEach((child, index) => {
                if (child === parentElement) return; // Skip self
                
                setTimeout(() => {
                    child.classList.add(animationClasses.visible);
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * config.staggerDelay);
            });
        }

        observeSectionChildren(section) {
            const children = section.querySelectorAll('.fade-in, .animate-on-scroll');
            
            if (children.length <= 1) return;

            // Create a wrapper observer for stagger effects
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateStaggeredChildren(children);
                        sectionObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });

            // Observe the first child to trigger stagger
            if (children[0]) {
                sectionObserver.observe(children[0]);
            }
        }

        animateStaggeredChildren(children) {
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add(animationClasses.visible);
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * config.staggerDelay);
            });
        }

        showAllElements() {
            // For reduced motion, show all elements immediately
            const elements = document.querySelectorAll('.fade-in, .fade-in-delay, .animate-on-scroll');
            elements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.classList.add(animationClasses.visible);
            });
        }
    }

    // Smooth scrolling functionality
    class SmoothScrolling {
        constructor() {
            this.init();
        }

        init() {
            if (prefersReducedMotion) {
                this.setupBasicScrolling();
                return;
            }

            this.setupSmoothScrolling();
        }

        setupSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.scrollToTarget(anchor.getAttribute('href'));
                });
            });
        }

        setupBasicScrolling() {
            // For reduced motion, use basic scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView();
                    }
                });
            });
        }

        scrollToTarget(targetId) {
            const target = document.querySelector(targetId);
            if (!target) return;

            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight - config.scrollOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    }

    // Sticky header with shadow
    class StickyHeader {
        constructor() {
            this.navbar = document.getElementById('navbar');
            this.lastScrollY = 0;
            this.init();
        }

        init() {
            if (!this.navbar) return;

            // Throttled scroll handler for performance
            const handleScroll = utils.throttle(() => {
                this.updateHeader();
            }, 16); // ~60fps

            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        updateHeader() {
            const currentScrollY = window.pageYOffset;
            
            // Add shadow when scrolled
            if (currentScrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            this.lastScrollY = currentScrollY;
        }
    }

    // Mobile menu functionality
    class MobileMenu {
        constructor() {
            this.menuButton = document.getElementById('mobile-menu-button');
            this.menu = document.getElementById('mobile-menu');
            this.init();
        }

        init() {
            if (!this.menuButton || !this.menu) return;

            this.setupEventListeners();
        }

        setupEventListeners() {
            // Toggle menu
            this.menuButton.addEventListener('click', () => {
                this.toggleMenu();
            });

            // Close menu when clicking links
            const menuLinks = this.menu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMenu();
                });
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !this.menu.classList.contains('hidden')) {
                    this.closeMenu();
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.menu.contains(e.target) && 
                    !this.menuButton.contains(e.target) && 
                    !this.menu.classList.contains('hidden')) {
                    this.closeMenu();
                }
            });
        }

        toggleMenu() {
            this.menu.classList.toggle('hidden');
            const isOpen = !this.menu.classList.contains('hidden');
            
            // Update aria-expanded for accessibility
            this.menuButton.setAttribute('aria-expanded', isOpen);
            
            // Focus management
            if (isOpen) {
                const firstLink = this.menu.querySelector('a');
                if (firstLink) firstLink.focus();
            }
        }

        closeMenu() {
            this.menu.classList.add('hidden');
            this.menuButton.setAttribute('aria-expanded', 'false');
        }
    }

    // Form handling
    class ContactForm {
        constructor() {
            this.form = document.getElementById('contact-form');
            this.messageElement = document.getElementById('form-message');
            this.init();
        }

        init() {
            if (!this.form) return;

            this.setupEventListeners();
        }

        setupEventListeners() {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });
        }

        handleSubmit() {
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());
            
            // Show loading state
            const submitButton = this.form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner"></span> Sending...';
            
            // Simulate form submission
            setTimeout(() => {
                this.showSuccessMessage();
                this.form.reset();
                this.resetSubmitButton(submitButton, originalText);
                
                // Log form data (in production, send to server)
                console.log('Form submitted:', data);
            }, 1500);
        }

        showSuccessMessage() {
            if (this.messageElement) {
                this.messageElement.textContent = 'Thank you! We\'ll contact you within 24 hours to schedule your first class.';
                this.messageElement.className = 'mt-4 text-center text-green-600 font-medium';
                this.messageElement.classList.remove('hidden');
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    this.messageElement.classList.add('hidden');
                }, 5000);
            }
        }

        resetSubmitButton(button, originalText) {
            button.disabled = false;
            button.textContent = originalText;
        }
    }

    // Performance optimizations
    class PerformanceOptimizer {
        constructor() {
            this.init();
        }

        init() {
            this.setupLazyLoading();
            this.setupImageOptimization();
            this.handlePageVisibility();
        }

        setupLazyLoading() {
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            
            if ('loading' in HTMLImageElement.prototype) {
                // Browser supports native lazy loading
                lazyImages.forEach(img => {
                    img.src = img.src;
                });
            } else {
                // Fallback for browsers that don't support lazy loading
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.src;
                            img.classList.remove('loading');
                            imageObserver.unobserve(img);
                        }
                    });
                });
                
                lazyImages.forEach(img => {
                    img.classList.add('loading');
                    imageObserver.observe(img);
                });
            }
        }

        setupImageOptimization() {
            // Add hover effects to images
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('mouseenter', function() {
                    if (!prefersReducedMotion) {
                        this.style.transform = 'scale(1.05)';
                    }
                });
                
                img.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        }

        handlePageVisibility() {
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    // Pause animations when page is hidden
                    document.querySelectorAll('.animate-on-scroll').forEach(el => {
                        el.style.animationPlayState = 'paused';
                    });
                } else {
                    // Resume animations
                    document.querySelectorAll('.animate-on-scroll').forEach(el => {
                        el.style.animationPlayState = 'running';
                    });
                }
            });
        }
    }

    // Accessibility enhancements
    class AccessibilityEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
            this.setupAriaLabels();
        }

        setupKeyboardNavigation() {
            // Ensure all interactive elements are keyboard accessible
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
            interactiveElements.forEach(element => {
                if (!element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '0') {
                    element.setAttribute('tabindex', '0');
                }
            });
        }

        setupFocusManagement() {
            // Add focus indicators
            const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
            focusableElements.forEach(element => {
                element.addEventListener('focus', function() {
                    this.classList.add('focus-visible');
                });
                
                element.addEventListener('blur', function() {
                    this.classList.remove('focus-visible');
                });
            });
        }

        setupAriaLabels() {
            // Add aria-labels to elements that need them
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            if (mobileMenuButton && !mobileMenuButton.getAttribute('aria-label')) {
                mobileMenuButton.setAttribute('aria-label', 'Toggle navigation menu');
            }
        }
    }

    // Initialize everything when DOM is ready
    function init() {
        // Initialize all components
        new RevealAnimations();
        new SmoothScrolling();
        new StickyHeader();
        new MobileMenu();
        new ContactForm();
        new PerformanceOptimizer();
        new AccessibilityEnhancer();

        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
    }

    // Start the application
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export utilities for external use
    window.nhpApp = {
        utils,
        config,
        prefersReducedMotion
    };

})();