$(function(){
  
  $('ul.accordianSubMenu').prev('a').addClass('submenu');
  $('ul.accordianMenu li').on('click', function(){
  $('ul.accordianSubMenu').removeClass('active');
   $('ul.accordianMenu li').children('a').removeClass('current');
  $('ul.accordianSubMenu').slideUp(); 
 	$(this).children('ul.accordianSubMenu').addClass('active');
     	$(this).children('ul.accordianSubMenu').addClass('active');
    
    if($(this).children('ul.accordianSubMenu').hasClass('active')){
      $(this).children('a').addClass('current');
      $('.active').clearQueue();
      	$('.active').slideToggle();
          
    }
 
    
});
  });