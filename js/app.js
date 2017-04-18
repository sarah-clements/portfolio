$(function () {
    $('h3').on('click', function () {
        $('.div-invis').fadeToggle('slow');
    });

    $('.down-nav-arrow').on('click', function () {
		document.querySelector('#portfolio').scrollIntoView({behavior: 'smooth'});
	});

	$('.fa-bars').on('click', function () {
        $('.navigation-menu').fadeToggle('slow');
    });
});