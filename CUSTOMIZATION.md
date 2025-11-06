# Customization Guide

This document explains how to customize and modify various aspects of this portfolio website.

## Table of Contents
- [Design System & Colors](#design-system--colors)
- [Background Pattern](#background-pattern)
- [Typography](#typography)
- [Content Sections](#content-sections)
- [Navigation](#navigation)
- [Adding New Pages](#adding-new-pages)
- [Deployment](#deployment)

---

## Design System & Colors

All colors are defined using HSL (Hue, Saturation, Lightness) format in `src/index.css`. This ensures consistent theming across light and dark modes.

### Modifying Colors

Edit `src/index.css` to change colors:

```css
:root {
  --background: 35 20% 97%;        /* Light warm off-white */
  --foreground: 222 47% 11%;       /* Dark text */
  --accent: 217 91% 60%;           /* Blue accent color */
  /* ... other colors */
}

.dark {
  --background: 222 47% 6%;        /* Dark background */
  --foreground: 210 40% 98%;       /* Light text */
  --accent: 217 91% 60%;           /* Same accent works in both modes */
  /* ... other colors */
}
```

**Key Colors:**
- `--background` / `--foreground`: Main page colors
- `--accent`: Accent color for links, highlights
- `--primary`: Primary brand color
- `--muted`: Subdued backgrounds and text
- `--border`: Border colors

### Using Colors in Components

Always use semantic tokens instead of hardcoded colors:

```tsx
// ✅ GOOD
<div className="bg-background text-foreground border-border">

// ❌ AVOID
<div className="bg-white text-black border-gray-300">
```

---

## Background Pattern

The subtle background pattern is defined in `src/index.css` using inline SVG data URIs.

### Light Mode Pattern
Located in `:root` under `--bg-pattern`. The pattern includes:
- Chess/grid pattern (subtle checkboard)
- Quantum wave patterns (static curves)
- Organic shapes (yoga, books, mangos)
- Tennis court lines

### Dark Mode Pattern
Located in `.dark` under `--bg-pattern` with inverted colors.

### Customizing the Pattern

To modify the pattern:

1. **Change opacity:** Adjust the `opacity` attributes in the SVG
2. **Change colors:** Modify the `stroke` and `fill` hex values
3. **Add elements:** Add more SVG paths, shapes, ellipses
4. **Remove elements:** Delete unwanted SVG elements

Example - making waves more prominent:
```css
/* Find this line in the SVG and change opacity from 0.15 to 0.3 */
stroke='%234a5568' stroke-width='0.5' fill='none' opacity='0.3'
```

### Disabling the Background

To remove the background pattern entirely:

```css
body {
  background-image: none; /* Remove this line or set to none */
}
```

---

## Typography

### Font Families

Defined in `src/index.css`:

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

To change fonts:
1. Import your font in `index.html` or via CSS
2. Update the `font-family` declarations above

### Text Sizes

Use Tailwind's utility classes:
- `text-sm`: Small text
- `text-base`: Default
- `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`: Increasing sizes

---

## Content Sections

Each section is a separate component in `src/components/sections/`.

### About Section (`About.tsx`)

Edit the text content directly:

```tsx
<p>
  Hi, I'm Adithya. I work on quantum error correction...
</p>
```

To change the avatar initials or style:
```tsx
<div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 ...">
  AS  {/* Change initials here */}
</div>
```

### Work Experience (`WorkExperience.tsx`)

Edit the `experiences` array:

```tsx
const experiences = [
  {
    company: "Your Company Name",
    role: "Your Role",
    period: "2023 - Present",
    description: "What you do...",
    location: "City, Country"
  },
  // Add more entries...
];
```

### Achievements (`Achievements.tsx`)

Modify the achievements array to add/remove items.

### Research (`Research.tsx`)

Update publications, links, and descriptions.

### Talks (`Talks.tsx`)

Add or remove talk entries.

### Projects (`Projects.tsx`)

Edit project cards with titles, descriptions, and links.

### Blog Preview (`BlogPreview.tsx`)

Configure featured blog posts.

### Contact (`Contact.tsx`)

Update social links and email:

```tsx
<a href="mailto:your.email@example.com">
  <Mail className="w-5 h-5" />
  <span className="text-sm">your.email@example.com</span>
</a>
```

---

## Navigation

### Navbar (`src/components/Navbar.tsx`)

The navbar uses a dropdown menu for section links to reduce clutter.

#### Adding a Section to the Dropdown

```tsx
<DropdownMenuItem onClick={() => scrollToSection('your-section-id')}>
  Your Section Name
</DropdownMenuItem>
```

Make sure your section has a matching `id`:
```tsx
<section id="your-section-id">
```

#### Adding a New Top-Level Link

```tsx
<Link to="/your-page" className="hover:text-accent transition-colors">
  Your Page
</Link>
```

#### Updating Social Links

```tsx
<a 
  href="https://github.com/yourusername" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:text-accent transition-colors"
>
  <Github className="w-5 h-5" />
</a>
```

#### CV Download Button

Update the CV file path:
```tsx
<a href="/assets/YourName_CV.pdf" download>
```

Place your CV PDF in the `public/assets/` folder.

---

## Adding New Pages

### 1. Create the Page Component

Create a new file in `src/pages/`, e.g., `Portfolio.tsx`:

```tsx
import Navbar from '@/components/Navbar';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
          {/* Your content */}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
```

### 2. Add Route

Edit `src/App.tsx`:

```tsx
import Portfolio from "./pages/Portfolio";

// Inside <Routes>
<Route path="/portfolio" element={<Portfolio />} />
```

### 3. Add to Navigation

Add link in `Navbar.tsx`:

```tsx
<Link to="/portfolio" className="hover:text-accent transition-colors">
  Portfolio
</Link>
```

---

## Deployment

This site is built with Vite and can be deployed to various platforms:

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploying to Netlify/Vercel

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Deploying to GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

### Custom Domain

After deploying, configure your custom domain in your hosting provider's settings.

---

## Tips & Best Practices

1. **Always use semantic color tokens** (e.g., `bg-background`, `text-foreground`) instead of hardcoded colors
2. **Test in both light and dark modes** after making changes
3. **Keep sections focused** - each section component should have a single responsibility
4. **Use responsive classes** - always consider mobile layouts with `md:`, `lg:` prefixes
5. **Maintain accessibility** - include `aria-label` attributes for icon-only buttons

---

## Getting Help

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com/
- **Lucide Icons**: https://lucide.dev/icons
- **Radix UI**: https://www.radix-ui.com/

For specific issues with this template, check the component files - they're well-commented and follow consistent patterns.
