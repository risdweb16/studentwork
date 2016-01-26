$(document).ready(function(){ 

	// color property of the first paragraph
	var textColor = $("p").css("color");

	// $("p").css("color", "pink");

	$("div.box").addClass("circular");
	$("p.third").removeClass("third"); 



	$("#send").click(function(){
		var userInput = $("input#name").val();
		$("#result").append(userInput);
	})

	$("#large").click(function(){
		var scale= $("input#scale").val();
		$("div.box").css("transform", "scale("+scale+")");
	})



	//show Date
	function showDateAndChangeLink(){
	    var today = new Date();
	    $("#demoDate").hide().append(today.toDateString()).fadeIn('slow');

		$("a").attr("href","http://www.google.com"); 
	}

	$(".trigger").click(showDateAndChangeLink);
});