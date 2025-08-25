//rooms.js
// Currently empty - you can add interactions later.
// Example: console message for testing
console.log("Hotel Rooms Page Loaded");



// Toggle mobile menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });