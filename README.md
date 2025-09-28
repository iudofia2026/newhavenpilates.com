# New Haven Pilates - Modern Animated Website

A modern, animated website for New Haven Pilates Studio, inspired by Concrete Club Studio's animation techniques and design principles.

## 🚀 Features

### Modern Animation Techniques
- **GSAP Animations**: Smooth, hardware-accelerated animations
- **ScrollTrigger**: Scroll-based animations and effects
- **Parallax Effects**: Background images moving at different speeds
- **Text Reveals**: Staggered text animations
- **Hover Effects**: Interactive micro-animations
- **Custom Cursor**: Enhanced user interaction

### Design Elements
- **Modern Typography**: Inter + Playfair Display fonts
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Reduced motion support, focus states
- **Performance**: Optimized animations and lazy loading
- **Clean Layout**: Minimalist design with focus on content

### Animation Libraries Used
- **GSAP 3.12.2**: Core animation engine
- **ScrollTrigger**: Scroll-based animations
- **TextPlugin**: Text animation effects

## 📁 File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Modern CSS with animations
├── script.js           # JavaScript with GSAP animations
├── NHP_files/          # Original assets
│   ├── img-1069-w1440-o.jpg
│   ├── krista-aloi-11-w1920-o.jpg
│   └── krista-aloi-36-w1920-o.jpg
└── README.md           # This file
```

## 🎨 Animation Features

### Hero Section
- **Parallax Background**: Hero image scales and moves on scroll
- **Staggered Text**: Quote, title, and subtitle animate in sequence
- **Button Interactions**: Hover effects and ripple animations
- **Scroll Indicator**: Animated arrow bouncing

### Navigation
- **Smooth Scrolling**: GSAP-powered smooth scroll to sections
- **Mobile Menu**: Animated hamburger menu with staggered links
- **Scroll Effects**: Navbar changes appearance on scroll

### Content Sections
- **Scroll Animations**: Elements fade in as they enter viewport
- **Card Hovers**: 3D transform effects on class cards
- **Image Parallax**: Background images move at different speeds
- **Staggered Reveals**: Multiple elements animate in sequence

### Interactive Elements
- **Custom Cursor**: Follows mouse with blend mode effects
- **Hover States**: Smooth transitions on all interactive elements
- **Focus States**: Accessibility-compliant focus indicators
- **Loading States**: Smooth image loading animations

## 🛠️ Technical Implementation

### CSS Features
- **CSS Custom Properties**: Dynamic theming
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Transforms**: Hardware-accelerated animations
- **CSS Filters**: Visual effects
- **Media Queries**: Responsive design

### JavaScript Features
- **Intersection Observer**: Efficient scroll detection
- **GSAP Timeline**: Complex animation sequences
- **Event Delegation**: Optimized event handling
- **Performance Monitoring**: Reduced motion support
- **Error Handling**: Graceful fallbacks

### Performance Optimizations
- **Lazy Loading**: Images load as they enter viewport
- **Hardware Acceleration**: GPU-accelerated transforms
- **Reduced Motion**: Respects user preferences
- **Efficient Animations**: 60fps smooth animations
- **Memory Management**: Proper cleanup and optimization

## 🎯 Animation Principles Applied

### From Concrete Club Studio
1. **Smooth Transitions**: All animations use easing functions
2. **Scroll-Based Effects**: Parallax and reveal animations
3. **Micro-Interactions**: Subtle hover and click effects
4. **Performance First**: Hardware-accelerated animations
5. **Accessibility**: Reduced motion and focus support

### Modern Web Standards
- **Progressive Enhancement**: Works without JavaScript
- **Semantic HTML**: Proper structure and accessibility
- **Mobile-First**: Responsive design principles
- **Performance**: Optimized loading and rendering
- **Accessibility**: WCAG compliant

## 🚀 Getting Started

1. **Open `index.html`** in a modern browser
2. **Scroll through the page** to see animations
3. **Interact with elements** to see hover effects
4. **Test on mobile** for responsive behavior

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Features**: CSS Grid, Flexbox, ES6+, GSAP

## 🎨 Customization

### Colors
Update CSS custom properties in `:root`:
```css
:root {
    --primary-black: #000000;
    --primary-white: #ffffff;
    --accent-gray: #333333;
}
```

### Animations
Modify GSAP animations in `script.js`:
```javascript
gsap.fromTo(element, 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
);
```

### Typography
Change fonts in the HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600&display=swap" rel="stylesheet">
```

## 📈 Performance Tips

1. **Use `transform` and `opacity`** for smooth animations
2. **Enable `will-change`** for animated elements
3. **Use `contain`** for layout optimization
4. **Implement lazy loading** for images
5. **Respect `prefers-reduced-motion`**

## 🔧 Development

### Adding New Animations
1. Create CSS classes for animation states
2. Use GSAP for JavaScript animations
3. Add ScrollTrigger for scroll-based effects
4. Test performance and accessibility

### Debugging
- Use browser dev tools for performance monitoring
- Check GSAP timeline for animation debugging
- Test with reduced motion preferences
- Validate accessibility with screen readers

## 📄 License

This project uses the original NHP content and assets. Animation techniques are inspired by modern web design principles and Concrete Club Studio's approach.

---

**Built with ❤️ using modern web technologies and animation principles**