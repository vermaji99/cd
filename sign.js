$(document).ready(function() {
  // Login form submission
  $('#login').submit(function(e) {
      e.preventDefault();
      let loginData = {
          email: $('#email').val(),
          password: $('#password').val()
      };

      $.ajax({
          url: 'http://localhost:5000/login',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify(loginData),
          success: function(response) {
              // Save token to localStorage
              localStorage.setItem('token', response.token);
              // Redirect to dashboard
              window.location.href = 'dashboard.html';
          },
          error: function(error) {
              alert('Error: ' + error.responseJSON.msg);
          }
      });
  });
});
