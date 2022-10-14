/*Опишіть своїми словами, що таке екранування, і навіщо воно потрібне в мовах програмування
	Экранирование - использование (вывод) спецальных знаков. Для того чтобы применить спец знаки нужно их экранировать, то есть поставить \ (обратный слеш)
Які засоби оголошення функцій ви знаєте?
	Function Declaration, Function Expression, Arrow Function, Anonym Function
Що таке hoisting, як він працює для змінних та функцій?
	hoisting (поднятие) - это процесс, который помогает работать с ф-циями и переменными еще до их обьявления.
*/

let nameUser = prompt('Enter your name, please!');
let lastNameUser = prompt('Enter your last name, please!');
let dateOfBirth = prompt('Enter your date of birth in format: dd.mm.yyyy');
let dateOfBirthReverse = dateOfBirth.split('.').reverse().join('.');

function createNewUser(name1, name2, birthday) {
	let DayOfBirth = birthday.slice(8, 10);
	let MonthOfBirth = birthday.slice(5, 7);
	let YearOfBirth = birthday.slice(0, 4);

	let today = new Date();
	let birthDay = new Date(birthday);

	let newUser = {
		firstName: name1,
		lastName: name2,
		getLogin() {
			return ((this.firstName[0] + this.lastName).toLowerCase());
		},
		getAge() {
			let age = today.getFullYear() - birthDay.getFullYear();
			let m = today.getMonth() - birthDay.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
				age--;
			}
			return age;
		},
		getPassword() {
			return (this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.getAge())
		}
	};

	console.log('getLogin: ', newUser.getLogin());
	console.log('getAge: ', newUser.getAge());
	console.log('getPassword :', newUser.getPassword());
	return newUser;
}
console.log(createNewUser(nameUser, lastNameUser, dateOfBirthReverse));

