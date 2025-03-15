# TechUI React Components

A collection of modern, reusable React UI components for tech websites and applications. These components are designed to enhance the user experience with interactive elements that are easy to integrate and customize.

## Components

### 1. Floating Action Button
A persistent button that stays at the bottom right of the screen, providing easy access to key actions. Features a subtle pulsing animation to draw attention.

### 2. Interactive Testimonial Carousel
A modern testimonial display with smooth transitions, rating indicators, and improved visual design. Automatically rotates through testimonials with a smooth animation.

### 3. Feature Cards with Animations
Modern feature cards with hover effects, animated icons, and subtle background gradient effects. Provides smooth elevation and shadow effects on hover.

### 4. Expandable FAQ Accordion
Sleek, modern accordion design for FAQs with smooth animations when opening/closing items. Features staggered animation when the page loads.

### 5. Scroll-to-Top Button
Appears when the user scrolls down the page, providing an easy way to return to the top with a smooth animation.

## Getting Started

### Installation

1. Install the package:
```bash
npm install techui-react-components
# or
yarn add techui-react-components
```

2. Import the components:
```jsx
import {
  FloatingActionButton,
  TestimonialCarousel,
  FeatureCard,
  FaqAccordion,
  ScrollToTopButton
} from 'techui-react-components';
```

3. Use the components in your React application:
```jsx
function App() {
  return (
    <div className="app">
      {/* Your app content */}

      <TestimonialCarousel
        testimonials={testimonialData}
      />

      <FeatureCard
        title="Cloud Computing"
        description="Scalable cloud solutions for your business"
        icon="cloud"
      />

      <FaqAccordion
        items={faqData}
      />

      <FloatingActionButton
        icon="chat"
        onClick={() => openChat()}
      />

      <ScrollToTopButton />
    </div>
  );
}
```

## Customization

### Theme Customization

The components use a theme provider for easy customization. You can override the default theme to match your brand's colors and style:

```jsx
import { ThemeProvider } from 'techui-react-components';

const myTheme = {
  colors: {
    primary: '#0066ff',
    secondary: '#6c47ff',
    accent: '#ff7d00',
    background: '#ffffff',
    text: '#333333',
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Roboto", sans-serif',
  },
  // Other theme variables...
};

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      {/* Your app with themed components */}
    </ThemeProvider>
  );
}
```

### Component Props

Each component accepts props for customization:

```jsx
// Customize the floating action button
<FloatingActionButton
  icon="message"
  label="Contact Us"
  color="secondary"
  onClick={() => openContactForm()}
/>

// Customize the testimonial carousel
<TestimonialCarousel
  testimonials={testimonialData}
  autoplay={true}
  interval={5000}
  showDots={true}
/>

// Customize the feature cards
<FeatureCard
  title="AI Solutions"
  description="Cutting-edge artificial intelligence for your business"
  icon="brain"
  variant="outlined"
  hoverEffect="lift"
/>

// Customize the FAQ accordion
<FaqAccordion
  items={faqData}
  expandMultiple={false}
  animated={true}
/>
```

## Browser Support

These components are compatible with all modern browsers, including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React for the component framework
- Framer Motion for animations
- Material Icons for the icon set