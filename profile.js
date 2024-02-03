document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  
    if (currentUser) {
      document.getElementById('fullName').textContent = currentUser.fullName;
      document.getElementById('profileEmail').textContent = currentUser.email;
      document.getElementById('profileFullName').textContent = currentUser.fullName;
      document.getElementById('profileCountry').textContent = currentUser.country;
      document.getElementById('profileBirthdate').textContent = currentUser.birthdate;
    } else {
      alert('No user is currently logged in.');
      window.location.href = 'login.html'; 
    }
  
    document.getElementById('logoutLink').addEventListener('click', function() {
      sessionStorage.removeItem('currentUser');
      window.location.href = 'index.html'; 
    });
  });
  