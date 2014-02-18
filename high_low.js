
var num = prompt("What's the magic number?");

while(num !== 7) {
	if (num > 7) {
		num = prompt("Try again. The magic number is lower.");
	}
	else if(num < 7) {
		num = prompt("Try again. The magic number is higher.");
	}
	else {
		num = alert("You're right, the magic number is 7!")
	}
}
