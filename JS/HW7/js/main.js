/*
Опишіть своїми словами як працює метод forEach.
	метод перебора forEach - перебрает каждый элемент и выполняет переданную ему ф-цию для каждого элемента
Як очистити масив?
	С помощью метода splice()
Як можна перевірити, що та чи інша змінна є масивом?
	Тип данных массива - object, поэтому приверяеться с помощью метода Array.isArray();
*/
let arrUser = ['hello', 'world', 23, '23', null];
let typeUser = 'string';

function filterBy(arr, type) {
	let newArr = [];
	for (let key in arr) {
		if (typeof arr[key] === type) {
			newArr.push(arr[key]);
		}
	}
	return newArr;
}
console.log(filterBy(arrUser, typeUser));
