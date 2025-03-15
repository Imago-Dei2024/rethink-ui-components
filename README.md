# ReThink UI Components

A collection of modern, reusable UI components built with vanilla JavaScript and CSS. These components are designed to enhance the user experience of your website with interactive elements that are easy to integrate and customize.

## Components

### 1. Floating Appointment Button
A persistent button that stays at the bottom right of the screen, providing easy access to booking appointments from any page. Features a subtle pulsing animation to draw attention.

### 2. Enhanced Testimonial Carousel
A modern testimonial display with smooth transitions, star ratings, and improved visual design. Automatically rotates through testimonials with a smooth animation.

### 3. Enhanced Service Cards
Modern service cards with hover effects, animated icons, and subtle background gradient effects. Provides smooth elevation and shadow effects on hover.

### 4. Modern FAQ Accordion
Sleek, modern accordion design for FAQs with smooth animations when opening/closing items. Features staggered animation when the page loads.

### 5. Scroll-to-Top Button
Appears when the user scrolls down the page, providing an easy way to return to the top with a smooth animation.

## Getting Started

### Installation

1. Download or clone this repository:
```bash
git clone https://github.com/your-username/rethink-ui-components.git
```

2. Include the CSS and JavaScript files in your HTML:
```html
<!-- Include the CSS file -->
<link rel="stylesheet" href="css/ui-components.css">

<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Include the JavaScript file -->
<script src="js/ui-components.js"></script>
```

3. Initialize the components:
```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all components at once
        initUIComponents();

        // Or initialize individual components
        // initFloatingAppointmentButton();
        // initEnhancedTestimonials();
        // initEnhancedServiceCards();
        // initModernFaqAccordion();
        // initScrollToTopButton();
    });
</script>
```

## Customization

### CSS Variables

The components use CSS variables for easy customization. You can override these variables in your own CSS to match your brand's colors and style:

```css
:root {
    /* Primary color palette */
    --primary-color: #your-primary-color;
    --primary-light: #your-primary-light-color;
    --primary-dark: #your-primary-dark-color;

    /* Secondary colors */
    --secondary-color: #your-secondary-color;
    --secondary-light: #your-secondary-light-color;
    --secondary-dark: #your-secondary-dark-color;

    /* Other variables... */
}
```

### JavaScript Customization

Each component function accepts parameters for customization:

```javascript
// Customize the target URL for the floating appointment button
initFloatingAppointmentButton('your-custom-url.html');

// Customize the selectors for the testimonial carousel
initEnhancedTestimonials('.your-testimonials-container', '.your-testimonial-item');

// Customize the selector for service cards
initEnhancedServiceCards('.your-service-card-class');

// Customize the selectors for the FAQ accordion
initModernFaqAccordion('.your-faq-section', '.your-faq-item');
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

- Font Awesome for the icons
- Google Fonts for the typography
- Developed for ReThink Mental Health