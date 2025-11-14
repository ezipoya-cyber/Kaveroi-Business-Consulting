// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form validation
const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }

    form.reset();
    successMessage.textContent = 'Thank you! Your message has been sent.';
});
