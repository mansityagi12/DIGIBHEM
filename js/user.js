document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const usernameElement = document.getElementById('username');
    const emailElement = document.getElementById('email');
    const accountElement = document.getElementById('account');
  
    if (userData) {
      usernameElement.textContent = userData.username;
      emailElement.textContent = userData.email;
      accountElement.textContent = userData.account;
    } else {
      // Redirect to login page or handle missing user data
      window.location.href = 'login.html'; // Change to your login page URL
    }
  });