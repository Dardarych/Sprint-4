document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let authenticatedUser = users.find(user => user.email === email && user.password === password);
  
    if (authenticatedUser) {
      sessionStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
      alert('Login successful!');
      window.location.href = 'profile.html'; 
    } else {
      alert('Incorrect email or password.');
    }
  });
  