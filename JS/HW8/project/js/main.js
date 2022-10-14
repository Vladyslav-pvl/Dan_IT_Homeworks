/*
Опишіть своїми словами що таке Document Object Model (DOM)
	Обьектная модель документа - все содержимое HTML страницы в виде обьектов, которые можно менять
Яка різниця між властивостями HTML-елементів innerHTML та innerText?
	У innerHTML есть доступ к чтению тегов, а у innerText - нет 
Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
	по селектору CSS - самый оптимальный. Так же по классу и айди
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