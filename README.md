# iProyals - Premium Proxy & VPN Services Website

A modern, responsive website for iProyals proxy and VPN services.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Complete Pages**: Home, Products, Pricing, Use Cases, Documentation, About, and Contact
- **Interactive Pricing**: Tabbed pricing tables for IPv4, IPv6, and Rotating Proxies
- **Mobile Menu**: Hamburger menu for mobile navigation
- **SEO Optimized**: Meta tags and semantic HTML structure

## 📁 Project Structure

```
iproyals-website/
├── index.html              # Homepage
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js           # JavaScript functionality
├── images/
│   └── logo.png          # Your logo (to be added)
├── pages/
│   ├── products.html     # Products page
│   ├── pricing.html      # Pricing page
│   ├── use-cases.html    # Use cases page
│   ├── documentation.html # Documentation & API reference
│   ├── about.html        # About us page
│   └── contact.html      # Contact page
└── README.md             # This file
```

## 🎨 Customization

### Adding Your Logo

1. Place your logo image in the `images/` folder
2. Open each HTML file (index.html and all files in pages/)
3. Find the logo section in the navigation and uncomment the image line:

```html
<!-- Replace with your logo: -->
<img src="images/logo.png" alt="iProyals Logo" class="logo-image">
```

4. Comment out or remove the text logo:
```html
<!-- <span class="logo">iProyals</span> -->
```

### Color Customization

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary: #6C5CE7;        /* Main brand color */
    --primary-dark: #5B4BC7;   /* Darker shade */
    --primary-light: #A29BFE;  /* Lighter shade */
    --secondary: #00D9FF;      /* Accent color */
    --accent: #FFD93D;         /* Highlight color */
    /* ... */
}
```

### Pricing

All pricing is located in `pages/pricing.html`. Update the price values to match your actual pricing.

## 🌐 Deployment

### GitHub Pages

1. Push all files to your GitHub repository
2. Go to repository Settings > Pages
3. Select the branch (main) and root folder
4. Your site will be available at `https://yourusername.github.io/repository-name/`

### Alternative Hosting

Upload all files to any web hosting service via FTP or their file manager.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- Pure HTML, CSS, and JavaScript (no dependencies)
- Google Fonts: Sora & DM Sans
- CSS Grid & Flexbox for layouts
- CSS Variables for theming
- Intersection Observer API for scroll animations
- Mobile-first responsive design

## 📄 Pages Overview

- **Home** - Hero section, features, stats, and use cases preview
- **Products** - Detailed information about all proxy types
- **Pricing** - Three pricing tables (IPv4, IPv6, Rotating)
- **Use Cases** - 12+ use cases across different industries
- **Documentation** - API reference and integration guides
- **About** - Company information and values
- **Contact** - Contact form and support information

## ⚡ Performance

- Optimized for fast loading
- Minimal JavaScript
- Efficient CSS animations
- No external dependencies except fonts

## 📝 License

Copyright © 2024 iProyals. All rights reserved.

## 🤝 Support

For questions or support, contact: support@iproyals.com

---

**Note**: Remember to replace placeholder content (email addresses, contact information) with your actual details before deploying.
