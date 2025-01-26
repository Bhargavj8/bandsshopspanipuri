document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('admin-login');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/admin-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => {
            if (response.ok) {
                location.href = 'admin-dashboard.html';
            } else {
                alert('Invalid credentials');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    });
});
