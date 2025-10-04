const hamburgur = document.querySelector('.hamburgur');
        const menubar = document.querySelector('.navbar-menu .menubar');

        hamburgur.addEventListener('click', () => {
            menubar.classList.toggle('show');
        });
// Add this function to your script.js to handle the scroll-in effect
const elements = document.querySelectorAll('.sec-2, .sec-3, .sec-4, .sec-5');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing after it has appeared once
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 }); // The element appears when 10% is visible

elements.forEach(element => {
    observer.observe(element);
});