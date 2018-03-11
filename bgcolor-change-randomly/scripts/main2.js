var btn = document.querySelector('button');

function random(num) {
	return Math.floor(Math.random() * num);
}

function bgChange() {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	document.body.style.backgroundColor = rndCol;
}

function sayHi() {
	alert('Hi!');
}

btn.addEventListener('click', bgChange);

btn.addEventListener('click', sayHi);

btn.removeEventListener('click', sayHi);