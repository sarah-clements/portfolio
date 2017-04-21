$(function () {
    $('h3 > span').on('click', function () {
    	// let target = $(event.target);
     //    target.next().fadeToggle('slow');
        $('h3').next().fadeToggle('slow');
    });

    $('.down-nav-arrow').on('click', function () {
		document.querySelector('#portfolio-buffer').scrollIntoView({behavior: 'smooth'});
	});

	$('.fa-bars').on('click', function () {
        $('.navigation-menu').fadeToggle('slow');
    });
});