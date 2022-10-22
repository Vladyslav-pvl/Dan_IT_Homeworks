let tabs = document.querySelector('.tabs');
// console.log(tabs.children);
let tabsItem = document.querySelectorAll('.tabs-title');
let tabsContent = document.querySelector('.tabs-content');
let tabsContentLi = document.querySelectorAll('.tabs-content li');

let active = 'active';
let disable = 'disable';

tabs.addEventListener('click', changeTab);

function changeTab(event) {
	// console.log(event.target.classList.contains(active));
	if (event.target.classList.contains(active) === false) {
		tabsItem.forEach(item => {
			item.classList.remove(active);
		})
	}
	event.target.classList.add(active);
	changeContent();
}


function changeContent() {
	for (let i = 0; i < tabsContentLi.length; i++) {
		tabsContentLi[i].style.display = 'none';
	}
	for (let i = 0; i < tabsItem.length; i++) {
		if (tabsItem[i].classList.contains(active)) {
			tabsContentLi[i].style.display = '';
		}
	}
}