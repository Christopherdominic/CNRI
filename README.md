# CNRI Website - Center for Nutrition Research and Innovation

A modern, responsive website for the Center for Nutrition Research and Innovation (CNRI) at Kaduna State University.

## Features

- 🎨 Modern, clean design with green, white, and orange color palette
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 and React 18
- 🎭 Smooth animations and transitions
- 🧩 Component-based architecture
- 🎯 8 comprehensive pages covering all aspects of CNRI

## Pages

1. **Home** - Hero section, focus areas, impact stats, recent activities
2. **About** - Mission, vision, and organizational overview
3. **Focus Areas** - Detailed breakdown of 5 core focus areas
4. **Programs** - 10 comprehensive programs with descriptions
5. **Conference** - Food for Education Policy Conference details
6. **Team** - Staff, coordinators, advisory board, and interns
7. **Partners** - Strategic partners and collaboration opportunities
8. **Contact** - Contact form, location, and newsletter subscription

## Getting Started

### Installation

```bash
cd cnri-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Color Palette

- **Primary (Green)**: Nutrition, agriculture, growth
- **Accent (Orange)**: Health, energy, vitality
- **White/Gray**: Clean, scientific, professional

## Customization

- Update content in page files (`app/*/page.tsx`)
- Modify colors in `tailwind.config.ts`
- Add images to `public/` folder
- Update contact information in `components/Footer.tsx`

## Project Structure

```
cnri-website/
├── app/
│   ├── about/
│   ├── conference/
│   ├── contact/
│   ├── focus-areas/
│   ├── partners/
│   ├── programs/
│   ├── team/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── FocusCards.tsx
│   ├── ImpactSection.tsx
│   ├── ActivitiesPreview.tsx
│   └── CTABanner.tsx
└── public/
```

## License

© 2026 Center for Nutrition Research and Innovation. All rights reserved.
