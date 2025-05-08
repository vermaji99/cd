$(document).ready(function() {
    // Check if token exists
    if (!localStorage.getItem('token')) {
        window.location.href = 'index.html'; // Redirect to login page if no token
    }

    // Logout functionality
    $('#logout').click(function() {
        localStorage.removeItem('token');
        window.location.href = 'index.html'; // Redirect to login page
    });
});
