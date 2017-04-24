$(function () {
    $('.contrib').on('click', function (event) {
        $(event.target).parents().next('ul').fadeToggle('slow');
    });

    $('.down-nav-arrow').on('click', function () {
		document.querySelector('#portfolio-buffer').scrollIntoView({behavior: 'smooth'});
	});

	$('.navigation-mobile').children('ul').on('click', function () {
        $('.navigation-menu').fadeToggle('slow');
    });

});