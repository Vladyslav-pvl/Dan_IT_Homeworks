// ------------services-section---------------

let tabs = document.querySelector('.services-section .tab-list');
// console.log(tabs);
let tabsSpan = document.querySelectorAll('.services-section .tab-span');
// console.log(tabsSpan);
let tabsDesc = document.querySelectorAll('.services-section .tab-desc');
// console.log(tabsDesc);

let tabActive = 'tab-active';

let descActive = 'desc-active';
let descInactive = 'desc-inactive';

tabs.addEventListener('click', changeTab);

function changeTab(event) {
    if (event.target.classList.contains(tabActive) === false) {
        tabsSpan.forEach(item => {
            item.classList.remove(tabActive);
        })
    }
    event.target.classList.add(tabActive);
    changeContent();
}

function changeContent() {
    tabsDesc.forEach(item => {
        item.classList.remove(descActive);
        item.classList.add(descInactive);
    })
    // for (let i = 0; i < tabsDesc.length; i++) {
    //     tabsDesc[i].classList.remove(descActive);
    //     tabsDesc[i].classList.add(descInactive);
    // }
    tabsSpan.forEach(function (item, index) {
        if (item.classList.contains(tabActive)) {
            tabsDesc[index].classList.replace(descInactive, descActive);
        }
    })
    // for (let i = 0; i < tabsSpan.length; i++) {
    //     if (tabsSpan[i].classList.contains(tabActive)) {
    //         tabsDesc[i].classList.replace(descInactive, descActive);
    //     }
    // }
}



// ------------amazing-work-service---------------

let tabAmazing = document.querySelector('.amazing-work-section .tab-list');
// console.log(tabAmazing);
let tabSpanAmazingAll = document.querySelectorAll('.amazing-work-section .tab-span');
// console.log(tabSpanAmazingAll);
let tabImgAmazing = document.querySelector('.amazing-work-section .tab-img-wrap');
// console.log(tabImgAmazing);
let imgAmazingAll = document.querySelectorAll('.amazing-work-section .tab-img-wrap .img');
// console.log(imgAmazingAll);
let imgItemAmazingAll = document.querySelectorAll('.amazing-work-section .tab-img-wrap .img-item');
// console.log(imgItemAmazingAll);
let btnAmazing = document.querySelector('.amazing-work-section .btn');
// console.log(btnAmazing);

let tabAmazingActive = 'tab-amazing-active';

tabAmazing.addEventListener('click', changeTabAmazing);

function changeTabAmazing(event) {
    if (event.target.classList.contains(tabAmazingActive) === false) {
        tabSpanAmazingAll.forEach(item => {
            item.classList.remove(tabAmazingActive);
        })
    }
    event.target.classList.add(tabAmazingActive);
    changeImgItemAmazingAll(event);
}

function changeImgItemAmazingAll(event) {
    // console.log(event.target.attributes['data-info'].textContent)
    for (let i = 0; i < imgItemAmazingAll.length; i++) {
        if (event.target.attributes['data-info'].textContent === 'All') {
            imgItemAmazingAll[i].classList.replace("inactive", "active");
        }
        else if (imgAmazingAll[i].dataset.info !== event.target.attributes['data-info'].textContent) {
            imgItemAmazingAll[i].classList.replace("active", "inactive");
        } else {
            imgItemAmazingAll[i].classList.replace("inactive", "active");
        }
    }
}

btnAmazing.addEventListener('click', addImgAmazing);

function addImgAmazing() {
    imgItemAmazingAll.forEach(item => {
        if (item.classList.contains('inactive-click')) {
            item.classList.remove('inactive-click');
            item.classList.add('active');
        }
    })
    btnAmazing.classList.add('inactive-click');
}


// ------------comment-section---------------

let user = document.querySelectorAll('.user');
let iconImg = document.querySelectorAll('.icon-img');

let userWrap = document.querySelector('.user-wrap');
let usersIcon = document.querySelector('.users-icon');

let start = document.querySelector('.start');
let finish = document.querySelector('.finish');

// usersIcon.addEventListener('click', changeUser);
start.addEventListener('click', minusSlide);
finish.addEventListener('click', plusSlide);

let slideIndex = 0;


// for (let i = 0; i < iconImg.length; i++) {
//     iconImg[i].addEventListener('click', changeUser);
// }
// function changeUser(elem) {
//     console.log(elem.target.classList.value)
//     if (elem.target.classList.value !== 'activeIcon') {
//         for (let k = 0; k < iconImg.length; k++) {
//             iconImg[k].classList.remove('activeIcon');
//             iconImg[k].classList.add('inactiveIcon');
//         }
//         elem.target.classList.replace('inactiveIcon', 'activeIcon');
//     }
// }

// Пробую переизменить значение переменной slideIndex
// for (let i = 0; i < iconImg.length; i++) {
//     slideIndex = iconImg[i].dataset.article;
// }


function plusSlide() {
    showSlides(slideIndex += 1);
    // console.log('+', slideIndex);
}
function minusSlide() {
    showSlides(slideIndex -= 1);
    // console.log('-', slideIndex);

}

function showSlides(n) {
    // let i;
    if (n >= user.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = 3;
    }
    for (let i = 0; i < iconImg.length; i++) {
        user[i].classList.remove('active');
        user[i].classList.add('inactive');
    }
    for (let i = 0; i < iconImg.length; i++) {
        iconImg[i].classList.remove('activeIcon');
        if (iconImg[i].classList.textContent !== 'inactiveIcon' && iconImg[i].classList.textContent !== 'activeIcon') {
            iconImg[i].classList.add('inactiveIcon');
        }
    }
    user[slideIndex].classList.replace('inactive', 'active');
    iconImg[slideIndex].classList.replace('inactiveIcon', 'activeIcon');
}

