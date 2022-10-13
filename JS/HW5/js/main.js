/*1. Опишите своими словами, что такое метод обьекта
	Метод обьекта - это ф-ция хранящиеся в виде свойста обьекта.

2. Каким типом данных является значение свойства объекта?
	Значение свойства обьекта может состоять из любого примитивного типа данных или того же обьекта

3. Объект это ссылочный тип данных. Что означает это понятие?
	В js есть примитивные типы данных и ссылочные (Обьекты включающие object, array и function). Эти типы могут содержать очень большие обьемы данных, и переменная содержащая ссылочный тип, фактически, его значение не имеет. Она сдержит ссылку на место в памяти, где размещаются реальные данные. 
*/
let nameUser = prompt('Enter your name, please!');
let lastNameUser = prompt('Enter your last name, please!');

function createNewUser(name1, name2) {

	let newUser = {
		firstName: name1,
		lastName: name2,
		getLogin() {
			console.log((this.firstName[0] + this.lastName).toLowerCase());
		}
	};

	newUser.getLogin();
	return newUser;
}
console.log(createNewUser(nameUser, lastNameUser));

