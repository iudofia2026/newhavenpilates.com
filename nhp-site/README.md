# New Haven Pilates Website

A modern, responsive website for New Haven Pilates studio built with Harriet's design patterns and NHP content.

## 🏗️ Project Structure

```
nhp-site/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom CSS styles
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── images/            # Studio and class images
│   └── logos/             # Brand logos and favicon
└── README.md              # This file
```

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Typography**: Playfair Display (serif) + Inter (sans-serif) pairing
- **Smooth Animations**: Fade-in and slide-in effects on scroll
- **SEO Optimized**: Meta tags and JSON-LD LocalBusiness schema
- **Accessibility**: Focus states, reduced motion support, high contrast mode
- **Performance**: Optimized images, lazy loading, smooth scrolling

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No dependencies, pure JS for animations
- **Google Fonts**: Playfair Display & Inter font families
- **WebP Images**: Optimized image format for better performance

## 📱 Sections

1. **Hero Section**: Main banner with studio tagline and CTAs
2. **About Section**: Studio introduction and philosophy
3. **Classes Section**: Reformer, MAT, and Barre class offerings
4. **Instructors Section**: Krista Rea's profile and contact info
5. **Schedule Section**: Class scheduling information
6. **Contact Section**: Email, location, and parking details
7. **Footer**: Copyright and branding

## 🎨 Design Patterns

Inspired by Harriet's minimalist design:
- Clean typography hierarchy
- Generous white space
- Subtle hover effects
- Professional color palette (blue accents)
- Card-based layouts
- Smooth transitions

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Running Locally

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Or serve locally** using a web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Visit** `http://localhost:8000` in your browser

### Development

1. **Edit** `index.html` for content changes
2. **Modify** `css/styles.css` for styling updates
3. **Update** `js/main.js` for functionality changes
4. **Refresh** your browser to see changes

## 📁 File Descriptions

### `index.html`
- Main HTML structure
- SEO meta tags and JSON-LD schema
- Responsive navigation
- All content sections
- Tailwind CSS classes for styling

### `css/styles.css`
- Custom CSS overrides
- Typography definitions
- Animation classes
- Responsive breakpoints
- Accessibility features

### `js/main.js`
- Mobile menu functionality
- Scroll animations
- Smooth scrolling navigation
- Navbar scroll effects
- Image loading optimization

### `assets/images/`
- Studio photos (`homepage.jpg`)
- Class images (`krista-aloi-*.jpg`, `img-1069-*.jpg`)
- Optimized for web performance

### `assets/logos/`
- Brand logos (`nhplogo.png`, `nhpexpandedlogo.png`)
- Favicon (`faviconnhp.png`)

## 🌐 Deployment

### Static Hosting Options

1. **Netlify**:
   - Drag and drop the `nhp-site` folder
   - Automatic HTTPS and CDN
   - Custom domain support

2. **Vercel**:
   - Connect GitHub repository
   - Automatic deployments
   - Edge network optimization

3. **GitHub Pages**:
   - Push to GitHub repository
   - Enable Pages in repository settings
   - Free hosting with custom domain

4. **Traditional Web Hosting**:
   - Upload files via FTP/SFTP
   - Ensure server supports static files
   - Configure custom domain

### Deployment Checklist

- [ ] Test all links and forms
- [ ] Verify responsive design on mobile
- [ ] Check page load speed
- [ ] Validate HTML and CSS
- [ ] Test accessibility features
- [ ] Update meta tags with production URLs
- [ ] Configure analytics (if needed)

## 🔧 Customization

### Colors
Update the color scheme in `css/styles.css`:
```css
/* Primary blue */
.text-blue-600 { color: #2563eb; }
.bg-blue-600 { background-color: #2563eb; }

/* Customize as needed */
```

### Typography
Modify font families in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600&display=swap" rel="stylesheet">
```

### Content
Update text content directly in `index.html`:
- Studio name and taglines
- Class descriptions
- Contact information
- Instructor bio

### Images
Replace images in `assets/images/`:
- Maintain aspect ratios
- Optimize file sizes
- Use WebP format when possible

## 📊 Performance

### Optimization Features
- **Lazy Loading**: Images load as they enter viewport
- **Smooth Scrolling**: Native browser smooth scroll
- **Reduced Motion**: Respects user preferences
- **Minimal JavaScript**: No external dependencies
- **Optimized Images**: Compressed and WebP format

### Performance Tips
- Compress images before adding to `assets/images/`
- Use WebP format for better compression
- Minimize custom CSS (rely on Tailwind)
- Test on slow connections
- Use browser dev tools for performance analysis

## 🛡️ Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+

## 📝 License

This project is created for New Haven Pilates studio. All content and branding belong to New Haven Pilates.

## 🤝 Support

For technical issues or questions about this website:
- Check browser console for JavaScript errors
- Validate HTML/CSS using online validators
- Test on different devices and browsers
- Contact the developer for assistance

---

**Built with ❤️ for New Haven Pilates**