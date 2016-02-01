//CLICK OKAY BUTTON//
var r = confirm("Are you ready to enable cookies...ohohoho");
if (r == true) {
    x = "I guess so...?";
} else {
    x = "Do I have a choice???";
}

// Y axis scroll speed
var velocity = 0.5;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.slideshow-block').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);