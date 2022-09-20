/*
1. Описать своими словами в несколько строчек, зачем в программировании нужны циклы.
	Циклы нужны для перебора значений а так же для выполнеения какого то кода определенное число раз без прописи каждого действия вручную.
	Также (do) while для повторения действий с определенным условием и выполнения результата при выполнении этого условия.
2. Опишите в каких ситуациях вы бы использовали тот или иной цикл в JS.
	Цикл for исп для перебора значений.
	Цикл while исп для выпонения кааого то кода определенное кол-во раз при условии.
	Цикл do while также как и while только в любом случае выполнится хотя-бы один раз так как проверка после дейсвий вывода.
3. Что такое явное и неявное приведение (преобразование) типов данных в JS?
	Неявное преобразование типов - преобразование между типами автоматически. При конкатенации строки с числом, или при других операторах строк к строке и тд
	Явное преобразование типов - преобразование между типами намеренное, с помощью спец дейсвий методов String(), + и т.д
*/


/*
###Задание
Реализовать программу на Javascript, которая будет находить все числа кратные 5 (делятся на 5 без остатка) в заданном диапазоне. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

###Технические требования:
- Считать с помощью модального окна браузера число, которое введет пользователь.
- Вывести в консоли все числа кратные 5, от 0 до введенного пользователем числа. Если таких чисел нету - вывести в консоль фразу `Sorry, no numbers'
- Обязательно необходимо использовать синтаксис ES6 (ES2015) при создании переменных.

####Необязательное задание продвинутой сложности:
- Проверить, что введенное значение является целым числом. Если данное условие не соблюдается, повторять вывод окна на экран до тех пор, пока не будет введено целое число.
- Считать два числа, `m` и `n`. Вывести в консоль все простые числа (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE) в диапазоне от `m` до `n` (меньшее из введенных чисел будет `m`, бОльшее будет `n`). Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение об ошибке, и спросить оба числа заново.
*/


// let userNumb = prompt('Enter the number');

// while (parseFloat(userNumb)) {
// 	userNumb = prompt('Enter the integer please, not a float number');
// }

// if (isNaN(userNumb) || userNumb === '' || userNumb === null || userNumb % 5 !== 0) {
// 	console.log('Sorry, no numbers');
// } else {
// 	for (let i = 0; i <= userNumb; i++) {
// 		if (i % 5 === 0) {
// 			console.log(i);
// 		}
// 	}
// }

let m = +prompt('Enter the first number for the addition task please');
let n = +prompt('Enter the second number for the additional task please');
while (m > n) {
	alert("Error! Try again");
	m = +prompt('Enter the first number for the addition task Again!');
	n = +prompt('Enter the second number for the additional task Again!');
}

for (let i = m; i <= n; i++) {
	let count = 0;
	for (let k = 2; k <= i; k++) {
		if (i % k === 0)
			count = count + 1;
	}
	if (count === 1) {
		console.log('prime:', i);
	}
}

//or
/* let m = +prompt("Enter the first number for the addition task please");
let n = +prompt("Enter the second number for the additional task please");

while (m > n) {
  alert("Error! Try again");
  m = +prompt("Enter the first number for the addition task Again!");
  n = +prompt("Enter the second number for the additional task Again!");
}

for (let i = m; i <= n; i++) {
  let count = 0;

  for (let k = 2; k < i; k++) {
    if (i % k === 0) {
      count = count + 1;
      break;
    }
  }

  if (count === 0) {
    console.log("prime:", i);
  }
} */