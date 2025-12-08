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

    // Blog subscription form handler - Web3Forms integration
    const subscribeForm = document.getElementById('blog-subscribe-form');
    const subscribeMessage = document.getElementById('subscribe-message');
    const subscribeButton = document.getElementById('subscribe-button');
    
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('subscribe-email');
            const email = emailInput.value.trim();
            
            if (!email) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Web3Forms integration
            // Note: access_key is already in the form HTML, FormData will include it automatically
            // Check honeypot field (should be empty for real users)
            const botCheck = subscribeForm.querySelector('input[name="botcheck"]');
            if (botCheck && botCheck.checked) {
                // Bot detected - silently fail
                showMessage('Something went wrong. Please try again.', 'error');
                subscribeButton.textContent = originalText;
                subscribeButton.disabled = false;
                return;
            }
            
            const formData = new FormData(subscribeForm);
            
            const originalText = subscribeButton.textContent;
            subscribeButton.textContent = "Sending...";
            subscribeButton.disabled = true;
            
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                // Check if response is HTML (Cloudflare challenge page)
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("text/html")) {
                    // Cloudflare challenge - this shouldn't happen in real browser, but handle it
                    showMessage('Please try again in a moment.', 'error');
                    return;
                }
                
                const data = await response.json();
                
                if (response.ok && data.success) {
                    showMessage('Thank you for subscribing! You will receive updates when I publish new posts.', 'success');
                    subscribeForm.reset();
                } else {
                    showMessage('Error: ' + (data.message || 'Something went wrong. Please try again.'), 'error');
                }
            } catch (error) {
                console.error('Subscription error:', error);
                showMessage('Something went wrong. Please try again.', 'error');
            } finally {
                subscribeButton.textContent = originalText;
                subscribeButton.disabled = false;
            }
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