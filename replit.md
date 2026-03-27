# iProyals - Premium Proxy & VPN Website

## Project Overview
A professional, fully-polished static website for iProyals — a premium proxy and VPN reseller service. The site is modeled after top-tier proxy providers with a modern dark theme, full navigation, and rich content across 7 pages.

**Main domain:** https://iproyals.shop  
**Account portal:** https://myaccount.iproyals.shop/ (Login + Sign Up redirect)

## Tech Stack
- **HTML5** — Semantic, SEO-optimized markup
- **CSS3** — Custom design system with CSS variables, Grid, Flexbox, animations
- **JavaScript (ES6+)** — Vanilla JS for nav toggle, smooth scroll, scroll animations, pricing tabs
- **Fonts** — Google Fonts: Sora (headings) + DM Sans (body)
- **Logo/Favicon** — Custom SVG shield+crown logo

## Pages
| File | Description |
|------|-------------|
| `index.html` | Main landing page — hero, stats, products, why us, pricing preview, use cases, CTA |
| `products.html` | Detailed product pages for all 5 proxy/VPN types |
| `pricing.html` | Full pricing tables with tabs (IPv4, IPv6, Rotating) |
| `use-cases.html` | 12 industry use cases grid |
| `documentation.html` | Getting started guide, connection methods, API reference, code examples |
| `about.html` | Company story, values, stats |
| `contact.html` | Contact form + info cards |

## Assets
- `logo.svg` — SVG shield+crown logo with gradient
- `favicon.svg` — Matching favicon
- `styles.css` — Complete design system (~1200 lines)
- `main.js` — Mobile menu, smooth scroll, scroll animations, pricing tabs
- `vercel.json` — Vercel deployment configuration

## Navigation
All pages share a consistent nav with:
- Logo (SVG) linking to home
- Menu: Home, Products, Pricing, Use Cases, Docs, About, Contact
- **Login button** → https://myaccount.iproyals.shop/
- **Sign Up button** → https://myaccount.iproyals.shop/

## Running in Replit
- **Workflow**: "Start application" — `python3 -m http.server 5000 --bind 0.0.0.0`
- **Port**: 5000
- **Deployment**: Static (Replit)

## Vercel Deployment
The `vercel.json` is configured for static hosting. To deploy to Vercel:
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import GitHub repo
3. Vercel auto-detects static site — click Deploy
4. Site will be live on a `.vercel.app` domain (or connect custom domain iproyals.shop)
