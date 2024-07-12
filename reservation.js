// Ensure the DOM is fully loaded before executing script
document.addEventListener("DOMContentLoaded", function() {
    // Get the reservation form element
    const reservationForm = document.getElementById('Reservation-form');

    // Add submit event listener to the form
    reservationForm.addEventListener('submit', function(e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Display confirmation message
        alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests. A confirmation email will be sent to ${email}.`);

        // Optionally, you could send the reservation data to a server here

        // Reset the form after submission
        reservationForm.reset();
    });
});
