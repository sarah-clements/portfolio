$(function () {

    $('.down-nav-arrow').on('click', function () {
		document.querySelector('#portfolio-buffer').scrollIntoView({behavior: 'smooth'});
	});

	$('.navigation-mobile').children('ul').on('click', function () {
        $('.navigation-menu').fadeToggle('slow');
    });

});