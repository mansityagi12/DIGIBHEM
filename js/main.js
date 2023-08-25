document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');
    
    const signupButton = document.getElementById('signupButton');
    const loginForm = document.getElementById('login-form');
    
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const account = document.getElementById('account').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const userData = {
        username: username,
        account:account,
        email: email,
        password: password
      };
      
      // Save user data to local storage
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Optionally provide a success message or redirect to another page
      alert('Sign up successful! Your data has been saved.');
      console.log(userData)
      
      // Clear form fields
      signupForm.reset();
    });
    signupButton.addEventListener('click', function() {
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
      });
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
    
        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('userData'));
        
        if (userData && userData.username === username && userData.password === password) {
          alert('Login successful!');
          window.location.href = 'home.html';
        } else {
          alert('Login failed. Please check your credentials.');
        }
        
        // Clear form fields
        loginForm.reset();
      });
});