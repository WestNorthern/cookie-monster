
function displayCookies(){
	$('#chip-counter').text(Cookies.get('fortune'));
	$('#fortune-counter').text(Cookies.get('hamantash'));
	$('#rainbow-counter').text(Cookies.get('oreo'));
}


function eraseCookies(){
	if (Cookies.get('fortune') !== undefined){
		Cookies.set('fortune', 0);
	}

	if (Cookies.get('hamantash') !== undefined){
		Cookies.set('hamantash', 0);
	}

	if (Cookies.get('oreo') !== undefined){
		Cookies.set('oreo', 0);
	}
}

	


$(function(){

	if (Cookies.get('fortune') == undefined){
		Cookies.set('fortune', 0);
	}

	if (Cookies.get('hamantash') == undefined){
		Cookies.set('hamantash', 0);
	}

	if (Cookies.get('oreo') == undefined){
		Cookies.set('oreo', 0);
	}

	displayCookies();

	$(document).on('click', '#chip-jar', function(){
		console.log("fortune");
		Cookies.set('fortune', parseInt(Cookies.get('fortune')) + 1);
		displayCookies();

		});

	$(document).on('click', '#fortune-jar', function(){
		console.log("hamantash");
		Cookies.set('hamantash', parseInt(Cookies.get('hamantash')) + 1);
		displayCookies();
		});

	$(document).on('click', '#rainbow-jar', function(){
		console.log("oreo");
		Cookies.set('oreo', parseInt(Cookies.get('oreo')) + 1);
		displayCookies();

		});

	$(document).on('click', '#erase', function(){
		eraseCookies();
		displayCookies();

		});


	$(document).on('click', '#fortune-jar', function(){
    let fortuneC = $("#fortune-cookie-wrapper");
    $('#laser-one').animate({
    	opacity: '1'
    });
    fortuneC.animate(
    	{
    		left: '550px', 
    		top: '-500px',
    		width: '30px',
    		height: '30px'
    	}, 1000)
    .animate(
    {
    	opacity: '0'
    })
    .animate(
    	{top: '-200px',
    	 left: '120px',
    	 width: '150px',
    	 height: '150px'
    })
    .animate(
    {
    	opacity: '1.0'
    });
    console.log('Boooo');
    $('#laser-one').animate({
    	opacity: '0'
    });
	});

	$(document).on('click', '#rainbow-jar', function(){
    let fortuneC = $("#rainbow-wrapper");
    $('#laser-three').animate({
    	opacity: '1'
    });
    fortuneC.animate(
    	{
    		left: '500px', 
    		top: '-500px',
    		width: '30px',
    		height: '30px'
    	}, 1000)
    .animate(
    {
    	opacity: '0'
    })
    .animate(
    	{top: '-200px',
    	 left: '850px',
    	 width: '150px',
    	 height: '150px'
    })
    .animate(
    {
    	opacity: '1.0'
    });
    console.log('Boooo');
    $('#laser-three').animate({
    	opacity: '0'
    });
	});

	$(document).on('click', '#chip-jar', function(){
    let fortuneC = $("#chip-wrapper");
    $('#laser-two').animate({
    	opacity: '1'
    });
    fortuneC.animate(
    	{
    		left: '500px', 
    		top: '-500px',
    		width: '30px',
    		height: '30px'
    	}, 1000)
    .animate(
    {
    	opacity: '0'
    })
    .animate(
    	{top: '-200px',
    	 left: '450px',
    	 width: '125px',
    	 height: '125px'
    })
    .animate(
    {
    	opacity: '1.0'
    });
    console.log('Boooo');
    $('#laser-two').animate({
    	opacity: '0'
    }, 1000);
	});


});