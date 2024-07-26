document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded!");

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Semua field harus diisi!');
            event.preventDefault();
        }
    });

    // Additional interactivity can be added here
});
