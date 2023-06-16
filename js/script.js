
const acordion = document.getElementsByClassName('contentBox');

for (i = 0; i<acordion.length; i++){
	acordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}