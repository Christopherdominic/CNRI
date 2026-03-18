# Deployment Guide

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Production Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Deploy automatically

### Option 2: Manual Build

```bash
npm run build
npm start
```

### Option 3: Static Export

Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
};
```

Then run:
```bash
npm run build
```

Deploy the `out/` folder to any static hosting service.

## Environment Variables

Create `.env.local` for any API keys or configuration:

```
NEXT_PUBLIC_SITE_URL=https://cnri-kasu.edu.ng
```

## Customization Checklist

- [ ] Replace placeholder images in `public/` folder
- [ ] Update email addresses in Footer and Contact page
- [ ] Add actual phone numbers
- [ ] Configure social media links
- [ ] Set up form submission backend
- [ ] Add Google Analytics (optional)
- [ ] Configure newsletter subscription service
- [ ] Add actual conference dates
- [ ] Update team member photos

## Performance Tips

- Optimize images using Next.js Image component
- Enable caching headers
- Use CDN for static assets
- Monitor Core Web Vitals

## Support

For issues or questions, contact the development team.
