var field = document.getElementById('inputId');
var btn = document.querySelector('button');
var txt = document.querySelector('p');
var index = 0;
var items = [];

btn.onclick = function() {
	items.push(txt.textContent);
	if(items.length <= 5) {
        index++;
		txt.textContent += index + '-' + field.value + '; ';
	} else {
		index = 1;
		items.shift();
	}
};