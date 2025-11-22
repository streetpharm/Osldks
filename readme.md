# Resume Rocket AI

A modern, fully functional landing page for an AI-powered resume and cover letter builder. This website is built with HTML, CSS, and JavaScript and is optimized for deployment on Netlify.

## Features

### 🚀 Core Functionality
- **Netlify Forms Integration**: Fully functional waitlist signup with spam protection
- **Stripe Payment Integration**: Ready-to-use payment buttons for subscription and one-time purchases
- **Responsive Design**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive meta tags for search engines and social media sharing

### 🎨 Design & UX
- **Animated Gradient Hero**: Eye-catching gradient background with smooth animations
- **Interactive Elements**: Hover effects on buttons and feature cards
- **Smooth Scrolling**: Elegant navigation between sections
- **Form Validation**: Client-side email validation with user feedback
- **Loading States**: Visual feedback during form submission

### 🔒 Security & Performance
- **Security Headers**: X-Frame-Options, CSP, and other security headers configured
- **Spam Protection**: Netlify Forms honeypot field for spam filtering
- **Optimized Caching**: Proper cache headers for static assets
- **Lazy Loading**: Sections fade in as users scroll

## Project Structure

```
/
├── index.html          # Main HTML file with semantic markup
├── styles.css          # Custom CSS with animations and responsive design
├── app.js              # JavaScript for form handling and interactions
├── netlify.toml        # Netlify configuration with headers and redirects
└── README.md           # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js v22.21.1 or higher
- Netlify CLI (installed globally)

### Local Development

1. Clone the repository
2. Navigate to the project directory
3. Start the Netlify dev server:
   ```bash
   netlify dev
   ```
4. Open your browser to `http://localhost:8888`

### Deployment

This site is configured for automatic deployment on Netlify:

1. Connect your Git repository to Netlify
2. Netlify will automatically detect the configuration from `netlify.toml`
3. The site will be deployed on every push to the main branch

## Configuration

### Stripe Integration

Replace the placeholder Stripe button IDs in `index.html`:
- `buy_btn_1Qz3yourActualStripeButtonIdHere` (Hero section)
- `buy_btn_1Qz3yourMonthlyButtonIdHere` (Monthly plan)
- `buy_btn_1Qz3yourOneTimeButtonIdHere` (One-time bundle)

Your Stripe publishable key is already configured.

### Netlify Forms

The waitlist form is configured to:
- Submit to Netlify Forms automatically
- Redirect to `/?success=true` on successful submission
- Show a thank you message after submission
- Include spam protection via honeypot field

Access form submissions in your Netlify dashboard under Forms.

## Features Breakdown

### Hero Section
- Compelling headline and value proposition
- Email capture form with Netlify Forms integration
- Stripe payment option for immediate access
- Dynamic waitlist counter

### Features Section
- Three key value propositions with icons
- Hover animations on feature cards
- Clear, benefit-focused messaging

### Bonus Features Section
- Checklist of included features
- Visual confirmation with checkmarks

### Pricing Section
- Two pricing tiers with Stripe integration
- Hover effects on pricing cards
- Clear value comparison

### Call-to-Action
- Smooth scroll to waitlist form
- Animated gradient background
- Clear action button

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal external dependencies (Tailwind CDN, Google Fonts, Stripe)
- Optimized asset caching
- Fast page load times
- Smooth animations using CSS

## Security

- Security headers configured in `netlify.toml`
- Spam protection on forms
- No sensitive data stored client-side
- HTTPS enforced by Netlify

## License

All rights reserved.

## Support

For issues or questions, please contact the development team.
