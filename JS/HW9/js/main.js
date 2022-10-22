/*
Опишіть, як можна створити новий HTML тег на сторінці.
	с помощью document.createElement(''), innerHTML i insertAdjacentHTML()
Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
	место вставки второго параметра (beforebegin, afterbegin, beforeend, afterend)
Як можна видалити елемент зі сторінки?
	elem.remove(); 
*/

let arr1 = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
let arr2 = ["1", "2", "3", "sea", "user", 23];
let arr3 = [1, ['sth', 5, true], 'end'];
let parentBody = document.querySelector('body');

function createList(arr, parent) {
	let ulEl = document.createElement('ul');
	parent.append(ulEl);

	arr.map(function (item) {
		let liEl = document.createElement('li');

		if (!Array.isArray(item)) {
			ulEl.append(liEl);
			liEl.textContent = item;
		} else {
			createList(item, ulEl);
		}
	})
}
createList(arr3, parentBody);