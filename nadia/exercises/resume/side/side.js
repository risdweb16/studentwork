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

var random_images_array = ["../pics/18/bpop-square.jpg", 
    "../pics/cad/beertap-square.jpg",
    "../pics/18/luz-square.jpg",
    "../pics/cad/headphones-square.jpg",
    "../pics/cad/watch-square.jpg",
    "../pics/ceram/simon-square.jpg",
    "../pics/ceram/val-square.jpg",
    "../pics/ceram/bub.jpg",
    "../pics/jewl/glasses-square.jpg",
    "../pics/gen/wood-square.jpg",
    "../pics/gen/pub-square.jpg",
    "../pics/gen/trike-square.jpg",
    ];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}