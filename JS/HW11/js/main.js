let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let iEar = document.querySelectorAll('i');
let message = document.querySelector('.messageInform');
let button = document.querySelector('button');


for (let i = 0; i < iEar.length; i++) {
    iEar[i].addEventListener('click', function () {
        if (inputs[i].getAttribute('type') === 'password') {
            inputs[i].setAttribute('type', 'text');
            iEar[i].classList.remove('fa-eye');
            iEar[i].classList.add('fa-eye-slash');
        } else {
            inputs[i].setAttribute('type', 'password');
            iEar[i].classList.remove('fa-eye-slash');
            iEar[i].classList.add('fa-eye');
        }
    })
}

button.addEventListener('click', function (event) {
    event.preventDefault();
    if (inputs[0].value === inputs[1].value) {
        message.classList.add('disable');
        alert('You are welcome');
    } else {
        // inputs[0].value = '';
        // inputs[1].value = '';
        message.classList.remove('disable');
        message.style.color = 'red';
    }
});
