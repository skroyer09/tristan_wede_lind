
// for closing event content and opening it again
document.getElementById("toggleClosingMenu").addEventListener("pointerdown", function(event) {
        var closingMenu = document.querySelector(".tour_section");
        if (closingMenu.style.display === "none" || closingMenu.style.display === "") {
            closingMenu.style.display = "block";
        } else {
            closingMenu.style.display = "none";
        }
        event.target.setPointerCapture(event.pointerId);
    });

// change the smybol when clicked
    document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleClosingMenu');
    const spanElement = toggleButton.querySelector('span');

    toggleButton.addEventListener('click', function() {
        if (spanElement.textContent === 'hide') {
            spanElement.textContent = 'show'; // Change to "⇊" when clicked
        } else {
            spanElement.textContent = 'hide'; // Change back to "⇈" when clicked again
        }
    });
});

// for closing books content and opening it again
document.getElementById("booksClosingMenu").addEventListener("click", function(event) {
    var booksSection = document.querySelector(".books_section");
    if (booksSection.style.display === "none" || booksSection.style.display === "") {
        booksSection.style.display = "block";
    } else {
        booksSection.style.display = "none";
    }
});

// change the smybol when clicked
    document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('booksClosingMenu');
    const spanElement = toggleButton.querySelector('span');

    toggleButton.addEventListener('click', function() {
        if (spanElement.textContent === 'hide') {
            spanElement.textContent = 'show'; // Change to "⇊" when clicked
        } else {
            spanElement.textContent = 'hide'; // Change back to "⇈" when clicked again
        }
    });
});



