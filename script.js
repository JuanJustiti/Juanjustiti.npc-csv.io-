// Example: Responsive Navigation Toggle (if needed)
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const toggleButton = document.querySelector('.toggle-button');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
