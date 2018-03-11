var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
	para.textContent = 'Output: ';
	var num = input.value;
	input.value = '';
	input.focus();
	
	for(var i = 1; i <= num; i++) {
		if(Math.floor(Math.sqrt(i)) !== Math.sqrt(i)) {
			continue;
		}
		
		para.textContent += i + ' ';
	}
})