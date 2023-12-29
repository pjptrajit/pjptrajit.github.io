$(window).scroll(function () {
    if( $(window).scrollTop() > 50){
      $('.top-container').addClass('out');
    } 
	else{
      $('.top-container').removeClass('out');
    }
});



jQuery(document).ready(function($){

/*==========================*/	
/*Content fade out */	
/*==========================*/
  if( $(window).scrollTop() > 50){
      $('.top-container').addClass('out');
    } 
	else{
      $('.top-container').removeClass('out');
    }
	
/*==========================*/	
/*Preloader */	
/*==========================*/
$('.preloader').delay(350).fadeOut('slow');
 
  
$(function(){
	$('#maximage').maximage({
		cycleOptions: {
			 speed: 1000,
			timeout: 8000,
		 }
	});
});
	 
});