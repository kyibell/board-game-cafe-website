// Ensure the DOM is fully loaded before executing script
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display confirmation message
        alert(`Thank you, ${name}. Your message has been sent. We will contact you at ${email} shortly.`);

        // Optionally, you could send the contact data to a server here

        // Reset the form after submission
        contactForm.reset();
    });
});
