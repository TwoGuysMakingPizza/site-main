// Main JavaScript functionality for Heat Tire Feel

document.addEventListener('DOMContentLoaded', function() {
    // Removed default mobile menu toggle to avoid conflict with custom nav script

    // Menu category tabs (for menu page)
    const categoryTabs = document.querySelectorAll('.category-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Remove active class from all tabs
            categoryTabs.forEach(t => {
                t.classList.remove('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
                t.classList.add('text-gray-600', 'hover:text-blue-600');
            });
            
            // Add active class to clicked tab
            this.classList.add('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
            this.classList.remove('text-gray-600', 'hover:text-blue-600');
            
            // Hide all menu categories
            menuCategories.forEach(category => {
                category.classList.add('hidden');
            });
            
            // Show target category
            const targetElement = document.getElementById(targetCategory);
            if (targetElement) {
                targetElement.classList.remove('hidden');
            }
        });
    });

    // Star rating functionality (for reviews page)
    const starRatings = document.querySelectorAll('.star-rating');
    const ratingInput = document.getElementById('rating');
    
    starRatings.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Update hidden input
            if (ratingInput) {
                ratingInput.value = rating;
            }
            
            // Update star display
            starRatings.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('text-yellow-400');
                    s.classList.remove('text-gray-300');
                } else {
                    s.classList.remove('text-yellow-400');
                    s.classList.add('text-gray-300');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            starRatings.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('text-yellow-400');
                    s.classList.remove('text-gray-300');
                } else {
                    s.classList.remove('text-yellow-400');
                    s.classList.add('text-gray-300');
                }
            });
        });
    });

    // Form submissions (basic validation and feedback)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                // Simulate form submission
                alert('Thank you! Your form has been submitted successfully. We will get back to you soon.');
                form.reset();
                
                // Reset star ratings if present
                starRatings.forEach(star => {
                    star.classList.remove('text-yellow-400');
                    star.classList.add('text-gray-300');
                });
                
                if (ratingInput) {
                    ratingInput.value = '';
                }
            } else {
                alert('Please fill in all required fields.');
            }
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for buttons
    const buttons = document.querySelectorAll('button[type="submit"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            // Re-enable after 2 seconds (simulated processing)
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
});

// Utility function to format dates
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Utility function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function to validate phone number
function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/[\s\-\(\)]/g, ''));
}
