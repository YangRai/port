$(document).ready(function(){

//ABOUT 

	$('#abt').click(function(){
		$('#abt-wrapper').css('left',"0");
 });


//ABOUT NAVIGATION	

	$('#abt-port').click(function(){
		$('#port-wrapper').css('bottom','0%');
 });

	$('#abt-home').click(function(){
		$('#abt-wrapper').css('left','-100%');
 });

	$('#abt-contact').click(function(){
		$('#abt-wrapper').css('left','-100%');
		$('#contact-wrapper').css('right','0%');
 });


// PORTFOLIO


$('#port').click(function(){
		$('#port-wrapper').css('bottom',"0");
 });


//PORTFOLIO NAVIGATION


$('#port-abt').click(function(){
	$('#port-wrapper').css('bottom','-100%');

		$('#abt-wrapper').css('left','0%');
		$('.fade').fadeIn(3000);
 });



	$('#port-home').click(function(){
		$('#port-wrapper').css('bottom','-100%');
		$('#abt-wrapper').css('left','-100%');
 });

	$('#port-contact').click(function(){
		$('#contact-wrapper').css('right','0%');
		$('#port-wrapper').css('bottom','-100%');
 });



//CONTACT

$('#contact').click(function(){
		$('#contact-wrapper').css('right',"0%");
 });



//contact Navigation

	$('#contact-port').click(function(){
		$('#contact-wrapper').css('right','-100%');
		$('#port-wrapper').css('bottom','0%');
 });

	$('#contact-home').click(function(){
		$('#contact-wrapper').css('right','-100%');
 });

	$('#contact-abt').click(function(){
		$('#contact-wrapper').css('right','-100%');
		$('.fade').fadeIn(3000);

		$('#abt-wrapper').css('left','0%');
 });






$('#close').click(function(){
	$('#abt-wrapper').css("left","-100%");
});



$('#abt').click(function(){
	 $('.fade').fadeIn(3000);
});


$('#inner-container h4, h3').fadeOut(0);
$('#inner-container h4, h3').fadeIn(2000);

$('#inner-container p').fadeOut(0);
$('#inner-container p').fadeIn(3000);



});











 


