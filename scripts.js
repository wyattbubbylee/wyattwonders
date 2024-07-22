document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const loginSection = document.getElementById('login-section');
    const adminSection = document.getElementById('admin-section');
    const dadSection = document.getElementById('dad-section');

    const users = {
        admin: '1234',
        dad: '1234'
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (users[username] && users[username] === password) {
            loginMessage.textContent = 'Login successful!';
            loginSection.style.display = 'none';
            
            if (username === 'admin') {
                adminSection.style.display = 'block';
            } else if (username === 'dad') {
                dadSection.style.display = 'block';
            }
        } else {
            loginMessage.textContent = 'Invalid username or password.';
        }
    });
});
