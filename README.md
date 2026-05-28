# 3-Day Bath - Multi-Page Landing Site

A modern, accessible, and responsive Next.js multi-page application for 3-Day Bath, a bathroom renovation company specializing in quick, high-quality renovations for seniors and their families.

## 🎯 Features

- **Multi-Page Application**: Home, Services, How It Works, Testimonials, and Contact pages
- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop
- **Accessibility First**: Senior-friendly design with large fonts, high contrast, and clear navigation
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Performance Optimized**: Next.js for fast loading and SEO benefits
- **Production Ready**: Vercel deployment ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/upriodge-glitch/3-daybath.git
cd 3-daybath

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
3-daybath/
├── pages/
│   ├── _app.tsx              # App wrapper
│   ├── _document.tsx         # HTML structure
│   ├── index.tsx             # Home page
│   ├── services.tsx          # Services page
│   ├── how-it-works.tsx      # How it works page
│   ├── testimonials.tsx      # Testimonials page
│   └── contact.tsx           # Contact page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   └── Footer.tsx            # Footer
├── styles/
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🎨 Color Palette

- **Primary Blue**: `#2B6CB0`
- **Primary Light**: `#EBF4FA`
- **Primary Dark**: `#1a4d7a`
- **Accent Warm**: `#F4A460`
- **Text Dark**: `#2D3436`

## ♿ Accessibility Features

- Large, readable fonts (minimum 18px body text)
- High contrast color combinations
- Semantic HTML structure
- ARIA labels where needed
- Mobile-first responsive design
- Simple, intuitive navigation
- Clear call-to-action buttons

## 📄 Pages

### Home (`/`)
Welcome page with hero section, benefits, services overview, testimonial, and 3-step process.

### Services (`/services`)
Detailed information about walk-in bathtubs, full renovations, and safety upgrades.

### How It Works (`/how-it-works`)
Step-by-step breakdown of the consultation, design, and installation process.

### Testimonials (`/testimonials`)
Customer testimonials, ratings, and why customers choose 3-Day Bath.

### Contact (`/contact`)
Contact form, phone number, email, hours, and FAQ section.

## 🔧 Customization

### Update Phone Number
Replace `1-800-555-1234` throughout the project with your actual phone number.

### Update Email
Replace `info@3daybath.com` with your email address.

### Update Colors
Modify color values in `tailwind.config.ts`:
```typescript
colors: {
  'primary-blue': '#YOUR_COLOR',
  // ...
}
```

### Update Content
Edit text and images in individual page files within `/pages` directory.

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

Vercel will automatically build and deploy your site.

## 🛠️ Technologies

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Lucide React**: Icon library
- **Responsive Design**: Mobile-first approach

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is proprietary and owned by 3-Day Bath.

## 📞 Support

For questions or support, contact: info@3daybath.com

---

**Powered by Upriodge** © 2026 3-Day Bath
