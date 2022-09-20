/*1. Описати своїми словами навіщо потрібні функції у програмуванні.
	Функции нужны для организации (обьединении) кода. Может что-то делать а также что-то возвращать
2. Описати своїми словами, навіщо у функцію передавати аргумент.
	Иногда нам нужны данные которых мы не имеем, а получаем от пользователя. Поэтому функция работает с одинаковым настроенным способом, но при этом с разными значаениями
3. Що таке оператор return та як він працює всередині функції?
	return возвращает определенный код на результат и заканчивает после себя действия  */





let firstNumber = prompt('Enter the first number');
if (firstNumber === '' || firstNumber === null || isNaN(firstNumber)) {
	firstNumber = prompt('Please, Enter the first number!!!');
}

let secondNumber = prompt('Enter the second number');
if (secondNumber === '' || secondNumber === null || isNaN(secondNumber)) {
	secondNumber = prompt('Please, Enter the second number!!!');
}

let operator = prompt('Enter the operator: +, -, * or /');
if (operator === '' || operator === null || operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
	operator = prompt('Please, Enter the operator: +, -, * or /!!!!');
}

let result = (num1, num2) => {
	if (operator === '+') return +num1 + +num2;
	if (operator === '-') return num1 - num2;
	if (operator === '*') return num1 * num2;
	if (operator === '/') return num1 / num2;
}

console.log(result(firstNumber, secondNumber));

