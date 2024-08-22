$(document).ready(function () {
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.whatsapplivechat').fadeIn();
		} else {
			$('.whatsapplivechat').fadeOut();
		}
	});

});