// window.onload = window.onscroll = 

$('document').ready(function () {


        function generateBars () {
          var bars = document.getElementsByClassName('bar');
          [].forEach.call(bars, function (bar) {
          bar.style.height = Math.random() * 90 + '%';
          });
        };


        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'pt.mp3');
        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()  $.get();

       

        /*audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);*/

        $(window).scroll(function() {
            generateBars();
            audioElement.play();
            clearTimeout ($.data( this, "scrollCheck"));
            $.data(this, "scrollCheck", setTimeout(function() {
                audioElement.pause();
            }, 250));
            
        });

        //$('.Stop').click(function() {
          //  audioElement.pause();
        //});
    });
$(window).click(function(){
$("#hint").fadeOut("slow");
});
//$(hint).fadeOut('fast');
//window.alert("SCROLL FOR SOUND");
    
//$(window).scroll();



 
 //var m = document.querySelector(".m");
//blasterTrigger.addEventListener("scroll", function(){
  //  document.getElementById("music").play();
//});

 
   //$(document).ready(function() {
  //  var audioElm = $('#soundTour3').get(0);
// audioElm.volume = 0 
   // audioElm.play();
  // });


//codepen.io/gabrieleromanato/pen/FcunJ 
