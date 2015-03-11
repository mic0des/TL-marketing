$(document).ready(function() {

	$('#elite').click(function(){
		$('input.upgrade').val('ELITE');
	});    
	$('#professional').click(function(){
		$('input.upgrade').val('PROFESSIONAL');
	});    
	$('#business').click(function(){
		$('input.upgrade').val('BUSINESS');
	}); 

	$('.uno').click(function(){
		$('.uno').addClass('active');
		$('.seoTitle').text('Search Engine Optimization');
		$('.second').removeClass('active');
		$('.third').removeClass('active');
		$("a[href='#highimpact']").attr('href', '#more');
		$("a[href='#social']").attr('href', '#more');
	});    
	$('.second').click(function(){
		$('.second').addClass('active');
		$('.seoTitle').text('Direct Response Paid Search');
		$('.uno').removeClass('active');
		$('.third').removeClass('active');
		$("a[href='#more']").attr('href', '#highimpact');
		$("a[href='#social']").attr('href', '#highimpact');
	});    
	$('.third').click(function(){
		$('.third').addClass('active');
		$('.seoTitle').text('Social Lead Generation');
		$('.uno').removeClass('active');
		$('.second').removeClass('active');
		$("a[href='#highimpact']").attr('href', '#social');
		$("a[href='#more']").attr('href', '#social');
	}); 

	$('#checkbox').click(function(){
		$('#terms').addAttr('checked');
	});

	$('.submitButton').click(function(){
 
	$.post("send.php", $("#upgrade").serialize(),  function(data) {   });
 
	$('#success').html('Message sent!');
	$('#success').hide(2000);
 
	});   

	// $('nav ul li a').smoothScroll();

});
