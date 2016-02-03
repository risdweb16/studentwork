// Y axis scroll speed
var velocity = 0.5;

// Parallax scrolling
function update(){ 
    var pos = $(window).scrollTop(); 
    $('.bg-container').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    }); 
};

function scrollTo(element_name) {
	$(document.body).animate({
    		'scrollTop':   $(element_name).offset().top
		}, 2000);
}

// Bind the scroll to the window
$(window).bind('scroll', update);

// Ensure the DOM is ready
$(document).ready(function() {
	// Apply the cycle to the slideshow
    $('.slides').cycle({
	    fx:     'none',
	    speed:   1000,
	    timeout: 70
	});

	// Pause & play on hover
	$('.slides li').hover(function(){
		$('.slides').cycle('pause');
	}, function(){
		$('.slides').cycle('resume');
	});

	// Change the background when hovering the start button
	//$('#start-button').hover(function(){
		//$('.section-1').css('background-image', 'url("images/background2.png")');
	//}, function(){
		//$('.section-1').css('background-image', 'url("images/background.png")');
	//});

	// Scroll to section 2 on click
	$('#start-button').click(function() {
		scrollTo('.section-2');
	});

	$('#arrow-1').click(function() {
		scrollTo('.section-3');
	});

	$('#arrow-2').click(function() {
		scrollTo('.section-4');
	});

	var eggs_multiplier = 2;
	var salt_multiplier = 1.5;
	var flour_multiplier = 3.66;
	var sugar_multiplier = 1;
	var brown_sugar_multiplier = 1.25;
	var butter_multiplier = 1.25;
	var vanilla_multiplier = 2;
	var chips_multiplier = 1.25;
	var bsoda_multiplier = 1.25;
	var love_multiplier = 1;

	// Detect any changes in input
	$('#dozen-input').bind('change keyup input', function() {
		var input = $(this).val();

		$('#dozen-amount').html(input);

		$('#egg-amount').html(input * eggs_multiplier);
		$('#salt-amount').html(input * salt_multiplier);
		$('#flour-amount').html(input * flour_multiplier);
		$('#sugar-amount').html(input * sugar_multiplier);
		$('#brown-sugar-amount').html(input * brown_sugar_multiplier);
		$('#butter-amount').html(input * butter_multiplier);
		$('#vanilla-amount').html(input * vanilla_multiplier);
		$('#chips-amount').html(input * chips_multiplier);
		$('#bsoda-amount').html(input * bsoda_multiplier);
		$('#love-amount').html(input * love_multiplier);
	});

	$('#bake-form').bind('submit', function() {
		var input = $('#bake-input').val();

		if (input < 8) {
			result = 'undercooked';
			result_img = 'http://images5.fanpop.com/image/photos/31000000/Spongebob-sad-the-krusty-krab-31037260-354-239.jpg';
		} else if (input >= 8 && input < 15) {
			result = 'perfect!';
			result_img = 'https://i.ytimg.com/vi/aHbzU7LhEMg/hqdefault.jpg';
		} else if (input >= 15) {
			result = 'burnt';
			result_img = 'http://vignette3.wikia.nocookie.net/spongebob/images/a/a7/Mary.jpg/revision/latest?cb=20111027224331';
		}

		$('#cookie-result').html(result);
		$('#cookie-result-image').attr('src', result_img);

		$('#result').css('visibility', 'visible');

		return false
	});
});
