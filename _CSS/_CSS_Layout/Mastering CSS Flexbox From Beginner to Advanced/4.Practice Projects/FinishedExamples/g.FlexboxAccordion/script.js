document.addEventListener('DOMContentLoaded', function () {
    const accordionSections = document.querySelectorAll('.accordion-section');

    accordionSections.forEach(section => {
        const toggleButton = section.querySelector('.accordion-toggle');
        toggleButton.addEventListener('click', function () {
            section.classList.toggle('active');
        });
    });
});