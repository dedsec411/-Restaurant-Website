// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this)
    if (name && email && message) {
        // Simulate sending data to a server
        console.log('Form submitted:', { name, email, message });
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Reset the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document
                const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});