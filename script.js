let nokia = document.querySelector('.nokia'); // the phone 
let nokiaKeyboard = document.querySelector('.nokia-keyboard-keys'); // the phone keyboard
let output = document.querySelector('.outletter'); // final output of text 
let letter = document.querySelector('.letter'); // temporary output while in 'character selection'
let clicks = 0; // click for count
let count = 0; // count of a timer
let character = ''; 
let currentChar = '';
let previousChar = '';
// timer so that after 3 sec character from letter go into final output
const timer = setInterval(() => {
	count ++;
	if (count == 3 && character != '') {
		letter.style.padding = '0';
		letter.innerHTML = '';
		output.innerHTML += character;
		clicks = 0;
	};
	output.style.borderRight = 'none';
},1000);
// main event 
nokiaKeyboard.addEventListener('click', (e) => {
	// while charater in temporary selection padding will be added 
	letter.style.padding = '0 3px';
	previousChar = currentChar;
	nokia.style.backgroundImage = 'url(nokia-go.png)';
	if (e.target.id == "button-1") {
		currentChar = 1;
		checkCurrent();
		if (clicks > 5 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = '1';
		} else if (clicks == 2) {
			character = '.';
		} else if (clicks == 3) {
			character = ',';
		} else if (clicks == 4) {
			character = '!';
		} else if (clicks == 5) {
			character = '?';
		} 
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-2") {
		currentChar = 2;
		checkCurrent();
		if (clicks > 3 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'a';
		} else if (clicks == 2) {
			character = 'b';
		} else if (clicks == 3) {
			character = 'c';
		} else if (clicks == 4) {
			character = '2';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-3") {
		currentChar = 3;
		checkCurrent();
		if (clicks > 3 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'd';
		} else if (clicks == 2) {
			character = 'e';
		} else if (clicks == 3) {
			character = 'f';
		} else if (clicks == 4) {
			character = '3';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-4") {
		currentChar = 4;
		checkCurrent();
		if (clicks > 3 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'g';
		} else if (clicks == 2) {
			character = 'h';
		} else if (clicks == 3) {
			character = 'i';
		} else if (clicks == 4) {
			character = '4';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-5") {
		currentChar = 5;
		checkCurrent();
		if (clicks > 3 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'j';
		} else if (clicks == 2) {
			character = 'k';
		} else if (clicks == 3) {
			character = 'l';
		} else if (clicks == 4) {
			character = '5';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-6") {
		currentChar = 6;
		checkCurrent();
		if (clicks > 3 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'm';
		} else if (clicks == 2) {
			character = 'n';
		} else if (clicks == 3) {
			character = 'o';
		} else if (clicks == 4) {
			character = '6';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-7") {
		currentChar = 7;
		checkCurrent();
		if (clicks > 5 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'p';
		} else if (clicks == 2) {
			character = 'q';
		} else if (clicks == 3) {
			character = 'r';
		} else if (clicks == 4) {
			character = 's';
		} else if (clicks == 5) {
			character = '7';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-8") {
		currentChar = 8;
		checkCurrent();
		if (clicks > 3 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 't';
		} else if (clicks == 2) {
			character = 'u';
		} else if (clicks == 3) {
			character = 'v';
		} else if (clicks == 4) {
			character = '8';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-9") {
		currentChar = 9;
		checkCurrent();
		if (clicks > 4 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = 'w';
		} else if (clicks == 2) {
			character = 'x';
		} else if (clicks == 3) {
			character = 'y';
		} else if (clicks == 4) {
			character = 'z';
		} else if (clicks == 3) {
			character = '9';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-*") {
		currentChar = 10;
		checkCurrent();
		if (clicks > 1 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = '*';
		} else if (clicks == 2) {
			character = '+';
		}
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-0") {
		currentChar = 11;
		checkCurrent();
		if (clicks > 1 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = '&nbsp';
		} else if (clicks == 2) {
			character = '0';
		} 
		letter.innerHTML = character;
		count = 0;
	} else if (e.target.id == "button-#") {
		currentChar = 12;
		checkCurrent();
		if (clicks > 1 ) {
			clicks = 0;
		}
		clicks++;
		if (clicks == 1) {
			character = '#';
		} 
		letter.innerHTML = character;
		count = 0;
	} 
});
// option events 
document.querySelector('.nokia-keyboard-options').addEventListener('click', (e) => {
	// clear event
	if (e.target.id == 'button-clear') {
		currentChar = 13;
		checkCurrent();
		character = ''
		letter.innerHTML = character;
		let text = output.textContent;
		let textArray = [...text];
		textArray.pop();
		output.innerHTML = textArray.join('');
		output.style.borderRight = '4px solid rgba(21, 24, 23, 0.8)';
	}
});
// if clicked button has been changed, previous character should be added immediately
function checkCurrent() {
	if (currentChar != previousChar && count < 3) {
		letter.style.padding = '0';
		letter.innerHTML = '';
		output.innerHTML += character;
		clicks = 0;
	} else if (currentChar == 13) {
		// if we press on clear button previous character should be placed immediately
		letter.style.padding = '0';
		letter.innerHTML = '';
		clicks = 0;
	};
}
let image = 0;
const changeBg = setInterval(() => {
	if (image > 3) {
		image = 0;
	}
	document.querySelector('body').style.backgroundImage = `url(backgound${image}.png)`;
	image++;
},10000);