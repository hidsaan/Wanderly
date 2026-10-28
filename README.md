# Wanderly - Modern Tourism Website

A beautiful, compact tourism landing page built with Next.js, React, and Tailwind CSS.

## Features

- **Modern, Premium Design**: Clean aesthetics with forest green, sand beige, and warm white color palette
- **Responsive Layout**: Fully responsive design that works beautifully on desktop, tablet, and mobile
- **Interactive Components**:
  - Sticky navigation with smooth scrolling
  - Hero section with destination search
  - Featured destination cards with hover effects
  - Travel experience categories
  - Trip planning modal with form validation
  - Mobile hamburger menu

## Tech Stack

- **Next.js 15+** with App Router
- **React 19** with JavaScript (no TypeScript)
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Unsplash** for high-quality destination photography

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main homepage with all sections
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── Navbar.js          # Sticky navigation with mobile menu
│   ├── Hero.js            # Hero section with search
│   ├── DestinationCard.js # Destination card component
│   ├── ExperienceCard.js  # Experience category card
│   ├── PlanTripModal.js   # Trip planning form modal
│   └── Footer.js          # Footer with links and social media
├── tailwind.config.js     # Tailwind configuration with custom colors
├── next.config.js         # Next.js configuration
└── jsconfig.json          # JavaScript path aliases configuration
```

## Key Sections

### 1. **Hero Section**
- Full-screen immersive background image
- Compelling headline and description
- Compact destination search panel
- Primary and secondary CTAs

### 2. **Featured Destinations**
- Kashmir, India
- Bali, Indonesia
- Swiss Alps, Switzerland
- Kyoto, Japan

Each destination includes beautiful photography, descriptions, and starting prices.

### 3. **Travel Experiences**
- Adventure
- Nature & Wildlife
- Cultural Experiences
- Relaxation

### 4. **Why Travel With Us**
- Curated destinations
- Personalized planning
- Memorable experiences

### 5. **Final CTA & Footer**
- Call-to-action banner
- Trip planning button
- Footer with navigation and social links

## Functional Features

✅ Smooth scroll navigation between sections  
✅ Functional mobile hamburger menu  
✅ Working destination search with filters  
✅ Date picker and traveler selection  
✅ Trip planning modal with form validation  
✅ Success/error feedback on form submission  
✅ Interactive destination cards  
✅ Responsive hover and focus states  
✅ Accessible buttons and form controls  

## Color Palette

- **Forest Green**: `#1f3d30` (primary brand color)
- **Sand Beige**: `#f0e6d6` (accents and backgrounds)
- **Warm White**: `#faf9f6` (main background)

## Notes

- This is a **demo frontend application**
- The trip planning form does not submit to a real backend
- Form submissions display a demo success message
- Destination cards show alert dialogs (in production, these would navigate to detail pages)
- All images are loaded from Unsplash CDN

## Customization

### Changing Destinations

Edit the `destinations` array in `app/page.js`:

\`\`\`javascript
const destinations = [
  {
    id: 1,
    name: 'Your Destination',
    country: 'Country',
    description: 'Description',
    image: 'https://images.unsplash.com/...',
    price: 1299,
  },
  // Add more destinations
];
\`\`\`

### Modifying Colors

Update `tailwind.config.js` in the `extend.colors` section.

### Changing Images

Replace the Unsplash URLs in components with your own image sources. Make sure to update `next.config.js` if using external image domains.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is a demonstration application built for portfolio and educational purposes.

---

Built with ❤️ using Next.js and Tailwind CSS
