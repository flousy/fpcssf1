$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>150?$(".scrolltotop").fadeIn():$(".scrolltotop").fadeOut()})),$(".scrolltotop").click((function(){return $("html, body").animate({scrollTop:0},1e3),!1}))}));
