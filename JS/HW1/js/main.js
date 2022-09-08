// Теоретические вопросы
/*
1. Как можно объявить переменную в Javascript?
	let, var, const;
2. В чем разница между функцией prompt и функцией confirm?
	Функция prompt выводит модальное окно для ввода данных и сообщение для пользователя с нужным нам вопросом. empty + ok = <empty string>, cancel - null, ok - ...
	Функция confirm спрашивает мнение пользователя. ok - true, cancel - false;
3. Что такое неявное преобразование типов? Приведите один пример. 
	Неявное преобразование типов - преобразование между разными типами данных автоматически.
	123 + "Hello" = "123Hello";
	"60" / "3" = 20; 
*/

// Задания
/*
1) Объявите две переменные: admin и name. Установите значение переменной name в ваше имя. Скопируйте это значение в переменную admin и выведите его в консоль.
*/
let name = "Vladyslav";
let admin = name;
console.log(admin);
/*
2) Объявите переменную days и проинициализируйте ее числом от 1 до 10. Преобразуйте это число в количество секунд и выведите в консоль.
*/
let days = 1;
let hours = 24;
let minutes = 60;
let seconds = 60;
console.log(days * hours * minutes * seconds);
/*
3) Запросите у пользователя какое либо значение и выведите его в консоль
*/
let userCity = prompt("What city have you been born?");
let userAge = +prompt("What's you age?");
console.log(userCity + " " + userAge);
