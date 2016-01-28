$(document).ready(function(){ 

	// assigning value of css color property of the first paragraph to variable textColor
	var textColor = $("p").css("color");

	// $("p").css("color", "pink");

	// add class "circular" to <div class="box"> elements to get <div class ="box circular">
	$("div.box").addClass("circular");

	// removing class "third" from <p class="third"> to get just <p>
	$("p.third").removeClass("third"); 

	// binding the click event function to element with id="send"
	$("#send").click(function(){
		var userInput = $("input#name").val(); // assigning the value of <input id="name"> to variable userInput
		$("#result").append(userInput); // appending the value of variable userInput to element with id="result"
	})


	//binding the click event function to element with id="large"
	$("#large").click(function(){
		var scaleInput= $("input#scale").val(); // assigning the value of <input id="scale"> to variable scale
		$("div.box").css("transform", "scale("+scaleInput+")"); // using ccs() method to style <div class="box"> with the css property "transform: scale(scaleInput)"
	})



	//function with two instructions: showing dat and changing link
	function showDateAndChangeLink(){
	    var today = new Date();  // creating new Date object, assigning to variable today
	    $("#demoDate").hide().append(today.toDateString()).fadeIn('slow');  // hiding element with id="demoDate", appending a string form of the date, and fading it in slowly

		$("a").attr("href","http://www.google.com"); // assigning the attribute href="http://www.google.com" to <a> tag elements (links)
	}
	
	//binding the click event to element with class="trigger" with function defined above
	$(".trigger").click(showDateAndChangeLink); 
});