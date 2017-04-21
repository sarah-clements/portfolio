$(function () {
    $('.contrib').on('click', function (event) {
        $(event.target).parents().next().fadeToggle('slow');
    });

    $('.down-nav-arrow').on('click', function () {
		document.querySelector('#portfolio-buffer').scrollIntoView({behavior: 'smooth'});
	});

	$('.fa-bars').on('click', function () {
        $('.navigation-menu').fadeToggle('slow');
    });
});