var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'thumbs up.jpg') {
		myImage.setAttribute('src', 'thumbs down.jpg');
	} else {
		myImage.setAttribute('src', 'thumbs up.jpg');
	}
};