# iProyals - Premium Proxy & VPN Services Website

Professional, production-ready website for iProyals proxy and VPN services.

## Features

- Modern, responsive design
- Complete navigation system
- 7 fully functional pages
- Custom pricing tables (IPv4, IPv6, Rotating)
- Mobile-friendly interface
- SEO optimized
- Clean, professional code

## Project Structure

```
iproyals-website/
├── index.html              # Homepage
├── css/
│   └── styles.css         # All styles
├── js/
│   └── main.js           # All JavaScript
├── images/
│   └── (add your logo here)
├── pages/
│   ├── products.html
│   ├── pricing.html
│   ├── use-cases.html
│   ├── documentation.html
│   ├── about.html
│   └── contact.html
├── README.md
└── .gitignore
```

## Quick Start

### Local Development

Use any web server. Choose one:

**Python:**
```bash
python -m http.server 8000
```

**PHP:**
```bash
php -S localhost:8000
```

**VS Code Live Server:**
1. Install Live Server extension
2. Right-click index.html
3. Select "Open with Live Server"

Then open: http://localhost:8000

### Adding Your Logo

1. Place your logo as `images/logo.png` (PNG recommended, 200x50px)
2. In each HTML file, find:
```html
<!-- Uncomment and add your logo: <img src="images/logo.png" alt="iProyals Logo" class="logo-image"> -->
<span class="logo">iProyals</span>
```
3. Uncomment the img tag and remove/comment the span tag

## Deployment

### GitHub Pages

1. Create repository on GitHub
2. Push all files:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
3. Enable GitHub Pages in repository Settings > Pages
4. Select main branch and root folder

Your site will be at: `https://yourusername.github.io/repository-name/`

### Other Hosting

Upload all files via FTP or file manager to any web host.

## Customization

### Colors

Edit `css/styles.css`:
```css
:root {
    --primary: #6C5CE7;        /* Main brand color */
    --primary-dark: #5B4BC7;   /* Darker shade */
    --secondary: #00D9FF;      /* Accent color */
    /* ... */
}
```

### Content

- **Pricing**: Edit `pages/pricing.html` (already customized)
- **Contact**: Update emails in `pages/contact.html`
- **Products**: Modify `pages/products.html`
- **About**: Edit `pages/about.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technical Stack

- Pure HTML5, CSS3, JavaScript
- No frameworks or dependencies
- Google Fonts: Sora & DM Sans
- CSS Grid & Flexbox
- Vanilla JavaScript (ES6+)

## Pages Overview

1. **Home** - Hero, features, stats, use cases preview
2. **Products** - All proxy and VPN services
3. **Pricing** - Three pricing tables (IPv4, IPv6, Rotating)
4. **Use Cases** - 12 industry use cases
5. **Documentation** - API reference and guides
6. **About** - Company information
7. **Contact** - Contact form and support info

## License

Copyright © 2024 iProyals. All rights reserved.

## Support

For questions or issues with the website code, refer to the inline comments in each file.
