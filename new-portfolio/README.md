# Virtual Portfolio - Modern Next.js Portfolio

A modern, interactive portfolio built with Next.js 14, featuring 3D Spline scenes, smooth animations, and a sleek dark theme.

## Features

- **3D Interactive Hero Section** - Powered by Spline for immersive 3D experiences
- **Modern UI Components** - Custom Card and Spotlight effects
- **Smooth Animations** - Using Framer Motion for fluid transitions
- **Responsive Design** - Fully responsive across all devices
- **Dark Theme** - Sleek black/green color scheme
- **All Portfolio Content** - Complete portfolio sections including:
  - Hero with 3D scene
  - About Me
  - Skills (Technical & Data/Analytics)
  - Experience
  - Education & Certifications
  - Major Projects
  - Contact Information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D**: @splinetool/react-spline
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom Card and Spotlight components

## Installation

1. Navigate to the project directory:
```bash
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
new-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page with all sections
├── components/
│   └── ui/
│       ├── card.tsx         # Card UI component
│       ├── spotlight.tsx    # Spotlight effect component
│       └── spline.tsx       # Spline 3D scene component
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── postcss.config.js        # PostCSS configuration
```

## Customization

### Spline Scene
To change the 3D scene, modify the `scene` prop in `app/page.tsx`:
```tsx
<SplineScene 
  scene="YOUR_SPLINE_SCENE_URL"
  className="w-full h-full"
/>
```

### Colors
Update the color scheme in `tailwind.config.ts` and `app/globals.css` to match your brand.

### Content
All portfolio content is in `app/page.tsx`. Modify the sections to update your information.

## License

This project is open source and available for personal and commercial use.
