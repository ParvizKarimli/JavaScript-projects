var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
	para.textContent = "Output: ";
	var num = input.value;
	input.value = "";
	input.focus();
	
	for(var i = 1; i <= num; i++) {
		var sqRoot = Math.sqrt(i);
		if(Math.floor(sqRoot) !== sqRoot) {
			continue;
		}
		
		para.textContent += i + ' ';
	}
}
);