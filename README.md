# TM KANISHKA GARMENTS - Landing Page

A professional landing page for TM KANISHKA GARMENTS, a bulk garment manufacturer based in Tiruppur, Tamil Nadu.

## Features

- **Modern React/TypeScript** application built with Vite
- **Responsive design** with Tailwind CSS
- **Professional B2B focused** content
- **Contact forms** with WhatsApp integration
- **Product showcase** for undergarments, sportswear, socks, and t-shirts
- **Business information** including CEO details and office locations

## Business Details

- **Company:** TM KANISHKA GARMENTS
- **CEO:** APJ V Mathialagan
- **Phone:** +91 87540 11563
- **Email:** info@tmkanishkagarments.com
- **Locations:** Tiruppur, Tamil Nadu (2 offices)

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Forms:** React Hook Form with Zod validation
- **Icons:** Lucide React

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Render Deployment

This project is ready for Render deployment:

1. **Connect GitHub repository** to Render
2. **Service Type:** Static Site
3. **Build Command:** `npm run build`
4. **Publish Directory:** `dist`
5. **Node Version:** 18+ (automatic detection)

### Other Platforms

- **Netlify:** Drag & drop the `dist` folder or connect GitHub repo
- **Vercel:** Import GitHub repository
- **GitHub Pages:** Enable Pages in repository settings

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── ...
├── assets/             # Images and static files
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── lib/                # Utilities

public/
├── _redirects          # SPA routing for static hosts
└── robots.txt          # SEO configuration
```

## Contact

For business inquiries:
- **Phone:** +91 87540 11563
- **Email:** info@tmkanishkagarments.com
- **WhatsApp:** Available through website contact forms
