/*
1. Какие существуют типы данных в Javascript?
	Примитивные - string, number (+infinity, NaN), boolean, null, undefined, symbol;
	Комплексный - object;
2. В чем разница между == и === ?
	Оператор нестрогого равенства - проверяет равенство без привидения типов.
	Оператор строгого равенства - проверяет равенство с привидением типов.
3. Что такое оператор?
	Оператор - математический знаки со своими свойствами, которые  основном находятся между операндами. Бинарный и унарный. 
*/

let userName = prompt('Enter your name');
if (userName === '' || userName === null || +userName) {
	userName = prompt('Enter your name please!');
}

let userAge = prompt('Enter your age');
if (isNaN(userAge) || userAge === '' || userAge === null) {
	userAge = prompt('Enter you age please!');
}

if (userAge <= 17) {
	alert('You are not allowed to visit this website');
} else if (userAge >= 18 && userAge <= 22) {
	let userAnswer = confirm('Are you sure you want to continue?')
	if (userAnswer) {
		alert(`Welcome, ${userName}`);
	} else {
		alert('You are not allowed to visit this website');
	}
} else {
	alert(`Welcome, ${userName}`);
}