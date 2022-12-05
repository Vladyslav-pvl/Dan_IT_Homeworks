const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');


btn.addEventListener('click', () => {
    nav.classList.toggle('disactive');
    if (btn.classList !== 'disactive') {
        line1.classList.toggle('active1');
        line2.classList.toggle('hide-line');
        line3.classList.toggle('active2')
    }
    // if (nav.classList.contains('disactive')) {
    //     nav.classList.remove('disactive');
    // } else {
    //     nav.classList.add('disactive');
    // }
})