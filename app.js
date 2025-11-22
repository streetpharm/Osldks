// Resume Rocket AI - Main JavaScript

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const waitlistForm = document.getElementById('waitlist-form');
  const emailInput = document.getElementById('email-input');
  const submitButton = document.getElementById('submit-button');
  const thankYouMessage = document.getElementById('thank-you');
  const errorMessage = document.getElementById('error-message');

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function(e) {
      // Clear previous messages
      thankYouMessage.classList.add('hidden');
      if (errorMessage) {
        errorMessage.classList.add('hidden');
      }

      // Validate email
      if (!emailInput.value || !isValidEmail(emailInput.value)) {
        e.preventDefault();
        showError('Please enter a valid email address');
        return;
      }

      // Show loading state
      const originalButtonText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = 'Joining...<span class="spinner"></span>';

      // Form will be submitted by Netlify Forms
      // Success message will be shown on form submission
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }, 2000);
    });
  }

  // Smooth scroll for CTA button
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      const form = document.getElementById('waitlist-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Focus on email input after scroll
        setTimeout(() => {
          emailInput.focus();
        }, 500);
      }
    });
  }

  // Check for success parameter in URL (from Netlify Forms)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    showSuccess();
    // Update counter
    updateWaitlistCounter();
  }
});

// Email validation
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Show success message
function showSuccess() {
  const thankYouMessage = document.getElementById('thank-you');
  if (thankYouMessage) {
    thankYouMessage.classList.remove('hidden');
    thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Show error message
function showError(message) {
  const errorMessage = document.getElementById('error-message');
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  } else {
    alert(message);
  }
}

// Update waitlist counter (with animation)
function updateWaitlistCounter() {
  const counter = document.getElementById('waitlist-counter');
  if (counter) {
    const currentCount = parseInt(counter.textContent.replace(/\D/g, '')) || 1200;
    const newCount = currentCount + 1;
    animateCounter(counter, currentCount, newCount);
  }
}

// Animate counter
function animateCounter(element, start, end) {
  const duration = 1000;
  const increment = (end - start) / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = `🚀 ${Math.floor(current).toLocaleString()}+ job seekers already on the waitlist`;
  }, 16);
}

// Track scroll depth for analytics (optional)
let maxScrollDepth = 0;
window.addEventListener('scroll', function() {
  const scrollDepth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
  if (scrollDepth > maxScrollDepth) {
    maxScrollDepth = scrollDepth;
  }
});

// Intersection Observer for fade-in animations (optional enhancement)
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  // Add fade-in class to sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}
