document.getElementById('surprise-button').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.style.display = 'block';
});

function createElements(containerClass, elementClass, count, animationDelay) {
    const container = document.querySelector(containerClass);
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.classList.add(elementClass);
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * animationDelay}s`;
        container.appendChild(element);
    }
}

createElements('.stars', 'star', 100, 3);
createElements('.hearts', 'heart', 50, 5);

function validatePassword() {
    const correctPassword = "bai";
    const inputPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (inputPassword === correctPassword) {
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}




// Disable zooming on input focus
const viewport = document.querySelector('meta[name="viewport"]');
const inputs = document.querySelectorAll('input[type="password"]');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    });

    input.addEventListener('blur', () => {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
    });
});



// Disable zoom on focus for iOS
document.addEventListener('touchstart', function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'password') {
        event.target.style.fontSize = '16px'; // Enforce font size
    }
}, true);
