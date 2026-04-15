// --- ORIGINAL FEATURES ---

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
       behavior: 'smooth'
    });
  });
});

// Card Hover Animations
const cards = document.querySelectorAll('.info-grid div');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'scale(1.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'scale(1)';
  });
});

// --- NEW FEATURES FOR MIDTERM REQUIREMENT ---

// JS Feature 1 & 2: Button Click Event & Dynamic Content Display (Show/Hide)
const viewMoreBtn = document.getElementById('viewMoreBtn');
const extraAbout = document.getElementById('extra-about');

if (viewMoreBtn && extraAbout) {
  viewMoreBtn.addEventListener('click', () => {
    if (extraAbout.style.display === 'none') {
      extraAbout.style.display = 'block';
      viewMoreBtn.textContent = 'Read Less';
    } else {
      extraAbout.style.display = 'none';
      viewMoreBtn.textContent = 'Read More';
    }
  });
}

// JS Feature 3: Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page from reloading

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields before submitting.');
    } else {
      // Show success message dynamically
      const formMessage = document.getElementById('formMessage');
      formMessage.style.display = 'block';
      
      // Clear the form
      contactForm.reset();
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
          formMessage.style.display = 'none';
      }, 3000);
    }
  });
}