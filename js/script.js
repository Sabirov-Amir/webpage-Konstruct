
const acordion = document.getElementsByClassName('contentBox');

for (i = 0; i<acordion.length; i++){
	acordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}





// ==== Это я пытался через jQuery

//$(document).ready(function() {
	//$('.title').click(function(event) {
		//$(this).toogleClass('active').next().slideToogle(300);
	//});
//});