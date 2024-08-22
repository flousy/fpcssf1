$(document).ready(function () {
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.scrolltotop').fadeIn();
		} else {
			$('.scrolltotop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrolltotop').click(function () {
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	
});