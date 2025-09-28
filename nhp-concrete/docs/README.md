# New Haven Pilates - Concrete Club Inspired Rebuild

A high-conversion static website rebuild inspired by concreteclub.studio's design principles, featuring large typography, generous white space, smooth animations, and a calming neutral palette.

## Project Structure

```
nhp-concrete/
├── index.html              # Main HTML file
├── favicon.ico             # Site favicon
├── css/
│   └── main.css           # Main stylesheet
├── js/
│   └── main.js            # Vanilla JavaScript
├── assets/
│   ├── images/            # Original NHP images
│   │   ├── img-1069-w1440-o.jpg
│   │   ├── krista-aloi-11-w1920-o.jpg
│   │   └── krista-aloi-36-w1920-o.jpg
│   └── icons/             # PNG/WebP icons (placeholders)
├── data/
│   └── content.json       # Extracted content data
└── docs/
    └── README.md          # This file
```

## Design Philosophy

Inspired by concreteclub.studio's approach:
- **Large Hero Typography**: Bold, impactful headlines with generous spacing
- **Generous White Space**: Clean, uncluttered layouts with breathing room
- **Smooth Animations**: Subtle fade-ins and hover effects using Intersection Observer
- **Calming Palette**: Light neutrals (#fafafa, #2c2c2c) with purple accent (#8b5cf6)
- **Professional Typography**: Inter font family for modern, readable text

## Content Preservation

All text content has been preserved exactly from the original NHP website:
- Hero quote: "In 10 sessions you will feel better, 20 sessions you will look better, 30 sessions you will have a completely new body." - Joseph Pilates
- Studio tagline: "New Haven's Award Winning Pilates Studio"
- Contact information: krista@newhavenpilates.com
- Location: Erector Square, New Haven, CT
- Permission requirement for classes

## Running Locally

### Option 1: Direct File Opening
1. Navigate to the `nhp-concrete` folder
2. Open `index.html` in a web browser

### Option 2: Local Server (Recommended)
```bash
# Using Python
cd nhp-concrete
python -m http.server 8000
# Visit http://localhost:8000

# Using Node.js
cd nhp-concrete
npx http-server
# Visit http://localhost:8080
```

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch and `/nhp-concrete` folder

### Netlify
1. Create new site on Netlify
2. Drag and drop the `nhp-concrete` folder
3. Or connect to GitHub repository

## Performance Targets

- **Lighthouse Performance**: ≥90
- **Lighthouse Accessibility**: ≥95
- **Lighthouse Best Practices**: ≥90
- **Lighthouse SEO**: ≥95

## TODO Items

### Icons
- [ ] Replace placeholder icon files with actual PNG/WebP icons
- [ ] Source icons from open-source libraries (Flaticon, Icons8, Feather Icons)

### Images
- [ ] Convert images to WebP format for better performance
- [ ] Add proper alt text for all images

### Form Integration
- [ ] Connect contact form to backend service (Netlify Forms, Formspree)
- [ ] Add form validation and error handling

## Content Sources

All content extracted from the original New Haven Pilates website:
- **Images**: 3 original images from NHP_files/
- **Text**: Exact copy from NHP.html content
- **Contact Info**: krista@newhavenpilates.com
- **Location**: Erector Square, New Haven, CT

## Verification Checklist

### Functionality
- [ ] Navigation works on desktop and mobile
- [ ] Contact form submits successfully
- [ ] Smooth scrolling between sections
- [ ] Mobile menu toggles properly
- [ ] All links are functional

### Design
- [ ] Typography scales properly on all devices
- [ ] Colors match design specifications
- [ ] Animations are smooth and not jarring
- [ ] Layout is responsive across breakpoints
- [ ] Images load correctly

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images are optimized
- [ ] No console errors
- [ ] Lighthouse scores meet targets
- [ ] Mobile performance is acceptable

### Accessibility
- [ ] Skip links work
- [ ] Focus indicators are visible
- [ ] Alt text is present on images
- [ ] Form labels are properly associated
- [ ] Color contrast meets WCAG AA standards

### SEO
- [ ] Meta tags are present
- [ ] Open Graph tags are correct
- [ ] JSON-LD structured data is valid
- [ ] Page title is descriptive
- [ ] URLs are clean and semantic