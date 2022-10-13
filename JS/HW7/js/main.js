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
	let newArr = [3];
	// console.log(newArr[newArr.length - 1]);
	for (let i = 0; i < arr.length; i++) {
		if (type === 'string' && typeof arr[i] === 'string') {
			newArr[newArr.length] = arr[i];
		} else if (type === 'number' && typeof arr[i] === 'number') {
			newArr[newArr.length] = arr[i];
		} else if (type === 'boolean' && typeof arr[i] === 'boolean') {
			newArr[newArr.length] = arr[i];
		} else if (type === 'object' && typeof arr[i] === 'object') {
			newArr[newArr.length] = arr[i];
		} else {
			newArr[newArr.length] = arr[i];
		}
	}
	return newArr;
}
console.log(filterBy(arrUser, typeUser));