//  плавный скролл вверх
	var t;
	function up() {
		var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
		if(top > 0) {
			window.scrollBy(0,-100);
			t = setTimeout('up()',20);
		} 
		else clearTimeout(t);
	return false;
	}

	
window.onload=function(){

	var scrollUp = document.getElementById('scrollup'); // найти элемент
	
	scrollUp.onmouseover = function() { // добавить прозрачность
		scrollUp.style.opacity=1;
		scrollUp.style.filter  = 'alpha(opacity=100)';
	};

	scrollUp.onmouseout = function() { //убрать прозрачность
		scrollUp.style.opacity = 0.5;
		scrollUp.style.filter  = 'alpha(opacity=50)';
	};

// show button
	window.onscroll = function () { // при скролле показывать и прятать блок
		if ( window.pageYOffset > 300 ) {
			scrollUp.style.display = 'block';
		} else {
			scrollUp.style.display = 'none';
		}
	};
}