// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// PNG Feature Section Slideshow
const pngImages = [
    'https://upload.wikimedia.org/wikipedia/commons/4/41/PNG_village_traditional_huts.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/31/Trobriand_Islands_people_2.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f0/PNG_dance_traditional.jpg'
];

let currentImageIndex = 0;
const pngImageContainer = document.querySelector('.png-images');

function showPNGImage(index) {
    pngImageContainer.innerHTML = `<img src="${pngImages[index]}" alt="Papua New Guinea cultural image">`;
}

function nextPNGImage() {
    currentImageIndex = (currentImageIndex + 1) % pngImages.length;
    showPNGImage(currentImageIndex);
}

// Initialize slideshow
showPNGImage(currentImageIndex);
setInterval(nextPNGImage, 5000); // change every 5 seconds

// Contact form validation
const form = document.querySelector('form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields!
