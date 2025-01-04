document.querySelector('.register-link a').addEventListener('click', function() {
    document.querySelector('.login-box').style.display = 'none';
    document.querySelector('.register-box').style.display = 'block';
});

document.querySelector('.toggle-login').addEventListener('click', function() {
    document.querySelector('.register-box').style.display = 'none';
    document.querySelector('.login-box').style.display = 'block';
});