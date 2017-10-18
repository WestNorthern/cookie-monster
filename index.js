
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


});