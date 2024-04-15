
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleClosingMenu');
    const booksToggleButton = document.getElementById('booksClosingMenu');

    // Toggle event for both tour_section and books_section
    toggleButton.addEventListener('click', function(event) {
        const closingMenu = document.querySelector(".tour_section");
        toggleSectionVisibility(closingMenu, toggleButton);
    });

    booksToggleButton.addEventListener('click', function(event) {
        const booksSection = document.querySelector(".books_section");
        toggleSectionVisibility(booksSection, booksToggleButton);
    });

    // Function to toggle section visibility and change button text
    function toggleSectionVisibility(section, button) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
            button.querySelector('span').textContent = 'hide';
        } else {
            section.style.display = "none";
            button.querySelector('span').textContent = 'show';
        }
    }
});
