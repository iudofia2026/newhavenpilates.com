# New Haven Pilates - Rebuild

A conversion-focused static website rebuild for New Haven Pilates, featuring modern design, accessibility, and performance optimizations.

## Project Structure

```
nhp-rebuild/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── scripts.js          # Vanilla JavaScript
├── assets/
│   ├── images/         # Optimized images
│   │   ├── img-1069-w1440-o.jpg
│   │   ├── krista-aloi-11-w1920-o.jpg
│   │   └── krista-aloi-36-w1920-o.jpg
│   └── icons/          # PNG/WebP icons (placeholders)
└── README.md           # This file
```

## Features

- **Mobile-first responsive design** using Tailwind CSS via CDN
- **Accessibility compliant** (WCAG AA+) with semantic HTML5
- **Performance optimized** with lazy loading and minimal dependencies
- **SEO ready** with meta tags, Open Graph, and JSON-LD structured data
- **Conversion focused** with multiple CTAs and streamlined user flow
- **Clean, professional design** with grayscale palette and blue accent color

## Information Architecture

1. **Hero Section** - Value proposition with primary CTA
2. **Services/Classes** - Six service offerings with descriptions
3. **Pricing/Intro Offer** - Clear pricing with highlighted new client special
4. **Instructors** - Team credentials and expertise
5. **Social Proof** - Client testimonials
6. **Studio Tour** - Visual showcase of facilities
7. **FAQ** - Common questions answered
8. **Location/Parking** - Easy-to-find location details
9. **Contact Form** - Simple conversion form

## Running Locally

1. Clone or download the repository
2. Navigate to the `nhp-rebuild` folder
3. Open `index.html` in a web browser
4. For development with live reload, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

## Deployment

### GitHub Pages

1. Push the code to a GitHub repository
2. Go to Settings → Pages
3. Select source branch and `/nhp-rebuild` folder
4. Site will be available at `https://[username].github.io/[repo-name]/`

### Netlify

1. Create a new site on Netlify
2. Drag and drop the `nhp-rebuild` folder
3. Or connect to GitHub and set build settings:
   - Build command: (leave empty)
   - Publish directory: `nhp-rebuild`

### Other Hosting

The site is completely static and can be hosted on any web server. Simply upload all files maintaining the folder structure.

## Image Sources

All images were extracted from the original New Haven Pilates website:
- `img-1069-w1440-o.jpg` - Studio interior shot
- `krista-aloi-11-w1920-o.jpg` - Krista teaching a class
- `krista-aloi-36-w1920-o.jpg` - Krista portrait

## TODO/Notes

- **Icons**: Currently using placeholder references. In production, replace with actual PNG/WebP icons from open-source icon libraries like:
  - Flaticon (with attribution)
  - Icons8 (free tier)
  - Iconmonstr
  - Feather Icons (exported as PNG)
  
- **Contact Form**: Currently client-side only. For production, integrate with:
  - Netlify Forms
  - Formspree
  - Custom backend endpoint
  
- **Analytics**: Placeholder comment included. Add Google Analytics or alternative.

- **Map**: Currently showing placeholder. Integrate Google Maps or OpenStreetMap.

- **Additional Images**: Could benefit from more studio photos and instructor headshots.

## Performance Metrics (Target)

- Lighthouse Performance: ≥90
- Lighthouse Accessibility: ≥95
- Lighthouse Best Practices: ≥90
- Lighthouse SEO: ≥95

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## License

This rebuild is for demonstration purposes. All content and trademarks belong to New Haven Pilates.