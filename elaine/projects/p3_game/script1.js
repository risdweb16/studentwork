

window.onload = window.onscroll = function () {
  var bars = document.getElementsByClassName('bar');
  [].forEach.call(bars, function (bar) {
    bar.style.height = Math.random() * 90 + '%';
  });
}


$(window).scroll();



$(document).ready(function() {
    var audioElm = $('#soundTour3').get(0);
 audioElm.volume = 9
    audioElm.play();

});
 
 var m = document.querySelector(".m");
blasterTrigger.addEventListener("scroll", function(){
    document.getElementById("music").play();
});

 
   //$(document).ready(function() {
  //  var audioElm = $('#soundTour3').get(0);
// audioElm.volume = 0 
   // audioElm.play();



 
         // var y = $(window).scrollUp();
     
        //  if( y > () ){
         //   $('#soundTour3').volumizer({1:[5,10000]})
    // if( y < () ){
          // $('#soundTour3').volumizer({1:[5,.0001]})
