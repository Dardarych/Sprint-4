document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let fullName = document.getElementById('fullName').value;
    let country = document.getElementById('country').value;
    let birthdate = document.getElementById('birthdate').value;
  

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = users.some(user => user.email === email);
  
    if (!userExists) {
      users.push({
        email: email,
        password: password, 
        fullName: fullName,
        country: country,
        birthdate: birthdate
      });
  
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful!');
      window.location.href = 'login.html'; 
    } else {
      alert('A user with this email already exists.');
    }
  });
  