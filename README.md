# Suburbia Skate

A modern, interactive skateboarding brand website built with Next.js 15, featuring a 3D board customizer, physics-based footer animations, and CMS-driven content via Prismic.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with fluid-tailwind
- **CMS:** [Prismic](https://prismic.io/) (headless CMS)
- **3D Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/)
- **Physics:** [Matter.js](https://brm.io/matter-js/)
- **Animations:** [GSAP](https://gsap.com/)
- **Fonts:** Bowlby One SC, DM Mono (via next/font)

## Features

- **Interactive Hero** — 3D skateboard that performs tricks (ollie, kickflip, frontside 360) on click
- **Product Showcase** — Grid of skateboards with hover effects, prices, and customizer links
- **Team Roster** — Skater profiles with photo reveals and hover scribble animations
- **Sticky Scroll Sections** — Text & image content with mouse parallax, bundled for scroll stacking
- **Video Block** — Lazy-loaded YouTube video with custom mask shape
- **3D Board Customizer** — Real-time skateboard builder with deck/wheel textures and truck/bolt colors; orbit controls and shareable URLs via search params
- **Physics Footer** — Matter.js simulation of skateboards falling and bouncing with drag support
- **Fully Responsive** — Mobile-first design across all sections
- **CMS-Driven** — All content managed through Prismic (pages, products, team, settings)
- **Cart Page** — Basic shopping cart with support for multiple items, quantity controls, and order summary

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Prismic Setup

This project uses Prismic for content management. To connect to your own Prismic repository:

1. Create a `.env.local` file with your Prismic environment variables
2. Update the Prismic client configuration in `src/prismicio.ts`

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── (with-header)/    # Routes with Header & Footer
│   │   └── cart/         # Shopping cart page
│   ├── build/            # 3D board customizer
│   ├── api/              # API routes (revalidate, preview)
│   └── slice-simulator/  # Prismic Slice Machine
├── components/           # Shared React components
├── lib/                  # Utility libraries
├── slices/               # Prismic Slice components
└── prismicio.ts          # Prismic client config
```

## Deployment

Deploy on [Vercel](https://vercel.com/) for the best experience with Next.js.
