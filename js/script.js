$(document).ready(function(){
	//alert
	$('#salert').on('click', function(){
		alert('Welcome!');
	})

	//show/hide
	$('#show').on('click', function(){
		$('#h2').show();
	})
	$('#hide').on('click', function(){
		$('#h2').hide();
	})
})