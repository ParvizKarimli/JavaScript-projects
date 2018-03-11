for(var i = 1; i <= 16; i++) {
	var newDiv = document.createElement('div');
	document.body.appendChild(newDiv);
}

function random(num) {
	return Math.floor(Math.random() * num);
}

function bgChange() {
	var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol;
}

var divs = document.querySelectorAll('div');

for(var i = 0; i < divs.length; i++) {
	divs[i].onclick = function(e){
		e.target.style.backgroundColor = bgChange();
	};
}
