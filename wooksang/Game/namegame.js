$(document).ready(function(){
	console.log("ready!");

	$("h3,h4").click(function() {
		$(this).toggleClass("hover");
	});


	$("#show").click(function(){
		var answer = confirm("Are you sure? Be careful. It could make you embarrassed.");
		if (answer === true){
			$("h4").addClass("blue");
					};
	});

$( ".button1" ).click(function() {
  $( ".resultone" ).show( "slow" );
});

$( ".button2" ).click(function() {
  $( ".resulttwo" ).show( "slow" );
});
$( ".button3" ).click(function() {
  $( ".resultthree" ).show( "slow" );
});
$( ".button4" ).click(function() {
  $( ".resultfour" ).show( "slow" );
});

});


	//$("#show").click(function(){
	//	$("p").show();
	//	$(".result").show();


	// $("#hello").click(function() {
		
	// });