var btn = document.querySelector('button');

function random(num) {
	return Math.floor(Math.random() * num);
}

function bgChange(e) {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	e.target.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);