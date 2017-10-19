
function displayCookies(){
	$('#fortune-num').html(Cookies.get('fortune'));
	$('#hamantash-num').html(Cookies.get('hamantash'));
	$('#oreo-num').html(Cookies.get('oreo'));
}


function eraseCookies(){
	if (Cookies.get('fortune') !== undefined){
		Cookies.set('fortune', 0, { expires: 600 });
	}

	if (Cookies.get('hamantash') !== undefined){
		Cookies.set('hamantash', 0, { expires: 600 });
	}

	if (Cookies.get('oreo') !== undefined){
		Cookies.set('oreo', 0, { expires: 600 });
	}
}

	


$(function(){

	displayCookies();

	$(document).on('click', '#fortune', function(){
		console.log("fortune");
		Cookies.set('fortune', parseInt(Cookies.get('fortune')) + 1);
		displayCookies();

		});

	$(document).on('click', '#hamantash', function(){
		console.log("hamantash");
		Cookies.set('hamantash', parseInt(Cookies.get('hamantash')) + 1);
		displayCookies();
		});

	$(document).on('click', '#oreo', function(){
		console.log("oreo");
		Cookies.set('oreo', parseInt(Cookies.get('oreo')) + 1);
		displayCookies();

		});

	$(document).on('click', '#erase', function(){
		eraseCookies();
		displayCookies();

		});


	$(document).on('click', '#fortune-cookie', function(){
    let fortuneC = $("#fortune-cookie-wrapper");
    fortuneC.animate(
    	{
    		left: '450px', 
    		top: '-600px',
    		width: '50px',
    		height: '50px'
    	})
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
	});


});