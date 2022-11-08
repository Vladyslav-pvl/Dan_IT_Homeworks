/*
Опишіть своїми словами що таке Document Object Model (DOM)
	Обьектная модель документа - все содержимое HTML страницы в виде обьектов, которые можно менять
Яка різниця між властивостями HTML-елементів innerHTML та innerText?
	У innerHTML есть доступ к чтению тегов, а у innerText - нет 
Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
	Самый комфортный и оптимальный вариант поиска элемента по селекторам (класса, id). Ну и так же имеет место быть таким методам как getElementById(), getElementsByClassName()
*/

function changePBackground() {
	let pColor = document.querySelectorAll('p');
	for (let i = 0; i < pColor.length; i++) {
		pColor[i].style.background = '#ff0000';
	}
}
changePBackground();

function optionsList() {
	let optionsList = document.querySelector('#optionsList');
	console.log('optionList :', optionsList);
	let optionsList_parent = optionsList.parentNode;
	console.log('optionList_parent :', optionsList_parent);
	let optionsList_children = optionsList.childNodes;
	console.log('optionList_children :', optionsList_children);
	let nodeType = [];
	for (let node of optionsList_children) {
		nodeType += node.nodeType + ' ';
	}
	console.log('optionList_children nodeType :', nodeType);
}
optionsList();

function changeParagraphText() {
	let testParagraph = document.querySelector('#testParagraph');
	testParagraph.textContent = 'This is paragraph';
}
changeParagraphText();

function getMainHeaderEl() {
	let mainHeader = document.querySelector('.main-header');
	let mainHeader_children = mainHeader.children;
	console.log('mainHeader_children :', mainHeader_children);
	for (let i = 0; i < mainHeader_children.length; i++) {
		mainHeader_children[i].classList.add('nav-item');
	}
}
getMainHeaderEl();

function deleteSectionTitleEl() {
	let sectionTitle = document.querySelectorAll('.section-title');
	for (let i = 0; i < sectionTitle.length; i++) {
		sectionTitle[i].classList.remove('section-title');
	}
}
deleteSectionTitleEl();


// ---------------------   HW14   -------------------------

let anotherColor = document.querySelector('.main-header')
const themeEl = document.querySelector('.theme')
let storage = JSON.parse(localStorage.getItem('themeAll'))

if (storage) {
	document.body.classList.add('addClass')
	anotherColor.classList.add('anotherColor')

} else {
	document.body.classList.remove('addClass')
	anotherColor.classList.remove('anotherColor')

}

themeEl.addEventListener('click', () => {
	if (storage === false || storage === null) {
		document.body.classList.add('addClass')
		anotherColor.classList.add('anotherColor')
		storage = true
		localStorage.setItem('themeAll', JSON.stringify(storage))
	} else if (storage === true) {
		document.body.classList.remove('addClass')
		anotherColor.classList.remove('anotherColor')
		storage = false
		localStorage.setItem('themeAll', JSON.stringify(storage))
	}

})

