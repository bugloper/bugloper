// Minimal JavaScript for smooth interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Blog subscription form handler
    const subscribeForm = document.getElementById('blog-subscribe-form');
    const subscribeMessage = document.getElementById('subscribe-message');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('subscribe-email');
            const email = emailInput.value.trim();
            
            if (!email) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // TODO: Replace with your email service endpoint
            // Examples:
            // - Mailchimp: 'https://yourdomain.us1.list-manage.com/subscribe/post'
            // - ConvertKit: 'https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe'
            // - Custom API: 'https://your-api.com/subscribe'
            
            // For now, just show a success message
            // You'll need to integrate with your email service
            showMessage('Thank you for subscribing! Check your email to confirm.', 'success');
            emailInput.value = '';
            
            // Example: Uncomment and configure for your email service
            /*
            fetch('YOUR_ENDPOINT_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                showMessage('Thank you for subscribing!', 'success');
                emailInput.value = '';
            })
            .catch(error => {
                showMessage('Something went wrong. Please try again.', 'error');
            });
            */
        });
    }
    
    function showMessage(text, type) {
        if (subscribeMessage) {
            subscribeMessage.textContent = text;
            subscribeMessage.className = 'subscribe-message ' + type;
            setTimeout(function() {
                subscribeMessage.textContent = '';
                subscribeMessage.className = 'subscribe-message';
            }, 5000);
        }
    }
});