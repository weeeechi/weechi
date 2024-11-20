document.addEventListener("DOMContentLoaded", function () {
    // Get all links with class "nav-link"
    const navLinks = document.querySelectorAll('.nav-link');

    // Add event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Get the target section from the data-target attribute
            const targetId = link.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            // Scroll to the target section smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/*Modal Section*/
// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Show the modal
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Hide the modal
}
