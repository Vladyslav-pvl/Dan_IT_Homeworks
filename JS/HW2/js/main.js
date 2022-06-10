"use strict"

let currentUserName, currentUserAge;
let warning;
currentUserName = prompt("Enter you name");
while (+currentUserName || currentUserName === null || currentUserName === "") {
	currentUserName = prompt("Enter you name!");
}
currentUserAge = prompt("Enter your age");
while (isNaN(currentUserAge) || currentUserAge === "" || currentUserAge === null) {
	currentUserAge = prompt("Enter your age!");
}
if (currentUserAge < 18) {
	alert("You are not allowed to visit this website");
} else if (currentUserAge > 18 && currentUserAge < 22) {
	warning = confirm("Are you sure you want to continue?");
	if (warning) {
		alert(`Welcome ${currentUserName}`);
	} else {
		alert("You are not allowed to visit this website");
	}
} else if (currentUserAge > 22) {
	alert(`Welcome ${currentUserName}`);
}
