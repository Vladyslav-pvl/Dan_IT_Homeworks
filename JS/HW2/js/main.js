"use strict"

let userNumber;
userNumber = prompt ("Enter your number");
while (isNaN(userNumber) || userNumber === "" || userNumber === null) {
	userNumber = prompt ("Enter the number!")
}
alert (`Your number is ${userNumber}`)
for (let i = 0; i < +userNumber; i++) {
	if (i % 5 === 0) {
		console.log(i);
	}
}
