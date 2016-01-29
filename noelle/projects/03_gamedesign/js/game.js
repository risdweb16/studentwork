// confirm box
function doConfirm(msg, yesFn, noFn) {
    var confirmBox = $("#confirmBox");
    confirmBox.find(".message").text(msg);
    confirmBox.find(".yes,.no").unbind().click(function () {
        confirmBox.hide();
    });
    confirmBox.find(".yes").click(yesFn);
    confirmBox.find(".no").click(noFn);
    confirmBox.show();
}

$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var form = this;
        doConfirm("Are you sure?", function yes() {
            form.submit();
        }, function no() {
            // do nothing
        });
    });
});

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