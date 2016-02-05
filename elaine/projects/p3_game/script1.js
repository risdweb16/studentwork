$(window).click(function(){
$("#hint").fadeOut("slow");
});

$(window).scroll();
$('document').ready(function () {


        function generateBars () {
          var bars = document.getElementsByClassName('bar');
          [].forEach.call(bars, function (bar) {
          bar.style.height = Math.random() * 90 + '%';
          });
        };


        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'pt.mp3');


        $(window).scroll(function() {
            generateBars();
            audioElement.play();
            clearTimeout ($.data( this, "scrollCheck"));
            $.data(this, "scrollCheck", setTimeout(function() {
                audioElement.pause();
            }, 250));
            
        });
    });



$(document).ready(function() {
    var audioElm = $('#soundTour3').get(0);
 audioElm.volume = 9
    audioElm.play();

});
 
 var m = document.querySelector(".m");
blasterTrigger.addEventListener("scroll", function(){
    document.getElementById("music").play();
});


