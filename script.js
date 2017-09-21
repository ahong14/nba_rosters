$(document).ready(function(){



	$('.player').children('li').css('width', '100%');

	$('.navbar_title').mouseenter(function()
	{
		$(this).children('ul').fadeTo('slow', 1);
	});

	$('.navbar_title').mouseleave(function()
	{
		$(this).children('ul').fadeTo('slow', 0);
	});


	// animate scrolling to team rosters
	
	//home button
	$('.home_button').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#title').offset().top
		},1000);
			
	});
	
	//warriors
	$('#warriors_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#warriors').offset().top
		},500);
	});

	//lakers
	$('#lakers_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#lakers').offset().top
		},500);
	});

	//clippers
	$('#clippers_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#clippers').offset().top
		},500);
	});

	//kings
	$('#kings_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#kings').offset().top
		},500);
	});

	//suns
	$('#suns_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#suns').offset().top
		},500);
	});


	//thunder
	$('#thunder_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#thunder').offset().top
		},1000);
	});

	//timberwolves
	$('#timberwolves_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#timberwolves').offset().top
		},1000);
	});

	//jazz
	$('#jazz_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#jazz').offset().top
		},1000);
	});

	//nuggets
	$('#nuggets_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#nuggets').offset().top
		},1000);
	});


	//trailblazers

	$('#trailblazers_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#trailblazers').offset().top
		},1000);
	});


	//spurs
	$('#spurs_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#spurs').offset().top
		},1000);
	});


	$('#rockets_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#rockets').offset().top
		},1000);
	});


	$('#mavericks_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#mavericks').offset().top
		},1000);
	});

	//pelicans
	$('#pelicans_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#pelicans').offset().top
		},1000);
	});

	//mavericks
	$('#grizzlies_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#grizzlies').offset().top
		},1000);
	});




	/*
	end of scrolling animation
	*/


	

	//slide toggle animation for player info

	$('.player').mouseenter(function()
	{
		$(this).children('img').css('border','solid','.5px');
	});

	$('.player').mouseleave(function()
	{
		$(this).children('img').css('border','none');
	});


	$('.player').click(function()
	{	
		$(this).children('li').slideToggle('200');
	});

	

	//end of slide toggle animation

	/*
	$('.navbar_title').click(function()
	{	
		if ($(this).children('ul').css('opacity') > 0){

			$(this).children('ul').fadeTo('slow', 0);
			$(this).children('ul').css('cursor', 'none');
		}

		else{

			$(this).children('ul').fadeTo('slow', 1);
			$(this).children('ul').css('cursor', 'pointer');
		}
	});
	*/


	



});