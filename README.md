# Sam Portfolio v2 — Scroll-Driven Experience

An innovative Next.js portfolio where the background photo **stays fixed** and all content transforms in-place as you scroll — like Apple's product pages.

## ✨ What's Different in v2

- **Scroll-driven narrative**: 6 full chapters — Hero, Work, Process, Services, Pricing, Contact — each occupying one viewport of scroll space
- **Photo stays fixed**: Sam's photo remains as the backdrop; only the overlay content swaps out with smooth Framer Motion transitions
- **Dynamic tinting**: The photo tint subtly darkens/shifts per chapter
- **Chapter indicator**: Dot navigation on the right side
- **Progress bar**: Accent-colored bar at the bottom tracks scroll position
- **Inaya-style hero**: Exact layout from the reference — name on left, info card on right, social links, decorative circles
- **Custom cursor**: Magnetic dot + ring cursor that scales on interactive elements
- **Full-screen menu**: Clip-path reveal with staggered links
- **Grain texture overlay**: Subtle film grain for depth

## Tech Stack
- Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
# Push to GitHub, then:
# vercel.com → New Project → Import → Deploy
```

Zero config needed.

## Customise

| What | Where |
|------|-------|
| Name / email / phone | `components/Navbar.tsx`, `components/ScrollStage.tsx` |
| WhatsApp number | Search `916382636384` → replace with your number |
| Hero text | `components/overlays/HeroOverlay.tsx` |
| Projects | `components/overlays/WorkOverlay.tsx` |
| Services | `components/overlays/ServicesOverlay.tsx` |
| Pricing | `components/overlays/PricingOverlay.tsx` |
| Profile photo | `public/profile.jpeg` |

## Folder Structure

```
sam-portfolio/
├── app/
│   ├── globals.css          # Fonts, grain, cursor, scrollbar
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CustomCursor.tsx     # Dot + ring cursor
│   ├── Navbar.tsx           # Sticky + fullscreen menu
│   ├── ScrollStage.tsx      # ⭐ Core scroll engine
│   ├── WhatsAppButton.tsx   # Fixed pulsing CTA
│   └── overlays/
│       ├── HeroOverlay.tsx      # Inaya-style hero
│       ├── WorkOverlay.tsx      # Project list
│       ├── ProcessOverlay.tsx   # 4-step grid
│       ├── ServicesOverlay.tsx  # Service cards
│       ├── PricingOverlay.tsx   # 3-tier pricing
│       └── ContactOverlay.tsx   # Form + modal
└── public/
    └── profile.jpeg
```
