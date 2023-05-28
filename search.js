// JavaScript code for handling form submission and search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('form');

    // Add form submission event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the search query
        var searchQuery = form.elements.search.value.trim().toLowerCase();

        // Perform search logic (replace with your own search implementation)
        if (searchQuery !== '') {
            // Redirect to the search results page passing the search query as a parameter
            window.location.href = 'food-search.html?search=' + encodeURIComponent(searchQuery);
        }
    });
});
