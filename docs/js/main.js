// MapData Geomatics - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  initMobileMenu();
  
  // Accordion functionality
  initAccordions();
  
  // Contact form
  initContactForm();
  
  // Set active nav link
  setActiveNavLink();
});

// Mobile Menu
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const icon = toggle?.querySelector('svg');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      const isOpen = menu.classList.contains('open');
      menu.classList.toggle('open');
      
      // Update icon
      if (isOpen) {
        toggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      } else {
        toggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
      }
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }
}

// Accordion
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    
    if (trigger) {
      trigger.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        
        // Close all other items (single mode)
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
          }
        });
        
        // Toggle current item
        item.classList.toggle('open');
      });
    }
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Disable button and show loading
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
          Sending...
        `;
      }
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show toast
      showToast('Message Sent!', "We'll get back to you within 24 hours.");
      
      // Reset form
      form.reset();
      
      // Reset button
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          Send Message
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        `;
      }
    });
  }
}

// Toast notification
function showToast(title, message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // Create toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <h4>${title}</h4>
    <p>${message}</p>
  `;
  
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Set active navigation link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-links a, .navbar-mobile a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Category filter for projects page
function filterProjects(category) {
  const buttons = document.querySelectorAll('.category-filter .btn');
  const cards = document.querySelectorAll('.project-card');
  
  // Update active button
  buttons.forEach(btn => {
    btn.classList.remove('btn-default');
    btn.classList.add('btn-outline');
    if (btn.textContent.trim() === category) {
      btn.classList.remove('btn-outline');
      btn.classList.add('btn-default');
    }
  });
  
  // Filter cards
  cards.forEach(card => {
    const cardCategory = card.dataset.category;
    if (category === 'All' || cardCategory === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
