
// Add spoiler on JS
const acordion = document.getElementsByClassName('contentBox');

for (i = 0; i<acordion.length; i++){
	acordion[i].addEventListener('click', function(){
		this.classList.toggle('active')
	})
}

//------------------------------------------------------------------------

// Add smooth scroll on jQuery 
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top -10
    }, 500);
    return false;
});
// .top -10 - регулирует отступ сверху в пикселях
// 500 - скорость скролла

//------------------------------------------------------------------------