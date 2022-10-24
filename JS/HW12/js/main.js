/*Чому для роботи з input не рекомендується використовувати клавіатуру?
    Ну бывает разная раскладка клавиатуры, и одна и таже клавиша может иметь разные символы. Также если мы говорим про действия delete, backspace, arrowleft и arrowright.   
*/

let btnEl = document.querySelectorAll('.btn');

document.addEventListener('keydown', function (event) {
    btnEl.forEach((elem) => {
        if (elem.textContent === event.key || elem.textContent === event.key.toUpperCase()) {
            elem.style.backgroundColor = 'blue';
        } else {
            elem.style.backgroundColor = '';
        }
    })
})