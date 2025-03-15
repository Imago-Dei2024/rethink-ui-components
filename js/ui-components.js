/**
 * ReThink UI Components - JavaScript
 */

// Floating Appointment Button
function initFloatingAppointmentButton(targetURL = 'contact.html') {
    const body = document.querySelector('body');

    // Create the button element
    const floatingBtn = document.createElement('button');
    floatingBtn.className = 'floating-appointment-btn';
    floatingBtn.innerHTML = '<i class="fas fa-calendar-alt"></i> Book Appointment';

    // Create the pulse effect
    const pulseEffect = document.createElement('div');
    pulseEffect.className = 'pulse-effect';

    // Append elements
    floatingBtn.appendChild(pulseEffect);
    body.appendChild(floatingBtn);

    // Add click event
    floatingBtn.addEventListener('click', function() {
        window.location.href = targetURL;
    });
}

// Enhanced Testimonial Carousel
function initEnhancedTestimonials(selector = '.testimonials', testimonialSelector = '.testimonial') {
    const testimonialSection = document.querySelector(selector);
    if (!testimonialSection) return;

    // Get existing testimonials
    const existingTestimonials = document.querySelectorAll(testimonialSelector);
    if (existingTestimonials.length === 0) return;

    // Create new container structure
    const testimonialContainer = document.createElement('div');
    testimonialContainer.className = 'testimonial-container';

    const testimonialWrapper = document.createElement('div');
    testimonialWrapper.className = 'testimonial-wrapper';

    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'testimonial-dots';

    // Process each testimonial
    existingTestimonials.forEach((testimonial, index) => {
        // Extract content
        const content = testimonial.querySelector('.testimonial-content').innerHTML;
        const authorName = testimonial.querySelector('.testimonial-author h4').textContent;
        const authorRole = testimonial.querySelector('.testimonial-author p').textContent;

        // Create new testimonial card
        const newCard = document.createElement('div');
        newCard.className = `testimonial-card ${index === 0 ? 'active' : ''}`;

        // Create rating stars
        const rating = document.createElement('div');
        rating.className = 'testimonial-rating';
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.className = 'fas fa-star';
            rating.appendChild(star);
        }

        // Create content
        const newContent = document.createElement('div');
        newContent.className = 'testimonial-content';
        newContent.innerHTML = content;

        // Create author section
        const author = document.createElement('div');
        author.className = 'testimonial-author';

        const authorImage = document.createElement('div');
        authorImage.className = 'testimonial-author-image';
        // Use a placeholder image or extract from existing if available
        authorImage.innerHTML = '<img src="https://via.placeholder.com/50" alt="Testimonial Author">';

        const authorInfo = document.createElement('div');
        authorInfo.className = 'testimonial-author-info';
        authorInfo.innerHTML = `<h4>${authorName}</h4><p>${authorRole}</p>`;

        author.appendChild(authorImage);
        author.appendChild(authorInfo);

        // Assemble the card
        newCard.appendChild(rating);
        newCard.appendChild(newContent);
        newCard.appendChild(author);

        // Add to wrapper
        testimonialWrapper.appendChild(newCard);

        // Create dot for this testimonial
        const dot = document.createElement('div');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    // Assemble the container
    testimonialContainer.appendChild(testimonialWrapper);
    testimonialContainer.appendChild(dotsContainer);

    // Replace the old slider with the new one
    const oldSlider = testimonialSection.querySelector('.testimonial-slider');
    if (oldSlider) {
        oldSlider.parentNode.replaceChild(testimonialContainer, oldSlider);
    } else {
        testimonialSection.appendChild(testimonialContainer);
    }

    // Add event listeners to dots
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showTestimonial(index);
        });
    });

    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Update cards
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Slide the wrapper
        testimonialWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-rotate testimonials
    let currentTestimonial = 0;
    const totalTestimonials = existingTestimonials.length;

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Enhanced Service Cards
function initEnhancedServiceCards(selector = '.service-card') {
    const serviceCards = document.querySelectorAll(selector);
    if (serviceCards.length === 0) return;

    serviceCards.forEach(card => {
        // Create enhanced card
        const enhancedCard = document.createElement('div');
        enhancedCard.className = 'service-card-enhanced';

        // Get existing content
        const icon = card.querySelector('.service-icon i').cloneNode(true);
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;
        const link = card.querySelector('a').getAttribute('href');

        // Create enhanced icon
        const enhancedIcon = document.createElement('div');
        enhancedIcon.className = 'service-icon-enhanced';
        enhancedIcon.appendChild(icon);

        // Create content
        const enhancedTitle = document.createElement('h3');
        enhancedTitle.textContent = title;

        const enhancedDescription = document.createElement('p');
        enhancedDescription.textContent = description;

        // Create link
        const enhancedLink = document.createElement('a');
        enhancedLink.className = 'service-link-enhanced';
        enhancedLink.href = link;
        enhancedLink.innerHTML = 'Learn More <i class="fas fa-arrow-right"></i>';

        // Assemble the card
        enhancedCard.appendChild(enhancedIcon);
        enhancedCard.appendChild(enhancedTitle);
        enhancedCard.appendChild(enhancedDescription);
        enhancedCard.appendChild(enhancedLink);

        // Replace the old card with the enhanced one
        card.parentNode.replaceChild(enhancedCard, card);
    });
}

// Modern FAQ Accordion
function initModernFaqAccordion(sectionSelector = '.faq-section', itemSelector = '.faq-item') {
    const faqSections = document.querySelectorAll(sectionSelector);
    if (faqSections.length === 0) return;

    faqSections.forEach(section => {
        // Get section title
        const sectionTitle = section.querySelector('h2').textContent;

        // Create accordion container
        const accordionContainer = document.createElement('div');
        accordionContainer.className = 'faq-accordion';
        accordionContainer.id = section.id; // Preserve the section ID for navigation

        // Create title section
        const titleSection = document.createElement('div');
        titleSection.className = 'faq-accordion-title';
        titleSection.innerHTML = `
            <h2>${sectionTitle}</h2>
            <p>Find answers to frequently asked questions about ${sectionTitle.toLowerCase()}</p>
        `;

        // Create items container
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'faq-items';

        // Get all FAQ items in this section
        const faqItems = section.querySelectorAll(itemSelector);

        faqItems.forEach(item => {
            // Get question and answer
            const questionEl = item.querySelector('.faq-question');
            const answerEl = item.querySelector('.faq-answer');

            if (!questionEl || !answerEl) return;

            const question = questionEl.childNodes[0].textContent.trim();
            const answer = answerEl.innerHTML;

            // Create new FAQ item
            const newItem = document.createElement('div');
            newItem.className = 'faq-item';

            // Create question element
            const newQuestionEl = document.createElement('div');
            newQuestionEl.className = 'faq-question';
            newQuestionEl.textContent = question;

            // Create answer element
            const newAnswerEl = document.createElement('div');
            newAnswerEl.className = 'faq-answer';
            newAnswerEl.innerHTML = answer;

            // Add click event to question
            newQuestionEl.addEventListener('click', () => {
                // Toggle active class
                newItem.classList.toggle('active');

                // Close other items
                const siblings = itemsContainer.querySelectorAll('.faq-item');
                siblings.forEach(sibling => {
                    if (sibling !== newItem) {
                        sibling.classList.remove('active');
                    }
                });
            });

            // Assemble the item
            newItem.appendChild(newQuestionEl);
            newItem.appendChild(newAnswerEl);

            // Add to container
            itemsContainer.appendChild(newItem);
        });

        // Assemble the accordion
        accordionContainer.appendChild(titleSection);
        accordionContainer.appendChild(itemsContainer);

        // Replace the old section with the new accordion
        section.parentNode.replaceChild(accordionContainer, section);
    });

    // Add animation to the accordion items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach((item, index) => {
        // Add a slight delay to each item for a staggered appearance
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';

            // Trigger animation
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// Scroll to Top Button
function initScrollToTopButton() {
    // Create the button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    // Add to the body
    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all UI components
function initUIComponents() {
    initFloatingAppointmentButton();
    initEnhancedTestimonials();
    initEnhancedServiceCards();
    initModernFaqAccordion();
    initScrollToTopButton();
}

// Export functions for modular usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initFloatingAppointmentButton,
        initEnhancedTestimonials,
        initEnhancedServiceCards,
        initModernFaqAccordion,
        initScrollToTopButton,
        initUIComponents
    };
}