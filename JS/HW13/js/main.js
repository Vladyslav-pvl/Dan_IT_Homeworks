/* Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
    Первый будет работать только один раз, в отличии от интервала (работает черз определенный интервал)

Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
    Все равно выполниться

Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
    Для остановки, чтобь не было ошибок.
*/

let imgAll = document.querySelectorAll('.img');
let imgAllArr = Array.from(imgAll);
const btnStop = document.querySelector('.stop');
const btnContinue = document.querySelector('.continue');
let sliderPosition = 0;
let showSlider;


btnStop.addEventListener('click', stopImg);
btnContinue.addEventListener('click', continueImg);
let SlideP = setInterval(slider, 3000);

function slider() {
    if (sliderPosition < imgAllArr.length) {
        imgAllArr[sliderPosition].classList.add('active');
        imgAllArr[sliderPosition].classList.remove('inactive');

        if (sliderPosition > 0) {
            imgAllArr[sliderPosition - 1].classList.remove('active');
            imgAllArr[sliderPosition - 1].classList.add('inactive');
        }
        sliderPosition += 1;
    } else {
        sliderPosition = 0;
        imgAllArr[0].classList.add('active');
        imgAllArr[imgAllArr.length - 1].classList.remove('active');
        imgAllArr[imgAllArr.length - 1].classList.add('inactive');
        slider();
    }
    return showSlider = true;
} slider()

function stopImg() {
    if (showSlider === true) {
        clearInterval(SlideP)
        showSlider = false;
    }
}

function continueImg() {
    if (showSlider === false) {
        SlideP = setInterval(slider, 3000)
        showSlider = true;
    }
}
